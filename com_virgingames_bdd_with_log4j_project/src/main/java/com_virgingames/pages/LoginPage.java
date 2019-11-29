package com_virgingames.pages;

import com_virgingames.utils.Utils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Yatin Suvagia
 */
public class LoginPage extends Utils {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//input[@id='field-username']")
    WebElement _userNameField;

    @FindBy(id = "field-password")
    WebElement _passwordField;

    @FindBy(xpath = "//button[@class='button button-login']")
    WebElement _loginLinkbtn;

    @FindBy(xpath = "//div[@class='output']")
    WebElement _errorMessageText;


    public void enterUserName(String userName){
        log.info("enter username");
        sendTextToElement(_userNameField,userName);
    }

    public void enterPassword(String password){
        log.info("enter password");
        sendTextToElement(_passwordField,password);
    }

    public void clickOnLoginBtn(){
        log.info("click on loginBtn");
        clickOnElement(_loginLinkbtn);
    }

    public boolean isErrorMessageDisplayed(){
        log.info("Error Message verification after login failed");
        return verifyThatElementIsDisplayed(_errorMessageText);
    }

}
