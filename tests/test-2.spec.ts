import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://slf.fm/roster.php?id=105620');
  await page.getByRole('link', { name: 'Китало Алик' }).click();
  await page.locator('span').filter({ hasText: 'Централ Кост →' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Дрор Саги' }).click();
  await page.getByRole('link', { name: 'АИ', exact: true }).click();
  await page.getByRole('link', { name: '29/3/' }).click();
  await page.locator('span').filter({ hasText: 'Централ Кост →' }).getByRole('link').click();
});