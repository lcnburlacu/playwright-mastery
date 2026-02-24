import {Page, Locator} from "@playwright/test"
import {BasePage} from "../BasePage"

export class AddRemoveElements extends BasePage{

    readonly addElement: Locator;
    readonly deleteElement: Locator;
    readonly headingText: Locator;

    constructor(page: Page) {
        super(page)
        this.addElement = page.getByRole("button", {name: "Add Element"})
        this.deleteElement = page.getByRole("button", {name: "Delete"})
        this.headingText  = page.getByRole("heading", {name: "Add/Remove Elements"})
    }

    async gotoAddRemoveElements(): Promise<void>{
        await this.navigate('https://the-internet.herokuapp.com/add_remove_elements/')
    }

    async addNewElement(): Promise<void> {
        await this.addElement.click();
    }

    async addMultipleDeleteButtons(n: number): Promise<void> {
        for (let i=0; i<n; i++){
            await this.addNewElement();
        }
    }

    async deleteAllButtons(): Promise<void>{
        const buttonCount = await this.deleteElement.count()
        for(let i=0; i<buttonCount; i++){
            await this.deleteElement.first().click()
        }
    }
}
