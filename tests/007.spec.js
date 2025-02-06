import { test } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

test("Verify product sorting", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.enterUsername("standard_user");
  await loginPage.enterPassword("secret_sauce");
  await loginPage.clickLogin();

  for (const option of ["az", "za", "lohi", "hilo"]) {
    await inventoryPage.selectSorting(option);
    await inventoryPage.verifySorting(option);
  }
});
