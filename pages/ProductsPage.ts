import{expect,type Locator, type Page} from '@playwright/test'

export class ProductsPage{
    
    readonly page:Page;
    readonly addCart:Locator;
    readonly home:Locator;

    constructor(page:Page){
        this.page=page;
        this.addCart=page.getByRole("link", { name: "Add to cart" });
        this.home=page.getByRole("link", { name: "Home (current)" });
    }

    async goToCategory(elementCatalog){
        const category=this.page.getByRole("link", { name: `${elementCatalog}` });
        await this.home.click();
        await category.click();
    }

    async addProductToCart(product: string){ 
        const dialogPromise = this.page.waitForEvent("dialog");
        const productName=this.page.getByRole("link", { name: `${product}` });
        await productName.click();
        await this.addCart.click();
        await this.acceptPopUp(dialogPromise);
    }

    private async acceptPopUp( dialogPromise: Promise<any>){
        const dialog = await dialogPromise;
        await dialog.accept();
    }
}