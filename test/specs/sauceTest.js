
import Login from '../pageobjects/login.js';





describe('My seccessful Login application', () => {
        it('should login', async () => {
            await Login.openBasePage();
            await Login.testMultiLogin(); 
            
         });
   
     });
