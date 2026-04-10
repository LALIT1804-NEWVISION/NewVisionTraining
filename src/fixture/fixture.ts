import { test as base } from '@playwright/test';
import { AppAction } from '../actions/AppAction';

type Fixtures = {
  app: AppAction;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    await use(new AppAction(page));
  },
});

export { expect } from '@playwright/test';