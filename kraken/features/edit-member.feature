Feature: Edit a member successfuly

@user1 @web
Scenario: Edit a member successfuly
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on member option menu list
  And I wait for 2 seconds
  When I see a first list of members
  And I write member name "Pepito"
  And I click on the member save button
  And I wait for 2 seconds
  And I click on member option menu
  Then I see that member list has a title name "Pepito"
