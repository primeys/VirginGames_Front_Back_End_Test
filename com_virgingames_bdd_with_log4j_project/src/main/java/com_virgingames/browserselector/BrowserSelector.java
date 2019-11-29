package com_virgingames.browserselector;

import com_virgingames.basepage.BasePage;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


/**
 * Created by Yatin Suvagia
 */
public class BrowserSelector extends BasePage {

    private static Logger log = LogManager.getLogger(BrowserSelector.class.getName());

    String projectPath = System.getProperty("user.dir");

    public void selectBrowser(String browser){
        if(browser.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.driver",projectPath +"\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
        }else if (browser.equalsIgnoreCase("fireFox")){
            System.setProperty("webdriver.geco.driver",projectPath+"\\drivers\\geckodriver.exe");
            driver = new FirefoxDriver();
        }else {
            System.out.println("wrong browser name");
        }
    }
}
