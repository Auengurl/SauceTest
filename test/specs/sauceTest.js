import { expect } from '@wdio/globals';
import Login from '../pageobjects/login.js';
import Security from '../pageobjects/security.js';




describe('My seccessful Login application', () => {
        it('should login with valid username', async () => {
            await Login.openBasePage();
            await Login.testMultiLogin();
            
         })
   
     });
