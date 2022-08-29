Feature: Login using the valid credentials
   Background:
     Given User is on Automation practice website

  @Login
  Scenario: Login into automation practice with valid credentials
       And user select signin button
      Then authentication page is displayed
      When user enter valid credentials "try2204@gmail.com" and "Welcome99"
       And user select Sign in
      Then account details page is displayed