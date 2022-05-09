  Feature: Edit a tag successfuly

@user1 @web
Scenario: Edit a tag successfuly
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on tags option menu list
  And I wait for 2 seconds
  When I see a first list of tags
  And I write tag name "Terrestrial Animals"
  And I write tag color "808080"
  And I write tag description "Tags for animals"
  And I click on the tag save button
  And I wait for 2 seconds
  And I click on tags option menu
  Then I see that tag list has a title name "Terrestrial Animals"
