Feature: Create a member successfuly

@user1 @web
Scenario: Create a member successfuly
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on member option menu
  And I click on the new member button
  And I write member name "Pepe"
  And I write member email "pepe@yopmail.com"
  And I click on the member save button
  And I wait for 2 seconds
  And I click on member option menu
  Then I see that member list has a title name "Pepe"
