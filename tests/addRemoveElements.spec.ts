import { test, expect } from '../fixtures/testFixtures';

test.describe("Test Add Remove Elements", () => {

    test("Add/Remove Elements page heading", async({addRemoveElements, page}) =>{
        await addRemoveElements.gotoAddRemoveElements()
        await expect(page.getByRole("heading", {name: "Add/Remove Elements"})).toBeVisible()
    }) 

    test("Add Element Button", async({addRemoveElements}) => {
        await addRemoveElements.gotoAddRemoveElements()
        await expect(addRemoveElements.addElement).toBeVisible()
        await expect(addRemoveElements.deleteElement).not.toBeVisible()
        await addRemoveElements.addNewElement()
        await expect(addRemoveElements.deleteElement).toBeVisible()
    })

    test("Test Add Multiple Delete Buttons", async({addRemoveElements}) => {
        let n: number = 10
        await addRemoveElements.gotoAddRemoveElements()
        await expect(addRemoveElements.addElement).toBeVisible()
        await addRemoveElements.addMultipleDeleteButtons(n)
        await expect(addRemoveElements.deleteElement).toHaveCount(n)
    })

    test("Test Delete All Buttons", async({addRemoveElements})=>{
        let n: number = 10

        await test.step("SETUP: Creating Delete Buttons", async() => {
            await addRemoveElements.gotoAddRemoveElements()
            await addRemoveElements.addMultipleDeleteButtons(n)
            await expect(addRemoveElements.deleteElement).toHaveCount(n)
        })

        await test.step("Action: Delete All Buttons", async() => {
            await addRemoveElements.deleteAllButtons()
        })

        await test.step("Verify: Delete Buttons are not displayed", async() =>{
            await expect(addRemoveElements.deleteElement).not.toBeVisible()
        })
    })



})
