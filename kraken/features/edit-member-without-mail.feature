Feature: Edit a member without email

@user1 @web
  Scenario: Edit a member without email
  Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on member option menu list
  And I wait for 2 seconds
  When I see a first list of members
  And I leave in blank of member email
  And I click on the member save button
  And I wait for 2 seconds
  Then I see a error email message "Please enter an email."