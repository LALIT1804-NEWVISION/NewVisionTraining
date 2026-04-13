import { Page, Locator } from '@playwright/test';

export class AddToCartPage {
    readonly page: Page;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    getProduct(productName: string): Locator {
        return this.page.locator('.inventory_item').filter({ hasText: productName });
    }

    getAddToCartButton(productName: string): Locator {
        return this.getProduct(productName).getByRole('button', { name: 'Add to cart' });
    }

    getRemoveButton(productName: string): Locator {
        return this.getProduct(productName).getByRole('button', { name: 'Remove' });
    }
}