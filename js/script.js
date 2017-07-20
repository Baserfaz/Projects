$(document).ready(function(){

    // hide both projects 
    $("#project01").hide();
    $("#project02").show();

    // project "buttons"
    $("#show_project_01").click(function(){
        $("#project02").slideUp("slow", function(){
            $("#project01").slideDown();
        });
    });

    $("#show_project_02").click(function(){
        $("#project01").slideUp("slow", function() {
            $("#project02").slideDown(); 
        });
    });

});