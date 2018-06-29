$(function () {
    let a=$("nav li");

        a.eq(0).mouseenter(function () {
            $(".first").show();
            $("nav").css("height",$(".first").height())
        })
        a.eq(0).mouseleave(function () {
            $(".first").hide();
            $("nav").css("height","auto")
        })
    a.eq(1).mouseenter(function () {
        $(".second").show();
        $("nav").css("height",$(".second").height())
    })
    a.eq(1).mouseleave(function () {
        $(".second").hide();
        $("nav").css("height","auto")
    })
    });

