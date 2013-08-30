/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/29/13
 * Time: 11:44 PM
 * To change this template use File | Settings | File Templates.
 */
function begin()
{
    var shoes = document.getElementById("shoes").value;
    var tunic = document.getElementById("tunic").value;
    var helmet = document.getElementById("helmet").value;
    document.getElementById("result").innerHTML ="You chose to wear the " +shoes+ " with your " +tunic+ " and " +helmet+ ". Looking good, have fun at your celebration Hero!";
}