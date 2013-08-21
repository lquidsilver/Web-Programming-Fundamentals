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
            if(cashopt1 > 7.98)
            {
                var dif = 7.98 - cashopt1;
                alert ("You did not give enough, please give at least $7.98");
            }
            else if(cashopt1 == 7.98)
            {
                alert ("Thank you for your payment!");
            }


    }
}