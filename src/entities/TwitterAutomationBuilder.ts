import TwitterAutomation from "./TwitterAutomation";
import TwitterAutomationDatas from '../interfaces/TwitterAutomationDatas';

export default class TwitterAutomationBuilder {
  static async makePost(datas: TwitterAutomationDatas) {
    const {
      page,
      browser,
      userName,
      password,
      text
    } = datas;
    const twitterAutomation = new TwitterAutomation(page, browser);
    const twitterPersonal = `https://twitter.com/${userName}`;

    try {
      await twitterAutomation.visitLogin();
      await twitterAutomation.typeUserName(userName);
      await twitterAutomation.typePassword(password);
      await twitterAutomation.visitHome();
      await twitterAutomation.makePost(text);
      await twitterAutomation.closePage();

      return twitterPersonal;
    } catch (error) {
      return error;
    }
  }
}
