import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("Burger menu and Logout functionality", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.enterUsername("standard_user");
  await loginPage.enterPassword("secret_sauce");
  await loginPage.clickLogin();

  await inventoryPage.openBurgerMenu();
  await inventoryPage.logout();
});
