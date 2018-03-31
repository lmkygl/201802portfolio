(function () {
    var screen_lim = 767;

    function mobile_check() {
        if (window.innerWidth < screen_lim) {
            window.mobile_check = true;
        } else {
            window.mobile_check = false;
        }
    }

    $(window).on('resize load', mobile_check);
}());
