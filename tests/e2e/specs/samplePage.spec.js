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

When('The user fills the comment field', async function () {
    await samplePage.fillCommentField();
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

Then('The user should see the successfully message', async function () {
    expect(await samplePage.getSucessfullyMsg())
        .to.equal(samplePage.returnPedingMsg());
});

Then('The user should see the invalid message', async function () {
    expect(await samplePage.getInvalidMsg())
        .to.equal(samplePageData.messages.msgInvalid);
});
