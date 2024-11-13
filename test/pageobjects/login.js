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


    async positiveLogin (username, password) {

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async negativeLoginName (badUsername, password) {
        await this.inputUsername.setValue(badUsername);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async negativeLoginPassord (username, badPassword) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(badPassword);
        await this.btnSubmit.click();
    }

    async negativeLogin (badUsername, badPassword) {
        await this.inputUsername.setValue(badUsername);
        await this.inputPassword.setValue(badPassword);
        await this.btnSubmit.click();
    }


    openBasePage () {
        return super.openBasePage('');
    }
}

export default new Login();
