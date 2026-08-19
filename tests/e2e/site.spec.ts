import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('homepage fits the viewport and has no serious accessibility violations', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Tools for 3D data that changes over time.',
  )

  const viewportWidth = await page.evaluate(() => document.documentElement.clientWidth)
  const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  expect(pageWidth).toBeLessThanOrEqual(viewportWidth)

  const results = await new AxeBuilder({ page }).analyze()
  const materialViolations = results.violations.filter(({ impact }) =>
    impact === 'serious' || impact === 'critical',
  )
  expect(materialViolations).toEqual([])
})

test('the sequence controls and comparison record work without layout switches', async ({ page }) => {
  await page.goto('/')

  const stage = page.locator('.sequence-stage')
  const before = await stage.boundingBox()
  await page.getByRole('button', { name: 'Play sampled sequence' }).click()
  await expect(page.getByRole('button', { name: 'Pause sequence' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Show frame 07 at 0.6 s' })).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: 'Pause sequence' }).click()
  const lastFrame = page.getByRole('button', { name: 'Show frame 10 at 0.9 s' })
  await lastFrame.click()
  await expect(lastFrame).toHaveAttribute('aria-pressed', 'true')
  const after = await stage.boundingBox()
  expect(after?.width).toBe(before?.width)
  expect(after?.height).toBe(before?.height)
  await expect(page.getByText('Bidirectional nearest-vertex distance')).toBeVisible()

  const comparison = page.locator('.comparison-viewport')
  const comparisonWidths = await comparison.evaluate((element) => ({
    client: element.clientWidth,
    scroll: element.scrollWidth,
  }))
  expect(comparisonWidths.scroll).toBeGreaterThanOrEqual(comparisonWidths.client)
})

test('internal route changes start at the top', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.getByRole('link', { name: 'Open the research index' }).click()
  await expect(page).toHaveURL(/\/work$/)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
})

test('supporting routes render and mobile navigation opens when present', async ({ page }, testInfo) => {
  await page.goto('/work')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Research and implementation notes')

  await page.goto('/status')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Current project status')
  const statusResults = await new AxeBuilder({ page }).analyze()
  expect(statusResults.violations.filter(({ impact }) => impact === 'serious' || impact === 'critical')).toEqual([])

  if (testInfo.project.name.startsWith('mobile')) {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  }
})
