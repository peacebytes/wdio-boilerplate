Feature: Form automation tests

    This is tests to deal with forms.

    Scenario: WebdriverIO and Appium, interacting with form elements
        Given I launch app
        When I tap on Forms
        Then I should be able type in the input and validate the text 