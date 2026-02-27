import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base.page";
import { LoginData } from "./login.constants";
import { LoginAssertions } from "./login.assertions";

export class LoginPage extends BasePage {
  readonly data = LoginData;
  readonly assert: LoginAssertions;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logOutButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.assert = new LoginAssertions(this);
    this.usernameInput = page.getByLabel("username");
    this.passwordInput = page.getByLabel("password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.logOutButton = page.getByRole("link", { name: "Logout" });
    this.flashMessage = page.locator("#flash");
  }

  async gotoLogin(): Promise<void> {
    await this.navigate(this.data.PAGE_URL);
  }

  async doLoginValid(): Promise<void> {
    await this.usernameInput.fill(this.data.VALID_USERNAME);
    await this.passwordInput.fill(this.data.VALID_PASSWORD);
    await this.loginButton.click();
  }

  async doLoginInvalid(): Promise<void> {
    await this.usernameInput.fill(this.data.INVALID_USERNAME);
    await this.passwordInput.fill(this.data.INVALID_PASSWORD);
    await this.loginButton.click();
  }

  async getFlashMessage(): Promise<string> {
    return (await this.flashMessage.textContent()) ?? "";
  }
}
