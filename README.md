# appium-boilerplate

### To set up
```
npm install
```

### Run lint check
```
npm run lint
```

To fix all formatting errors
```
npm run lint:fix
```
### How to run tests

#### iOS

To run iOS tests on local
```
npm run ios.app
```

To run iOS tests on BrowserStack
```
npm run ios.browserstack.app
```

To run iOS tests on Sauce Labs
```
npm run ios.sauce.rdc.app
```
#### Android
To run Android tests on local
```
npm run android.app
```

To run Android tests on BrowserStack
```
npm run android.browserstack.app
```

To run Android tests on Sauce Labs
```
npm run android.sauce.rdc.app
```

#### Report Portal (RP) integration
To have your report published to RP, provide your RP settings at `config/rp.conf.js`. Then run test with command
```
TOKEN=<your-report-portal-token> npm run ios.app
```

If you project is for internal use only, you can put token in `config/rp.conf.js` and then run test as usual command
```
npm run ios.app
```

Report Portal set up can be found at https://automationbytes.me/how-to-setup-report-portal

If you are eager to see how it works, just simply go to https://reportportal.io/ and click `Try demo`

* Note: To find out what features files to be executed, check this file out `config/cucumber.conf.js`
