import { Page } from '@playwright/test';
import { AddToCartPage } from '../../src/pages/addToCartPage';

export class AddToCartAction {
    readonly addToCartPage: AddToCartPage;

    constructor(page: Page) {
        this.addToCartPage = new AddToCartPage(page);
    }

    async addProductByName(productName: string) {
        await this.addToCartPage.page
            .locator(`.inventory_item:has-text("${productName}")`)
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }
    
    async addMultipleProducts(products: string[]) {
    for (const product of products) {
        await this.addProductByName(product);
    }
}

getCartBadge() {
    return this.addToCartPage.AddToCartBadge;
}
}








