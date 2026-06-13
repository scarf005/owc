/// <reference lib="deno.ns" />

import { retry } from "@std/async/retry"
import { assert } from "@std/assert"
import { assertSnapshot } from "@std/testing/snapshot"
import { chromium } from "playwright"
import { heroSynergies, mapModes, source } from "../src/data/guide.ts"
import { heroes, matchups } from "../src/data/overwatch.ts"

const mainImagePages = [
  { label: "matchups", path: "?view=matchups&hero=d-va&map=네팔" },
  { label: "synergies", path: "?view=synergies&hero=orisa&map=네팔" },
  {
    label: "maps",
    path: `?view=maps&hero=orisa&map=${encodeURIComponent("네팔")}`,
  },
]

const pngSize = (data: Uint8Array) => ({
  width: new DataView(data.buffer, data.byteOffset, data.byteLength).getUint32(
    16,
  ),
  height: new DataView(data.buffer, data.byteOffset, data.byteLength).getUint32(
    20,
  ),
})

const sha256Hex = async (data: Uint8Array) => {
  const buffer = data.buffer.slice(
    data.byteOffset,
    data.byteOffset + data.byteLength,
  ) as ArrayBuffer
  return [...new Uint8Array(await crypto.subtle.digest("SHA-256", buffer))]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

const waitForServer = (url: string) =>
  retry(async () => {
    const response = await fetch(url)
    await response.body?.cancel()
    assert(response.ok, `Vite dev server did not start: ${url}`)
  }, { jitter: 0, maxAttempts: 200, maxTimeout: 100, minTimeout: 100 })

const startServer = async () => {
  const port = 43_000 + Math.floor(Math.random() * 1_000)
  const url = `http://127.0.0.1:${port}/`
  const child = new Deno.Command(Deno.execPath(), {
    args: [
      "task",
      "dev",
      "--host",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    stdout: "null",
    stderr: "null",
  }).spawn()

  try {
    await waitForServer(url)
    return { child, url }
  } catch (error) {
    child.kill("SIGTERM")
    await child.status.catch(() => undefined)
    throw error
  }
}

Deno.test("generated Namu datasets keep required source-backed invariants", () => {
  assert(Object.keys(matchups).length === 51, "matchups must cover 51 heroes")
  assert(
    Object.keys(heroSynergies).length === 51,
    "synergies must cover 51 heroes",
  )
  assert(
    matchups.orisa?.find((matchup) => matchup.target === "sigma")?.rating ===
      "veryBad",
    "Orisa vs Sigma matchup must be veryBad from Namu crawl",
  )
  assert(
    matchups.orisa?.find((matchup) => matchup.target === "junker-queen")
      ?.rating === "veryGood",
    "Orisa vs Junker Queen matchup must be veryGood from Namu crawl",
  )
  const dVaDoomfist = matchups["d-va"]?.find((matchup) =>
    matchup.target === "doomfist"
  )
  assert(
    dVaDoomfist?.body?.includes("둠피스트가 딜러였던") &&
      dVaDoomfist.body.includes("주석") &&
      dVaDoomfist.body.includes("파워 블락"),
    "D.Va vs Doomfist matchup body and notes must be crawled from Namu",
  )
  const dVaPharah = heroSynergies["d-va"]?.find((entry) =>
    entry.target === "pharah"
  )
  assert(
    dVaPharah?.body?.includes("파르시 조합") &&
      dVaPharah.body.includes("주석") &&
      dVaPharah.body.includes("파라는 모든 디바"),
    "D.Va and Pharah synergy body and notes must be crawled from Namu",
  )
  assert(source.name === "Namu Wiki", "guide source must be Namu Wiki")
  assert(
    /^\d{4}-\d{2}-\d{2}$/.test(source.updatedAt),
    "guide source update date must be crawled",
  )
  assert(mapModes.length > 0, "map modes must be crawled")
  assert(
    mapModes.every((mode) => mode.maps.length > 0),
    "each map mode must include maps",
  )
  assert(
    heroes.every((hero) => hero.avatar.startsWith("./guide-images/heroes/")),
    "each crawled hero must use a local image artifact",
  )
  assert(
    heroes.every((hero) =>
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:/.test(hero.updatedAt ?? "")
    ),
    "each crawled hero must include a minute-level Namu document update time",
  )
  assert(
    mapModes.every((mode) =>
      mode.maps.every((map) => map.image.startsWith("./guide-images/maps/"))
    ),
    "each crawled map must use a local image artifact",
  )
  assert(
    mapModes.every((mode) =>
      mode.maps.every((map) =>
        (map.attack.length === 0 && map.defense.length === 0) ||
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:/.test(map.updatedAt ?? "")
      )
    ),
    "each selectable map must include a minute-level Namu document update time",
  )
  const nepal = mapModes.flatMap((mode) => mode.maps).find((map) =>
    map.name === "네팔"
  )
  if (!nepal) throw new Error("Nepal map must be crawled")
  assert(
    nepal.attack.some((entry) => entry.id === "roadhog") &&
      nepal.defense.some((entry) => entry.id === "cassidy"),
    "Nepal attack/defense recommendations must be crawled from Namu",
  )
  const busan = mapModes.flatMap((mode) => mode.maps).find((map) =>
    map.name === "부산"
  )
  if (!busan) throw new Error("Busan map must be crawled")
  assert(
    busan.attack.find((entry) => entry.id === "symmetra")?.note?.includes(
      "사찰맵 한정",
    ),
    "Busan Symmetra recommendation note must be crawled from Namu",
  )
  const antarctic = mapModes.flatMap((mode) => mode.maps).find((map) =>
    map.name === "남극 반도"
  )
  if (!antarctic) throw new Error("Antarctic Peninsula map must be crawled")
  assert(
    antarctic.attack.length === 0 && antarctic.defense.length === 0,
    "maps without Namu recommendations must stay empty",
  )
})

Deno.test({
  name: "query params restore and update visible state",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1000 },
    })

    try {
      await page.goto(
        `${url}?view=synergies&hero=orisa&map=${encodeURIComponent("네팔")}`,
      )
      await page.waitForSelector(".navbar")
      assert(
        await page.getByLabel("주요 메뉴").getByRole("button", { name: "궁합" })
          .evaluate((button) => button.classList.contains("is-selected")),
        "synergy view was not restored from query params",
      )
      assert(
        await page.locator(".selected-hero strong").getByText("오리사", {
          exact: true,
        }).isVisible(),
        "hero was not restored from query params",
      )
      assert(
        await page.locator(".selected-hero img").evaluate((node) => {
          const image = node as HTMLImageElement
          return image.naturalWidth === 256 && image.naturalHeight === 256
        }),
        "selected hero image must stay the 256x256 portrait asset",
      )
      const heroTitle = page.locator(".selected-hero .selected-title")
      assert(
        (await heroTitle.getAttribute("href"))?.includes("namu.wiki/w/"),
        "hero title did not link to Namu Wiki",
      )
      assert(
        await heroTitle.evaluate((link) => {
          const strong = link.querySelector("strong")
          const iconStyle = getComputedStyle(
            link.querySelector(".selected-title-icon")!,
          )
          return strong &&
            getComputedStyle(link).textDecorationLine.includes("underline") &&
            iconStyle.backgroundImage !== "none" &&
            iconStyle.width === "18px" &&
            /마지막 업데이트: \d{4}-\d{2}-\d{2} (오전|오후) \d{1,2}:\d{2}/.test(
              link.textContent ?? "",
            )
        }),
        "hero title link should show a Namu Wiki logo and minute update time",
      )

      await page.getByLabel("주요 메뉴").getByRole("button", {
        name: "맵별 추천 영웅",
      }).click()
      assert(
        await page.locator(".selected-map strong").getByText("네팔", {
          exact: true,
        }).isVisible(),
        "map was not restored from query params",
      )
      const mapTitle = page.locator(".selected-map .selected-title")
      assert(
        (await mapTitle.getAttribute("href"))?.includes("namu.wiki/w/"),
        "map title did not link to Namu Wiki",
      )
      assert(
        await mapTitle.evaluate((link) => {
          const strong = link.querySelector("strong")
          const iconStyle = getComputedStyle(
            link.querySelector(".selected-title-icon")!,
          )
          return strong &&
            getComputedStyle(link).textDecorationLine.includes("underline") &&
            iconStyle.backgroundImage !== "none" &&
            iconStyle.width === "18px" &&
            /마지막 업데이트: \d{4}-\d{2}-\d{2} (오전|오후) \d{1,2}:\d{2}/.test(
              link.textContent ?? "",
            )
        }),
        "map title link should show a Namu Wiki logo and minute update time",
      )
      await page.locator(".map-button").filter({ hasText: "왕의 길" }).click()
      assert(
        new URL(page.url()).searchParams.get("map") === "왕의-길",
        "map query param was not updated",
      )

      await page.getByLabel("주요 메뉴").getByRole("button", { name: "상성" })
        .click()
      await page.getByLabel("영웅 선택").getByRole("button", {
        name: "라마트라",
      })
        .click()
      const params = new URL(page.url()).searchParams
      assert(params.get("view") === "matchups", "view query was not updated")
      assert(params.get("hero") === "ramattra", "hero query was not updated")

      await page.goto(`${url}?view=maps&map=${encodeURIComponent("남극-반도")}`)
      await page.waitForSelector(".navbar")
      assert(
        await page.locator(".selected-map strong").getByText("네팔", {
          exact: true,
        }).isVisible(),
        "map without recommendations was not replaced by the first enabled map",
      )
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "each main page uses valid bundled guide images",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1000 },
    })

    try {
      const guideImageUrls = new Set<string>()
      for (const route of mainImagePages) {
        await page.goto(`${url}${route.path}`)
        await page.waitForSelector(".navbar")
        const images = await page.evaluate(() =>
          [...document.images].map((image) => {
            const src = image.getAttribute("src") ?? ""
            return { src, currentSrc: new URL(src, location.href).href }
          })
        )
        assert(images.length > 0, `${route.label}: page rendered no images`)
        for (const image of images) {
          assert(
            !image.currentSrc.includes("i.namu.wiki"),
            `${route.label}: remote Namu image leaked ${image.currentSrc}`,
          )
          assert(
            image.currentSrc.includes("/guide-images/"),
            `${route.label}: non-guide image src ${image.currentSrc}`,
          )
          guideImageUrls.add(image.currentSrc)
        }
      }

      const imageResults = await page.evaluate(
        async (urls) =>
          await Promise.all(urls.map(async (url) => {
            const image = new Image()
            image.src = url
            await image.decode().catch(() => undefined)
            return {
              url,
              broken: !image.complete || image.naturalWidth <= 0 ||
                image.naturalHeight <= 0,
              naturalWidth: image.naturalWidth,
              naturalHeight: image.naturalHeight,
            }
          })),
        [...guideImageUrls],
      )
      const brokenImages = imageResults.filter((image) => image.broken)
      assert(
        brokenImages.length === 0,
        `broken bundled images: ${
          brokenImages.map((image) => image.url).join(", ")
        }`,
      )
      const wrongHeroImages = imageResults.filter((image) =>
        image.url.includes("/guide-images/heroes/") &&
        (image.naturalWidth !== 256 || image.naturalHeight !== 256)
      )
      assert(
        wrongHeroImages.length === 0,
        `non-portrait hero images: ${
          wrongHeroImages.map((image) => image.url).join(", ")
        }`,
      )
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "unmasked main page image screenshots stay stable",
  timeout: 60_000,
  async fn(t) {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1000 },
    })

    const imageSnapshot = async (name: string, selector: string) => {
      const locator = page.locator(selector).first()
      const image = await locator.evaluate(async (node) => {
        const image = node as HTMLImageElement
        await image.decode().catch(() => undefined)
        return {
          src: image.getAttribute("src"),
          naturalWidth: image.naturalWidth,
          naturalHeight: image.naturalHeight,
        }
      })
      const screenshot = await locator.screenshot({ animations: "disabled" })
      return {
        name,
        ...image,
        screenshot: pngSize(screenshot),
        sha256: await sha256Hex(screenshot),
      }
    }

    try {
      const snapshots = []
      for (const route of mainImagePages) {
        await page.goto(`${url}${route.path}`)
        await page.waitForSelector(".navbar")
        snapshots.push(
          await imageSnapshot(
            `${route.label}:primary`,
            route.label === "maps" ? ".selected-map img" : ".selected-hero img",
          ),
        )
        snapshots.push(
          await imageSnapshot(
            `${route.label}:result`,
            ".result .hero-button img",
          ),
        )
      }

      await assertSnapshot(t, snapshots, {
        name: "unmasked-main-page-image-screenshots",
        serializer: (value) => JSON.stringify(value, null, 2),
      })
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "mobile and pc tab interaction screenshots stay stable",
  timeout: 120_000,
  async fn(t) {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage()

    type ScreenshotTab = "matchups" | "synergies" | "maps"
    type ScreenshotInteraction = "pick" | "note-hover" | "notice-modal"

    const viewports = [
      { key: "pc", size: { width: 1280, height: 1000 } },
      { key: "mobile", size: { width: 390, height: 844 } },
    ]
    const tabs: { key: ScreenshotTab; path: string }[] = [
      { key: "matchups", path: "?view=matchups&hero=d-va&map=부산" },
      { key: "synergies", path: "?view=synergies&hero=d-va&map=부산" },
      {
        key: "maps",
        path: `?view=maps&hero=d-va&map=${encodeURIComponent("부산")}`,
      },
    ]
    const interactions: ScreenshotInteraction[] = [
      "pick",
      "note-hover",
      "notice-modal",
    ]

    const resultCard = (name: string) =>
      page.locator(".result .hero-button").filter({ hasText: name }).first()

    const hoverCard = async (name: string, notePattern: RegExp) => {
      const card = resultCard(name)
      const note = card.getByLabel(notePattern)
      assert(await note.isVisible(), `note icon was not visible: ${name}`)
      await card.hover()
      assert(
        await note.locator(".tooltip").evaluate((tooltip) =>
          getComputedStyle(tooltip).opacity === "1"
        ),
        `note tooltip was not shown: ${name}`,
      )
    }

    const selectDetailCard = async (name: string, bodyPattern: RegExp) => {
      const before = page.url()
      assert(
        await page.locator(".result .info-note").count() === 0,
        "body-backed hero cards must not show note icons",
      )
      await resultCard(name).click()
      assert(page.url() === before, "detail card click should not update query")
      assert(
        await page.locator(".selected-hero strong").getByText("D.Va", {
          exact: true,
        }).isVisible(),
        "detail card click should not change the source hero",
      )
      assert(
        await page.locator(".guide-detail").getByText(bodyPattern).isVisible(),
        `detail body was not visible: ${name}`,
      )
    }

    const applyInteraction = async (
      tab: ScreenshotTab,
      interaction: ScreenshotInteraction,
    ) => {
      if (interaction === "notice-modal") {
        const before = page.url()
        await page.getByRole("button", { name: "NOTICE" }).click()
        assert(page.url() === before, "NOTICE should not navigate")
        assert(
          await page.getByRole("dialog", { name: "NOTICE" }).isVisible(),
          "NOTICE modal was not visible",
        )
        return
      }

      if (tab === "matchups") {
        if (interaction === "pick") {
          await page.getByLabel("영웅 선택").getByRole("button", {
            name: "라마트라",
          }).click()
          assert(
            await page.locator(".selected-hero strong").getByText("라마트라", {
              exact: true,
            }).isVisible(),
            "matchup hero pick was not reflected",
          )
          return
        }
        await selectDetailCard("둠피스트", /둠피스트가 딜러였던/)
        return
      }

      if (tab === "synergies") {
        if (interaction === "pick") {
          await page.getByLabel("영웅 선택").getByRole("button", {
            name: "오리사",
          }).click()
          assert(
            await page.locator(".selected-hero strong").getByText("오리사", {
              exact: true,
            }).isVisible(),
            "synergy hero pick was not reflected",
          )
          return
        }
        await selectDetailCard("파라", /파르시 조합/)
        return
      }

      if (interaction === "pick") {
        await page.locator(".map-button").filter({ hasText: "네팔" }).click()
        assert(
          await page.locator(".selected-map strong").getByText("네팔", {
            exact: true,
          }).isVisible(),
          "map pick was not reflected",
        )
        return
      }
      await hoverCard("시메트라", /추천 주석: 사찰맵 한정/)
    }

    try {
      const snapshots = []

      for (const viewport of viewports) {
        for (const tab of tabs) {
          for (const interaction of interactions) {
            await page.setViewportSize(viewport.size)
            await page.goto(`${url}${tab.path}`)
            await page.waitForSelector(".navbar")
            await applyInteraction(tab.key, interaction)

            const screenshot = await page.screenshot({
              animations: "disabled",
              fullPage: true,
              mask: [page.locator("img"), page.locator(".selected-title")],
            })
            const metrics = await page.evaluate(() => {
              const pick = document.querySelector<HTMLElement>(".pick")
              const result = document.querySelector<HTMLElement>(".result")
              const workspace = document.querySelector<HTMLElement>(
                ".workspace",
              )
              const dialog = document.querySelector<HTMLElement>(
                "[role='dialog']",
              )
              const tooltip = [...document.querySelectorAll<HTMLElement>(
                ".tooltip",
              )].find((node) => getComputedStyle(node).opacity === "1")
              return {
                activeNav: [...document.querySelectorAll(".nav-button")].find((
                  button,
                ) => button.classList.contains("is-selected"))?.textContent
                  ?.trim(),
                selectedHero:
                  document.querySelector(".selected-hero strong")?.textContent
                    ?.trim() ?? null,
                selectedMap:
                  document.querySelector(".selected-map strong")?.textContent
                    ?.trim() ?? null,
                workspaceColumns: workspace
                  ? getComputedStyle(workspace).gridTemplateColumns
                  : null,
                dialogVisible: dialog
                  ? getComputedStyle(dialog).display !== "none"
                  : false,
                tooltipVisible: Boolean(tooltip),
                pageOverflow:
                  document.documentElement.scrollWidth > innerWidth ||
                  document.body.scrollWidth > innerWidth,
                pickOverflow: pick ? pick.scrollWidth > pick.clientWidth : true,
                resultOverflow: result
                  ? result.scrollWidth > result.clientWidth
                  : true,
              }
            })
            snapshots.push({
              name: `${viewport.key}-${tab.key}-${interaction}`,
              viewport: viewport.size,
              screenshot: pngSize(screenshot),
              metrics,
            })
          }
        }
      }

      await assertSnapshot(t, snapshots, {
        name: "tab-interaction-screenshots",
        serializer: (value) => JSON.stringify(value, null, 2),
      })
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "map note tooltips stay inside the viewport when panels are clipped",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 360 },
    })

    try {
      await page.goto(`${url}?view=maps&hero=d-va&map=부산`)
      await page.waitForSelector(".result .hero-button:has(.info-note)")

      const card = page.locator(".result .hero-button").filter({
        hasText: "시메트라",
      }).first()
      const tooltip = card.getByLabel(/추천 주석: 사찰맵 한정/)
        .locator(".tooltip")
      await card.hover()
      assert(
        await tooltip.evaluate((node) => {
          const rect = node.getBoundingClientRect()
          const style = getComputedStyle(node)
          return style.position === "fixed" && style.opacity === "1" &&
            rect.top >= 0 && rect.left >= 0 &&
            rect.right <= globalThis.innerWidth &&
            rect.bottom <= globalThis.innerHeight
        }),
        "note tooltip must not be clipped by the result panel or viewport",
      )
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "right-column hero selection shows the Namu body without changing hero",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1512, height: 884 },
    })

    try {
      await page.goto(`${url}?view=matchups&hero=d-va&map=부산`)
      await page.waitForSelector(".result .hero-button")

      const result = page.locator(".result")
      await result.getByRole("button", { name: "안란" }).click()
      await page.waitForTimeout(50)

      assert(
        await page.locator(".selected-hero strong").getByText("D.Va", {
          exact: true,
        }).isVisible(),
        "right-column hero pick should not change the source hero",
      )
      assert(
        await page.locator(".guide-detail").getByText(/안란의 좌클릭/)
          .isVisible(),
        "right-column hero pick did not show the crawled body",
      )
      assert(
        new URL(page.url()).searchParams.get("hero") === "d-va",
        "right-column hero pick should not update the hero query param",
      )

      await result.getByRole("button", { name: "안란" }).click()
      assert(
        await page.locator(".guide-detail").count() === 0,
        "clicking the same right-column hero again should hide the body",
      )
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "desktop zoom keeps lower hero picker cards reachable by scrolling",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1512, height: 884 },
    })

    try {
      await page.goto(`${url}?view=matchups&hero=d-va&map=부산`)
      await page.waitForSelector(".pick .hero-button")

      const picker = page.getByLabel("영웅 선택")
      const lastSupportHero = picker.getByRole("button", { name: "주노" })
      assert(
        await picker.evaluate((node) => {
          const style = getComputedStyle(node)
          return style.overflowY !== "hidden" && style.overflowY !== "clip"
        }),
        "hero picker must allow vertical scrolling when it overflows",
      )
      assert(
        await picker.evaluate((node) => node.scrollHeight > node.clientHeight),
        "150% zoom viewport should exercise a clipped hero picker",
      )

      await picker.hover()
      await page.mouse.wheel(0, 1_200)
      await page.waitForTimeout(50)

      const scrollResult = await picker.evaluate((node) => {
        const lastButton = [...node.querySelectorAll<HTMLButtonElement>(
          ".hero-button",
        )].at(-1)
        const pickerRect = node.getBoundingClientRect()
        const buttonRect = lastButton?.getBoundingClientRect()
        return {
          scrollTop: Math.round(node.scrollTop),
          lastVisible: Boolean(
            buttonRect && buttonRect.bottom <= pickerRect.bottom &&
              buttonRect.top >= pickerRect.top,
          ),
        }
      })
      assert(scrollResult.scrollTop > 0, "mouse wheel did not scroll picker")
      assert(scrollResult.lastVisible, "lower support heroes stayed hidden")
      assert(await lastSupportHero.isVisible(), "Juno card was not reachable")
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name:
    "navbar exposes synergies and sourced map data without fake recommendations",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1000 },
    })

    try {
      await page.goto(url)
      await page.waitForSelector(".navbar")

      const navLabels = await page.$$eval(
        ".nav-button",
        (buttons) => buttons.map((button) => button.textContent?.trim()),
      )
      assert(
        JSON.stringify(navLabels) ===
          JSON.stringify(["상성", "궁합", "맵별 추천 영웅"]),
        `unexpected nav labels: ${JSON.stringify(navLabels)}`,
      )

      const matchupResult = page.locator(".result")
      const doomfistCard = matchupResult.locator(".hero-button").filter({
        hasText: "둠피스트",
      }).first()
      assert(
        await doomfistCard.locator(".info-note").count() === 0,
        "matchup body cards should not show note icons",
      )
      await doomfistCard.click()
      assert(
        await page.locator(".selected-hero strong").getByText("D.Va", {
          exact: true,
        }).isVisible(),
        "matchup card click should keep the source hero selected",
      )
      assert(
        await page.locator(".guide-detail").getByText(/둠피스트가 딜러였던/)
          .isVisible(),
        "matchup card click should show the crawled body",
      )
      assert(
        new URL(page.url()).searchParams.get("hero") === "d-va",
        "matchup card click should not update the hero query param",
      )

      assert(
        await doomfistCard.evaluate((card) =>
          card.classList.contains("role-tank")
        ),
        "matchup cards should be role-colored",
      )

      await page.getByLabel("주요 메뉴").getByRole("button", { name: "궁합" })
        .click()
      const pharahCard = matchupResult.locator(".hero-button").filter({
        hasText: "파라",
      }).first()
      assert(
        await pharahCard.locator(".info-note").count() === 0,
        "synergy body cards should not show note icons",
      )
      assert(
        await pharahCard.evaluate((card) =>
          card.classList.contains("role-damage")
        ),
        "synergy cards should be role-colored",
      )
      await pharahCard.click()
      assert(
        await page.locator(".selected-hero strong").getByText("D.Va", {
          exact: true,
        }).isVisible(),
        "synergy card click should keep the source hero selected",
      )
      assert(
        await page.locator(".guide-detail").getByText(/파르시 조합/)
          .isVisible(),
        "synergy card click should show the crawled body",
      )
      assert(
        new URL(page.url()).searchParams.get("hero") === "d-va",
        "synergy card click should not update hero query param",
      )
      await page.getByLabel("영웅 선택").getByRole("button", { name: "오리사" })
        .click()
      assert(
        await page.getByText("매우 좋음", { exact: true }).isVisible(),
        "synergy very-good group was not visible",
      )
      assert(
        await page.getByText("좋음", { exact: true }).isVisible(),
        "synergy good group was not visible",
      )

      const mapNav = page.getByLabel("주요 메뉴").getByRole("button", {
        name: "맵별 추천 영웅",
      })
      assert(!(await mapNav.isDisabled()), "map nav should stay enabled")
      await mapNav.click()
      assert(
        await mapNav.evaluate((button) =>
          button.classList.contains("is-selected")
        ),
        "map nav did not become active",
      )
      assert(
        await page.getByLabel("맵 선택").getByText("쟁탈", { exact: true })
          .isVisible(),
        "control map group was not visible",
      )
      assert(
        await page.getByLabel("맵 선택").getByText("호위", { exact: true })
          .isVisible(),
        "escort map group was not visible",
      )
      assert(
        await page.locator(".map-button img").first().isVisible(),
        "map image was not visible",
      )
      const emptyMapButton = page.locator(".map-button").filter({
        hasText: "남극 반도",
      }).first()
      assert(
        await emptyMapButton.isDisabled(),
        "maps without recommendations must be disabled",
      )
      const sourcedMapButton = page.locator(".map-button").filter({
        hasText: "네팔",
      }).first()
      assert(
        !(await sourcedMapButton.isDisabled()),
        "maps with recommendations must stay enabled",
      )
      await sourcedMapButton.click()
      const result = page.locator(".result")
      assert(
        await result.getByText("공격 추천", { exact: true }).isVisible(),
        "attack recommendation section was not visible",
      )
      assert(
        await result.getByText("방어 추천", { exact: true }).isVisible(),
        "defense recommendation section was not visible",
      )
      assert(
        await result.locator(".row.attack .hero-button.role-tank").filter({
          hasText: "로드호그",
        }).isVisible(),
        "attack tank recommendation card was not role-colored",
      )
      assert(
        await result.locator(".row.defense .hero-button.role-damage").filter({
          hasText: "캐서디",
        }).isVisible(),
        "defense damage recommendation card was not role-colored",
      )
      assert(
        await result.getByText("로드호그", { exact: true }).isVisible(),
        "crawled attack hero was not visible",
      )
      assert(
        await result.getByText("캐서디", { exact: true }).isVisible(),
        "crawled defense hero was not visible",
      )
      assert(
        !(await page.getByText("추천 영웅 데이터 없음", { exact: true })
          .isVisible()),
        "empty recommendation state should not show for sourced maps",
      )

      await page.locator(".map-button").filter({ hasText: "부산" }).click()
      const symmetraCard = result.locator(".hero-button").filter({
        hasText: "시메트라",
      }).first()
      const symmetraNote = symmetraCard.getByLabel(/추천 주석: 사찰맵 한정/)
      assert(
        await symmetraNote.isVisible(),
        "recommendation note icon was not visible",
      )
      await symmetraCard.hover()
      assert(
        await symmetraNote.locator(".tooltip").evaluate((tooltip) =>
          getComputedStyle(tooltip).opacity === "1"
        ),
        "recommendation note tooltip was not shown on card hover",
      )
      await page.mouse.move(0, 0)

      const overflow = await page.evaluate(() => {
        const pick = document.querySelector<HTMLElement>(".pick")
        const result = document.querySelector<HTMLElement>(".result")
        return {
          page:
            document.documentElement.scrollHeight > globalThis.innerHeight ||
            document.body.scrollHeight > globalThis.innerHeight,
          pick: pick ? pick.scrollHeight > pick.clientHeight : true,
          result: result ? result.scrollHeight > result.clientHeight : true,
        }
      })
      assert(!overflow.page, "page overflowed on map recommendations")
      assert(!overflow.pick, "map picker overflowed")
      assert(!overflow.result, "map recommendations overflowed")

      assert(
        await page.locator("footer").getByText(source.updatedAt).isVisible(),
        "source update date was not visible in the footer",
      )

      await page.setViewportSize({ width: 1440, height: 900 })
      const mapHeaderLayout = await page.evaluate(() => {
        const mode = document.querySelector<HTMLElement>(".selected-map span")
        const title = document.querySelector<HTMLElement>(
          ".selected-map .selected-title",
        )
        const pick = document.querySelector<HTMLElement>(".pick")
        const footer = document.querySelector<HTMLElement>("footer")
        if (!mode || !title || !pick || !footer) return null
        const modeRect = mode.getBoundingClientRect()
        const titleRect = title.getBoundingClientRect()
        const pickRect = pick.getBoundingClientRect()
        const footerRect = footer.getBoundingClientRect()
        return {
          titleGap: Math.round(titleRect.left - modeRect.right),
          footerGap: Math.floor(footerRect.top - pickRect.bottom),
        }
      })
      if (!mapHeaderLayout) {
        throw new Error("map header layout elements were not found")
      }
      assert(
        mapHeaderLayout.titleGap >= 4,
        `map mode and title were too close: ${mapHeaderLayout.titleGap}`,
      )
      assert(
        mapHeaderLayout.footerGap >= 0,
        `footer overlapped the map picker: ${mapHeaderLayout.footerGap}`,
      )
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})

