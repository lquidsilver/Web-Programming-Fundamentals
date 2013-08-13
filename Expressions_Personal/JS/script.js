/**
 * Created with JetBrains WebStorm.
 * User: Mike
 * Date: 8/13/13
 * Time: 1:26 PM
 * To change this template use File | Settings | File Templates.
 */

function add()
{
    var inp1 = $("#inp1").val();
    var inp2 = $("#inp2").val();
    if(inp1=="" || inp2=="")
    {
        alert("Enter all input fields");
        return false;
    }
    else
    {
        var resl = parseFloat(inp1) + parseFloat(inp2);
        $("#resl").val(resl);
    }
}



