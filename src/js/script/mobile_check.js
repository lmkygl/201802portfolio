(function () {
    var screen = 767;

    function moblie__check() {
        if (window.innerWidth < screen) {
            window.moblie__check = true;
        } else {
            window.moblie__check = false;
        }
    }

    $(window).on('resize load', moblie__check);
}());