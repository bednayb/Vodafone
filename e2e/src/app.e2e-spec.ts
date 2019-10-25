import { AppPage } from './app.po';
import { browser, logging, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  // TITLES
  const contactPageTitle = 'Contacts';
  const newContactPageTitle = 'Add New Contact';
  const notFoundPageTitle = '404 - Page Not Found';
  const userNotExistAtDetailsPage = 'User not exist';

  // USERDATA
  const existdUserId = 54325;
  const existUserName = 'bample5';
  const notExistdUserId = 23231;

  // New User
  const newUserName = 'Matilda';
  const newUserPhone = '+36202034123';
  const newUserEmail = 'sample@sample.com';

  // CARDS
  const cardNumber = 8;
  const firstCard = '';

  beforeEach(() => {
    page = new AppPage();
  });

  // Positiv tests

  // DELETE METHOD
  it(`should display ${cardNumber - 1} after delete a Contact`, () => {
    /* navigate contact*/
    page.navigateTo(`contacts`);
    expect(page.getTitleText()).toEqual(contactPageTitle);
    // count Card
    browser.sleep(1000); // should wait because of the animation
    expect((page.allElement('.card')).count()).toBe(cardNumber);
    /* click a card */
    page.clickElement('.card');

    browser.sleep(1000); // should wait because of the animation
    expect(page.getTitleText()).toContain(`Profile`);
    page.clickElement('.warning');
    browser.sleep(1000); // should wait because of the animation
    expect(page.getTitleText()).toEqual(contactPageTitle);
    // count Card
    expect((page.allElement('.card')).count()).toBe(cardNumber - 1);
  });

  // New Method
  it(`should display ${cardNumber + 1} after add new Contact`, () => {
    /* navigate contact*/
    page.navigateTo(`contacts`);
    expect(page.getTitleText()).toEqual(contactPageTitle);
    // count Card
    browser.sleep(1000); // should wait because of the animation
    expect((page.allElement('.card')).count()).toBe(cardNumber);
    /* click new contact */
    page.clickElement('.go__new__contact');

    browser.sleep(1000); // should wait because of the animation
    expect(page.getTitleText()).toEqual(newContactPageTitle);

    // set input fields
    page.setInputField('input[name="name"]', `${newUserName}`);
    page.setInputField('input[name="email"]', `${newUserEmail}`);
    page.setInputField('input[name="phone"]', `${newUserPhone}`);

    page.clickElement('button');
    browser.sleep(1000); // should wait because of the animation
    expect(page.getTitleText()).toEqual(contactPageTitle);
    // count Card
    expect((page.allElement('.card')).count()).toBe(cardNumber + 1);
  });

  // Update Method
  it(`should display ${cardNumber} after add new Contact`, () => {
    /* navigate contact*/
    page.navigateTo(`contacts`);
    expect(page.getTitleText()).toEqual(contactPageTitle);
    // count Card
    browser.sleep(1000); // should wait because of the animation
    expect((page.allElement('.card')).count()).toBe(cardNumber);
    /* click new contact */
    page.clickElement('.card');

    browser.sleep(1000); // should wait because of the animation
    expect(page.getTitleText()).toContain(`Profile`);

    page.clickElement('#edit');

    // set input fields
    page.setInputField('input[name="name"]', `${newUserName}`);
    page.setInputField('input[name="email"]', `${newUserEmail}`);
    page.setInputField('input[name="phone"]', `${newUserPhone}`);

    page.clickElement('button');
    browser.sleep(1000); // should wait because of the animation
    expect(page.getTitleText()).toEqual(contactPageTitle);
    // count Card
    expect((page.allElement('.card')).count()).toBe(cardNumber);
    expect(page.getCardTitleText()).toBe(newUserName);

  });





  // Negative tests
  it(`should display ${userNotExistAtDetailsPage} title at Details page`, () => {
    page.navigateTo(`contacts/profile/details/${notExistdUserId}`);
    expect(page.getTitleText()).toEqual(userNotExistAtDetailsPage);
  });

  it(`should display ${notFoundPageTitle} title at Not found page`, () => {
    page.navigateTo(`itsnotvalidroot`);
    expect(page.getTitleText()).toEqual(notFoundPageTitle);
  });







  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
