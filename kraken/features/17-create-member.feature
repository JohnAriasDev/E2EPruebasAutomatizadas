Feature: Create a member successfuly

@user1 @web
Scenario: Create a member successfuly
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I take a screenshot of scenario and step number  "1"
  And I click on the login button
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "2"
 When I click on member option menu
  And I take a screenshot of scenario and step number  "3"
  And I click on the new member button
  And I take a screenshot of scenario and step number  "4"
  And I write member name "Pepe"
  And I take a screenshot of scenario and step number  "5"
  And I write member email "pepe@yopmail.com"
  And I take a screenshot of scenario and step number  "6"
  And I click on the member save button
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "7"
  And I click on member option menu
  And I take a screenshot of scenario and step number  "8"
 Then I see that member list has a title name "Pepe"
  And I take a screenshot of scenario and step number  "9"
 