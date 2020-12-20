
### 1. WebDriverAgent can't be installed on simulators
Known issue: https://github.com/appium/appium/issues/14213

Original error: Unable to launch WebDriverAgent because of xcodebuild failure: Command 'carthage bootstrap --platform iOS\,tvOS' exited with code 1

Try to solve with existing Xcode

```
cd /usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent
```
Then, run:
```
./Script/bootstrap.sh -d
```
If that doesn't work, here is the solution:
- appium 1.17.1
- appium desktop 1.17.1
- xcode 11.3.1 
see: https://stackoverflow.com/questions/10335747/how-to-download-xcode-dmg-or-xip-file

Important:
Open Xcode > Preference > Locations 
Command Line Tools: Xcode 11.3.1