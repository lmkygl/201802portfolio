// arrow 클릭시 슬라이드 
(function () {
    var $slide__area = $('[data-ui="slider__area"]');
    var $btn = $slide__area.find('.btn');
    var animating = false;
    var animation_speed = 500;
    var interval;

    function next_slide_effect(e) {
        var $ui = $(e.target).parents('[data-ui="slider__area"]');
        var $inner_frame = $ui.find('[data-ui="inner__frames"]');
        var $out_width = $ui.find('[data-ui="out__frame"]').width();
        var $scene = $inner_frame.find('.scene');

        $inner_frame.animate({
            marginLeft: -$out_width
        }, animation_speed, 'swing', function () {
            $scene.eq(0).insertAfter($scene.eq(-1));
            $inner_frame.css('marginLeft', 0);
            animating = false;
        });
    }

    function prev_slide_effect(e) {
        var $ui = $(e.target).parents('[data-ui="slider__area"]');
        var $inner_frame = $ui.find('[data-ui="inner__frames"]');
        var $out_width = $ui.find('[data-ui="out__frame"]').width();
        var $scene = $inner_frame.find('.scene');

        $inner_frame.css('marginLeft', -$out_width);
        $scene.eq(-1).insertBefore($scene.eq(0));
        $inner_frame.animate({
            marginLeft: 0
        }, 300, 'swing', function () {
            animating = false;
        });
    }

    function slide_effect(e) {
        var $target = $(e.target);
        if ($target.hasClass('next_btn')) {
            if (!animating) {
                animating = true;
                next_slide_effect(e);
            }
        } else if ($target.hasClass('prve_btn')) {
            if (!animating) {
                animating = true;
                prev_slide_effect(e);
            }
        }
    }

    $btn.on('click', slide_effect);

    function startInterval() {
        clearInterval(interval);
        interval = setInterval(function () {
            $('.next_btn').trigger('click');
        }, 2000);
    }

    $(window).on('load blur focus', function (e) {
        if (e.type === 'blur') {
            clearInterval(interval);
        } else {
            startInterval();
        }
    });
    $slide__area.on('mouseenter mouseleave', function(e){       
        if (e.type === 'mouseenter') {
            clearInterval(interval);
        } else {
            startInterval();
        }
    });
}());