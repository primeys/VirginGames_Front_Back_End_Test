package com_virgingames.pages;

import com_virgingames.utils.Utils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Yatin Suvagia
 */
public class HomePage extends Utils {


    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'Login')]")
    WebElement _loginLink;

    @FindBy(xpath = "//div[@class='logo-container']//a//img")
    WebElement _virginLogo;

    public boolean homePageVerificationLogo(){
        log.info("homepage welcome text");
        verifyThatElementIsDisplayed(_virginLogo);
        return true;
    }

    public void clickOnLoginLink(){
        log.info("click on Login link");
        clickOnElement(_loginLink);
    }




}
