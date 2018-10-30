let samplePage = require('../pages/samplePage.page.js');

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
