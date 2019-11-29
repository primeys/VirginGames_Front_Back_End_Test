package com_virgingames_restassured.gameinfo;

import com_virgingames_restassured.testbase.TestBase;
import org.junit.Test;

import static io.restassured.RestAssured.given;

/**
 * Created by Yatin Suvagia
 */
public class GamesDefaultFrequencyTest extends TestBase {

    @Test
    public void getDefaultGameFrequency() {

        int defaultGameFrequency;
        defaultGameFrequency = given()
                .queryParam("defaultGameFrequency", "300000")
                .queryParam("format", "json")
                .when()
                .get("/")
                .then().extract().path("defaultFrequency");

        System.out.println("------------------StartingTest---------------------------");
        System.out.println("The Default GameFrequency: " + defaultGameFrequency );
        System.out.println("------------------End of Test---------------------------");

    }
}
