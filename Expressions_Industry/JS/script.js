/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/13/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */
var name = prompt("What is your name?");    /** Asks the user for their name */
var packs = prompt("How many packs come in a case?"); /** Asks the user for the number of packs in a case*/
var average = prompt("How many cases do you sell on average?");   /** Asks for an average amount sold*/
var special = prompt("Is there a special deal on them? Please enter Yes or No"); /* Yes or No question that asks if there is a special going on for them*/
var buyone = prompt ("Are they buy one get one free? Please enter Yes or No");  /* Yes of No question that asks if the product is buy one get one free*/

if (special == 'Yes')  /* if statement that says if the user answers Yes to the prompt in var special then special equals 3 */
{
    special = 3;  /* usually if an item is on special you go through 3 times the normal amount*/
}

else  /* else statement that says if user doesn't say Yes then special equals 1 */
{
special = 1;
}

if (buyone == 'Yes') /*if statement that says if the user answers Yes to the prompt in var buyone then buyone equals 2 */
{
    buyone = 2; /*when an item is buy one get one you go through twice the normal amount*/
}

else /* else statement that says if the user doesn't say Yes then buyone equals 1 */
{
    buyone = 1;
}

var packAv = packs * average; /* multiples the amount per case by the average case amount sold to give us the average pack amount sold*/
var total = packAv * special * buyone; /* multiplies the pack amount by special amount then by the buyone get one amount to get the total amount of packs needed */
alert(name + ", you will need " + total + " packs" ) /* greets the user and tells them the number of packs they will need. */