$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com_virgingames/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage feature",
  "description": "As a user I want to navigate to LoginPage successfully",
  "id": "loginpage-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "loginpage-feature;user-should-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page of virgin games",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I could see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "jay1",
        "jay234"
      ],
      "line": 14,
      "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "jay2",
        "jay567@$"
      ],
      "line": 15,
      "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "jay234"
      ],
      "line": 16,
      "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12871749031,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page of virgin games",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid username \"jay1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid password \"jay234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I could see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePageOfVirginGames()"
});
formatter.result({
  "duration": 305425268,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1759021752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay1",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 262661168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay234",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 196308433,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 165008605,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iCouldSeeErrorMessage()"
});
formatter.result({
  "duration": 698572153,
  "status": "passed"
});
formatter.after({
  "duration": 669259486,
  "status": "passed"
});
formatter.before({
  "duration": 12843498832,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page of virgin games",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid username \"jay2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid password \"jay567@$\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I could see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePageOfVirginGames()"
});
formatter.result({
  "duration": 59466554,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1885882032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay2",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 169001568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay567@$",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 202973774,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 178043886,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iCouldSeeErrorMessage()"
});
formatter.result({
  "duration": 251759736,
  "status": "passed"
});
formatter.after({
  "duration": 713103478,
  "status": "passed"
});
formatter.before({
  "duration": 9971349856,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "loginpage-feature;user-should-not-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page of virgin games",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid password \"jay234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I could see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePageOfVirginGames()"
});
formatter.result({
  "duration": 67861341,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1888607491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 121561721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay234",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 236766874,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 159410999,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iCouldSeeErrorMessage()"
});
formatter.result({
  "duration": 136112497,
  "status": "passed"
});
formatter.after({
  "duration": 657244126,
  "status": "passed"
});
});