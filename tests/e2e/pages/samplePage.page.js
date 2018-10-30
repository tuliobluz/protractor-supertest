let samplePageData = require('../data/samplePage.data.js');

let SamplePage = function () {
    let EC = protractor.ExpectedConditions,
        commentField = element(by.id('comment')),
        nameField = element(by.id('author')),
        emailField = element(by.id('email')),
        submitBtn = element(by.id('submit'));

    this.getSamplePage = async function () {
        await browser.get(samplePageData.routes.samplePage);
    };
    this.fillCommentField = async function (comment) {
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
}
module.exports = new SamplePage();
