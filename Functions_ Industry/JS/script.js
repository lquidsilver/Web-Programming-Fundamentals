/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/29/13
 * Time: 10:51 PM
 * To change this template use File | Settings | File Templates.
 */

function begin()
{
    var butter = document.getElementById("butter");
    var wrap = document.getElementById("wrap");
    var season = document.getElementById("season");
    (function (msg){alert(msg)})('Thank you for your order!');
    document.getElementById("result").innerHTML ="You asked for " +butter+ " on your seafood with " +wrap+ " and " +season+ " seasoning.";
}