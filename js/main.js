$(document).ready(function() {
    if(screen.availHeight > 568 && window.innerHeight < 1281){
        $('.SlideHeight1').css("height", window.innerHeight);
        $('.SlideHeight2').css("height", 2*window.innerHeight);
        $('.SlideHeight3').css("height", 3*window.innerHeight);
        
    }
    else{
        $('.SlideHeight1').css("height", 568);
        $('.SlideHeight2').css("height", 2*568);
        $('.SlideHeight3').css("height", 3*568);
    };
    
    $(".close_button").click(function(){
        $(".overlay").addClass("toggle_menu");
    }); 
    
    $(".open_menu").click(function(){
        $(".overlay").removeClass("toggle_menu");
    });
    
    $(".overlay_menu li a").click(function(){
        $(".overlay").addClass("toggle_menu");
    }); 
});