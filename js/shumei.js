$(function () {
    $(".shangpiboxup a").addClass("hot").triggerHandler();
    for (let i = 0; i < $(".shangpiboxdoen").length; i++) {
        $(".shangpiboxup a").eq(i).click(function () {
            $(".shangpiboxdoen").eq(i).css("z-index", "9999").siblings().css("z-index", "");
            $(this).addClass("hot");
        })
    }
        let a = $("nav li");


        a.eq(0).mouseenter(function () {
            $(".first").show();
            $("nav").css("height", $(".first").height())
        })
        a.eq(0).mouseleave(function () {
            $(".first").hide();
            $("nav").css("height", "auto")
        })
        a.eq(1).mouseenter(function () {
            $(".second").show();
            $("nav").css("height", $(".second").height())
        })
        a.eq(1).mouseleave(function () {
            $(".second").hide();
            $("nav").css("height", "auto")
        })

});

