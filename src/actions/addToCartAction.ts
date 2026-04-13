import { Page } from '@playwright/test';
import { AddToCartPage } from '../../src/pages/addToCartPage';

export class AddToCartAction {
    readonly addToCartPage: AddToCartPage;

    constructor(page: Page) {
        this.addToCartPage = new AddToCartPage(page);
    }

    async addProductByName(productName: string) {
        await this.addToCartPage.getAddToCartButton(productName).click();
    }

    async addMultipleProducts(products: string[]) {
        for (const product of products) {
            await this.addProductByName(product);
        }
    }

    async removeProductByName(productName: string) {
        await this.addToCartPage.getRemoveButton(productName).click();
    }

    getCartBadge() {
        return this.addToCartPage.cartBadge;
    }
}