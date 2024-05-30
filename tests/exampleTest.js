const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Google Search Test', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should open Google and search for "Selenium"', async function() {
    await driver.get('http://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium');
    await searchBox.submit();
    await driver.wait(until.titleContains('Selenium'), 1000);
    const title = await driver.getTitle();
    expect(title).to.include('Selenium');
  });
});
