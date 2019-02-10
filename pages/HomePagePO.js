var EC = protractor.ExpectedConditions;
let searchBox = "#searchform #q";
let seacrchBtn = "#searchform  [type='submit']";
let unitCheckToggle = "#units_check";
let navigateMenu = ".nav__item";
let brandLogo = "navbar-brand";
let graph = "rect.highcharts-background";
let footer = ".footer-dark .col-sm-4 h3";
let metric = "#metric";
let imperial = "#imperial";
let widgetUnit=".weather-widget__temperature";
var HomePagePO = {

    enterCityName: function (txt) {
        browser.wait(EC.visibilityOf(element(by.css(searchBox))), 60000);
        console.log("Entering " + txt + " in textbox.");
        return element(by.css(searchBox)).sendKeys(txt);
    },

    getPageTitle: function () {
        return browser.getTitle();
    },

    getWidgetUnit: function () {
        console.log("Inside select text")
        return element(by.css(widgetUnit)).getText();
    },
    clickSearchBtn: function () {
        browser.wait(EC.visibilityOf(element(by.css(seacrchBtn))), 60000);
        console.log("Clicking search button.");
        return element(by.css(seacrchBtn)).click();
    },

    checkPresencePresenceOfLogo: function () {
        return element(by.css(brandLogo)).isDisplayed();
    },

    checkPresenceOfUnitCheckToggle: function () {
        return element(by.css(unitCheckToggle)).isPresent();
    },

    toggleUnit: function (unit) {
        if (unit == "imperial") {
            console.log("Selecting '"+unit+" ' unit");
            return element(by.css(imperial)).click();
        } else {
            console.log("Selecting '"+unit+" ' unit");
            return element(by.css(metric)).click();
        }
    },

    checkPresenceGraph: function () {
        return element(by.css(graph)).isDisplayed();
    },

    getHeaderMenu: function () {
        promises = [];
        return element.all(by.css(navigateMenu))
            .then(function (list) {
                list.forEach(function (ele) {
                    promises.push(ele.getText());
                });
                return Promise.all(promises);
            });
    },

    getFooterMenu: function () {
        promises = [];
        return element.all(by.css(footer))
            .then(function (list) {
                list.forEach(function (ele) {
                    promises.push(ele.getText());
                });
                return Promise.all(promises);
            });
    },
}
module.exports = HomePagePO;