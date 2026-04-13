import { test, expect } from '@playwright/test';

test('Login and Add to Cart', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com');
    // id
    await page.locator('#user-name').fill('standard_user');
    // name
    await page.locator('[name="password"]').fill('secret_sauce');
    // class
    await page.locator('.login-button').click();
    //CSS 
    await page.locator('input#user-name').fill('standard_user');
    // XPath
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    // getByPlaceholder
    await page.getByPlaceholder('Username').fill('standard_user');
    // getByLabel
    await page.getByLabel('Password').fill('secret_sauce');
    // getByRole
    await page.getByRole('button', { name: 'Login' }).click();
    // getByText
    await page.getByText('Sauce Labs Backpack').click();
    // getByTestId
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

});
