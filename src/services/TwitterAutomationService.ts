import configsPuppeteer from '../utils/configsPuppeteer';
import TwitterAutomationBuilder from '../entities/TwitterAutomationBuilder';
import TwitterAutomationDatas from '../interfaces/TwitterAutomationDatas';

export default class TwitterAutomationService {
  static async makePost(userName: string, password: string, text: string) {
    const { browser, page } = await configsPuppeteer();
    const datas: TwitterAutomationDatas = {
      page,
      browser,
      userName,
      password,
      text
    }

    try {
      const twitterAutomationBuilder = await TwitterAutomationBuilder.makePost(datas);

      return { status: 200, message: twitterAutomationBuilder };
    } catch (error) {
      return { status: 500, message: 'Failed to create post with automation' };
    }
  }
}
