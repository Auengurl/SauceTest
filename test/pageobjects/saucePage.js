import { browser } from '@wdio/globals'

export default class SaucePage {
    
   openPage () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
