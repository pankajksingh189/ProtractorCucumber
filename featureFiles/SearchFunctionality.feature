Feature: Search functionality for openweathermap.org

  Scenario Outline: Validate error message is shown for invalid location
    Given User launches url under test
    When I enter city name "<invalidName>"
    And I click on search button
    Then "<errorMessage>" should be displayed in box

    Examples:
      | invalidName      | errorMessage |
      | Inavlid location | Not found    |

#  Scenario Outline: Validate valid information is shown for valid location
#    Given User launches url under test
#    When I enter city name "<location>"
#    And I click on search button
#    Then I should be able to see valid information for location "<location>"
#
#    Examples:
#      | location |
#      | Mumbai   |

