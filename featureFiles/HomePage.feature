Feature: openweathermap.org Landing page

  Scenario: Validate Landing page title
    Given User launches url under test
    Then User should get page title as "Сurrent weather and forecast - OpenWeatherMap"
    When User is on landing page

  Scenario: Validate presence of unit toggle button at Landing page
    Given User is on landing page
    Then User should see Unit Check toggle

  Scenario: Validate presence of weather graph at Landing page
    Given User is on landing page
    Then User should see weather graph

  Scenario: Validate presence of header menu at Landing page
    Given User is on landing page
    Then User should see below header menu
      | headerMenu |
      | Weather    |
      | Maps       |
      | Guide      |
      | API        |
      | Price      |
      | Partners   |
      | Stations   |
      | Widgets    |
      | Blog       |

  Scenario: Validate presence of footer menu at Landing page
    Given User is on landing page
    Then User should see below footer menu
      | footerMenu              |
      | Weather in your city    |
      | Weather APIs            |
      | Map layers              |
      | How to subscribe        |
      | Weather station network |
      | About                   |
      | Go Social               |

