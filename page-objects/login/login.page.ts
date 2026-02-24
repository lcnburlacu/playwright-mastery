import {Page, Locator} from "@playwright/test"
import {BasePage} from "../BasePage"
import {LoginData} from "./login.constants"

export class LoginPage extends BasePage{

    readonly data = LoginData; // points directly to the data class, not creating a new LoginData object. 
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

    async gotoLogin(): Promise<void>{
        await this.navigate('https://the-internet.herokuapp.com/login')
    }

    async login_valid(): Promise<void> {
        await this.usernameInput.fill(this.data.VALID_USERNAME);
        await this.passwordInput.fill(this.data.VALID_PASSWORD);
        await this.loginButton.click();
    }

    async login_invalid(): Promise<void> {
        await this.usernameInput.fill(this.data.INVALID_USERNAME);
        await this.passwordInput.fill(this.data.INVALID_PASSWORD);
        await this.loginButton.click();
    }
    
    async getFlashMessage(): Promise<string> {
        return (await this.flashMessage.textContent()) ?? '';
  }
}
