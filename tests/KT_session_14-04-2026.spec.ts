import { test, expect } from '@playwright/test';

test.describe('Practice with XPATH AXES', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page).toHaveURL(/automationexercise/);
        await expect(page.locator('//*[@class="fa fa-home"]/ancestor::a')).toBeVisible();
    });

    test('E2E flow with assertions', async ({ page }) => {

        const homeLink = page.locator('//*[@class="fa fa-home"]/ancestor::a');
        await homeLink.click();
        await page.locator('//*[@class="fa fa-lock"]/parent::a').click();

        // Assertion: Login heading visible
        await expect(page.locator("//h2[text()='Login to your account']/self::h2")).toBeVisible();
        const emailField = page.locator("//input[@data-qa='login-email']");
        await emailField.fill("guptalalit4223@gmail.com");
        const passwordField = page.locator("//form//input[@data-qa='login-password']");
        await passwordField.fill("Vision1804@");
        const loginBtn = page.locator("//form//button[@data-qa='login-button']");
        await loginBtn.click();

        // Assertion: Logged in
        await expect(page.locator("//a[contains(text(),'Logged in as')]/ancestor-or-self::a")).toBeVisible();
        await page.locator("//a[@href='/']/following::a[@href='/products']").click();

        // Assertion: Products page
        await expect(page).toHaveURL(/products/);
        const productCard1 = page.locator("//div[@class='features_items']//p[text()='Blue Top']/ancestor::div[@class='product-image-wrapper']");
        await expect(productCard1).toBeVisible();
        await productCard1.hover();
        await productCard1.locator("a:has-text('Add to cart')").first().click();
        await page.locator("//button[@class='btn btn-success close-modal btn-block']/self::button[contains(text(),'Continue Shopping')]").click();
        const productCard2 = page.locator("//div[@class='features_items']//p[text()='Men Tshirt']/ancestor::div[@class='product-image-wrapper']");
        await expect(productCard2).toBeVisible();
        await productCard2.hover();
        await productCard2.locator("a:has-text('Add to cart')").first().click();
        await page.locator("//button[@class='btn btn-success close-modal btn-block']/self::button[contains(text(),'Continue Shopping')]").click();
        await page.locator("//input[@id='search_product']").fill("Sleeveless Dress");
        await page.locator("//button[@id='submit_search']").click();

        // Assertion: Search result
        await expect(page.locator('//div[@class="features_items"]//*[contains(text(),"Add to cart")]/ancestor::div[@class="productinfo text-center"]/*[contains(text(),"Sleeveless Dress")]')).toBeVisible();
        const productCard3 = page.locator("//p[text()='Sleeveless Dress']/ancestor::div[@class='product-image-wrapper']");
        await productCard3.hover();
        await productCard3.locator("a:has-text('Add to cart')").first().click();
        await page.locator("//button[contains(text(),'Continue Shopping')]").click();
        await page.locator('//a[normalize-space()="Cart"]').click();

        // Assertion: Cart page
        await expect(page).toHaveURL(/view_cart/);
        const rows = page.locator(".cart_info tbody tr");
        const count = await rows.count();
        console.log("Total products:", count);
        await expect(rows).toHaveCount(3);
        const quantities = page.locator(".cart_quantity");
        for (let i = 0; i < await quantities.count(); i++) {
            const q = (await quantities.nth(i).textContent())?.trim();
            console.log(`Product ${i + 1} quantity:`, q);
        }
    });

    test.afterEach(async () => {
        console.log("Test execution completed");
    });

});