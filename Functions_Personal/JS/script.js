/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/27/13
 * Time: 9:06 PM
 * To change this template use File | Settings | File Templates.
 */


function begin()
{
    var weight = document.getElementById("weight").value;
    var activity = document.getElementById("activity").value;
    var ounceweight = weight * 0.67;
    var ounceactivity = activity * 0.4;
    var total = ounceweight + ounceactivity;
    var result = Math.ceil(total * 10) / 10;
    document.getElementById("result").innerHTML = "The suggested amount of water you should consume is " +result+ " ounces of water a day.";

}



