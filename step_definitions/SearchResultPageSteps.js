const {Given, When, Then} = require('cucumber');
let searchResultPO = require("../pages/SearchResultPO.js");
chai = require('chai');
expect = chai.expect;

Then(/^"([^"]*)" should be displayed in box$/, function (errMsg, callback) {
    searchResultPO.getErrorMessage()
        .then(function (text) {
            let msg = (text.split("\n"))[1];
            console.log("Error message for invalid location is :" + msg);
            expect(msg).to.equal(errMsg);
            callback();
        });
});

Then(/^I should be able to see valid information for location "([^"]*)"$/, function (loc, callback) {
    searchResultPO.getResult()
        .then(function (text) {
            console.log("Weather information for "+loc+" is :" + text);
            expect(text.toString()).to.contains(loc);
            callback();
        });
});