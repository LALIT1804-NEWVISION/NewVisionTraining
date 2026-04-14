import { test, expect } from "../../src/fixture/fixture.ts";
import BaseData from "../../src/testdata/base.json";
import DashboardData  from "../../src/testdata/dashboard.json";
import loginData from "../../src/testdata/login.json";


test.beforeEach(async ({ page,appAction }) => {
    await page.goto(BaseData.baseUrl);
    await appAction.loginAction.login(loginData.validUser.username, loginData.validUser.password);
});

test('TC_Dashboard_01 - Verify dashboard URL', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
});

test('TC_Dashboard_02 - Verify dashboard title', async ({ page }) => {
    await expect(page).toHaveTitle(DashboardData.PageTile);
});

test('TC_Dashboard_03 - Verify dashboard heading is visible', async ({ appAction }) => {
    const heading = appAction.dashboardAction.getHeading();
    await expect(heading).toBeVisible();
});

test('TC_Dashboard_04 - Verify dashboard heading text', async ({ appAction }) => {
    const heading = await appAction.dashboardAction.getHeadingText();
    expect(heading).toBe('Products');
});