import { Given } from 'cucumber';
import TabBar from '../screenobjects/components/tab.bar';

Given('I launch app', function () {
    console.log('I launch app');
    TabBar.waitForTabBarShown(true);
});
