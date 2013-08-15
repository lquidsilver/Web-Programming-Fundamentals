/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/13/13
 * Time: 1:26 PM
 * To change this template use File | Settings | File Templates.
 */

var name = prompt("What is your name?");  /** Open's a prompt that asks the user for their name **/
var daily = prompt( "How many ounces of water do you plan on drinking per day?"); /**Prompt asks the user to enter how many bottles of water they plan to drink in a day*/
var size = prompt("What is the ounce size of the bottles?"); /**Prompt asks for the ounce size of the bottle*/
var price = prompt("What is the price per pack?"); /**Prompt asks for the price of a pack of water */
var pack = 24;    /** We already know that we are dealing with a 24 pack*/
var week = 7;     /** We know there are seven days in a week*/

var ouncePerWeek = daily * week;  /** We multiply the ounces of water we want to drink per day with the number of days in a week so that we an ounce value for the week*/
var ouncePerPack = size * pack; /** We multiply the ounce size of the bottles by the number of bottles in a pack, which is 24. This gives us the total amount in ounces per pack */
var amt = ouncePerWeek / ouncePerPack; /** We divide the goal ounces per week by the ounces per pack to get our exact amount of packs needed*/
var amount = Math.ceil(amt); /**This rounds the amount of packs to the nearest whole number since we can't buy a fraction of a pack*/
var rawTotal = amount * price; /**This multiplies the number of packs by the price of the packs to give you an exact total */
var total = parseFloat(Math.round(rawTotal * 100) / 100).toFixed(2); /* This rounds the total up to the nearest penny since sometimes the number can have several decimal places */
alert(name + ", the number of 24 packs you would need is " + amount + " and will cost you $" + total) /* This greets the client and tells them the number packs they will need and how much it will cost them */




