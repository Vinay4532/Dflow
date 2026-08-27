const { BasePage } = require("../utils/BasePage");
const data = require("../fixtures/testData.json");
class LoginPage extends BasePage
{
    constructor(page)
    {

         super(page)
         this.loginLink =page.locator("(//a[normalize-space()='Log in'])[1]")
          this.usernameField=page.locator("//input[@id='loginusername']")
          this.passwordField =page.locator("//input[@id='loginpassword']")
           this.loginButton=page.locator("//button[text()='Log in']")
    }
    async demoURL()
    {
        await this.navigate(data.baseURL)
    }
    async login(username, password)
    {
        await this.click(this.loginLink)
         await this.wait(this.usernameField)
        await this.fill(this.usernameField,username)
        await this.fill(this.passwordField,password)
        await this.click(this.loginButton);
    }
       
    
}
module.exports = { LoginPage };