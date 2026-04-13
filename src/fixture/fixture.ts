import { test as base } from '@playwright/test';
import { AppAction } from '../actions/AppAction';
import { Helper } from '../utils/helpers';

type Fixtures = {
    app: AppAction;
    helper: Helper;
};

export const test = base.extend<Fixtures>({
    app: async ({ page }, use) => {
        const appAction = new AppAction(page);
        await use(appAction);
    },

    helper: async ({ app }, use) => {
        const helper = new Helper(app);
        await use(helper);
    }
});

export { expect } from '@playwright/test';