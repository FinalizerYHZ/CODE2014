$(document).ready(function(){
    $("#form").submit(function(){
        $.post("query.php",$("#form").serialize(),function(data){
            $("#dataFromDB").html(data);
        });
        return false;
    });

});
