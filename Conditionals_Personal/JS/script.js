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
                var dif1 = cashopt1 - 7.98
                alert ("You gave " +cashopt1+ ", your change will be " +dif1+ ". \n Thank you!");
            }
    }
    else if(payment =="Credit")
    {
        var cardopt1 = prompt("The total is $7.98, are you sure you want to use your credit card? \n Please choose, \"Yes\" or \"No\"");
        if(cardopt1 == "Yes")
        {
            prompt("Thank you, please enter your name as an electronic signature");
        }
        else if(cardopt1 == "yes")
        {
            prompt("Thank you, please enter your name as an electronic signature");
        }
        else if(cardopt1 == "No")
        {
            alert("You chose not to use your credit card, please start over");
        }
        else if(cardopt1 == "no")
        {
            alert("You chose not to use your credit card, please start over");
        }
        else
        {
            alert("You did not choose \"Yes\" or \"No\", please start over");
        }
    }
    else if(payment =="Debit")
    {
        var debitopt1 = prompt("The total is $7.98, are you sure you want to use your debit card? \n Please choose, \"Yes\" or \"No\"");
        if(debitopt1 == "Yes")
        {

        }
    }
}