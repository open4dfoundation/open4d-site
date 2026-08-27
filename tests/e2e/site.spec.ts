import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('homepage fits the viewport and has no serious accessibility violations', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Mesh sequences, without another one-off script.',
  )

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    page: document.documentElement.scrollWidth,
    overflowing: [...document.querySelectorAll<HTMLElement>('body *')]
      .filter((element) => element.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
      .map((element) => ({
        element: `${element.tagName.toLowerCase()}.${element.className}`,
        left: element.getBoundingClientRect().left,
        right: element.getBoundingClientRect().right,
        width: element.getBoundingClientRect().width,
      })),
  }))
  expect(dimensions.page, JSON.stringify(dimensions.overflowing, null, 2)).toBeLessThanOrEqual(dimensions.viewport)

  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations.filter(({ impact }) => impact === 'serious' || impact === 'critical')).toEqual([])
})

test('the homepage uses one normal video player and makes the release state clear', async ({ page }) => {
  await page.goto('/')

  const video = page.getByLabel('Open4D viewer playing a ten-frame OBJ mesh sequence')
  await expect(video).toBeVisible()
  await expect(video).toHaveJSProperty('controls', true)
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.duration)).toBe(1)
  await expect(page.getByText('10 OBJ frames')).toBeVisible()
  await expect(page.getByText('Source preview only.')).toBeVisible()
  await expect(page.getByText('pip install open4d', { exact: true })).toHaveCount(0)
})

test('examples, integrations, and API routes are direct and usable', async ({ page }) => {
  await page.goto('/examples')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Examples for frame folders.')
  await page.getByRole('link', { name: /view a folder of obj files as an animation/i }).click()
  await expect(page).toHaveURL(/\/examples\/view-obj-animation$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('View a folder of OBJ files as an animation in Python')
  await expect(page.getByText('Known limits')).toBeVisible()

  await page.goto('/integrations')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Optional formats and tools.')
  await page.goto('/api')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('The first Python API.')
})

test('internal route changes start at the top and mobile navigation opens', async ({ page }, testInfo) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

  if (testInfo.project.name.startsWith('mobile')) {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Examples' }).click()
  } else {
    await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Examples' }).click()
  }

  await expect(page).toHaveURL(/\/examples$/)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
})
