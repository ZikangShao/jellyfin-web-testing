const { webdriver, Builder, Key, By } = require('selenium-webdriver');
const { describe, before, beforeEach, after, afterEach, it } = require('mocha');
const assert = require('assert');
const JellyfinPageModel = require('../PageModel/JellyfinPageModel');
require('chromedriver');

const username = 'Test';
const password = 'thisistest';
const hostAddress = '192.168.10.154:8096';

/**
 * Found here: https://stackoverflow.com/a/16077558
 */
function sleep(seconds) {
    const e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) { /* empty */ }
}

// Need to wait until npm test finishes running
before(function () {
    this.timeout(25000);
    sleep(10);
});

describe('File exploring tests', function () {
    this.timeout(50000);
    let driver;
    let pageModel;

    beforeEach(async () => {
        driver = new Builder().forBrowser('chrome').build();
        pageModel = new JellyfinPageModel(driver);

        await driver.get('http://192.168.10.154:8080/');
        sleep(5);
    });

    afterEach(function() {
        driver.quit();
    });

    it('Navigate to a folder with some pictures, I see the pictures', async function () {
        // connect to server
        await pageModel.connectToServerAndLogIn(username, password, hostAddress);

        // open folders
        await pageModel.openFirstFolderAndItsSubFolder();

        // assert that there are two images
        const image1 = await driver.findElement(By.xpath(pageModel.imageOne));
        const image2 = await driver.findElement(By.xpath(pageModel.imageTwo));

        assert.equal(image1 != null, true);
        assert.equal(image2 != null, true);
        assert.equal(image1.getAttribute('onclick') != null, true);
        assert.equal(image2.getAttribute('onclick') != null, true);
    });

    it('When I click Play All, I see a slide show pop up', async function () {
        // connect to server
        await pageModel.connectToServerAndLogIn(username, password, hostAddress);

        // open folders
        await pageModel.openFirstFolderAndItsSubFolder();

        // click on play all
        await driver.findElement(By.xpath(pageModel.playAllButton)).click();
        sleep(3);
        const slideShow = await driver.findElement(By.xpath(pageModel.slideShowContainer));
        assert.equal(slideShow != null, true);
    });

    it('When I click Shuffle, I see a slide show pop up', async function () {
        // connect to server
        await pageModel.connectToServerAndLogIn(username, password, hostAddress);

        // open folders
        await pageModel.openFirstFolderAndItsSubFolder();

        // click on Shuffle
        await driver.findElement(By.xpath(pageModel.shuffleButton)).click();
        sleep(3);
        const slideShow = await driver.findElement(By.xpath(pageModel.slideShowContainer));
        assert.equal(slideShow != null, true);
    });

    it('When I change library page size, I only see one picture per page in my folder', async function() {
        // log in

        // go to display settings

        // change library page size setting to 1

        // navigate to folder and assert

        // change page size setting back
    });

    it('When I sign out from the user menu, I get back to the select server view', async function() {
        // log in

        // go to user menu

        // click sign out

        // i see the view is now select server view
    });

    it('When I click on the home button when viewing a folder, I get back to the home view', async function() {
        // log in

        // go to a folder

        // click on home button

        // i see the home view
    });
});
