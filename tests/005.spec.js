import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Cart persists after logout and relogin', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.openBurgerMenu();
  await inventoryPage.logout();
  await loginPage.verifyFieldsAreEmpty();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
  await inventoryPage.goToCart();
  await cartPage.verifyCartHasItems(1);

});