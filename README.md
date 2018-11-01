## e2e with Protractor and api test with Supertest

### Technologies used

I used the technologies below:

#### e2e

* [Protractor](https://www.protractortest.org/#/): Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would;
* [Page Objects](https://www.protractortest.org/#/page-objects): Page Objects help you write cleaner tests by encapsulating information about the elements on your application page. A Page Object can be reused across multiple tests, and if the template of your application changes, you only need to update the Page Object;
* [CucumberJS](https://github.com/cucumber/cucumber-js): Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team;

#### API

* [SuperTest](https://github.com/visionmedia/supertest): The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.
* [Mocha](https://mochajs.org/): Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
* [Chai](http://www.chaijs.com/): Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

### Requirements

- [Node.js](https://nodejs.org/en/download/) installed;
- Its need to have the [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) installed to run the standalone Selenium Server.

### To set up all environment

- Run ```npm install``` to install dependencies
## e2e

Store DemoQA: http://store.demoqa.com
### Folders Structures

* ```e2e ```
    * ```utils ``` It is to use to manage the data this way you can reuse the data in your testshere feature files should be created
        * ```samplePage.data.js ```
    * ```features ``` Where feature files should be created
        * ```samplePage.feature ```
    * ```pages ``` Where the page object of tests should be created
        * ```samplePage.page.js ```
    * ```specs ``` Where the specification of tests should be created
        * ```samplePage.spec.js ```

### Install or Update the binaries drivers

- Run ```npm run webdriver-update``` to install/update the binaries drivers

### Running tests

- Start the Selenium Server ```npm run webdriver-start```

- Run the tests ```npm run e2e```

- Just run the tests are done protractor ```npm run e2e -- --cucumberOpts.tags='@pending'``` without pending scenarios

### Headless

If you want to run the tests in your computer and Headless, you just need to set up the following steps:

- In the file ```protractor.conf.js``` add the code below after the: ```browserName: 'chrome',```

```chromeOptions: { args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage', '--window-size=1600,1020']}```

- After adding this args, just run the test ```npm run e2e```

## API

Open Weather API: http://openweathermap.org/current

### Folders Structures

* ```api ```
    * ```helpers ``` Where the helpers files should be created
        * ```config.json ``` Where the urls should able to use on the tests
        * ```utils.js ``` Where are created the information to use before the run the tests
        * ```weather.bodies.js ``` Where are the bodies should be created to use in the tests
    * ```specs ``` Where the specification of tests should be created
        * ```weather*.specs.js ```

### Running tests

- Run the tests ```npm run api-test```