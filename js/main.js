$(document).ready(function() {
    if(screen.availHeight > 568){
        $('.SlideHeight1').css("height", screen.availHeight);
        $('.SlideHeight2').css("height", 2*screen.availHeight);
        $('.SlideHeight3').css("height", 3*screen.availHeight);
    }else{
        $('.SlideHeight1').css("height", 568);
        $('.SlideHeight2').css("height", 2*568);
        $('.SlideHeight3').css("height", 3*568);
        
    }
    $(".close_button").click(function(){
        $(".overlay").addClass("toggle_menu");
    }); 
    
    $(".open_menu").click(function(){
        $(".overlay").removeClass("toggle_menu");
    });
});