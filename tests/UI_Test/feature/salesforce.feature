Feature: Validate automation page
   
   Scenario Outline: Validate each country from dropdown
    Given I launch test automation application page
    When  I select "<Country>" from the country dropdown
    Then  I should see the selected country displayed correctly
     
     Examples:
        | Country           |
        | United States     |
        | Canada            |
        | United Kingdom    |
        | Germany           |
        | France            |
        | Australia         |
        | Japan             |
        | China             |
        | Brazil            |
        | India             |


