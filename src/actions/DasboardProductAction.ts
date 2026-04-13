import { Page } from '@playwright/test';
import { DashboardProductPage } from '../../src/pages/DasboardProductPage';

export class DashboardProductAction {
  readonly dashboardProductPage: DashboardProductPage;

  constructor(page: Page) {
    this.dashboardProductPage = new DashboardProductPage(page);
  }

  getProducts() {
    return this.dashboardProductPage.inventoryItems;
  }

  async getProductCount() {
    return await this.dashboardProductPage.inventoryItems.count();
  }

  getProductNames() {
    return this.dashboardProductPage.productNames;
  }

  getProductPrices() {
    return this.dashboardProductPage.productPrices;
  }
}