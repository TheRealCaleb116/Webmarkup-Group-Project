$(document).ready(function(){
    if($(window).width() > 480) {
        $(".extra").slideUp(1);
        
        $(".item").hover(function(){
            $(this).find(".extra").slideDown(1000);
            $(this).find("br").slideUp(1000);
        },function(){
            $(this).find(".extra").slideUp(1000);
            $(this).find("br").slideDown(1000);
        });
    }
    
});