import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import SauceBasePage from './basePage.js';


class Security extends SauceBasePage {

    get flashAlert1 () {
        return $(`.error-message-container.error`);
    }

    get flashAlert2 () {
        return $(`.error-message-container.error`);
    }
   
    get HomePage () {
        return browser.url(`https://www.saucedemo.com/inventory.html`);
    }
}

export default new Security();

