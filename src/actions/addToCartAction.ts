import { Page } from '@playwright/test';
import { AddToCartPage } from '../../src/pages/addToCartPage';

export class AddToCartAction {
    readonly cartPage: AddToCartPage;

    constructor(page: Page) {
        this.cartPage = new AddToCartPage(page);
    }

    async addSingleProduct() {
        await this.cartPage.addToCartButtons.first().click();
    }

    async addMultipleProducts() {
        await this.cartPage.addToCartButtons.nth(0).click();
        await this.cartPage.addToCartButtons.nth(1).click();
    }
    
    getAddToCartBadge() {
        return this.cartPage.cartBadge;
    }
}