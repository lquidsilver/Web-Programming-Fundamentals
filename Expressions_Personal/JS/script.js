/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/13/13
 * Time: 1:26 PM
 * To change this template use File | Settings | File Templates.
 */

var name = prompt("What is your name?");
var daily = prompt( "How many ounces of water do you plan on drinking per day?");
var size = prompt("What is the ounce size of the bottles?");
var price = prompt("What is the price per pack?");
var pack = 24;
var week = 7;

var ouncePerWeek = daily * week;
var ouncePerPack = size * pack;
var amt = ouncePerWeek / ouncePerPack;
var amount = Math.ceil(amt);
var rawTotal = amount * price;
var total = parseFloat(Math.round(rawTotal * 100) / 100).toFixed(2);
alert(name + ", the number of 24 packs you would need is " + amount + " and will cost you $" + total)




