let samplePage = require('../pages/samplePage.page.js');
let samplePageData = require('../data/samplePage.data.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1200);

Given('The user is on Sample Page', async function () {
    await browser.waitForAngularEnabled(false);
    await samplePage.getSamplePage();
});

When('The user fills some fields', async function () {
    await samplePage.fillCommentField();
    await samplePage.fillWebSite();
});

When('The user fills the name with {string}', async function (string) {
    await samplePage.fillNameField(string);
});

When('The user fills the email with {string}', async function (string) {
    await samplePage.fillEmailField(string);
});

When('The user submits the form', async function () {
    await samplePage.clickBtnSubmit();
});


When('The user goes back', async function () {
    await samplePage.clickBack();
});

Then('The user should see the successful message', async function () {
    expect(await samplePage.getSucessfullyMsg())
        .to.equal(samplePage.returnPedingMsg());
});

Then('The user should see the Sample Page', async function () {
    expect(await samplePage.getTitledComment())
        .to.equal(samplePageData.text.titleComment);
});

Then('The user should see the invalid email', async function () {
    expect(await samplePage.getMsgError())
        .to.equal(samplePageData.messages.msgEmailInvalid);
});

Then('The user should see the duplicate message', async function () {
    expect(await samplePage.getMsgError())
        .to.equal(samplePageData.messages.msgDuplicate);
});

Then('The user should see the required comment message', async function () {
    expect(await samplePage.getMsgError())
        .to.equal(samplePageData.messages.msgRequiredComment);
});