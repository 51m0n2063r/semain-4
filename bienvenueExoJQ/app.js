
function firtsLast()
{
    var idpers=[$("#first_name").val(),$("#last_name").val(),$("#city").val()];
    console.log(idpers);
    $("#username").text($("#first_name").val()+" "+$("#last_name").val());
    if($("#first_name").val() === "#" || $("#last_name").val() === "#"){
        $("#username").text("Stranger");
    }
}
$( "input" ).on ("change keyup paste",firtsLast);
