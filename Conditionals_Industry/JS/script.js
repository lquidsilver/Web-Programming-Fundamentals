/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/21/13
 * Time: 8:45 PM
 * To change this template use File | Settings | File Templates.
 */

function begin()
{
    var sfdopt1 = prompt("Which seafood items would you like? Please type \"Fish\", \"Crab\", or \"Shrimp\" ");
    var fish1 = 7;
    var crab1 = 8;
    var shrimp1 = 5;
    var result
    if(sfdopt1 == "Fish" || "fish")
    {

        var moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
        if(moreopt1 == "Fish" || "fish")
        {
            var fish2 = fish1;
            var moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please not, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish" || "fish")
            {
                result = fish2;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab" || "crab")
            {
                result = fish2 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp" || "shrimp")
            {
                result = fish2 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
        }
        else if(moreopt1 == "Crab" || "crab")
        {

        }
    }
    else if(sfdopt1 == "Crab" || "crab")
    {

        var moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
    }
    else if (sfdopt1 == "Shrimp" ||"shrimp")
    {

        var moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
    }
    else
    {
        alert("Sorry, please choose a valid option.");
    }


}