import puppeteer from 'puppeteer';

export default async function configsPuppeteer() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    return { browser, page };
}