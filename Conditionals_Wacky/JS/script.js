/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/22/13
 * Time: 8:35 AM
 * To change this template use File | Settings | File Templates.
 */

function begin()
{
    var start = prompt("You enter the maze and have several options in front of you,\n please choose \"Forward\", \"Left\", or \"Right\"");
    if (start == "Forward")
    {
        alert("You have reached a dead end, you return to the beginning.");
        begin();
    }
    else if(start == "Left")
    {
        function intersect1()
        {
            var start2 = prompt("You came to an intersection,\n please choose \"Forward\", \"Left\", or \"Right\"");
            if(start2 == "Forward")
            {
                alert("You have reached a dead end, you return to the last intersection.");
                intersect1();

            }
            else if(start2 == "Left")
            {
                alert("You have reached a dead end, you return to the last intersection.");
                intersect1();

            }
            else if(start2 == "Right")
            {
                function intersect2()
                {
                    var start3 = prompt("You came to an intersection, \n please choose \"Forward\", \"Left\", or \"Right\"");
                    if (start3 =="Forward")
                    {
                        function intersect3()
                        {
                            var start4 = prompt("You come to an intersection, \n please choose \"Forward\", \"Left\", or \"Right\"");
                            if(start4 == "Forward")
                            {
                                   function intersect4()
                                   {
                                    var start5 = prompt("You come to an intersection, \n please choose \"Forward\", \"Left\", or \"Right\"");
                                       if(start5 == "Forward")
                                       {
                                           alert("You have reached a dead end, you return to the last intersection.");
                                           intersect4();
                                       }
                                       else if(start5 == "Left")
                                       {
                                           alert("You have reached a dead end, you return to the last intersection.");
                                           intersect4();
                                       }
                                       else if(start5 == "Right")
                                       {
                                           function intersect5()
                                           {
                                                var start6 = prompt("You come to an intersection, \n please choose \"Forward\", \"Left\", or \"Right\"");
                                               if(start6 == "Forward")
                                               {
                                                   function deadend1()
                                                   {
                                                       var wrongway = prompt("You come to an intersection, \n please choose \"Forward\", \"Left\", or \"Right\"");
                                                   }
                                               }
                                           }
                                           intersect5();
                                       }
                                       else
                                       {
                                           alert("You did not choose a correct option, please try again.");
                                           intersect4();
                                       }
                                   }
                                   intersect4();
                            }
                            else if(start4 == "Left")
                            {
                                alert("You have reached a dead end, you return to the last intersection.");
                                intersect3();
                            }
                            else if(start4 == "Right")
                            {
                                alert("You have reached a dead end, you return to the last intersection.");
                                intersect3();
                            }
                            else
                            {
                                alert("You did not choose a correct option, please try again.");
                                intersect3();
                            }
                        }
                        intersect3();
                    }
                    else if (start3 == "Left")
                    {
                        alert("You have reached a dead end, you return to the last intersection.");
                        intersect2();
                    }
                    else if (start3 == "Right")
                    {
                        alert("You have reached a dead end, you return to the last intersection.");
                        intersect2();
                    }
                }
                intersect2();
            }
            else
            {
                alert("You did not choose a correct option, please try again.");
                intersect1();

            }
        }
        intersect1();
    }
    else if(start == "Right")
    {
        alert("You have reached a dead end, you return to the beginning.");
        begin();
    }
    else
    {
        alert("You did not choose a correct option, please try again.");
        begin();
        return;
    }
}