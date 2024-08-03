const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('I am on the homepage', {timeout: 8 * 5000}, async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.mspbs.gov.py/index.php');
});

When('I click the "Leer Más" button for "ATENCIÓN AL USUARIO"', async function () {
  const readMoreButton = await driver.findElement(By.xpath("//a[@href='atencion-usuario.html' and contains(@title, 'Leer Más')]"));
  
  await driver.executeScript("arguments[0].scrollIntoView(true);", readMoreButton);
  await driver.wait(until.elementIsVisible(readMoreButton), 10000);
  await driver.wait(until.elementIsEnabled(readMoreButton), 10000);
  await readMoreButton.click();
});

Then('I should be redirected to the ATENCIÓN AL USUARIO page', async function (data) {
    await driver.wait(until.titleContains('Atencion al Usuario'), 10000);
    const title = await driver.getTitle();
    assert.strictEqual(title, 'Atencion al Usuario'); 
  
    await driver.quit();
  });