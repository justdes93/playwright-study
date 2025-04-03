import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole('textbox', { name: 'search...' }).click();
  await page.getByRole('textbox', { name: 'search...' }).fill(' lasofoa');
  await page.locator('form[name="searchform"]').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'How To Choose Between' }).first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'About me' }).click();
  await page1.getByRole('button', { name: '<- Back to the list of' }).click();
  await page1.getByRole('link', { name: 'Back To Office. Back To' }).click();
  await page1.getByText('work', { exact: true }).click();
  await page1.getByRole('textbox', { name: 'search...' }).click();
  await page1.getByRole('textbox', { name: 'search...' }).fill('tttt');
  await page1.getByRole('button', { name: 'Home' }).click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Do Not EVER Accept The' }).first().click();
  const page2 = await page2Promise;
});