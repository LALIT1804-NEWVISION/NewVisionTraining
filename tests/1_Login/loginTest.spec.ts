import { test, expect } from "../../src/fixture/fixture.ts";
import BaseData  from "../../src/testdata/base.json";
import loginData from "../../src/testdata/login.json";


test.beforeEach(async ({ page }) => {
    await page.goto(BaseData.baseUrl);
});

test('TC_Login_01 - Valid user should login successfully', async ({ appAction }) => {
   await appAction.loginAction.login(loginData.validUser.username, loginData.validUser.password);
});

test('TC_Login_02 - Locked out user should not login', async ({ appAction }) => {
    await appAction.loginAction.login(loginData.lockedUser.username, loginData.lockedUser.password);
    const errormsg = await appAction.loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.lockedUser.errorMessage);
});

test('TC_Login_03 - problem user should not login', async ({ appAction }) => {
    await appAction.loginAction.login(loginData.invalidUser.username, loginData.invalidUser.password);
    //await appAction.AppAction.loginAction.login(loginData.invalidUser.username ,loginData.invalidUser.password);
    const errormsg = await appAction.loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.invalidUser.errorMessage);
});