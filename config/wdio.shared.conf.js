const { hooks } = require('./hooks');
const { cucumber } = require('./cucumber.conf');
const { conf } = require('./rp.conf');
const reportportal = require('wdio-reportportal-reporter');
const RpService = require('wdio-reportportal-service');

const rpConf = { ...conf };

exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',
    ...cucumber,
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec', [reportportal, rpConf]],

    // ====================
    // Appium Configuration
    // ====================
    services: [
        [RpService, {}],
        [
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                    // Auto download ChromeDriver
                    relaxedSecurity: true,
                    // chromedriverAutodownload: true,
                    // For more arguments see
                    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
            },
        ],
    ],
    port: 4723,
    ...hooks
};
