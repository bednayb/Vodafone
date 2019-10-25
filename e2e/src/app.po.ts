import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  clickElement(css: string) {
    return element(by.css(css)).click();
  }

  allElement(css: string) {
    return element.all(by.css(css));
  }

  getCardTitleText() {
    return element(by.css('.card h4')).getText() as Promise<string>;
  }

  async setInputField(css: string, text: string) {
    await element(by.css(css)).clear();
    return element(by.css(css)).sendKeys(text);
  }
}
