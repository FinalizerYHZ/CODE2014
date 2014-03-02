var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
];
$(function() {
    $( "#vehMake" ).autocomplete({
      source: availableTags
    });
    $( "#year" ).autocomplete({
      source: availableTags
    });
    $( "#model" ).autocomplete({
      source: availableTags
    });
    $( "#type" ).autocomplete({
      source: availableTags
    });
});
$(document).ready(function(){
    
    $("#form").submit(function(){
        if($("#vehMake").val().length !=0 ||$("#year").val().length !=0 ||$("#model").val().length !=0 ||$("#type").val().length !=0)
        {
            $.post("query.php",$("#form").serialize(),function(data){
                $("#dataFromDB").html(data);
            });
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
        for(var i=0;i<availableTags.length;i++)
            if($("#vehMake").val() === availableTags[i])
            {
                return true;
            }
        }
        return false;
    }
    if($("#year").val() !=0)
    {
        for(var i=0;i<availableTags.length;i++)
            if($("#year").val() === availableTags[i])
            {
                return true;
            }
        }
        return false;
    }
    if($("#model").val() !=0)
    {
        for(var i=0;i<availableTags.length;i++)
            if($("#model").val() === availableTags[i])
            {
                return true;
            }
        }
        return false;
    }
    if($("#type").val() !=0)
    {
        for(var i=0;i<availableTags.length;i++)
            if($("#type").val() === availableTags[i])
            {
                return true;
            }
        }
        return false;
    }
}
