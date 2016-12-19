$(document).ready(function() {
    $('.SlideHeight1').css("height", screen.availHeight);
    $('.SlideHeight2').css("height", 2*screen.availHeight);
    $('.SlideHeight3').css("height", 3*screen.availHeight);
    
    
    $(".close_button").click(function(){
        $(".overlay").addClass("toggle_menu");
    }); 
    
    $(".open_menu").click(function(){
        $(".overlay").removeClass("toggle_menu");
    });
});