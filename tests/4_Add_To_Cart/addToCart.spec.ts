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
test('TC03_AddToCart - Verify cart badge count increases accordingly', async ({ app }) => {
    
    const products = AddToCartData.products.multiple;

    await app.cart.addProductByName(products[0]);
    await expect(app.cart.getCartBadge()).toHaveText('1');

    await app.cart.addProductByName(products[1]);
    await expect(app.cart.getCartBadge()).toHaveText('2');
});

test('TC04_AddToCart - Cart badge increases dynamically', async ({ app }) => {
    const products = AddToCartData.products.multiple;

    for (let i = 0; i < products.length; i++) {
        await app.cart.addProductByName(products[i]);
        await expect(app.cart.getCartBadge()).toHaveText((i + 1).toString());
    }
});

test('TC05_RemoveFromCart - Verify product removed from cart', async ({ app }) => {
    
    const product = AddToCartData.products.single;
    await app.cart.addProductByName(product);
    await expect(app.cart.getCartBadge()).toHaveText('1');
    await app.cart.removeProductByName(product);
    await expect(app.cart.getCartBadge()).toHaveCount(0);
});

test('TC06_RemoveFromCart - Verify cart badge decreases', async ({ app }) => {
    
    const products = AddToCartData.products.multiple;
    await app.cart.addMultipleProducts(products);
    await expect(app.cart.getCartBadge()).toHaveText('2');
    await app.cart.removeProductByName(products[0]);
    await expect(app.cart.getCartBadge()).toHaveText('1');
});