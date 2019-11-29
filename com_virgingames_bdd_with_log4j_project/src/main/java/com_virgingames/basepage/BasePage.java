package com_virgingames.basepage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Yatin Suvagia
 */
public class BasePage {
public static WebDriver driver;

public BasePage(){
    PropertyConfigurator.configure(System.getProperty("user.dir") + "\\src\\test\\java\\com_virgingames\\propertiesfile\\log4j.properties");
    PageFactory.initElements(driver,this);
}

}
