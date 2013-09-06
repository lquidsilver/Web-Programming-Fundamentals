/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 9/5/13
 * Time: 8:24 AM
 * To change this template use File | Settings | File Templates.
 */
var rolls1 = firstroll();

function firstroll()
{

    var roll1 = Math.floor((Math.random()*6)+1);
    var roll2 = roll1;
    document.getElementById("slot1").value = roll2;   //*Get an error here, value returns as null?*//
    if(roll1 == "1")
    {
        roll1="one";
    }
    else if(roll1 == "2")
    {
        roll1="two";
    }
    else if(roll1 == "3")
    {
        roll1="three";
    }
    else if(roll1 == "4")
    {
        roll1="four";
    }
    else if(roll1 == "5")
    {
        roll1="five";
    }
    else
    {
        roll1="six";
    }

   return roll1;

}
/*onclick, the values in the function change, but nothing outside the function changes, need a work around*/


console.log(rolls1);


