Feature: Running protractor with cucumber

  Scenario Outline: Validate angular feature
    Given I launch url under test
    When I enter city name "<invalidName>"
    Then "<errorMessage>" should be displayed in box

    Examples:
      | validName | invalidName | errorMessage |
      | Mumbai    | Inavlid     | Not found    |

