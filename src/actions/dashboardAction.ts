import { Page } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';

export class DashboardAction {
  readonly dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.dashboardPage = new DashboardPage(page);
  }

  async getTitle() {
    return await this.dashboardPage.title.textContent();
  }
}