Feature: openweathermap home page and Search

  Scenario: Validate landing page
    Given User launches url under test
    Then User should get page title as "Сurrent weather and forecast - OpenWeatherMap"
#    When User is on landing page
    And User should see Unit Check toggle
    And User should see weather graph
    And User should see below header menu
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

    And User should see below footer menu
      | footerMenu              |
      | Weather in your city    |
      | Weather APIs            |
      | Map layers              |
      | How to subscribe        |
      | Weather station network |
      | About                   |
      | Go Social               |

