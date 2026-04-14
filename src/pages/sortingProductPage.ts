import { Page, Locator } from '@playwright/test';

export class SortingPage {
  readonly page: Page;

  readonly sortDropdown: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sortDropdown = page.getByRole('combobox');

    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
  }
}