Feature: User is able to change unit of measurement at openweathermap.org home page

    Scenario Outline: Validate user is able to change unit of measurement to Imperial
    Given User launches url under test
    When User toggles to "<untOfMeasurement>" unit
    And User should see weather graph
    Then User should see "<unit>" in weather widget
    Examples:
      | untOfMeasurement | unit |
      | imperial         | °F   |

  Scenario Outline: Validate user is able to change unit of measurement to Metric
    When User toggles to "<untOfMeasurement>" unit
    And User should see "<unit>" in weather widget
    Examples:
      | untOfMeasurement | unit |
      | metric           | °C   |