import { Page } from '@playwright/test';
import { LoginAction } from './loginAction';
import { DashboardAction } from './dashboardAction';

export class AppAction {
  readonly loginAction: LoginAction;
  readonly dashboard: DashboardAction;

  constructor(page: Page) {
    this.loginAction = new LoginAction(page);
    this.dashboard = new DashboardAction(page);
  }
}