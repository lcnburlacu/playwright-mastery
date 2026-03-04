import { test as base } from "@playwright/test";
import { LoginPage } from "../page-objects/login/login.page";
import { AddRemoveElementsPage } from "../page-objects/add-remove-elements/add-remove-elements.page";
import { TablePage } from "../page-objects/table/table.page";
import { LoginData } from "../page-objects/login/login.constants";
export { expect } from "@playwright/test";

import { UsersClient } from '../api-objects/users/users.client';
import { PostsClient } from '../api-objects/posts/posts.client';

// Define the type for the new fixtures
type MyFixtures = {
  //UI
  loginPage: LoginPage;
  addRemoveElementsPage: AddRemoveElementsPage;
  tablePage: TablePage;

  // API
  usersClient: UsersClient;
  postsClient: PostsClient;
};

// Extend the base test to include the new Page Objects and API clients
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

  usersClient: async ({ request }, use) => {
    const baseURL = process.env.API_BASE_URL; // optional env override, e.g. qe vs prod urls. 
    await use(new UsersClient(request, baseURL));
  },

  postsClient: async ({ request }, use) => {
    const baseURL = process.env.API_BASE_URL;
    await use(new PostsClient(request, baseURL));
  }
});
