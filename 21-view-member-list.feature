  Feature: View the member list successfuly

  @user1 @web
  Scenario: View the member list successfuly
  Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on member option menu
  And I wait for 2 seconds
  Then I see the member list
