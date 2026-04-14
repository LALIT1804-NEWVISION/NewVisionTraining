import { test, expect } from "../../src/fixture/fixture";
import BaseData from "../../src/testdata/base.json";
import AddToCartData from "../../src/testdata/addtocart.json";
import loginData from "../../src/testdata/login.json";

test.beforeEach(async ({ page,appAction }) => {
    await page.goto(BaseData.baseUrl);
    await appAction.loginAction.login(loginData.validUser.username, loginData.validUser.password);
});

test('TC01_AddToCart - Single product add', async ({ appAction }) => {
    await appAction.addtocartAction.addProductByName(AddToCartData.products.single);

    await expect(appAction.addtocartAction.getCartBadge())
        .toHaveText(AddToCartData.cart.singleCount.toString());
});

test('TC02_AddToCart - Multiple products add', async ({ appAction }) => {
    await appAction.addtocartAction.addMultipleProducts(AddToCartData.products.multiple);

    await expect(appAction.addtocartAction.getCartBadge())
        .toHaveText(AddToCartData.cart.multipleCount.toString());
});
test('TC03_AddToCart - Verify cart badge count increases accordingly', async ({ appAction }) => {
    
    const products = AddToCartData.products.multiple;

    await appAction.addtocartAction.addProductByName(products[0]);
    await expect(appAction.addtocartAction.getCartBadge()).toHaveText('1');

    await appAction.addtocartAction.addProductByName(products[1]);
    await expect(appAction.addtocartAction.getCartBadge()).toHaveText('2');
});

test('TC04_AddToCart - Cart badge increases dynamically', async ({ appAction }) => {
    const products = AddToCartData.products.multiple;

    for (let i = 0; i < products.length; i++) {
        await appAction.addtocartAction.addProductByName(products[i]);
        await expect(appAction.addtocartAction.getCartBadge()).toHaveText((i + 1).toString());
    }
});

test('TC05_RemoveFromCart - Verify product removed from cart', async ({ appAction }) => {
    
    const product = AddToCartData.products.single;
    await appAction.addtocartAction.addProductByName(product);
    await expect(appAction.addtocartAction.getCartBadge()).toHaveText('1');
    await appAction.addtocartAction.removeProductByName(product);
    await expect(appAction.addtocartAction.getCartBadge()).toHaveCount(0);
});

test('TC06_RemoveFromCart - Verify cart badge decreases', async ({ appAction }) => {
    
    const products = AddToCartData.products.multiple;
    await appAction.addtocartAction.addMultipleProducts(products);
    await expect(appAction.addtocartAction.getCartBadge()).toHaveText('2');
    await appAction.addtocartAction.removeProductByName(products[0]);
    await expect(appAction.addtocartAction.getCartBadge()).toHaveText('1');
});