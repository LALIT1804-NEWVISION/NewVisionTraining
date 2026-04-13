import { test, expect } from "../../src/fixture/fixture.ts";
import loginData from "../../src/testdata/login.json";

test.beforeEach(async ({ helper, page }) => {
    await page.goto(loginData.baseUrl);
    await helper.loginAsValidUser();
});

test('TC_Dashboard_01 - Verify dashboard URL', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
});

test('TC_Dashboard_02 - Verify dashboard title', async ({ page }) => {
    await expect(page).toHaveTitle(loginData.PageTile);
});

test('TC_Dashboard_03 - Verify dashboard heading is visible', async ({ helper }) => {
    const heading = helper.AppAction.dashboard.getHeading();
    await expect(heading).toBeVisible();
});

test('TC_Dashboard_04 - Verify dashboard heading text', async ({ helper }) => {
    const heading = await helper.AppAction.dashboard.getHeadingText();
    expect(heading).toBe('Products');
});