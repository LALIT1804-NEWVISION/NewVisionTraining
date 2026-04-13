import { test, expect } from "../../src/fixture/fixture.ts";
import BaseData from "../../src/testdata/base.json";
import DashboardData  from "../../src/testdata/dashboard.json";


test.beforeEach(async ({ helper, page }) => {
    await page.goto(BaseData.baseUrl);
    await helper.loginAsValidUser();
});

test('TC_Dashboard_01 - Verify dashboard URL', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
});

test('TC_Dashboard_02 - Verify dashboard title', async ({ page }) => {
    await expect(page).toHaveTitle(DashboardData.PageTile);
});

test('TC_Dashboard_03 - Verify dashboard heading is visible', async ({ app }) => {
    const heading = app.dashboard.getHeading();
    await expect(heading).toBeVisible();
});

test('TC_Dashboard_04 - Verify dashboard heading text', async ({ app }) => {
    const heading = await app.dashboard.getHeadingText();
    expect(heading).toBe('Products');
});