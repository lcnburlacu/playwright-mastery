import { test as base } from "@playwright/test";
import { LoginPage } from "../page-objects/login/login.page";
import { AddRemoveElementsPage } from "../page-objects/add-remove-elements/add-remove-elements.page";
import { TablePage } from "../page-objects/table/table.page";
import { LoginData } from "../page-objects/login/login.constants";
export { expect } from "@playwright/test";

// Define the type for the new fixtures
type MyFixtures = {
  loginPage: LoginPage;
  addRemoveElementsPage: AddRemoveElementsPage;
  tablePage: TablePage;
};

// Extend the base test to include the new Page Objects
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    LoginData.assertConfiguration(); // verify env variables are all set.
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  addRemoveElementsPage: async ({ page }, use) => {
    const addRemoveElements = new AddRemoveElementsPage(page);
    await use(addRemoveElements);
  },

  tablePage: async ({ page }, use) => {
    await use(new TablePage(page));
  },
});
