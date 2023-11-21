const { webdriver, Builder } = require('selenium-webdriver');
const { describe, before, beforeEach, after, afterEach, it } = require('mocha');
const assert = require('assert');
const JellyfinPageModel = require('../PageModel/JellyfinPageModel');
require('chromedriver');

// Need to run set up for ALL tests
before(function () {
    require('../setup');
});

describe('File exploring tests', function () {
    let driver;
    let pageModel;

    beforeEach(async () => {
        driver = new Builder().forBrowser('chrome').build();
        pageModel = new JellyfinPageModel(driver);

        await driver.get('http://192.168.10.154:8080/');
    });

    afterEach(function() {
        driver.quit();
    });

    it('Navigate to a folder with some pictures, I see the pictures', async function () {
        // log in first

    });

    it('When I click Play All, I see a slide show pop up', async function () {
        // log in

        // go to folder

        // click on play all
    });

    it('When I click Shuffle, I see a slide show pop up', async function () {
        // log in

        // go to folder

        // click on Shuffle
    });

    it('When I change library page size, I only see one picture per page in my folder', async function() {
        // log in

        // go to display settings

        // change library page size setting to 1

        // navigate to folder and assert

        // change page size setting back
    });
});
