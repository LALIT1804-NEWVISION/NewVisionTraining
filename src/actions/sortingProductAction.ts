import { Page } from '@playwright/test';
import { SortingPage } from '../pages/sortingProductPage';

export class SortingAction {
  readonly sortingPage: SortingPage;

  constructor(page: Page) {
    this.sortingPage = new SortingPage(page);
  }

  async sortBy(option: string) {
    await this.sortingPage.sortDropdown.selectOption(option);
  }

  async getProductNames() {
    return await this.sortingPage.productNames.allTextContents();
  }

  async getProductPrices() {
    const prices = await this.sortingPage.productPrices.allTextContents();
    return prices.map(p => Number(p.replace('$', '')));
  }
}