import { expect } from '@playwright/test';

export class FooterPage {
  constructor(page) {
    this.page = page;
    this.twitterIcon = page.locator('[data-test="social-twitter"]');
    this.facebookIcon = page.locator('[data-test="social-facebook"]');
    this.linkedinIcon = page.locator('[data-test="social-linkedin"]');
  }

  async clickSocialLink(socialIcon, expectedURL) {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      socialIcon.click()
    ]);

    await newPage.waitForLoadState();
    expect(newPage.url()).toContain(expectedURL);

    await newPage.close();
  }

  async openTwitterAndVerify() {
    await this.clickSocialLink(this.twitterIcon, 'x.com');
  }

  async openFacebookAndVerify() {
    await this.clickSocialLink(this.facebookIcon, 'facebook.com');
  }

  async openLinkedInAndVerify() {
    await this.clickSocialLink(this.linkedinIcon, 'linkedin.com');
  }
}