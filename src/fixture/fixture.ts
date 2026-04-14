import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { DashboardProductPage } from '../pages/dasboardProductPage';
import { AddToCartPage } from '../pages/addToCartPage';
import { LoginAction } from '../actions/loginAction';
import { DashboardAction } from '../actions/dashboardAction';
import { DashboardProductAction } from '../actions/dasboardProductAction';
import { AddToCartAction } from '../actions/addToCartAction';
import BaseData  from "../../src/testdata/base.json";
import loginData from "../../src/testdata/login.json";
import DashboardData  from "../../src/testdata/dashboard.json";
import DashboardProductData from "../../src/testdata/dashboardproduct.json";
import AddToCartData from "../../src/testdata/addtocart.json";


type App = {
    loginAction: LoginAction;
    dashboardAction: DashboardAction;
    dashboardproductAction: DashboardProductAction;
    addtocartAction: AddToCartAction;
};

type baseUrlFixture = {
    GoToBaseUrl: void;
    appAction: App;
};

export const test = base.extend<baseUrlFixture>({
    GoToBaseUrl: [
        async ({ page }, use) => {
            await page.goto(BaseData.baseUrl);
            await use();
        },
        { auto: true },
    ],

    appAction: async ({ page }, use) => {
        const appAction: App = {
            loginAction: new LoginAction(page),
            dashboardAction: new DashboardAction(page),
            dashboardproductAction: new DashboardProductAction(page),
            addtocartAction: new AddToCartAction(page),
        };
        await use(appAction);
    },
});

export { expect } from '@playwright/test';