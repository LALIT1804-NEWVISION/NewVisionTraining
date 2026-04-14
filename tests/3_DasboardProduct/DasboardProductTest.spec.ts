import { test, expect } from "../../src/fixture/fixture";
import BaseData from "../../src/testdata/base.json";
import DashboardProductData from "../../src/testdata/dashboardproduct.json";
import loginData from "../../src/testdata/login.json";

test.beforeEach(async ({ page,appAction }) => {
    await page.goto(BaseData.baseUrl);
    await appAction.loginAction.login(loginData.validUser.username, loginData.validUser.password);
});

test('TC01_DashboardProduct - Verify that the product list is displayed on the dashboard', async ({ appAction }) => {
  await expect(
    appAction.dashboardproductAction.getProducts().first()
  ).toBeVisible();
});

test('TC02_DashboardProduct - Verify the total number of products', async ({ appAction }) => {
  const count = await appAction.dashboardproductAction.getProductCount();
  expect(count).toBe(DashboardProductData.totalProducts);
});

test('TC03_DashboardProduct - Verify that each product name is visible', async ({ appAction }) => {
  const names = appAction.dashboardproductAction.getProductNames();
  const count = await names.count();

  for (let i = 0; i < count; i++) {
    await expect(names.nth(i)).toBeVisible();
  }
});

test('TC04_DashboardProduct - Verify that each product price is visible', async ({ appAction }) => {
  const prices = appAction.dashboardproductAction.getProductPrices();
  const count = await prices.count();

  for (let i = 0; i < count; i++) {
    await expect(prices.nth(i)).toBeVisible();
  }
});

test('TC05_DashboardProduct - Verify that each Product name not empty', async ({ appAction }) => {
  const names = appAction.dashboardproductAction.getProductNames();
  const count = await names.count();

  for (let i = 0; i < count; i++) {
    const text = await names.nth(i).textContent();
    expect(text).not.toBe('');
  }
});

test('TC06_DashboardProduct - Verify that eac Product price format', async ({ appAction }) => {
  const prices = appAction.dashboardproductAction.getProductPrices();
  const count = await prices.count();

  for (let i = 0; i < count; i++) {
    const price = await prices.nth(i).textContent();
    expect(price).toMatch(/^\$\d+\.\d{2}$/);
  }
});