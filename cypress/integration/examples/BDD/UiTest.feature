Feature: UI end to end validation

    UI Automation

    Scenario: Login to Condiut page
    Given I open condiut page
    When I add loggin details and click login button
    Then I verify whether user redirecting to home page