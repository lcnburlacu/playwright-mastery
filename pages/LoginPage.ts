import {Page, Locator} from "@playwright/test"
import {BasePage} from "./BasePage"

export class LoginPage extends BasePage{

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator; 

    constructor(page: Page) {
        super(page)
        this.usernameInput = page.getByLabel("username")
        this.passwordInput = page.getByLabel("password")
        this.loginButton = page.getByRole("button", {name: "Login"})
        this.flashMessage = page.locator("#flash")
    }

    async goto(): Promise<void>{
        await this.navigate('https://the-internet.herokuapp.com/login')
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
  }

    async getFlashMessage(): Promise<string> {
        return (await this.flashMessage.textContent()) ?? '';
  }
}