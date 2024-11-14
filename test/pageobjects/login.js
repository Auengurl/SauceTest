import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import SauceBasePage from './basePage.js';
import Security from './security.js';
import { validUsers, locked_out_user, invalidPassword, invalidUsername} from './users.js';


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



    async validLogin (){
        for (let user of validUsers) {

            await this.inputUsername.setValue(user.username);
            console.log(`Testing with username: ${user.username}`);
            await this.inputPassword.setValue(user.password);
            await this.btnSubmit.click();
            await expect(Security.HomePage).toBeExisting;
            await this.hamburgerMenu.click();
            await this.logOut.click();
        } 
        };

    async lockedOutUserLogin () {
            await this.inputUsername.setValue(locked_out_user.username);
            await this.inputPassword.setValue(locked_out_user.password);
            await this.btnSubmit.click();
            await expect(Security.flashAlert1).toBeExisting();
            await expect(Security.flashAlert1).toHaveText(
                expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))
        };

    async invalidUsernameLogin (){
        for (let user of validUsers) {
            await this.inputUsername.setValue(invalidUsername);
            await this.inputPassword.setValue(user.password);
            await this.btnSubmit.click();
            await expect(Security.flashAlert2).toBeExisting();
            await expect(Security.flashAlert2).toHaveText(
                  expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
            }
        };

    async invalidPassowrdLogin () {
        for (let user of [...validUsers,locked_out_user]) {
            await this.inputUsername.setValue(user.username);
            await this.inputPassword.setValue(invalidPassword);
            await this.btnSubmit.click();
            await expect(Security.flashAlert2).toBeExisting();
            await expect(Security.flashAlert2).toHaveText(
                  expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
            }
    };



    openBasePage () {
        return super.openBasePage('');
    }
}


export default new Login();
