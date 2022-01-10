
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

jQuery(document).ready(function ($) {

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    })

    var fixed_head = 85;
    $(window).scroll(function () {
        var window = $(this).scrollTop();
        if (fixed_head <= window) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });


});
jQuery(document).ready(function ($) {
    if (isMobile) {
        // header
        $("header .m-menu").click(function () {
            $(this).toggleClass("hide")
            $("header .open-menu").toggleClass("show");
        });

        // location-menu 
        $(".location-menu .selbox .head p").click(function () {
            $(this).parent().toggleClass("on")
            $(this).parent().next().toggleClass("show")

        });
}
});