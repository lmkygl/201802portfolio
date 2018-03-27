// hamburger button 클릭시 네비게이션 보임 
(function () {
    var $navi__btn = $('[data-ui="hamburger__btn"]');
    var $navi__list__area = $('[data-ui="navi__area"]');

    function navigation__click(e) {
        console.log(11);
        TweenMax.to($navi__list__area, 0.2,{left:'5%'});
       $(this).toggleClass('m_hamburgercloseactive');

        if ($(this).hasClass('m_hamburgercloseactive')) {
           TweenMax.to($navi__list__area, 0.2,{left:'5%'});
        } else {
            $navi__list__area.hide();
           TweenMax.to($navi__list__area, 0.2,{left:'-5%'});
        }
    }

    $navi__btn.on('click', navigation__click);
}());