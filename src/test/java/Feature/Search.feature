Feature: Search for a dress

   @search
  Scenario: search
    Given User is on Automation practice website
     When user search for "blue dress"
      And user select the first blue dress from list
   #  Then list of blue dresses displayed
      #  When user select the first blue dress
     Then blue dress is displayed

