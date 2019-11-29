Feature: LoginPage feature
  As a user I want to navigate to LoginPage successfully

  Scenario Outline: User should not login with invalid credentials
    Given I am on home page of virgin games
    And I click on Login link
    When I enter invalid username "<username>"
    And  I enter invalid password "<password>"
    And I click on Login button
    Then I could see error message

    Examples:
      | username | password |
      | jay1     | jay234   |
      | jay2     | jay567@$ |
      |          | jay234   |

