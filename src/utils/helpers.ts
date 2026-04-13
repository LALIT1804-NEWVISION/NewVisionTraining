import { Page, expect } from "@playwright/test";
import { AppAction } from "../actions/AppAction";
import loginData from "../testdata/login.json";

export class helperAction {
    readonly AppAction: AppAction;
    constructor(page: Page) {
        this.AppAction = new AppAction(page);
    }

    async loginAsValidUser() {
        await this.AppAction.loginAction.login(loginData.validUser.username, loginData.validUser.password);
    }
    async loginAsLockedUser() {
        await this.AppAction.loginAction.login(loginData.lockedUser.username, loginData.lockedUser.password);
    }

    async loginAsInvalidUser() {
        await this.AppAction.loginAction.login(loginData.invalidUser.username, loginData.invalidUser.password);
    }
}
