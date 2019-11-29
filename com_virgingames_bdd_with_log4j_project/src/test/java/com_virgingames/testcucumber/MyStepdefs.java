package com_virgingames.testcucumber;

import com_virgingames.pages.HomePage;
import com_virgingames.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by Yatin Suvagia
 */
public class MyStepdefs {
    @Given("^I am on home page of virgin games$") //1
    public void iAmOnHomePageOfVirginGames() {
        new HomePage().homePageVerificationLogo();
    }

    @When("^I click on Login link$")//2
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Given("^I am on Login Page$")//3
    public void iAmOnLoginPage() {
    }

    @When("^I enter invalid username \"([^\"]*)\"$")//4
    public void iEnterUsername(String userName)  {
        new LoginPage().enterUserName(userName);

    }

    @And("^I enter invalid password \"([^\"]*)\"$")//5
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on Login button$")//6
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginBtn();
    }

    @Then("^I could see error message$")//7
    public void iCouldSeeErrorMessage() {
        Assert.assertTrue(new LoginPage().isErrorMessageDisplayed());
    }
}
