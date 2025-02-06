import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Successful login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.enterUsername("standard_user");
  await loginPage.enterPassword("secret_sauce");
  await loginPage.clickLogin();
});
