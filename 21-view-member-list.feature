  Feature: View the member list successfuly

  @user1 @web
  Scenario: View the member list successfuly
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I take a screenshot of scenario and step number  "1"
  And I click on the login button
  And I take a screenshot of scenario and step number  "2"
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "3"
 When I click on member option menu
  And I take a screenshot of scenario and step number  "4"
  And I wait for 2 seconds
  Then I see the member list
  And I take a screenshot of scenario and step number  "5"
 