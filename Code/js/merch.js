$(document).ready(function () {
    if ($(window).width() > 480) {
        $(".extra").slideUp(1);

        $(".item").hover(function () {
            $(this).find(".extra").slideDown(1000);
        }, function () {
            $(this).find(".extra").slideUp(1000);
        });
    }
    $(window).resize(function() {
        
    });
    var discription = false;
    $(".btn-info").click(function () {
        if (discription) {
            $(this).parent().parent().parent().find(".info").slideUp(1000);
            discription = false;
        } else {
            $(this).parent().parent().parent().find(".info").slideDown(1000);
            discription = true;
        }
    });
    $(".order").click(function () {
        window.location = "orderForm.html?item=" + $(this).parent().parent().parent().parent().find(".main").find("p").html()
    });

});
