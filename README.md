Working in progress

### Technologies used

I used the technologies below:

* [Protractor](https://www.protractortest.org/#/): Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would;
* [Page Objects](https://www.protractortest.org/#/page-objects): Page Objects help you write cleaner tests by encapsulating information about the elements on your application page. A Page Object can be reused across multiple tests, and if the template of your application changes, you only need to update the Page Object;
* [CucumberJS](https://github.com/cucumber/cucumber-js): Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team;

### Requirements

- [Node.js](https://nodejs.org/en/download/) installed;
- Its need to have the [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) installed to run the standalone Selenium Server.

### To set up

- Run ```npm install``` to install dependencies

### Folders Structures

* ```e2e ```
    * ```features ``` Where feature files should be created
        * ```samplePage.feature ```
    * ```pages ``` Where the page object of tests should be created
        * ```samplePage.page.js ```
    * ```specs ``` Where the specification of tests should be created
        * ```samplePage.spec.js ```
### Running tests

- Start the Selenium Server ```webdriver-manager start```

- Run the tests ```protractor protractor.conf.js```

- Just run the tests are done protractor ```protractor protractor.conf.js --cucumberOpts.tags='~@pending'``` without pending scenarios

### Headless

If you want to run the tests in your computer and Headless, you just need to set up the following steps:


- In the file ```protractor.conf.js``` add this code to your browser

```chromeOptions: { args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage', '--window-size=1600,1020']}```