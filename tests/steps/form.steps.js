import { Given, When, Then } from 'cucumber';
import TabBar from '../screenobjects/components/tab.bar';
import FormScreen from '../screenobjects/forms.screen';

When(/^I tap on (.*)$/, function(barName) {
    console.log(`I tap on ${barName}`);
    switch(barName) {
        case "Forms":
            TabBar.openForms();
            FormScreen.waitForIsShown(true);
        default:
            break;
    }
});

Then('I should be able type in the input and validate the text', function() {
    console.log("huray !!!! Then works.")
});