const {Given, When, Then} = require('cucumber');
let {setDefaultTimeout} = require("cucumber");
let homePagePO = require("../pages/HomePagePO.js");
//let searchResultPO = require("../pages/SearchResultPO.js");
chai = require('chai');
expect = chai.expect;
setDefaultTimeout(60 * 1000);
var homePageTitle;

Given(/User launches url under test$/, function () {
    browser.waitForAngularEnabled(false);
    var url = "https://openweathermap.org/";
    console.log("Launching application :" + url)
    browser.get(url);
});

Then(/^User should see Unit Check toggle$/, function (callback) {
    homePagePO.checkPresenceOfUnitCheckToggle()
        .then(function (isPresence) {
            console.log("isPresence " + isPresence)
            if (isPresence == true) {
                callback();
            } else {
                callback(new Error(" Unit check toggle is not presence."));
            }
        });
});

When(/^User toggles to "([^"]*)" unit$/, function (unit, callback) {
    homePagePO.toggleUnit(unit)
        .then(function () {
            callback();
        });
});

Then(/^User should see application logo$/, function (callback) {
    homePagePO.checkPresencePresenceOfLogo()
        .then(function (isPresence) {
            console.log("isPresence " + isPresence)
            if (isPresence == true) {
                callback();
            } else {
                callback(new Error("App logo is not presence."));
            }
        });
});

When(/^User is on landing page$/, function (callback) {
    homePagePO.getPageTitle()
        .then(function (pageTitle) {
            expect(pageTitle, "User is not on home page.").to.equal(browser.params.pageTitle);
            callback();
        });
});

Then(/^User should see weather graph$/, function (callback) {
    homePagePO.checkPresenceGraph()
        .then(function (isPresence) {
            console.log("isPresence " + isPresence)
            if (isPresence == true) {
                callback();
            } else {
                callback(new Error("weather graph is not presence."));
            }
        });
});

Then(/^User should see "([^"]*)" in weather widget$/, function (unit, callback) {
    homePagePO.getWidgetUnit()
        .then(function (str) {
            console.log("Unit fetched from application " + str)
            expect(str.toString()).to.contains(unit);
            callback();
        });

});

Then(/^User should see below header menu$/, function (headerMenuList, callback) {
    let menuList = headerMenuList.hashes();
    let list = [];
    console.log(menuList.length + " YYYYYYYYYy")
    for (var i = 0; i < menuList.length; i++) {
        list.push(menuList[i].headerMenu);
    }
    console.log("Expected header menu: " + list);
    homePagePO.getHeaderMenu()
        .then(function (lst) {
            console.log("Actual header menu: " + lst);
            expect(lst).to.deep.equal(list);
            callback();
        })
});

Then(/^User should see below footer menu$/, function (footerMenuList, callback) {
    let menuList = footerMenuList.hashes();
    let list = [];
    for (var i = 0; i < menuList.length; i++) {
        list.push(menuList[i].footerMenu);
    }
    console.log("Expected footer menu: " + list);
    homePagePO.getFooterMenu()
        .then(function (lst) {
            console.log("Actual footer menu: " + lst);
            expect(lst).to.deep.equal(list);
            callback();
        })
});

Then(/^User should get page title as "([^"]*)"$/, function (title, callback) {
    browser.params.pageTitle= title;
    homePagePO.getPageTitle()
        .then(function (pageTitle) {
            console.log("Page title: " + pageTitle);
            expect(pageTitle).to.equal(title);
            callback();
        });
});

When(/^I enter city name "([^"]*)"$/, function (cityName, callback) {
    homePagePO.enterCityName(cityName)
        .then(function () {
            callback();
        });
});

When(/^I click on search button$/, function (callback) {
    homePagePO.clickSearchBtn()
        .then(function () {
            callback();
        });
});