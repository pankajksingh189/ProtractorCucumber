var EC = protractor.ExpectedConditions;
let errMessage=".alert.alert-warning";
let searchResult="#forecast-list";


var SearchResultPO = {

    getErrorMessage: function () {
        browser.wait(EC.visibilityOf(element(by.css(errMessage))), 60000);
        return element(by.css(errMessage)).getText();
    },
    getResult: function () {
        browser.wait(EC.visibilityOf(element(by.css(searchResult))), 60000);
        return element.all(by.css(searchResult)).getText();
    },
}
module.exports=SearchResultPO;