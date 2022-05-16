Feature: Edit a member without email

@user1 @web
  Scenario: Edit a member without email
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
  And I leave in blank of member email
  And I take a screenshot of scenario and step number  "4"
  And I click on the member save button
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "5"
  Then I see a error email message "Please enter an email."
  And I take a screenshot of scenario and step number  "6"
  And I take a screenshot of scenario and step number  "7"
 