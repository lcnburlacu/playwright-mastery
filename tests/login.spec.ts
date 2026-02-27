import { test, expect } from "../fixtures/base.fixtures";

test.describe("Login Tests", () => {
  test("Successful login", async ({ loginPage }) => {
    await loginPage.gotoLogin();
    await loginPage.doLoginValid();
    await loginPage.assert.verifyValidLogin();
  });

  test("Invalid login", async ({ loginPage }) => {
    await loginPage.gotoLogin();
    await loginPage.doLoginInvalid();
    await loginPage.assert.verifyInvalidLogin();
  });

  test("Log Out", async ({ loginPage }) => {
    await loginPage.gotoLogin();
    await loginPage.doLoginValid();
    await loginPage.assert.verifyValidLogin();
    await loginPage.logOutButton.click();
    await loginPage.assert.verifyLogout();
  });
});
