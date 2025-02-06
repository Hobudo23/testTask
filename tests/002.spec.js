import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

  test('Login with valid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('invalid_password');
    await loginPage.clickLogin();
    await loginPage.verifyLoginError();
    
  });
