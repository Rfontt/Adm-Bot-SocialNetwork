import { Browser, Page } from "puppeteer";

export default interface TwitterAutomationDatas {
  page: Page,
  browser: Browser,
  userName: string,
  password: string,
  text: string
}
