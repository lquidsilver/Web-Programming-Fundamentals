/**
 * Created with JetBrains WebStorm.
 * User: Arif Michael Wright
 * Date: 8/20/13
 * Time: 10:08 PM
 * Assignment: Conditionals_Personal
 * To change this template use File | Settings | File Templates.
 */

function begin()
{
   var payment = prompt("How are we paying today? Please enter, \"Cash\", \"Credit\", \"Debit\", or \"Check\" ");
    if(payment == "Cash")
    {
        var cashopt1 = prompt("The total is $7.98, what is the exact amount you give?\n **Please do not include the $ symbol**");
            if(cashopt1 < 7.98)
            {
                var dif = 7.98 - cashopt1;
                alert ("You did not give enough, please give at least $7.98");
            }
            else if(cashopt1 == 7.98)
            {
                alert ("Thank you for your payment!");
            }
            else
            {
                var dif1 = cashopt1 - 7.98;
                alert ("You gave " +cashopt1+ ", your change will be " +dif1+ ". \n Thank you!");
            }
    }
    else if(payment =="Credit")
    {
        var cardopt1 = prompt("The total is $7.98, are you sure you want to use your credit card? \n Please choose, \"Yes\" or \"No\"");
        if(cardopt1 == "Yes" || "yes")
        {
            prompt("Thank you, please enter your name as an electronic signature");
            alert("Thank you, signature received!");
        }

        else if(cardopt1 == "No" || "no")
        {
            alert("You chose not to use your credit card, please start over");
        }

        else
        {
            alert("You did not choose \"Yes\" or \"No\", please start over");
        }
    }
    else if(payment == "Debit")
    {
        var debitopt1 = prompt("The total is $7.98, are you sure you want to use your debit card? \n Please choose, \"Yes\" or \"No\"");
        if(debitopt1 == "Yes" || "yes")
        {
            var debitopt2 = prompt("Thank you, please enter your 4 digit pin");
            debitopt3 = (debitopt2 < 1000 && debitopt2 > 10000) ? alert("You did not enter a valid pin, please start over") : prompt("Thank you, would you like cash back? \n Please choose \"Yes\" or \"No\"");
            if(debitopt3 == "Yes" || "yes")
            {
                var debitopt4 = prompt("How much cash back would you like? \n **Do not add a $ sign**");
                if(debitopt4 == 0)
                {
                    alert("You selected \"No\", so no cash back is given");
                }
                else
                {
                    alert("You requested $" +debitopt4+ ", thank you!");
                }
            }
            else if(debitopt3 == "No" || "no")
            {
                alert("Payment received and no cash back was requested, thank you!");
            }
            else
            {
                alert("You did not choose a valid option, so no cash back will be given");
            }
        }
        else if(debitopt1 == "No" || "no")
        {
            alert("You chose not to use your debit card, please start over");
        }
        else
        {
            alert("You did not choose \"Yes\" or \"No\", please start over");
        }
    }
    else if(payment == "Check")
    {
        var checkopt1 = prompt("After filling out the check please sign it by entering your name here.");
        if(checkopt1 == "")
        {
            alert("You did not enter a name, please start over");
        }
        else
        {
            alert("Your payment was received, thank you!");
        }
    }
    else
    {
        alert("You did not type a valid payment option, please start over.");
    }
}
