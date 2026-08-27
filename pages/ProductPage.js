const { BasePage } = require("../utils/BasePage");
class ProductPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.addToCartButton= page.locator("(//a[normalize-space()='Add to cart'])[1]")
       // this.addToCartLink = page.locator("(//a[normalize-space()='Cart'])[1]")
       // this.prodName = page.locator("//table/tbody/tr/td[2]")
        //
       // this.prodPrice= page.locator("//table/tbody/tr/td[3]")

    }
    async addProdToCart()
    {
            this.page.once('dialog',async dialog=>
            {
                await dialog.accept()
            }
            )
            await this.click(this.addToCartButton)
          
            
    }
}

module.exports = { ProductPage };