import { test, expect } from "../../src/fixture/fixture";
import BaseData from "../../src/testdata/base.json";
import AddToCartData from "../../src/testdata/addtocart.json";

test.beforeEach(async ({ helper, page }) => {
    await page.goto(BaseData.baseUrl);
    await helper.loginAsValidUser();
});

test('TC01_AddToCart - Single product add', async ({ app }) => {
    await app.cart.addProductByName(AddToCartData.products.single);

    await expect(app.cart.getCartBadge())
        .toHaveText(AddToCartData.cart.singleCount.toString());
});

test('TC02_AddToCart - Multiple products add', async ({ app }) => {
    await app.cart.addMultipleProducts(AddToCartData.products.multiple);

    await expect(app.cart.getCartBadge())
        .toHaveText(AddToCartData.cart.multipleCount.toString());
});

test('TC03_AddToCart - Cart badge increases', async ({ app }) => {
    await app.cart.addProductByName(AddToCartData.products.single);

    await expect(app.cart.getCartBadge())
        .toHaveText(AddToCartData.cart.multipleCount.toString());
});