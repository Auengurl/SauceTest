import { expect } from '@wdio/globals';
import Login from '../pageobjects/login.js';
import Security from '../pageobjects/security.js';




describe('My seccessful Login application', () => {
        it('should login with valid username', async () => {
            await Login.openBasePage();
            await Login.positiveLogin('standard_user', 'secret_sauce');
            await expect(Security.HomePage).toBeExisting;
            
            await browser.pause(3000);

            await Login.openBasePage();
            await Login.negativeLoginName('locked_out_user', 'secret_sauce');
            await expect(Security.flashAlert1).toBeExisting();
            await expect(Security.flashAlert1).toHaveText(
                expect.stringContaining('Epic sadface: Sorry, this user has been locked out.')
            );

            await browser.pause(3000);

            await Login.openBasePage();
            await Login.negativeLogin('standard_user', 'asdfwoij');
            await expect(Security.flashAlert2).toBeExisting();
            await expect(Security.flashAlert2).toHaveText(
                  expect.stringContaining('Epic sadface: Username and password do not match any user in this service')
            );
            
         
           
        })
   
     });
