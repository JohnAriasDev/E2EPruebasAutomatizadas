  Feature: Edit a tag successfuly

@user1 @web
Scenario: Edit a tag successfuly
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I take a screenshot of scenario and step number  "1"
  And I click on the login button
  And I take a screenshot of scenario and step number  "2"
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "3"
  And I click on tags option menu list
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "4"
  When I see a first list of tags
  And I take a screenshot of scenario and step number  "5"
  And I write tag name "Terrestrial Animals"
  And I take a screenshot of scenario and step number  "6"
  And I write tag color "808080"
  And I take a screenshot of scenario and step number  "7"
  And I write tag description "Tags for animals"
  And I take a screenshot of scenario and step number  "8"
  And I click on the tag save button
  And I take a screenshot of scenario and step number  "9"
  And I wait for 2 seconds
  And I click on tags option menu
  And I take a screenshot of scenario and step number  "10"
  Then I see that tag list has a title name "Terrestrial Animals"
  And I take a screenshot of scenario and step number  "11"
 