/// <reference lib="deno.ns" />

import { chromium } from "playwright"

const url = "https://namu.wiki/w/" + encodeURIComponent("독트린(오버워치)")
const report = (method: string, status: number, html: string) => {
  console.log(JSON.stringify({
    method,
    status,
    readable: html.includes("최근 수정 시각"),
    cloudflare: /cloudflare/i.test(html),
    challenge: /challenge-platform|Just a moment|captcha/i.test(html),
    bytes: new TextEncoder().encode(html).length,
  }))
}

for (const headless of [true, false]) {
  const browser = await chromium.launch({ headless })
  try {
    const page = await browser.newPage({ locale: "ko-KR" })
    const userAgent = await page.evaluate(() => navigator.userAgent)
    if (headless) {
      const response = await fetch(url, {
        headers: { "user-agent": userAgent },
        signal: AbortSignal.timeout(30_000),
      })
      report("fetch", response.status, await response.text())
      const output = await new Deno.Command("curl", {
        args: [
          "--location",
          "--silent",
          "--compressed",
          "--max-time",
          "30",
          "--user-agent",
          userAgent,
          "--write-out",
          "\n%{http_code}",
          url,
        ],
        stdout: "piped",
        stderr: "null",
      }).output()
      const text = new TextDecoder().decode(output.stdout)
      report("curl", Number(text.slice(-3)), text.slice(0, -4))
    }
    const response = await page.goto(url, { waitUntil: "domcontentloaded" })
    await page.waitForFunction(
      () => document.body.innerText.includes("최근 수정 시각"),
      undefined,
      { timeout: 30_000 },
    ).catch(() => undefined)
    report(
      headless ? "chromium-headless" : "chromium-headed",
      response?.status() ?? 0,
      await page.content(),
    )
  } finally {
    await browser.close()
  }
}
