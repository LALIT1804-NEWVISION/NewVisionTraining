import { test, expect } from "../../src/fixture/fixture.ts";
import loginData from "../../src/testdata/login.json";


test.beforeEach(async ({ page }) => {
    await page.goto(loginData.baseUrl);
});

test('TC_Login_01 - Valid user should login successfully', async ({ helper }) => {
    await helper.loginAsValidUser();
});

test('TC_Login_02 - Locked out user should not login', async ({ app, helper }) => {
    await helper.loginAsLockedUser();
    const errormsg = await app.loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.lockedUser.errorMessage);
});

test('TC_Login_03 - problem user should not login', async ({ app, helper }) => {
    await helper.loginAsInvalidUser();
    //await helper.AppAction.loginAction.login(loginData.invalidUser.username ,loginData.invalidUser.password);
    const errormsg = await app.loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.invalidUser.errorMessage);
});