var makeTags = ['none'];
var yearTags=['none'];
var typeTags=['none'];
var modelTags=['none'];

$.ajax(
{
    type:'POST',
    async: false,
    url: 'vehMake.php',
    sucess : function(data)
    {
        makeTags = data.split(',');
    }
});
// $.ajax(
// {
//     type='POST',
//     async: false,
//     url: '../php/Year.php',
//     sucess : function(data)
//     {
//         yearTags = data.split(',');
//     }
// });
// $.ajax(
// {
//     type='POST',
//     async: false,
//     url: '../php/Type.php',
//     sucess : function(data)
//     {
//         typeTags = data.split(',');
//     }
// });
// $.ajax(
// {
//     type='POST',
//     async: false,
//     url: '../php/model.php',
//     sucess : function(data)
//     {
//         modelTags = data.split(',');
//     }
// });

$(function() {
    $( "#vehMake" ).autocomplete({
      source: makeTags
    });
    $( "#year" ).autocomplete({
      source: yearTags
    });
    $( "#model" ).autocomplete({
      source: modelTags
    });
    $( "#type" ).autocomplete({
      source: typeTags
    });
});
$(document).ready(function(){
    
    $("#form").submit(function(){
        if($("#vehMake").val().length !=0 ||$("#year").val().length !=0 ||$("#model").val().length !=0 ||$("#type").val().length !=0)
        {
            if(checkIfRightValue())
            {
                $.post("query.php",$("#form").serialize(),function(data){
                    $("#dataFromDB").html(data);
                });
            }
        }
        else
        {
            alert("Must choose at least one of the options to search for!");
        }
        return false;
    });

});

function checkIfRightValue()
{
    if($("#vehMake").val().length !=0)
    {
        for(var i=0;i<makeTags.length;i++)
        {
            console.log(makeTags[i])
            if($("#vehMake").val() === makeTags[i])
            {
                return true;
            
            }
        }
        alert("Option in Vehicle Make does not make values in data. Please try again");
        return false;
    }
    else if($("#model").val().length !=0)
    {
        for(var i=0;i<modelTags.length;i++)
        {
            if($("#model").val() === modelTags[i])
            {
                return true;
            
            }
        }
        alert("Option in Vehicle Make does not make values in data. Please try again");
        return false;
    }
    else if($("#type").val().length !=0)
    {
        for(var i=0;i<typeTags.length;i++)
        {
            if($("#type").val() === typeTags[i])
            {
                return true;
            
            }
        }
        alert("Option in Vehicle type does not make values in data. Please try again");
        return false;
    }
    else if($("#year").val().length !=0)
    {
        for(var i=0;i<yearTags.length;i++)
        {
            if($("#year").val() === yearTags[i])
            {
                return true;
            
            }
        }
        alert("Option in Year does not make values in data. Please try again");
        return false;
    }
}
