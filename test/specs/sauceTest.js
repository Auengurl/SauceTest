import SauceLogin from '../pageobjects/sauceLogin.page.js';


describe('My seccessful Login application', () => {
        it('should login with valid username', async () => {
            await SauceLogin.openPage();
   
            await SauceLogin.login('standard_user', 'secret_sauce')
        
           
        })
   
     });
