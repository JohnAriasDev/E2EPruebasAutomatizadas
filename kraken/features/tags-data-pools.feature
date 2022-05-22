Feature: Create a tag successfuly


# @user1 @web
# Scenario: Create a tag exceded the maxlength on name (random)
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$paragraph" with length "192"
#   And I write tag color apriori "#color"
#   And I write tag slug "#slug"
#   And I write tag description "$paragraph_2"
#   And I click on the tag save button
#   And I wait for 2 seconds
#   Then I see error message "Tag names cannot be longer than 191 characters."

# @user2 @web
# Scenario: Create a tag with exactly the maxlength on name (random)
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$paragraph" with length "191"
#   And I write tag color apriori "#color"
#   And I write tag slug "$name"
#   And I write tag description "$paragraph_2"
#   And I click on the tag save button
#   And I wait for 2 seconds
#   And I click on tags option menu
#   Then I see that tag list has a title name "$$paragraph" with length "191"

# @user3 @web
# Scenario: modify a tag   with special characters on name
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name "#slug" 
#   And I write tag color apriori "#color"
#   And I write tag slug "$name"
#   And I write tag description "$paragraph_2"
#   And I click on the tag save button
#   Then I see the button saved


#   @user4 @web
# Scenario: Create a tag with invalid color
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$name" 
#   And I write tag color apriori "$name"
#   And I write tag slug "#slug"
#   And I write tag description "$paragraph_2"
#   And I click on the tag save button
#  # Then I see the button Retry
#   Then I see error message2 "The colour should be in valid hex format"
 
#   @user5 @web
# Scenario: Create a tag with slug maxlength 191
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$paragraph" with length "191"
#   And I write tag color apriori "#color"
#   And I write tag slug "$paragraph_2" with length "191"
#   And I write tag description "$paragraph_3"
#   And I click on the tag save button
#  # Then I see the button Retry
#  Then I see the button saved

 
#    @user6 @web
# Scenario: Create a tag with slug exceed maxlength 191
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$name"
#   And I write tag color apriori "#color"
#   And I write tag slug "$paragraph_2" with length "192"
#   And I write tag description "$paragraph_3"
#   And I click on the tag save button
#  Then I see the button saved


#   @user7 @web
# Scenario: Create a tag with Description maxlength 500 
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$name"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#slug"
#   And I write tag description apriori "#descripton" with length "500"
#   And I click on the tag save button
#   Then I see the button saved

#   @user8 @web
# Scenario: Create a tag with Description exceed maxlength 500 
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$name"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#slug"
#   And I write tag description apriori "#description" with length "501"
#   And I click on the tag save button
#   Then I see error message3 "Description cannot be longer than 500 characters."


#   @user9 @web
# Scenario: Create a tag with Description empty
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name "$name"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#slug"
#   And I write tag description apriori "#vacio"
#   And I click on the tag save button
#   Then I see the button saved

#   @user10 @web
# Scenario: Create a tag with name empty
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "#vacio"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#slug"
#   And I write tag description apriori "#vacio"
#   And I click on the tag save button
#   Then I see error message4 "You must specify a name for the tag."


#   @user11 @web
# Scenario: Create a tag with  empty slug
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#vacio"
#   And I write tag description apriori "#name"
#   And I click on the tag save button
#   Then I see the button saved

#  @user12 @web
# Scenario: Create a tag with only number name
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "$numbers"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#name"
#   And I write tag description apriori "#name"
#   And I click on the tag save button
#   Then I see the button saved


#  @user13 @web
# Scenario: Edit tag with only number name
# Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button3
#   And I write tag name apriori "$numbers"
#   And I write tag color apriori "#color"
#   And I write tag slug apriori "#name"
#   And I write tag description apriori "#name"
#   And I click on the tag save button
#   Then I see the button saved


#  @user14 @web
#   Scenario: Edit a tag with valid data successfuly
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "500"
#   And I click on the tag save button
#   Then I see the button saved


#  @user15 @web
#   Scenario: create tag with metadata successfuly
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Meta data expand button 
#   And I wait for 2 seconds
#   And I write tagMeta name apriori "#description" with length "70"
#     And I wait for 2 seconds
#   And I click on the tag save button
#     And I wait for 2 seconds
#   Then I see the button saved

  #  @user16 @web
  # Scenario: create tag with metadata title exceed maxlength
  # Given I navigate to page "<URL_GHOST>"
  # And I write my email "<ADMIN_EMAIL>"
  # And I enter password "<ADMIN_PASSWORD>"
  # And I click on the login button
  # And I wait for 2 seconds
  # And I click on tags option menu list
  # And I wait for 2 seconds
  # When I see a first list of tags
  # And I write tag name apriori "#name"
  # And I write tag color apriori "#color"
  # And I write tag description apriori "#description" with length "50"
  # And I click on the Meta data expand button 
  # And I wait for 2 seconds
  # And I write tagMeta name apriori "#description" with length "301"
  #   And I wait for 2 seconds
  # And I click on the tag save button
  #   And I wait for 2 seconds
  # Then I see the button Retry



  # @user17 @web
  # Scenario: create tag with metadata description in maxlength
  # Given I navigate to page "<URL_GHOST>"
  # And I write my email "<ADMIN_EMAIL>"
  # And I enter password "<ADMIN_PASSWORD>"
  # And I click on the login button
  # And I wait for 2 seconds
  # And I click on tags option menu list
  # And I wait for 2 seconds
  # When I see a first list of tags
  # And I write tag name apriori "#name"
  # And I write tag color apriori "#color"
  # And I write tag description apriori "#description" with length "50"
  # And I click on the Meta data expand button 
  # And I wait for 2 seconds
  # And I write tagMeta name apriori "#name" with length "10"
  # And I wait for 2 seconds
  # And I write tagMeta description apriori "#description" with length "500"
  # And I wait for 2 seconds
  # And I click on the tag save button
  #   And I wait for 2 seconds
  # Then I see the button saved


