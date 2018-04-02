// hamburger button 클릭시 네비게이션 보임 
(function () {
    var $navi_btn = $('[data-ui="hamburger__btn"]');
    var $navi_list_area = $('[data-ui="navi__area"]');
    var $span_before = $('.span__before');
    var $span_after = $('.span__after');

    

    function navigation__click(e) {
        var leftVal;
        $(this).toggleClass('m_hamburgercloseactive');

        if (window.mobile_check) {
            leftVal = 0
        } else {
            leftVal = '5%'
        }

        if ($(this).hasClass('m_hamburgercloseactive')) {
            TweenMax.to($navi_list_area, 0.2, {
                left: leftVal
            });
            TweenMax.to($span_before, 0.2, {
                rotation: -45,
                top: 40
            });
            TweenMax.to($span_after, 0.2, {
                rotation: 45,
                bottom: 47
            });
        } else {
            TweenMax.to($navi_list_area, 0.2, {
                left: '-100%'
            });
            TweenMax.to($span_before, 0.2, {
                rotation: 0,
                top: 35
            });
            TweenMax.to($span_after, 0.2, {
                rotation: 0,
                bottom: 33
            });
        }
    }

    $navi_btn.on('click', navigation__click);
}());