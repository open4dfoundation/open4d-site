import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

const outputDirectory = '.impeccable/review'
await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })

await page.goto('http://127.0.0.1:5173/')
await page.waitForTimeout(700)
await page.locator('.hero').screenshot({ path: `${outputDirectory}/desktop-hero-round-1.png` })
await page.locator('.comparison-section').screenshot({ path: `${outputDirectory}/desktop-comparison-round-1.png` })

for (const route of ['work', 'status']) {
  await page.goto(`http://127.0.0.1:5173/${route}`)
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${outputDirectory}/desktop-${route}-round-1.png`, fullPage: true })
}

await page.setViewportSize({ width: 390, height: 844 })
for (const route of ['work', 'status']) {
  await page.goto(`http://127.0.0.1:5173/${route}`)
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${outputDirectory}/mobile-${route}-round-1.png`, fullPage: true })
}

await browser.close()
