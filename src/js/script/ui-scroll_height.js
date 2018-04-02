//스크롤 높이값을 이용한 기능 
(function () {
    var $area = $('[data-ui-animate="section__area"]');
    var $bg_position = $('[data-ui-position="background__position"]');
    var $bg_opacity = $('[data-ui="bg__opacity"]');
    var $content_position = $('[data-ui="position"]');
    var $fade = $('[data-ui="fade"]');
    var isScrolling;
    var lastScroll;


    function scroll_inital(){
        TweenMax.set($bg_position, {
            backgroundPosition: '50% 0',
            ease: Circ.easeOut
        });
        TweenMax.set($bg_opacity, {
            opacity: 0
        });
        TweenMax.set($content_position, {
           opacity: 1
        });

    }

    function scroll_event() {
        TweenMax.to($bg_position, 0.3, {
            backgroundPosition: '50% 60%',
            ease: Circ.easeOut
        });
        TweenMax.to($bg_opacity, 0.3, {
            opacity: 0.7
        });
        TweenMax.to($content_position, 0.3, {
            bottom: 0,
            opacity: 1
        });

    }

    function scroll_fade_event() {
        TweenMax.to($fade, 0.2,{
            opacity:1
        });
    }

    // 스크롤이 해당 영역에 닿았을시 발생되는 공통 애니메이션 
    function common_Animation(index) {
        var $ui_motion = $area.eq(index).find('[data-ui-position]');
        TweenMax.to($ui_motion, 1, {
            backgroundPosition: '50% 60%',
            ease: Power1.easeOut
        });
        // TweenMax.set($bg_opacity, {
        //     opacity: 0
        // });
        // TweenMax.set($content_position, {
        //     top: 0,
        //     opacity: 1
        // });
        
    }

    
    function init() {
        // scroll_ain();
        $area.each(function () {
            // $(this).attr('속성 (id, class, src)', 넣고자하는 값);
            $(this).attr('data-offset', $(this).offset().top - $(window).height() / 2);
        });
    }
    $(window).on('load', init);

    $(window).on('load scroll', function () {
        var scrollTop = $(window).scrollTop();
        var scrollDiff = scrollTop - lastScroll;

        console.log(scrollTop);
        if (scrollTop >= $area.eq(0).data('offset') && scrollTop < $area.eq(1).data('offset')) {
            scroll_event();

            if (scrollDiff > 0) {
                scroll_inital();
            } else {
                scroll_event();
            }

        } else if (scrollTop >= $area.eq(1).data('offset') && scrollTop < $area.eq(2).data('offset')) {

            if (scrollDiff > 0) {
                scroll_fade_event();
            } else {
                common_Animation();
            }
        } else if (scrollTop <= $area.eq(2).data('offset')) {
            // scroll_event(2);
            if (scrollDiff < 0) {
                scroll_event();
            } else {
                common_Animation();
            }
        }

        // clearTimeout(isScrolling);
        // isScrolling = setTimeout(function(){
        //     lastScroll = $(window).scrollTop();
        // },300);

    });
}());