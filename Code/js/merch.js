$(document).ready(function(){
    if($(window).width() > 480) {
        $(".extra").slideUp(1);
        
        $(".item").hover(function(){
            $(this).find(".extra").slideDown(1000);
        },function(){
            $(this).find(".extra").slideUp(1000);
        });
        var discription = false;
        $(".header").click(function(){
            if(discription) {
                $(this).parent().find(".info").slideUp(1000);
                $(this).find("#arrow").text("\u25BC");
                discription = false;
            } else {
                $(this).parent().find(".info").slideDown(1000);
                $(this).find("#arrow").text("\u25B2");
                discription = true;
            }
        });
    }
    
});