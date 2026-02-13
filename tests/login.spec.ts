import { test, expect } from '../fixtures/testFixtures';

test.describe('Login Tests', () => {


    test('Successful login', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    });

    test('Invalid login', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.login("invalid", "invalid");
        
        await expect(loginPage.flashMessage).toContainText('Your username is invalid!')
    })
});