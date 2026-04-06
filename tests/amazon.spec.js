import{ test, expect } from '@playwright/test';

test('Amazon homepage loads', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveTitle(/Amazon/);
});

test('Search product on Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.keyboard.press('Enter');
  await page.waitForSelector('div.s-main-slot');
  await expect(page).toHaveURL(/s\?/);
});

