import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cart = page.getByRole("link", { name: "Cart", exact: true });
  }

  async goToCart() {
    await this.cart.click();
    await this.page.waitForSelector("tbody tr");
  }

  async productsCart() {
    return await this.page.$$eval("tbody tr td:nth-child(2)", (elements) =>
      elements.map((element) => element.textContent)
    );
  }

  async priceProducts(): Promise<string> {
    const price = await this.page.$$eval(
      "tbody tr td:nth-child(3)",
      (elements) => elements.map((element) => Number(element.textContent))
    );
    return price
      .reduce((acumulado, precio) => acumulado + precio, 0)
      .toString();
  }
}
