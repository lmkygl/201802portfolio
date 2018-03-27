// hamburger button 클릭시 네비게이션 보임 
(function () {
    var $navi__btn = $('[data-ui="hamburger__btn"]');
    var $navi__list__area = $('[data-ui="navi__area"]');
    var $span__before = $('.span__before');
    var $span__after = $('span__after');
    TweenMax.to($navi__list__area, 0.2, {
        left: '-100%'
    });

    function navigation__click(e) {
        console.log(11);
        $(this).toggleClass('m_hamburgercloseactive');
        if ($(this).hasClass('m_hamburgercloseactive')) {
            TweenMax.to($navi__list__area, 0.2, {
                left: '5%'
            });
            TweenMax.to($span__before , 0.2, {
                rotation: -45,
                top:40
            });
            TweenMax.to($span__after , 0.2, {
                rotation: -45,
                bottom:40
            });

        } else {
            TweenMax.to($navi__list__area, 0.2, {
                left: '100%'
            });
            TweenMax.to($span__before , 0.2, {
                rotation: 0,
                top:35
            });
            TweenMax.to($span__after , 0.2, {
                rotation: -45,
                bottom:33
            });
        }
    }

    $navi__btn.on('click', navigation__click);
}());