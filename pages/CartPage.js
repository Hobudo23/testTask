import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.errorMessage = page.locator('.cart_error');
  }

  async verifyCartHasItems(count) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async verifyCartIsEmpty() {
    await expect(this.cartItems).toHaveCount(0);
  }

  async attemptCheckout() {
    await this.checkoutButton.click();
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Cart is empty');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}