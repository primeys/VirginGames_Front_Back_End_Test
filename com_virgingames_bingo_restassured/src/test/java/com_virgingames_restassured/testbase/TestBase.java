package com_virgingames_restassured.testbase;

import io.restassured.RestAssured;
import org.junit.BeforeClass;

/**
 * Created by Yatin Suvagia
 */
public class TestBase {

    @BeforeClass
    public static void inIt() {
        RestAssured.baseURI = "https://www.virgingames.com/bingo";
        RestAssured.basePath = "/GetBingoLobbyFeed.do";
    }
}
