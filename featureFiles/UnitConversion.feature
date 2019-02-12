Feature: User is able to change unit of measurement at openweathermap.org home page

  Scenario: Relaunch application
    Given User launches url under test

  Scenario Outline: Validate user is able to change unit of measurement to Imperial
    Given User is on landing page
    When User toggles to "<untOfMeasurement>" unit
    Then User should see weather graph
    And User should see "<unit>" in weather widget
    Examples:
      | untOfMeasurement | unit |
      | imperial         | °F   |
      | metric           | °C   |