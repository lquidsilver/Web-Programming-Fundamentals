/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/29/13
 * Time: 10:51 PM
 * To change this template use File | Settings | File Templates.
 */

function begin()
{
    var butter = document.getElementById("butter").value;
    var wrap = document.getElementById("wrap").value;
    var season = document.getElementById("season").value;
    (function (msg){alert(msg)})('Thank you for your order!');
    document.getElementById("result").innerHTML ="You asked for " +butter+ " on your seafood with " +wrap+ " and " +season+ " seasoning.";
}