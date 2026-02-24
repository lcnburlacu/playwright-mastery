import { test, expect } from '../fixtures/testFixtures';

test.describe('Login Tests', () => {

    test('Successful login', async ({ loginPage }) => {

        console.log('Prototype Chain:', Object.getPrototypeOf(loginPage));

    // 2. This checks every method Playwright sees on your loginPage
    const methods = [];
    let obj = loginPage;
    while (obj) {
        methods.push(...Object.getOwnPropertyNames(obj));
        obj = Object.getPrototypeOf(obj);
    }
    console.log('All available methods:', methods);


    
        await loginPage.goto();
        await loginPage.login_valid();
        await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    });

    test('Invalid login', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.login_invalid();
        await expect(loginPage.flashMessage).toContainText('Your username is invalid!')
    })
});