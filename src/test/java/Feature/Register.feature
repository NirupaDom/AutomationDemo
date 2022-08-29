Feature: Create an account and signout

  @Register
  Scenario Outline: Register and activate account
    Given User is on Automation practice website
      And user select signin button
     Then create an acccount page is displayed
     When user enter valid email "try40@gmail.com" and select create an account
      And user provide the personal information "<firstname>" "<lastname>" "<password>" "<address>" "<city>" "<state>" "<postcode>" "<phone>" "<alias>"
      And user click on register button
     Then account details page is displayed

    Examples:
      |firstname  |lastname  |password	|address		  |city   | state      |postcode  |phone			 |alias|
      |debbie	  |mortimer  |Welcome99 |63 Barrossa way  |Edison | New Jersey | 81345    |0017323334602	 |home |

