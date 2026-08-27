const { test ,expect} = require("@playwright/test");

const { LoginPage } = require("../pages/LoginPage");


const data = require("../fixtures/testData.json");
const { HomePage } = require("../pages/HomePage");
const {ProductPage} = require("../pages/ProductPage")
const {CartPage} = require("../pages/CartPage")

test("Valid Login Test", async ({ page }) => {

      let login = new LoginPage(page)
      await login.demoURL()
      await login.login(data.username,data.password)
        let  home   = new HomePage(page)
        await home.selectProduct(data.product)
              let prod   = new ProductPage(page)
              await prod.addProdToCart()
              let cart = new CartPage(page)

              await cart.openCart()
                let prodName=  await cart.getProductName()
                        let productPrice   =   await cart.getProductPrice()
                        await expect(await prodName).toContain(data.product)
                       await  expect(productPrice).not.toBe("");
                       await cart.placeOrder()
                      await cart.fillOrderForm(data.order)
});