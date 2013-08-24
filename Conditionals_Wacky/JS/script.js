/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/22/13
 * Time: 8:35 AM
 * To change this template use File | Settings | File Templates.
 */
   /* once the button is press in the browser the script begins*/
function begin()
{   /*Prompt that asks the user to move forward left or right*/
    var start = prompt("You enter the maze and have several options in front of you,\n please choose \"Forward\", \"Left\", or \"Right\"");
    if (start == "Forward")/*If the user moves forward they reach a dead end and runs the begin function again*/
    {
        alert("You have reached a dead end, you return to the beginning.");
        begin();  /*if the user picked the wrong way then this runs the begin function again;
    }
    else if(start == "Left")/*If the user moves left continues onto the next intersection of the maze, and again chooses forward left or right*/
    {
        function intersect1()/*have another function here so that there is a way to go back instead of having to retype code over and over*/
        {
            var start2 = prompt("You came to an intersection,\n please choose \"Forward\", \"Left\", or \"Right\"");/*another forward left or right prompt */
            if(start2 == "Forward")/*if moved forward you have reached a dead end and it runs the intersect1 function again*/
            {
                alert("You have reached a dead end, you return to the last intersection.");
                intersect1();

            }
            else if(start2 == "Left")/*Same as forward*/
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
                                                   alert("You have reached a dead end, you return to the last intersection.");
                                                   intersect5();
                                               }
                                               else if(start6 == "Left")
                                               {
                                                   alert("Congratulations, you made it through the maze!")
                                               }
                                               else if(start6 == "Right")
                                               {
                                                   alert("You have reached a dead end, you return to the last intersection.");
                                                   intersect5();

                                               }
                                               else
                                               {
                                                   alert("You did not choose a correct option, please try again.");
                                                   intersect5();
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
                    else
                    {
                        alert("You did not choose a correction option, please try again.")
                        intersect2();
                    }
                }
                intersect2();        /*Calling this function so that it will run*/
            }
            else
            {
                alert("You did not choose a correct option, please try again.");
                intersect1();

            }
        }
        intersect1();  /*calling this function so that it will run*/
    }
    else if(start == "Right")
    {
        alert("You have reached a dead end, you return to the beginning.");
        begin();                                             /*calling this function so that it will run*/
    }
    else
    {
        alert("You did not choose a correct option, please try again.");
        begin();
        return;
    }
}