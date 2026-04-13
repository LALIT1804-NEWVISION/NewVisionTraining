import { test, expect } from "../../src/fixture/fixture";
import BaseData from "../../src/testdata/base.json";
import DashboardProductData from "../../src/testdata/dashboardproduct.json";

test.beforeEach(async ({ helper, page }) => {
  await page.goto(BaseData.baseUrl);
  await helper.loginAsValidUser();
});

test('TC01_DashboardProduct - Verify that the product list is displayed on the dashboard', async ({ app }) => {
  await expect(
    app.dashboardProduct.getProducts().first()
  ).toBeVisible();
});

test('TC02_DashboardProduct - Verify the total number of products', async ({ app }) => {
  const count = await app.dashboardProduct.getProductCount();
  expect(count).toBe(DashboardProductData.totalProducts);
});

test('TC03_DashboardProduct - Verify that each product name is visible', async ({ app }) => {
  const names = app.dashboardProduct.getProductNames();
  const count = await names.count();

  for (let i = 0; i < count; i++) {
    await expect(names.nth(i)).toBeVisible();
  }
});

test('TC04_DashboardProduct - Verify that each product price is visible', async ({ app }) => {
  const prices = app.dashboardProduct.getProductPrices();
  const count = await prices.count();

  for (let i = 0; i < count; i++) {
    await expect(prices.nth(i)).toBeVisible();
  }
});

test('TC05_DashboardProduct - Verify that each Product name not empty', async ({ app }) => {
  const names = app.dashboardProduct.getProductNames();
  const count = await names.count();

  for (let i = 0; i < count; i++) {
    const text = await names.nth(i).textContent();
    expect(text).not.toBe('');
  }
});

test('TC06_DashboardProduct - Verify that eac Product price format', async ({ app }) => {
  const prices = app.dashboardProduct.getProductPrices();
  const count = await prices.count();

  for (let i = 0; i < count; i++) {
    const price = await prices.nth(i).textContent();
    expect(price).toMatch(/^\$\d+\.\d{2}$/);
  }
});