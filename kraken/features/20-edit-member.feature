Feature: Edit a member successfuly

@user1 @web
Scenario: Edit a member successfuly
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I take a screenshot of scenario and step number  "1"
  And I click on the login button
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "2"
  And I click on member option menu list
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "3"
  When I see a first list of members
  And I take a screenshot of scenario and step number  "4"
  And I write member name "Pepito"
  And I take a screenshot of scenario and step number  "5"
  And I click on the member save button
  And I take a screenshot of scenario and step number  "6"
  And I wait for 2 seconds
  And I click on member option menu
  And I take a screenshot of scenario and step number  "7"
  Then I see that member list has a title name "Pepito"
  And I take a screenshot of scenario and step number  "8"
 