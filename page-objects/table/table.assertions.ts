import { expect, Locator} from "@playwright/test";
import type { TablePage } from "./table.page";

export class TableAssertions {
    // gets table page instance through constructor
    constructor(private tablePage: TablePage) {}

    async verify_table_headers() {
        await expect(this.tablePage.tableHeaders).toHaveText(this.tablePage.data.TABLE_HEADERS);
    }

    async verify_page_header(){
        await expect(this.tablePage.pageHeading).toHaveText(this.tablePage.data.PAGE_HEADING)
    }

    async verify_table_row_count(){
        let actualRowsNumber = await this.tablePage.tableRows.count()
        await expect (actualRowsNumber).toBe(this.tablePage.data.ROW_COUNT)
    }
}