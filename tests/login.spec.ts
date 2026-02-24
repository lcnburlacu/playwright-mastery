import { test, expect } from '../fixtures/testFixtures';

test.describe('Login Tests', () => {

    test('Successful login', async ({ loginPage }) => {
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