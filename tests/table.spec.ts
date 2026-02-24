import { test, expect } from '../fixtures/testFixtures';

test.describe("Test Table & Canvas", () => {

    test("Test table row count", async({tablePage}) => {
        await tablePage.gotoChallengingDOM()
        await tablePage.assert.verify_table_row_count()
    })

    test("Test table header data", async({tablePage}) => {
        await tablePage.gotoChallengingDOM()
        await tablePage.assert.verify_table_headers()
    })

    test('Canvas number changes on first button click', async ({ tablePage }) => {
        await tablePage.gotoChallengingDOM();
        const firstCanvasData = await tablePage.getCanvasData();
        await tablePage.clickFirstButton();
        const secondCanvasData = await tablePage.getCanvasData();
        expect(firstCanvasData).not.toBe(secondCanvasData);
    });
})
