import { $ } from '@wdio/globals'
import SaucePage from './saucePage.js';

class SauceLogin extends SaucePage {
   
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

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    openPage () {
        return super.openPage('');
    }
}

export default new SauceLogin();
