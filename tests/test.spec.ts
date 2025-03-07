import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { FormPayPage } from "../pages/FormPayPage";
import {
  findValorCard,
  findValorName,
  llenarFormulario,
} from "../utils/helpers";

const productsToAdd = [
  { category: "Phones", productName: "Samsung galaxy s7" },
  { category: "Laptops", productName: "Sony vaio i5" },
  { category: "Monitors", productName: "ASUS Full HD" },
];
const compraFinalizada = "Thank you for your purchase!";
const { name, country, city, card, month, year } = llenarFormulario();

test.describe("Practica en la pagina demoblaze", () => {
  test("Realizar compra exitosa de productos", async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const form = new FormPayPage(page);
    await test.step("Dado que abro la página de inicio de Demoblaze", async () => {
      await page.goto('/');
    });
    for (const { category, productName } of productsToAdd) {
      await test.step(`Dado que agrego un producto de la categoría ${category}`, async () => {
        await products.goToCategory(category);
        await products.addProductToCart(productName);
      });
    }

    await test.step("verifico los items del carrito", async () => {
      await cart.goToCart();
      const productsCart = await cart.productsCart();
      const nombreEsperado = productsToAdd.map(
        (product) => product.productName
      );
      expect(new Set(productsCart)).toEqual(new Set(nombreEsperado));
    });
    await test.step("verifico el total del carrito", async () => {
      const price = await cart.priceProducts();
      const totalPagina = await page.locator("#totalp").textContent();
      expect(totalPagina).toEqual(price);
    });

    await test.step("lleno el formulario de la compra", async () => {
      await form.goToPlaceHolder();
      await form.fillFieldsForm(name, country, city, card, month, year);
      await form.goToPurchase();
    });

    await test.step("valido que la compra sea exitosa", async () => {
      const resultado = await form.obtainResult();
      expect(resultado).toEqual(compraFinalizada);

      const texto = await form.obtainResultBuy();
    
      const strCard = findValorCard(texto);
      const strName = findValorName(texto);

      expect(strCard).toContain(card);
      expect(strName).toContain(name);
    });
  });
});
