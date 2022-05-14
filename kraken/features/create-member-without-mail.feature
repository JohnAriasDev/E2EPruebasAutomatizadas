Feature: Create a member without email

@user1 @web
Scenario: Create a member without email
  Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on member option menu
  And I click on the new member button
  And I write member name "Lulu"
  And I click on the member save button
  And I wait for 2 seconds
  Then I see a error email message "Please enter an email."