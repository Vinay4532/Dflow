const { BasePage } = require("../utils/BasePage");
const data = require("../fixtures/testData.json");
class CartPage extends BasePage
{
    constructor(page)
    {
        super(page)
         this.addToCartLink = page.locator("(//a[normalize-space()='Cart'])[1]")
         this.placeOrderButton = page.locator("//button[normalize-space()='Place Order']")
         this.productName = page.locator("//table/tbody/tr/td[2]");
    this.productPrice = page.locator("//table/tbody/tr/td[3]");
    this.nameField = page.locator("#name");
    this.countryField = page.locator("#country");
    this.cityField = page.locator("#city");
    this.cardField = page.locator("#card");
    this.monthField = page.locator("#month");
    this.yearField = page.locator("#year");

    }
    async openCart()
    {
        await this.click(this.addToCartLink)
    }
    async getProductName()
    
    {
        return await this.getText(this.productName)
    }
    async getProductPrice()
    {
    return await this.getText(this.productPrice);
    }
    async placeOrder()
    {
        await this.click(this.placeOrderButton)
    }
    async fillOrderForm(order)
{
    await this.fill(this.nameField, order.name);

    await this.fill(this.countryField, order.country);

    await this.fill(this.cityField, order.city);

    await this.fill(this.cardField, order.card);

    await this.fill(this.monthField, order.month);

    await this.fill(this.yearField, order.year);
}
}
module.exports={CartPage}