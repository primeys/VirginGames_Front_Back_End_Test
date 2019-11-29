package com_virgingames.testcucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Yatin Suvagia
 */
    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = ".",
            plugin = {"pretty","html:target/cucumber-report"}
            //tags = "@Sanity"
    )

public class  TestRunner{

    }

