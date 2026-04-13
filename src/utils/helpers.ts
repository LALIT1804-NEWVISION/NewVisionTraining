import { AppAction } from "../actions/AppAction";
import loginData from "../testdata/login.json";

export class Helper {
    readonly app: AppAction;

    constructor(app: AppAction) {
        this.app = app;
    }

    async loginAsValidUser() {
        await this.app.loginAction.login(loginData.validUser.username, loginData.validUser.password);
    }

    async loginAsLockedUser() {
        await this.app.loginAction.login(loginData.lockedUser.username, loginData.lockedUser.password);
    }

    async loginAsInvalidUser() {
        await this.app.loginAction.login(loginData.invalidUser.username, loginData.invalidUser.password);
    }
}