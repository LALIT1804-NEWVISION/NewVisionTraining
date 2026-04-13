import { test, expect } from "../../src/fixture/fixture";
import BaseData from "../../src/testdata/base.json";


test.beforeEach(async ({ helper, page }) => {
    await page.goto(BaseData.baseUrl);
    await helper.loginAsValidUser();
});

test('TC01_AddToCart - Single product add', async ({ app }) => {
    await app.cart.addSingleProduct();
    await expect(app.cart.getCartBadge()).toHaveText('1');
});

test('TC02_AddToCart - Multiple products add', async ({ app }) => {
    await app.cart.addMultipleProducts();
    await expect(app.cart.getCartBadge()).toHaveText('2');
});

test('TC03_AddToCart - Cart badge increases', async ({ app }) => {
    await app.cart.addSingleProduct();
    await app.cart.addSingleProduct();
    await expect(app.cart.getCartBadge()).toHaveText('2');
});