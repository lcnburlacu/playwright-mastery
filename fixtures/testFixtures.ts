import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/login/login.page';
import { AddRemoveElements } from '../page-objects/add_remove_elements/add_remove_elements.page';
import { TablePage } from '../page-objects/table/table.page'; 
export { expect } from '@playwright/test';

// Define the type for the new fixtures
type MyFixtures = {
  loginPage: LoginPage;
  addRemoveElements: AddRemoveElements;
  tablePage: TablePage;
};

// Extend the base test to include the new Page Objects
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
    },

    addRemoveElements: async ({page}, use) => {
    const addRemoveElements = new AddRemoveElements(page);
    await use(addRemoveElements);
    },

    tablePage: async ({page}, use) => {
    await use(new TablePage(page));
    }  
});
