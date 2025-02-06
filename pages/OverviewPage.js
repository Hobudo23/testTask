import { expect } from '@playwright/test';

export class OverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator('#finish');
    this.totalPrice = page.locator('.summary_total_label');
  }

  async verifyOrderDetails() {
    await expect(this.totalPrice).toBeVisible();
  }

  async completeOrder() {
    await this.finishButton.click();
  }
}