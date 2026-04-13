import { Page } from '@playwright/test';
import { LoginAction } from './loginAction';
import { DashboardAction } from './dashboardAction';
import { DashboardProductAction } from './DasboardProductAction';

export class AppAction {
  readonly loginAction: LoginAction;
  readonly dashboard: DashboardAction;
  readonly dashboardProduct : DashboardProductAction;

  constructor(page: Page) {
    this.loginAction = new LoginAction(page);
    this.dashboard = new DashboardAction(page);
    this.dashboardProduct = new DashboardProductAction(page);
  }
}