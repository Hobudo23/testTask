import { test, expect } from '@playwright/test';
import { FooterPage } from '../pages/FooterPage';
import { LoginPage } from '../pages/LoginPage';

test('Verify social media links open correctly in a new tab', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const footerPage = new FooterPage(page);

  await loginPage.navigate();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();

  await footerPage.openTwitterAndVerify();
  await footerPage.openFacebookAndVerify();
  await footerPage.openLinkedInAndVerify();

});
