const { BasePage } = require("../utils/BasePage");
class HomePage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.products = page.locator("//h4[@class='card-title']/a");
    }
    async selectProduct(productName)
    {
            let count =    await this.products.count()
            for(let i=0;i<count;i++)
                
                {
                     let value =     await this.getText(this.products.nth(i))
                     if(value.includes(productName))
                     {
                        await this.click(this.products.nth(i))
                        break;
                     }
                }
    }
}
module.exports = { HomePage };