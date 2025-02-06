import { expect } from '@playwright/test';

export class CompletePage {
  constructor(page) {
    this.page = page;
    this.thankYouMessage = page.locator('.complete-header');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async verifyOrderSuccess() {
    await expect(this.thankYouMessage).toHaveText('Thank you for your order!');
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }
}