Deno.test({
  name: "right-column body uses result scrolling without resizing cards",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 520 },
    })

    try {
      await page.goto(`${url}?view=matchups&hero=d-va&map=부산`)
      await page.waitForSelector(".result .hero-button")
      const result = page.locator(".result")
      const before = await result.evaluate((node) => {
        const card = node.querySelector<HTMLButtonElement>(".hero-button")
        const image = card?.querySelector("img")
        return {
          cardHeight: Math.round(card?.getBoundingClientRect().height ?? 0),
          imageHeight: Math.round(image?.getBoundingClientRect().height ?? 0),
          overflowY: getComputedStyle(node).overflowY,
          counterIcon: getComputedStyle(node).getPropertyValue(
            "--counter-icon",
          ),
        }
      })

      await result.getByRole("button", { name: "둠피스트" }).click()
      await page.waitForSelector(".guide-detail")

      const after = await result.evaluate((node) => {
        const card = node.querySelector<HTMLButtonElement>(".hero-button")
        const image = card?.querySelector("img")
        return {
          cardHeight: Math.round(card?.getBoundingClientRect().height ?? 0),
          imageHeight: Math.round(image?.getBoundingClientRect().height ?? 0),
          overflowY: getComputedStyle(node).overflowY,
          counterIcon: getComputedStyle(node).getPropertyValue(
            "--counter-icon",
          ),
          scrolls: node.scrollHeight > node.clientHeight,
        }
      })

      assert(before.overflowY === "auto", "result should allow vertical scroll")
      assert(after.scrolls, "body selection should scroll the result panel")
      assert(
        before.cardHeight === after.cardHeight &&
          before.imageHeight === after.imageHeight,
        "right-column cards should not be resized after selecting a body",
      )
      assert(
        !before.counterIcon && !after.counterIcon,
        "result panel should not use counter sizing CSS variables",
      )
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})
