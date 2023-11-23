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
    menuButton = "//*[@id='reactRoot']/div[3]/div[2]/div[1]/div[1]/button[3]";
    settingsMenuButton = "//*[@id='reactRoot']/div[3]/div[1]/div/div[4]/a[2]";
    displaySettings = "//*[@id='myPreferencesMenuPage']/div/div/div[1]/a[3]";
    libraryPageSizeInput = "//*[@id='txtLibraryPageSize']";
    saveSettingsButton = "//*[@id='displayPreferencesPage']/div/form/button";
    homeButton = "//*[@id='reactRoot']/div[3]/div[2]/div[1]/div[1]/button[2]";
    arrowButton = "//*[@id='reactRoot']/div[4]/div[3]/div[2]/div[3]/div/div/div/button[2]";
    signOutButton = "//*[@id='reactRoot']/div[3]/div[1]/div/div[4]/a[3]";
    selectServerPage = "//*[@id='selectServerPage']";
    homePage = "//*[@id='indexPage']";

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

    async openFirstFolderAndItsSubFolder() {
        // open folder
        await this.driver.findElement(By.xpath(this.firstFolder)).click();
        sleep(3);

        // open sub-folder
        await this.driver.findElement(By.xpath(this.firstFolderSubFolder)).click();
        sleep(3);
    }

    async navigateToDisplaySettings() {
        // click on menu button
        await this.driver.findElement(By.xpath(this.menuButton)).click();
        sleep(3);

        // click on settings
        await this.driver.findElement(By.xpath(this.settingsMenuButton)).click();
        sleep(3);

        // click on display
        await this.driver.findElement(By.xpath(this.displaySettings)).click();
        sleep(3);
    }

    async changeLibraryPageSize(size) {
        // fill out the input
        const input = await this.driver.findElement(By.xpath(this.libraryPageSizeInput));
        input.clear();
        input.sendKeys(size);
        sleep(3);

        // click save
        await this.driver.findElement(By.xpath(this.saveSettingsButton)).click();
    }
    async signOut() {
        // click on menu button
        await this.driver.findElement(By.xpath(this.menuButton)).click();
        sleep(3);

        // click on sign out button
        await this.driver.findElement(By.xpath(this.signOutButton)).click();
        sleep(3);
    }
}

module.exports = JellyfinPageModel;
