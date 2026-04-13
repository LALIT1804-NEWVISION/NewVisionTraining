import { Page, Locator } from '@playwright/test';

export class DashboardProductPage {
  readonly page: Page;

  readonly inventoryItems: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inventoryItems = page.locator('.inventory_item');
    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
  }
}