# @user18 @web
#   Scenario: create tag with metadata description exceed maxlength
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Meta data expand button 
#   And I wait for 2 seconds
#   And I write tagMeta name apriori "#name" with length "10"
#   And I wait for 2 seconds
#   And I write tagMeta description apriori "#description" with length "501"
#   And I wait for 2 seconds
#   And I click on the tag save button
#     And I wait for 2 seconds
#   Then I see the button Retry




# @user19 @web
#   Scenario: create tag with metadata description without name
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Meta data expand button 
#   And I wait for 2 seconds
#   And I write tagMeta name apriori "#vacio" with length "0"
#   And I wait for 2 seconds
#   And I write tagMeta description apriori "#description" with length "10"
#   And I wait for 2 seconds
#   And I click on the tag save button
#     And I wait for 2 seconds
#   Then I see the button saved


# @user20 @web
#   Scenario: create tag with canonical url metadata 
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Meta data expand button 
#   And I wait for 2 seconds
#   And I write tagMeta name apriori "#name" with length "10"
#   And I wait for 2 seconds
#   And I write tagMeta description apriori "#description" with length "10"
#   And I wait for 2 seconds
#   And I write tagCanonicalUrl description apriori "#image" with length "50"
#   And I wait for 2 seconds
#   And I click on the tag save button
#     And I wait for 2 seconds
#   Then I see the button saved



# @user21 @web
#   Scenario: create tag with special characters in title metadata 
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Meta data expand button 
#   And I wait for 2 seconds
#   And I write tagMeta name apriori "#slug" with length "50"
#   And I wait for 2 seconds
#   And I write tagMeta description apriori "#description" with length "10"
#   And I wait for 2 seconds
#   And I click on the tag save button
#     And I wait for 2 seconds
#   Then I see the button saved



# @user22 @web
#   Scenario: create tag with  code injection maxlenght 65535 
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Code injection expand button 
#   And I write tag header apriori "#description" with length "65535"
#     And I wait for 10 seconds
  
#   And I click on the tag save button
#     And I wait for 2 seconds
#   Then I see the button saved


  

# @user23 @web
#   Scenario: create tag with  code injection maxlenght 65535 
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the Code injection expand button 
#   And I write tag header apriori "#description" with length "65535"  
#   And I click on the tag save button
#    And I wait for 2 seconds
#   Then I see the button saved

#   @user24 @web
#   Scenario: create tag with  twitter card maxlength 300
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the twitter card expand button 
#   And I write tag twitter title apriori "#description" with length "300"  
#   And I click on the tag save button
#    And I wait for 2 seconds
#   Then I see the button saved


#     @user25 @web
#   Scenario: create tag with  twitter card exceed maxlength 300
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the twitter card expand button 
#   And I write tag twitter title apriori "#description" with length "301"  
#   And I click on the tag save button
#    And I wait for 2 seconds
#   Then I see the button Retry

#       @user26 @web
#   Scenario: create tag with twitter card  description with maxlength 500
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the twitter card expand button 
#   And I write tag twitter title apriori "#name" with length "10"
#   And I write tag twitter description apriori "#description" with length "500"  
#   And I click on the tag save button
#    And I wait for 2 seconds
#   Then I see the button saved

  
#       @user27 @web
#   Scenario: create tag with twitter card  description exceed maxlength 500
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the twitter card expand button 
#   And I write tag twitter title apriori "#name" with length "10"
#   And I write tag twitter description apriori "#description" with length "501"  
#   And I click on the tag save button
#    And I wait for 2 seconds
#   Then I see the button Retry


 
#    @user28 @web
#   Scenario: create tag with twitter card with invalid characters
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds
#   When I click on tags option menu
#   And I click on the new tag button
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the twitter card expand button 
#   And I write tag twitter title apriori "#slug" 
#   And I wait for 1 seconds
#   And I write tag twitter description apriori "#slug"  
#   And I click on the tag save button
#    And I wait for 2 seconds
# Then I see the button saved




#    @user29 @web
#   Scenario: modify tag with twitter card with empty title
#   Given I navigate to page "<URL_GHOST>"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#  And I click on the login button
#   And I wait for 2 seconds
#   And I click on tags option menu list
#   And I wait for 2 seconds
#   When I see a first list of tags
#   And I write tag name apriori "#name"
#   And I write tag color apriori "#color"
#   And I write tag description apriori "#description" with length "50"
#   And I click on the twitter card expand button 
#   And I write tag twitter title apriori "#vacio" 
#   And I wait for 1 seconds
#   And I write tag twitter description apriori "#slug"  
#   And I click on the tag save button
#    And I wait for 2 seconds
# Then I see the button saved



   @user30 @web
  Scenario: modify tag with twitter card with empty description
  Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
  And I wait for 2 seconds
  And I click on tags option menu list
  And I wait for 2 seconds
  When I see a first list of tags
  And I write tag name apriori "#name"
  And I write tag color apriori "#color"
  And I write tag description apriori "#description" with length "50"
  And I click on the twitter card expand button 
  And I write tag twitter title apriori "#name" 
  And I wait for 1 seconds
  And I write tag twitter description apriori "#vacio"  
  And I click on the tag save button
   And I wait for 2 seconds
Then I see the button saved