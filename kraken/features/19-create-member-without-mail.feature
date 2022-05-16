Feature: Create a member without email

@user1 @web
Scenario: Create a member without email
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
  And I write member name "Lulu"
  And I take a screenshot of scenario and step number  "5"
  And I click on the member save button
  And I take a screenshot of scenario and step number  "6"
  And I wait for 2 seconds
  Then I see a error email message "Please enter an email."
  And I take a screenshot of scenario and step number  "7"
 