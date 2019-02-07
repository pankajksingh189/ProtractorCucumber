chai = require('chai');
expect = chai.expect;

const {Given, When, Then} = require('cucumber');
var {setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);


Given(/I launch url under test$/, function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://openweathermap.org/');
});
When(/^I enter city name "([^"]*)"$/, function (arg1, callback) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element(by.css('#searchform #q'))), 60000)
    element(by.css('#searchform #q')).sendKeys(arg1).then(function () {
        callback();
    })
});
Then(/^"([^"]*)" should be displayed in box$/, function (arg1, callback) {
    element(by.css("#searchform  [type='submit']")).click()
        .then(function () {
            return element(by.css(".alert.alert-warning")).getText();
        })
        .then(function (text) {
            let msg = (text.split("\n"))[1];
            console.log("error message is :" + msg);
            expect(msg).to.equal(arg1);

        }).then(function(){
            callback();
        })

});