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

    get hamburgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get logOut() {
        return $('#logout_sidebar_link');
    }

    users = [{username: 'standard_user', password: 'secret_sauce'}, 
        {username: 'locked_out_user', password: 'secret_sauce'},
        {username: 'problem_user', password: 'secret_sauce'},
        {username: 'performance_glitch_user', password: 'secret_sauce'},
        {username: 'error_user', password: 'secret_sauce'},
        {username: 'visual_user', password: 'secret_sauce'}
    ];

    async multiLogin (username, password){

      const user = this.users.find(u => u.username === username);

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


async testMultiLogin() {
    for (let user of this.users) {
        console.log(`Testing with username: ${user.username}`);
        await this.multiLogin(user.username, user.password);
        await this.hamburgerMenu.click();
        await this.logOut.click();
        
    }
}

    openBasePage () {
        return super.openBasePage('');
    }
}

export default new Login();
