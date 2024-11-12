import { $ } from '@wdio/globals'
import SauceBasePage from './basePage.js';

class Login extends SauceBasePage {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async login (username, password) {
        if (username && password) {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
        } else if (!username && password) {
            await this.inputUsername.setValue('invalidUsername');
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
        } else if (username && !password) {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue('invalidPassword');
            await this.btnSubmit.click();
        } else {
            await this.inputUsername.setValue('invalidPassword');
            await this.inputPassword.setValue('invalidPassword');
            await this.bthnSubmit.click();
        }
     }
   


    openBasePage () {
        return super.openBasePage('');
    }
}

export default new Login();
