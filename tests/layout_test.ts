/// <reference lib="deno.ns" />

import { chromium, type Page } from "npm:playwright@1.60.0"

type Metrics = {
  hero: string | undefined
  icon: number
  counter: string
  pageOverflow: boolean
  pickOverflow: boolean
  resultOverflow: boolean
  button: {
    width: number
    height: number
    imageHeight: number
    gridTemplateColumns: string
    borderColor: string
    className: string
  }
}

const viewports = [
  { width: 1280, height: 1000 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 2268, height: 1000 },
]

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message)
}

const waitForServer = async (url: string) => {
  const started = Date.now()
  while (Date.now() - started < 20_000) {
    try {
      const response = await fetch(url)
      await response.body?.cancel()
      if (response.ok) return
    } catch {
      // Retry until the dev server is ready.
    }
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  throw new Error(`Vite dev server did not start: ${url}`)
}

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

const clickHeroAndMeasure = async (page: Page, name: string) => {
  return await page.evaluate((heroName): Metrics => {
    const heroButton = [...document.querySelectorAll<HTMLButtonElement>(
      ".pick .hero-button",
    )].find((button) => button.textContent?.includes(heroName))
    if (!heroButton) throw new Error(`Hero button not found: ${heroName}`)

    heroButton.click()

    const pick = document.querySelector<HTMLElement>(".pick")
    const result = document.querySelector<HTMLElement>(".result")
    const selectedButton = [...document.querySelectorAll<HTMLButtonElement>(
      ".pick .hero-button",
    )].find((button) => button.textContent?.includes(heroName))
    const selectedImage = selectedButton?.querySelector("img")
    const counterImage = document.querySelector<HTMLImageElement>(
      ".result .grid.small .hero-button img",
    )

    if (!pick || !result || !selectedButton || !selectedImage) {
      throw new Error("Layout elements not found")
    }

    const selectedRect = selectedButton.getBoundingClientRect()
    const selectedImageRect = selectedImage.getBoundingClientRect()

    return {
      hero: document.querySelector(".selected-hero strong")?.textContent ??
        undefined,
      icon: Math.round(counterImage?.getBoundingClientRect().height ?? 0),
      counter: getComputedStyle(result).getPropertyValue("--counter-icon")
        .trim(),
      pageOverflow:
        document.documentElement.scrollHeight > window.innerHeight ||
        document.body.scrollHeight > window.innerHeight,
      pickOverflow: pick.scrollHeight > pick.clientHeight,
      resultOverflow: result.scrollHeight > result.clientHeight,
      button: {
        width: Math.round(selectedRect.width),
        height: Math.round(selectedRect.height),
        imageHeight: Math.round(selectedImageRect.height),
        gridTemplateColumns: getComputedStyle(selectedButton)
          .gridTemplateColumns,
        borderColor: getComputedStyle(selectedButton).borderColor,
        className: selectedButton.className,
      },
    }
  }, name)
}

Deno.test({
  name: "hero changes do not render a transient broken counter layout",
  timeout: 60_000,
  async fn() {
    const { child, url } = await startServer()
    const browser = await chromium.launch()
    const page = await browser.newPage()

    try {
      for (const viewport of viewports) {
        await page.setViewportSize(viewport)
        await page.goto(url)
        await page.waitForSelector(".pick .hero-button")

        await clickHeroAndMeasure(page, "마우가")
        await page.waitForTimeout(100)

        const immediate = await clickHeroAndMeasure(page, "오리사")
        const afterOneFrame = await page.evaluate(
          async (): Promise<Metrics> => {
            await new Promise(requestAnimationFrame)
            const pick = document.querySelector<HTMLElement>(".pick")
            const result = document.querySelector<HTMLElement>(".result")
            const selectedButton = document.querySelector<HTMLButtonElement>(
              ".pick .hero-button.is-selected",
            )
            const selectedImage = selectedButton?.querySelector("img")
            const counterImage = document.querySelector<HTMLImageElement>(
              ".result .grid.small .hero-button img",
            )

            if (!pick || !result || !selectedButton || !selectedImage) {
              throw new Error("Layout elements not found after frame")
            }

            const selectedRect = selectedButton.getBoundingClientRect()
            const selectedImageRect = selectedImage.getBoundingClientRect()

            return {
              hero:
                document.querySelector(".selected-hero strong")?.textContent ??
                  undefined,
              icon: Math.round(
                counterImage?.getBoundingClientRect().height ?? 0,
              ),
              counter: getComputedStyle(result).getPropertyValue(
                "--counter-icon",
              )
                .trim(),
              pageOverflow:
                document.documentElement.scrollHeight > window.innerHeight ||
                document.body.scrollHeight > window.innerHeight,
              pickOverflow: pick.scrollHeight > pick.clientHeight,
              resultOverflow: result.scrollHeight > result.clientHeight,
              button: {
                width: Math.round(selectedRect.width),
                height: Math.round(selectedRect.height),
                imageHeight: Math.round(selectedImageRect.height),
                gridTemplateColumns: getComputedStyle(selectedButton)
                  .gridTemplateColumns,
                borderColor: getComputedStyle(selectedButton).borderColor,
                className: selectedButton.className,
              },
            }
          },
        )

        const label = `${viewport.width}x${viewport.height}`
        assert(immediate.hero === "오리사", `${label}: Orisa was not selected`)
        assert(!immediate.pageOverflow, `${label}: page overflowed immediately`)
        assert(!immediate.pickOverflow, `${label}: pick overflowed immediately`)
        assert(
          !immediate.resultOverflow,
          `${label}: result overflowed immediately`,
        )
        assert(
          immediate.icon === afterOneFrame.icon,
          `${label}: counter icon changed after first paint (${immediate.icon} -> ${afterOneFrame.icon})`,
        )
        assert(
          immediate.counter === afterOneFrame.counter,
          `${label}: counter CSS variable changed after first paint (${immediate.counter} -> ${afterOneFrame.counter})`,
        )
        assert(
          immediate.button.className === "hero-button is-selected",
          `${label}: selected button class leaked: ${immediate.button.className}`,
        )
        assert(
          immediate.button.borderColor === "rgb(247, 147, 30)",
          `${label}: selected border was ${immediate.button.borderColor}`,
        )
        assert(
          JSON.stringify(immediate.button) ===
            JSON.stringify(afterOneFrame.button),
          `${label}: selected card layout changed after first paint`,
        )
      }
    } finally {
      await page.close().catch(() => undefined)
      await browser.close().catch(() => undefined)
      child.kill("SIGTERM")
      await child.status.catch(() => undefined)
    }
  },
})
