const webdriver = require('selenium-webdriver');
const { By, Key } = require('selenium-webdriver');
const assert = require('assert');

/**
 * Found here: https://stackoverflow.com/a/16077558
 */
function sleep(seconds) {
    const e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
}

class JellyfinPageModel {
    addServerButton = "//*[@id='selectServerPage']/div/div[2]/a";
    addressEntry = "//*[@id='txtServerHost']";
    userNameEntry = "//*[@id='txtManualName']";
    userPassEntry = "//*[@id='txtManualPassword']";
    firstFolder = "//*[@id='homeTab']/div/div[1]/div[2]/div/div[1]";
    firstFolderSubFolder = "//*[@id='reactRoot']/div[4]/div[2]/div[2]/div[2]/div";
    imageOne = "//*[@id='reactRoot']/div[4]/div[3]/div[2]/div[2]/div[1]";
    imageTwo = "//*[@id='reactRoot']/div[4]/div[3]/div[2]/div[2]/div[2]";
    playAllButton = "//*[@id='reactRoot']/div[4]/div[3]/div[2]/div[1]/button[1]";
    shuffleButton = "//*[@id='reactRoot']/div[4]/div[3]/div[2]/div[1]/button[5]";
    slideShowContainer = '/html/body/div[6]/div/div[1]';

    /**
     * constructor
     */
    constructor(DRIVER) {
        this.driver = DRIVER;
    }

    async connectToServerAndLogIn(username, password, address) {
        // Connect to server
        sleep(1);
        await this.driver.findElement(By.xpath(this.addServerButton)).click();
        sleep(2);
        await this.driver.findElement(By.xpath(this.addressEntry)).sendKeys(address, Key.RETURN);
        sleep(3);

        // log in first
        await this.driver.findElement(By.xpath(this.userNameEntry)).sendKeys(username);
        await this.driver.findElement(By.xpath(this.userPassEntry)).sendKeys(password, Key.RETURN);
        sleep(3);
    }

    async openFirstFolderAndItsSubFolder(){
        // open folder
        await this.driver.findElement(By.xpath(this.firstFolder)).click();
        sleep(3);

        // open sub-folder
        await this.driver.findElement(By.xpath(this.firstFolderSubFolder)).click();
        sleep(3);
    }
}

module.exports = JellyfinPageModel;
