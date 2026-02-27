import { test, expect } from "../fixtures/base.fixtures";

test.describe("Test Add Remove Elements", () => {
  test("Add/Remove Elements page heading", async ({ addRemoveElementsPage, page }) => {
    await addRemoveElementsPage.gotoAddRemoveElements();
    await expect(page.getByRole("heading", { name: "Add/Remove Elements" })).toBeVisible();
  });

  test("Add Element Button", async ({ addRemoveElementsPage }) => {
    await addRemoveElementsPage.gotoAddRemoveElements();
    await expect(addRemoveElementsPage.addElement).toBeVisible();
    await expect(addRemoveElementsPage.deleteElement).not.toBeVisible();
    await addRemoveElementsPage.addNewElement();
    await expect(addRemoveElementsPage.deleteElement).toBeVisible();
  });

  test("Test Add Multiple Delete Buttons", async ({ addRemoveElementsPage }) => {
    let n: number = 10;
    await addRemoveElementsPage.gotoAddRemoveElements();
    await expect(addRemoveElementsPage.addElement).toBeVisible();
    await addRemoveElementsPage.addMultipleDeleteButtons(n);
    await expect(addRemoveElementsPage.deleteElement).toHaveCount(n);
  });

  test("Test Delete All Buttons", async ({ addRemoveElementsPage }) => {
    let n: number = 10;

    await test.step("SETUP: Creating Delete Buttons", async () => {
      await addRemoveElementsPage.gotoAddRemoveElements();
      await addRemoveElementsPage.addMultipleDeleteButtons(n);
      await expect(addRemoveElementsPage.deleteElement).toHaveCount(n);
    });

    await test.step("Action: Delete All Buttons", async () => {
      await addRemoveElementsPage.deleteAllButtons();
    });

    await test.step("Verify: Delete Buttons are not displayed", async () => {
      await expect(addRemoveElementsPage.deleteElement).toHaveCount(0);
    });
  });
});
