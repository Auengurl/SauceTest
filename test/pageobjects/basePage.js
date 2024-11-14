import { browser } from '@wdio/globals'

export default class SauceBasePage {
    
   openBasePage () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
