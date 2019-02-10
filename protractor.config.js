exports.config = {
    // seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
   // seleniumPort: '4444',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    suites: {
        landingPage: [
            './featureFiles/HomePage.feature',
            './featureFiles/SearchFunctionality.feature',
            './featureFiles/UnitConversion.feature',

        ],

    },

    cucumberOpts: {
        require: ['./step_definitions/*.js'],
        format: 'json:reports/results.json',
    },

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(120000);
        browser.manage().timeouts().pageLoadTimeout(180000);
        browser.manage().timeouts().setScriptTimeout(120000);
    },


    //###### if you want to run test in multiple browser #######
    // multiCapabilities: [{
    //     browserName: 'firefox',
    // }, {
    //     browserName: 'chrome',
    // }]

    capabilities: {
        browserName: 'chrome',
        keepAlive: true,
        metadata: {
            device: 'PC',
            platform: {
                name: 'Windows',
                version: '10'
            }
        }

    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
    jasmineNodeOpts: {
        showColors: true,
    },
    params: {
        pageTitle: ''
    }

}