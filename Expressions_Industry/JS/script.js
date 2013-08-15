/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/13/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */
var name = prompt("What is your name?");    /** Asks the user for their name */
var packs = prompt("How many packs come in a case?");
var average = prompt("How many cases do you sell on average?");
var special = prompt("Is there a special deal on them? Please enter Yes or No");
var buyone = prompt ("Are they buy one get one free? Please enter Yes or No");

if (special == 'Yes')
{
    special = 3;
}

else
{
special = 1;
}

if (buyone == 'Yes')
{
    buyone = 2;
}

else
{
    buyone = 1;
}

var packAv = packs * average;
var total = packAv * special * buyone;
alert(name + ", you will need " + total + " packs" )