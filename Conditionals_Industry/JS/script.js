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
    if(sfdopt1 == "Fish" || "fish")
    {
        var fish1 = 7;
    }
    else if(sfdopt1 == "Crab" || "crab")
    {
        var crab1 = 8;
    }
    else if (sfdopt1 == "Shrimp" ||"shrimp")
    {
        var shrimp1 = 5;
    }
    else
    {
        alert("Sorry, please choose a valid option.");

    }
    var moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
    var moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please not, there is a maximum of 3 orders at a time!");
}