import { expect, Locator } from "@playwright/test";
import type { TablePage } from "./table.page";

export class TableAssertions {
  // gets table page instance through constructor
  constructor(private tablePage: TablePage) {}

  async verifyTableHeaders() {
    await expect(this.tablePage.tableHeaders).toHaveText(this.tablePage.data.TABLE_HEADERS);
  }

  async verifyPageHeader() {
    await expect(this.tablePage.pageHeading).toHaveText(this.tablePage.data.PAGE_HEADING);
  }

  async verifyTableRowCount() {
    let actualRowsNumber = await this.tablePage.tableRows.count();
    expect(actualRowsNumber).toBe(this.tablePage.data.ROW_COUNT);
  }
}
