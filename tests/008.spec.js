import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { CompletePage } from '../pages/CompletePage';

test('Complete checkout process', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page);
  const completePage = new CompletePage(page);

  await loginPage.navigate();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();

  await inventoryPage.addFirstProductToCart();

  await inventoryPage.goToCart();
  await cartPage.verifyCartHasItems(1);
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');

  await overviewPage.verifyOrderDetails();
  await overviewPage.completeOrder();

  await completePage.verifyOrderSuccess();
  await completePage.goBackHome();

  await expect(inventoryPage.cartBadge).not.toBeVisible();

});