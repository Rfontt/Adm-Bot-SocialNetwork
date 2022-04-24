import { setTimeout } from 'timers/promises';
import { Page, Browser } from 'puppeteer';

export default class TwitterAutomation {
  page: Page
  browser: Browser
  textButtonAdvance: string
  textButtonLogin: string
  inputText: string

  constructor(page: Page, browser: Browser) {
    this.page = page;
    this.browser = browser;
    this.textButtonAdvance = `//div[@role='button']//span[text()='Avançar']`;
    this.textButtonLogin = `//div[@role='button']//span[text()='Entrar']`;
    this.inputText = `//input[@name="text"]`;
  }

  async visitLogin() {
    try {
      await this.page.goto('https://twitter.com/login');
    } catch (error) {
      throw new Error('Error in visit login');
    }
  }

  async typeUserName(userName: string) {
    await setTimeout(10000);

    try {
      const inputUserName = await this.page.$x(this.inputText);
      const verificationButton = await this.page.$x(this.textButtonAdvance);

      await inputUserName[0].focus();
      await this.page.keyboard.type(userName, { delay: 200 });
      await verificationButton[0].click();
    } catch (error) {
      throw new Error('Error in type user name');
    }
  }

  async typePassword(password: string) {
    await setTimeout(10000);

    if (await this.page.waitForXPath('//*[contains(text(), "Digite sua senha")]')) {
      try {
        const inputPassword = await this.page.$x(`//input[@name="password"]`);
        const buttonLogin = await this.page.$x(this.textButtonLogin);

        await inputPassword[0].focus();
        await this.page.keyboard.type(password, { delay: 200 });
        await buttonLogin[0].click();
      } catch (error) {
        throw new Error('Error in type password');
      }
    }
  }

  async visitHome() {
    await setTimeout(10000);

    try {
      await this.page.goto('https://twitter.com/home');
    } catch (error) {
      throw new Error('Error in type visit home');
    }
  }

  async makePost(text: string) {
    await setTimeout(10000);

    try {
      await this.page.waitForSelector('.DraftEditor-editorContainer');
      await this.page.click('.DraftEditor-editorContainer');
      await this.page.keyboard.type(text, { delay: 200 });

      await setTimeout(2000);

      const buttonTweet = await this.page.$x(`//div[@role='button']//span[text()='Tweet']`);
      await buttonTweet[0].click();
    } catch (error) {
      throw new Error('Error in make post');
    }
  }

  async closePage() {
    await setTimeout(3000);
    await this.browser.close();
  }
}
