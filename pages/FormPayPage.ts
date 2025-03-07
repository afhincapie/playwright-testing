import { expect, type Locator, type Page } from "@playwright/test";

export class FormPayPage {
  readonly page: Page;
    readonly buttonOrder: Locator;
    readonly name: Locator;
    readonly country: Locator;
    readonly city: Locator;
    readonly card: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly buttonPurchase: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonOrder= page.getByRole("button", { name: "Place Order" });
    this.name= page.locator("#name");
    this.country= page.locator("#country");
    this.city= page.locator("#city");
    this.card= page.locator("#card");
    this.month= page.locator("#month");
    this.year= page.locator("#year");
    this.buttonPurchase= page.getByRole("button", { name: "Purchase" });
  }
  async goToPlaceHolder(){
    await this.buttonOrder.click();
  }
  async fillFieldsForm(name: string, country: string, city: string, card: string, month: string, year: string) {
    
        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.card.fill(card);
        await this.month.fill(month);
        await this.year.fill(year);
  }
  async goToPurchase(){
    await this.buttonPurchase.click();
  }

  async obtainResult():Promise<string>{
    return await this.page
    .getByRole("heading", { name: "Thank you for your purchase!" })
    .textContent() ?? '';
  }

  async obtainResultBuy(){
    const elemento = this.page.locator("p.lead.text-muted");
        return await elemento.textContent();
  }

}
