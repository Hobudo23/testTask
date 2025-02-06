import { expect } from "@playwright/test";

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.burgerMenuButton = page.locator("#react-burger-menu-btn");
    this.menuItems = page.locator(".bm-item-list a");
    this.logoutButton = page.locator("#logout_sidebar_link");
    this.addToCartButton = page.locator(".inventory_item button");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartButton = page.locator(".shopping_cart_link");
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.productNames = page.locator(".inventory_item_name");
    this.productPrices = page.locator(".inventory_item_price");
  }

  async selectSorting(option) {
    await this.sortDropdown.selectOption(option);
  }

  async verifySorting(option) {
    const isPriceSort = option.includes("lohi") || option.includes("hilo");
    const values = await (isPriceSort
      ? this.productPrices
      : this.productNames
    ).allInnerTexts();
    const sortedValues = [...values].sort(
      isPriceSort
        ? (a, b) =>
            parseFloat(a.replace("$", "")) - parseFloat(b.replace("$", ""))
        : undefined
    );

    if (option.includes("za") || option.includes("hilo"))
      sortedValues.reverse();
    expect(values).toEqual(sortedValues);
  }

  async addFirstProductToCart() {
    await this.addToCartButton.first().click();
    await expect(this.cartBadge).toHaveText("1");
  }

  async openBurgerMenu() {
    await this.burgerMenuButton.click();
    await expect(this.menuItems).toHaveCount(4);
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.page).toHaveURL("https://www.saucedemo.com/");
  }

  async goToCart() {
    await this.cartButton.click();
  }
}
