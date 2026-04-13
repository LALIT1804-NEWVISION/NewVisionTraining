import { Page } from '@playwright/test';
import { LoginAction } from './loginAction';
import { DashboardAction } from './dashboardAction';
import { DashboardProductAction } from './dasboardProductAction';
import { AddToCartAction } from './addToCartAction';

export class AppAction {
  readonly loginAction: LoginAction;
  readonly dashboard: DashboardAction;
  readonly dashboardProduct : DashboardProductAction;
  readonly cart: AddToCartAction; 

  constructor(page: Page) {
    this.loginAction = new LoginAction(page);
    this.dashboard = new DashboardAction(page);
    this.dashboardProduct = new DashboardProductAction(page);
     this.cart = new AddToCartAction(page);
  }
}