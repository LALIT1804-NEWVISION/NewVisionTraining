import { Page, Locator } from '@playwright/test';

export class AddToCartPage {
    readonly page: Page;

    readonly addToCartButtons: Locator;
    readonly AddToCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButtons = page.locator('//button[text()="Add to cart"]');
        //this.AddToCartBadge = page.locator('//span[@class="shopping_cart_badge"]');
        this.AddToCartBadge = page.locator('.shopping_cart_badge');






























































        

    }
}