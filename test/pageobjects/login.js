import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import SauceBasePage from './basePage.js';
import Security from '../pageobjects/security.js';


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

    users = [{username: 'standard_user', password: 'secret_sauce'}, 
        {username: 'locked_out_user', password: 'secret_sauce'},
        {username: 'problem_user', password: 'secret_sauce'},
        {username: 'performance_glitch_user', password: 'secret_sauce'},
        {username: 'error_user', password: 'secret_sauce'},
        {username: 'visual_user', password: 'secret_sauce'}
    ];

    async multiLogin (username, password){

        user = users.find(u => u.username === username);

        if (user && user.password === password) {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
            await expect(Security.HomePage).toBeExisting;
        }

        //specific to the locked out username
        else if (username === 'locked_out_user') {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
            await expect(Security.flashAlert1).toBeExisting();
            await expect(Security.flashAlert1).toHaveText(
                expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))
        }
        else {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
            await expect(Security.flashAlert2).toBeExisting();
            await expect(Security.flashAlert2).toHaveText(
                  expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
        }
}


    openBasePage () {
        return super.openBasePage('');
    }
}

export default new Login();
