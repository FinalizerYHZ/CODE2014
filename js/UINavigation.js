
var currentScreenId;// home screen = 0
                    //showcase1 = 1
                    //showcase2 = 2


function initilNavConditions()
{
    currentScreen =0;
    $("#selection").show();
    $("#showcase1").hide();
    $("#showcase2").hide();
    $("#selection").attr("id") = "currentView";
}
function changeScreenView(newSID)
{
    if(newSID !==currentScreenId && newSID ==0)
    {
        currentScreenId = newSID;
        $("#currentView").hide(500);
        $(".selection").show(500);
    }
    else if(newSID !==currentScreenId && newSID ==0)
    {
        currentScreenId = newSID;
        $("#currentView").hide(500);
        $(".showcase2").show(500);
    }
    else if(newSID !==currentScreenId && newSID ==0)
    {
        currentScreenId = newSID;
        $("#currentView").hide(500);
        $(".showcase1").show(500);
    }
}