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
        return;
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
                return;
            }
            else if(start2 == "Left")
            {
                alert("You have reached a dead end, you return to the last intersection.");
                intersect1();
                return;
            }
            else if(start2 == "Right")
            {
                function intersect2()
                {
                    var start3 = prompt("You came to an intersection, \n please choose \"Forward\", \"Left\", or \"Right\"");

                }
            }
            else
            {
                alert("You did not choose a correct option, please try again.");
                intersect1();
                return;
            }
        }
    }
    else if(start =="Right")
    {
        alert("You have reached a dead end, you return to the beginning.");
        begin();
        return;
    }
    else
    {
        alert("You did not choose a correct option, please try again.");
        begin();
        return;
    }
}