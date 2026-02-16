import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CommonLocatorsPage } from '../pages/CommonLocatorsPage';

// Define the types for your fixtures
type MyFixtures = {
  loginPage: LoginPage;
  commonLocatorsPage: CommonLocatorsPage;
};

// Extend the base test to include your Page Object
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

    commonLocatorsPage: async ({page}, use) => {
    const commonLocatorsPage = new CommonLocatorsPage(page);
    await use(commonLocatorsPage);
    }
});



export { expect } from '@playwright/test';
