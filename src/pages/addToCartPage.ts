import { Page, Locator } from '@playwright/test';

export class AddToCartPage {
    readonly page: Page;

    readonly addToCartButtons: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButtons = page.getByRole('button', { name: /add to cart/i });
        this.cartBadge = page.locator('.shopping_cart_badge');
    }
}