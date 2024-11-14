
import Login from '../pageobjects/login.js';





describe('Login application', () => {
        it('should login with valid username and password', async () => {
            await Login.openBasePage();
            await Login.validLogin(); 
            
        });

        it('should not login for locked out user', async () => {
            await Login.openBasePage();
            await Login.lockedOutUserLogin();
            
        });

        it('valid usernames, but invalid password does not login', async () => {
            await Login.openBasePage();
            await Login.invalidPassowrdLogin();
            
        });

        it('valid passwords, but invalid username does not login', async () => {
            await Login.openBasePage();
            await Login.invalidUsernameLogin();
            
        });

        // it('', async () => {
        //     await Login.openBasePage();
        //     await Login.lockedOutUserLogin();
        //     await Login.logOut();
        // });
   
     });






