import { Page } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';

export class DashboardAction {
  readonly dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.dashboardPage = new DashboardPage(page);
  }
   getHeading() {
    return this.dashboardPage.title;
  }
  async getHeadingText() {
    return await this.dashboardPage.title.textContent();
  }

}