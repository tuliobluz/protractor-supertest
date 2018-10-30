let samplePageData = require('../data/samplePage.data.js');
let faker = require('faker');

let SamplePage = function () {
    var comment = faker.lorem.paragraph();

    let EC = protractor.ExpectedConditions,
        commentField = element(by.id('comment')),
        nameField = element(by.id('author')),
        emailField = element(by.id('email')),
        submitBtn = element(by.id('submit')),
        msgSucessfully = element(by.xpath("//div[@class='comment-body']//p[contains(text(),'" + comment + "')]")),
        msgInvalid = element(by.css('#error-page p strong'));

    this.getSamplePage = async function () {
        await browser.get(samplePageData.routes.samplePage);
    };
    this.fillCommentField = async function () {
        browser.wait(EC.elementToBeClickable((commentField)), 15000);
        await commentField.sendKeys(comment);
    };

    this.fillNameField = async function (name) {
        browser.wait(EC.elementToBeClickable((nameField)), 15000);
        await nameField.sendKeys(name);
    };

    this.fillEmailField = async function (email) {
        browser.wait(EC.elementToBeClickable((emailField)), 15000);
        await emailField.sendKeys(email);
    };

    this.clickBtnSubmit = async function () {
        browser.wait(EC.elementToBeClickable((emailField)), 15000);
        await submitBtn.click();
    };

    this.getSucessfullyMsg = function () {
        browser.wait(EC.elementToBeClickable((msgSucessfully)), 15000);
        return msgSucessfully.getText();
    }

    this.returnPedingMsg = function () {
        return comment;
    }

    this.getInvalidMsg = function () {
        browser.wait(EC.elementToBeClickable((msgInvalid)), 15000);
        return msgInvalid.getText();
    }
}
module.exports = new SamplePage();
