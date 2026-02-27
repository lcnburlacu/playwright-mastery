import { expect } from "@playwright/test";
import type { LoginPage } from "./login.page";

export class LoginAssertions {
  constructor(private loginPage: LoginPage) {}

  async verifyValidLogin() {
    await expect(this.loginPage.flashMessage).toContainText(this.loginPage.data.LOGIN_SUCCESS_MESSAGE);
    await expect(this.loginPage.logOutButton).toBeVisible();
    await expect(this.loginPage.logOutButton).toHaveText(this.loginPage.data.LOGOUT_BUTTON_TEXT);
    await expect(this.loginPage.logOutButton).toHaveAttribute("href", this.loginPage.data.LOGOUT_BUTTON_HREF);
  }

  async verifyInvalidLogin() {
    await expect(this.loginPage.flashMessage).toContainText(this.loginPage.data.LOGIN_FAILED_MESSAGE);
    await expect(this.loginPage.loginButton).toBeVisible();
    await expect(this.loginPage.usernameInput).toBeVisible();
    await expect(this.loginPage.passwordInput).toBeVisible();
  }

  async verifyLogout() {
    await expect(this.loginPage.flashMessage).toContainText(this.loginPage.data.LOGOUT_SUCCESS_MESSAGE);
    await expect(this.loginPage.loginButton).toBeVisible();
    await expect(this.loginPage.usernameInput).toBeVisible();
    await expect(this.loginPage.passwordInput).toBeVisible();
  }
}
