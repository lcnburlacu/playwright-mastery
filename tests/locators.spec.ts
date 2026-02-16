import { test, expect } from '../fixtures/testFixtures';

test.describe("Basic Locators Tests - Add Remove Elements", () => {

    test("Add/Remove Elements page heading", async({commonLocatorsPage, page}) =>{
        await commonLocatorsPage.gotoAddRemoveElements()
        await expect(page.getByRole("heading", {name: "Add/Remove Elements"})).toBeVisible()
    }) 

    test("Add Element Button", async({commonLocatorsPage}) => {
        await commonLocatorsPage.gotoAddRemoveElements()
        await expect(commonLocatorsPage.addElement).toBeVisible()
        await expect(commonLocatorsPage.deleteElement).not.toBeVisible()
        await commonLocatorsPage.addNewElement()
        await expect(commonLocatorsPage.deleteElement).toBeVisible()
    })

    test("Test Add Multiple Delete Buttons", async({commonLocatorsPage}) => {
        let n: number = 10
        await commonLocatorsPage.gotoAddRemoveElements()
        await expect(commonLocatorsPage.addElement).toBeVisible()
        await commonLocatorsPage.addMultipleDeleteButtons(n)
        await expect(commonLocatorsPage.deleteElement).toHaveCount(n)
    })

    test("Test Delete All Buttons", async({commonLocatorsPage})=>{
        let n: number = 10

        await test.step("SETUP: Creating Delete Buttons", async() => {
            await commonLocatorsPage.gotoAddRemoveElements()
            await commonLocatorsPage.addMultipleDeleteButtons(n)
            await expect(commonLocatorsPage.deleteElement).toHaveCount(n)
        })

        await test.step("Action: Delete All Buttons", async() => {
            await commonLocatorsPage.deleteAllButtons()
        })

        await test.step("Verify: Delete Buttons are not displayed", async() =>{
            await expect(commonLocatorsPage.deleteElement).not.toBeVisible()
        })
    })
})
