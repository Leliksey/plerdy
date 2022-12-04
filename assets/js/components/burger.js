window.onload = function() {
    $(".burger").click(function() {
        $(".menu").addClass("open");
    });
    $(".header__menu_close").on("click", function() {
        $(".menu").removeClass("open");
    });
};

$( window ).resize(function() {
    if ($(window).width() > 768) {
        
    }
});

