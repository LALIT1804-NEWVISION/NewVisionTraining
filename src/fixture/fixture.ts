import { test as base } from '@playwright/test';
//import { AppAction } from '../actions/AppAction';
import { helperAction } from '../utils/helpers';
type Fixtures = {
  //app: AppAction;
  helper :helperAction;

};

export const test = base.extend<Fixtures>({
  helper: async ({ page }, use) => {
    const allActions = new helperAction(page)
    await use(allActions);
  },
});

export { expect } from '@playwright/test';