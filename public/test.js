$(document).ready(function(){
    $.get("/name", function(resp){
        document.getElementById("slot").innerHTML = resp.name;
    })
});