const { hooks } = require('./hooks');
const { cucumber } = require('./cucumber.conf');
const reportportal = require('wdio-reportportal-reporter');
const RpService = require('wdio-reportportal-service');

const conf = {
    reportPortalClientConfig: { // report portal settings
        token: '54306dd2-550e-4d1c-8c8a-ca48f5ee6c6c',
        endpoint: 'http://localhost:8080/api/v1',
        launch: 'default_TEST_EXAMPLE',
        project: 'default_personal'
    }
};

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
    reporters: ['spec', [reportportal, conf]],

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
