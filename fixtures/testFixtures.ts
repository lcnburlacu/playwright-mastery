import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Define the types for your fixtures
type MyFixtures = {
  loginPage: LoginPage;
};

// Extend the base test to include your Page Object
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
