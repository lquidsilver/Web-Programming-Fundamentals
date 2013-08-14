/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/14/13
 * Time: 10:28 AM
 * To change this template use File | Settings | File Templates.
 */
document.write("<table width =100% height=100% border=1 valign=bottom class=dead_center><tr valign=middle height=100%><td valign=middle height=400px align=center>**Please Note: A Hydra is a multi-headed creature, there is only one way to truly kill it!**<br> One example would be to \"Cut off it\'s heads\"</td></tr></table>");

var headOne = prompt("How do you kill a hydra?");

if(headOne == "Cut off it\'s heads")
{
    var headTwo = 4;
    var headThree = headTwo * 2;
    var stat1 = prompt("The Hydra now has " + headThree +" heads, how do you kill it?")
                    if(stat1 == "Cut off it\'s heads")
                    {
                        var head4 = headThree * 2
                        var stat2 = prompt("The Hydra now has " + head4 + " heads, how do you kill it?")
                        if(stat2 == "Cut off it\'s heads")
                        {
                            var head5 = head4 * 2;
                            var stat3 = prompt("The Hydra now has " + head5 + " heads, how do you kill it?")
                             if (stat3 == "Cut off it\'s heads")
                             {
                                 var head6 = head5 * 2;
                                 var stat4 = prompt("The hydra now has " + head6 + " heads, how do you kill it?")
                                 if (stat4 == "Cut off it\'s heads")
                                 {
                                     var head7 = head6 * 2;
                                     var stat5 = prompt("The hydra now has " + head7 + " heads, it is probably a good time to \"Cut off it\'s heads and burn the nubs\" now!")
                                    if (stat5 == "Cut off it\'s heads")
                                    {
                                       alert("Sorry, the Hydra has way too many heads now, you would have died!")
                                    }
                                    else if (stat5 == "Cut off it\'s heads and burn the nubs")
                                    {
                                        alert("Congratulations! You killed the Hydra!");
                                    }
                                    else
                                    {
                                        alert("Sorry, you would have died!");
                                    }
                                 }
                                 else if (stat5 == "Cut off it\'s heads and burn the nubs")
                                 {
                                     alert("Congratulations! You killed the Hydra!");
                                 }
                                 else
                                 {
                                     alert("Sorry, you would have died!");
                                 }
                             }
                             else if (stat3 == "Cut off it\'s heads and burn the nubs")
                             {
                                 alert("Congratulations! You killed the Hydra!");
                             }
                             else
                             {
                                 alert("Sorry, you would have died!");
                             }
                        }
                        else if (stat2 == "Cut off it\'s heads and burn the nubs")
                        {
                            alert("Congratulations! You killed the Hydra!");
                        }
                        else
                        {
                            alert("Sorry, you would have died!");
                        }
                    }
                    else if (stat1 == "Cut off it\'s heads and burn the nubs")
                    {
                        alert("Congratulations! You killed the Hydra!");
                    }
                    else
                    {
                        alert("Sorry, you would have died!");
                    }
}
else if (headOne == "Cut off it\'s heads and burn the nubs")
{
    alert("Congratulations! You killed the Hydra!");
}
else
{
    alert("Sorry, you would have died!");
}