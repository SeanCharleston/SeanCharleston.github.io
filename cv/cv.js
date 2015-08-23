$(document).ready(function(){
    $(".parentText").click(function(){
        $(this).parent().find(".childText").slideToggle("slow");
    });
});