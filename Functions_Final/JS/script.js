/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 9/5/13
 * Time: 8:24 AM
 * To change this template use File | Settings | File Templates.
 */

var first = prompt("Please enter your first name");
    if (first == "") {
        alert("No first name entered, please refresh and try again.");
        }
    else if (parseFloat(first) && isFinite(first)) { /*Checks to make sure you aren't only using a number for your first name*/
        alert("Your first name cannot be a number, please refresh and try again.");
        }
    else {
        var middle = prompt("Please enter your middle name");
            if (parseFloat(middle) && isFinite(middle)) { /*Checks to make sure you aren't only using a number for your middle name*/
                alert("Your middle name cannot be a number, please refresh and try again.");
                }
            else {
                var last = prompt("please enter your last name");
                    if (last == null) {
                        alert("No last name entered, please refresh and try again.");
                        }
                    else if (parseFloat(last) && isFinite(last)) { /*Checks to make sure you aren't only using a number for your last name*/             alert("Your last name cannot be a number, please refresh and try again.");
                        }
                 }
        }
var fullname = name(first, middle, last);

function name(first, middle, last) {                            /* function with three parameters, that asks for first middle and last name for later use in the scorecard */

    var full = first+" "+middle+" "+last;
    return full;  /*returning full name*/
}

function rollDie(id) {                                      /*function is called based on the parameter's id in html*/

    function doRoll() {
        return Math.floor((Math.random()*6)+1);    /*returning a random number*/
    }

    console.log(id);

    var elem = document.getElementById(id);
    if (elem == null)
    {
        alert("Error, please try again");
    }
    else
    {
    elem.value = doRoll();

    document.getElementById("pic"+id).innerHTML = "<img src='images/"+elem.value+".gif' />";
    }
    var slot1 = Number(document.getElementById("slot1").value);
    var slot2 = Number(document.getElementById("slot2").value);
    var slot3 = Number(document.getElementById("slot3").value);
    var slot4 = Number(document.getElementById("slot4").value);
    var slot5 = Number(document.getElementById("slot5").value);
    var slot6 = Number(document.getElementById("slot6").value);

    var total = slot1+slot2+slot3+slot4+slot5+slot6 ;
    console.log("value is" +total);
    document.getElementById("scorecard").innerHTML = fullname +"'s Scorecard";
    document.getElementById("score").innerHTML = "Score total = " +total;
}



