import {Page, Locator, expect} from "@playwright/test"
import {BasePage} from "../BasePage"
import { TableAssertions } from "./table.assertions";
import { TableData } from "./table.constants";

export class TablePage extends BasePage{
    readonly assert: TableAssertions; 
    readonly data = TableData;


    readonly pageHeading: Locator;
    readonly table: Locator;
    readonly tableRows: Locator;
    readonly canvas: Locator;
    readonly topButtons: Locator;
    readonly firstButton: Locator;
    readonly tableHeaders: Locator;

    constructor(page: Page) {
        super(page)
        this.assert = new TableAssertions(this);
        // Locators
        this.pageHeading = page.getByRole('heading')
        this.table = page.getByRole('table');
        this.tableRows = this.table.getByRole('row');
        this.topButtons = page.locator('.example a.button');
        this.firstButton = this.topButtons.nth(0);
        this.tableHeaders = this.table.getByRole('columnheader');
        this.canvas = page.locator('#canvas');
    }

    async gotoChallengingDOM(): Promise<void>{
        await this.navigate(this.data.PAGE_URL) 
        await this.assert.verify_page_header()
    }

    async clickFirstButton(): Promise<void> {
        await this.firstButton.click();
  }

    async getTableRows(): Promise<void> {
        let table = await this.tableRows.all()
        console.log(table)
    }

    async getCanvasData(): Promise<string> {
        return await this.canvas.evaluate((canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return '';
        // Get entire canvas pixel data
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        // Convert to string for comparison
        return Array.from(data).join(',');
    })};
}
