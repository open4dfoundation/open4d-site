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

test('the sequence controls and comparison tabs work', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Play sequence' }).click()
  await expect(page.getByRole('button', { name: 'Pause sequence' })).toBeVisible()

  await page.getByRole('tab', { name: 'What it measures' }).click()
  await expect(page.getByText('Bidirectional nearest-vertex point or plane distance.')).toBeVisible()
})

test('supporting routes render and mobile navigation opens when present', async ({ page }, testInfo) => {
  await page.goto('/work')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Work that can be inspected')

  await page.goto('/status')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Current project status')

  if (testInfo.project.name.startsWith('mobile')) {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  }
})
