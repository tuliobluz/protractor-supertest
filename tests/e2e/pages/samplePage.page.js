let samplePageData = require('../data/samplePage.data.js');
let faker = require('faker');

let SamplePage = function () {
    var comment = faker.lorem.paragraph();
    var site = faker.internet.url();

    let EC = protractor.ExpectedConditions,
        commentField = element(by.id('comment')),
        urlField = element(by.id('url')),
        nameField = element(by.id('author')),
        emailField = element(by.id('email')),
        submitBtn = element(by.id('submit')),
        backBtn = element(by.css('a[href*="javascript:history.back()"]')),
        titleComment = element(by.id('reply-title')),
        msgSucessfully = element(by.xpath("//div[@class='comment-body']//p[contains(text(),'" + comment + "')]")),
        msgError = element(by.css('#error-page > p:nth-child(2)'));

    this.getSamplePage = async function () {
        await browser.get(samplePageData.routes.samplePage);
    };
    this.fillCommentField = async function () {
        browser.wait(EC.elementToBeClickable((commentField)), 15000);
        await commentField.sendKeys(comment);
    };

    this.fillWebSite = async function () {
        browser.wait(EC.elementToBeClickable((urlField)), 15000);
        await urlField.sendKeys(site);
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

    this.clickBack = async function () {
        browser.wait(EC.elementToBeClickable((backBtn)), 15000);
        await backBtn.click();
    };

    this.getSucessfullyMsg = function () {
        browser.wait(EC.elementToBeClickable((msgSucessfully)), 15000);
        return msgSucessfully.getText();
    }

    this.getTitledComment = function () {
        browser.wait(EC.elementToBeClickable((titleComment)), 15000);
        return titleComment.getText();
    }

    this.returnPedingMsg = function () {
        return comment;
    }

    this.getMsgError = function () {
        browser.wait(EC.elementToBeClickable((msgError)), 15000);
        return msgError.getText();
    }
}
module.exports = new SamplePage();
