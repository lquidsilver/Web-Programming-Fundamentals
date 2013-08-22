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
    var result = 0;
    var moreopt1;
    var moreopt2;
    if(sfdopt1 == "Fish")
    {

        moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
        if(moreopt1 == "Fish")
        {

            moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!1");
            if(moreopt2 == "Fish")
            {
                result = fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = fish1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 =="No")
            {
                result = fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did not type a valid option, please start over.");
            }
        }
        else if(moreopt1 == "Crab")
        {
            moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = fish1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = fish1 + crab1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "No")
            {
                result = fish1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did  not type a valid option, please start over");
            }
        }
        else if(moreopt1 == "Shrimp")
        {
            moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = fish1 + shrimp1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "No")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did  not type a valid option, please start over");
            }
        }
        else if(moreopt1 == "No")
        {
            result = fish1;
            alert("Your order will take approximately "+result+" minutes, thank you!");
        }
        else
        {
            alert("You did not type a valid option, please start over");
        }
    }
    else if(sfdopt1 == "Crab")
    {
          moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
        if(moreopt1 == "Fish")
        {

             moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = crab1 +fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = crab1 + shrimp1 + fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 =="No")
            {
                result = crab1 +fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did not type a valid option, please start over.");
            }
        }
        else if(moreopt1 == "Crab")
        {
            moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = crab1 +shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "No")
            {
                result = crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did  not type a valid option, please start over");
            }
        }
        else if(moreopt1 == "Shrimp")
        {
             moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = crab1 + shrimp1 +fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = shrimp1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = crab1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "No")
            {
                result = crab1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did  not type a valid option, please start over");
            }
        }
        else if(moreopt1 == "No")
        {
            result = crab1;
            alert("Your order will take approximately "+result+" minutes, thank you!");
        }
        else
        {
            alert("You did not type a valid option, please start over");
        }
    }
    else if(sfdopt1 == "Shrimp")
    {

         moreopt1 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\",\"Shrimp\", or \"No\"");
        if(moreopt1 == "Fish")
        {

             moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please not, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = fish1 + crab1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 =="No")
            {
                result = shrimp1 + fish1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did not type a valid option, please start over.");
            }
        }
        else if(moreopt1 == "Crab")
        {
             moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + crab1 +shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = shrimp1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = crab1 +shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "No")
            {
                result = shrimp1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did  not type a valid option, please start over");
            }
        }
        else if(moreopt1 == "Shrimp")
        {
            moreopt2 = prompt("Would you like anything else? Please type \"Fish\", \"Crab\", \"Shrimp\", or \"No\" \n **Please note, there is a maximum of 3 orders at a time!");
            if(moreopt2 == "Fish")
            {
                result = fish1 + shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Crab")
            {
                result = shrimp1 + crab1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "Shrimp")
            {
                result = shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else if(moreopt2 == "No")
            {
                result = shrimp1;
                alert("Your order will take approximately "+result+" minutes, thank you!");
            }
            else
            {
                alert("You did  not type a valid option, please start over");
            }
        }
        else if(moreopt1 == "No")
        {
            result = shrimp1;
            alert("Your order will take approximately "+result+" minutes, thank you!");
        }
        else
        {
            alert("You did not type a valid option, please start over");
        }
    }
    else
    {
        alert("Sorry, please choose a valid option.");
    }


}