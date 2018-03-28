// arrow 클릭시 슬라이드 
(function () {
    var $slide__area = $('[data-ui="slider__area"]');
    var $btn = $slide__area.find('.btn');
    var animating = false;
    var animation_speed = 300;

    function next_slide_effect(e) {
        var $target = $(e.target);
        var $parents = $target.parents('[data-ui="slider__area"]');
        var $inner_frame = $parents.find('[data-ui="inner__frames"]');
        var $scene = $inner_frame.find('.scene');
        var $out_width = $parents.find('[data-ui="out__frame"]').width();

        $inner_frame.animate({
            left: -$out_width
        }, animation_speed, 'swing', function () {
            $scene.eq(0).insertAfter($scene.eq(-1));
            $inner_frame.css('left', 0);
            animating = false;
        });
    }

    function prev_slide_effect(e) {
        var $target = $(e.target);
        var $parents = $target.parents('[data-ui="slider__area"]');
        var $inner_frame = $parents.find('[data-ui="inner__frames"]');
        var $scene = $inner_frame.find('.scene');
        var $out_width = $parents.find('[data-ui="out__frame"]').width();

        $inner_frame.css('left', -$out_width);
        $scene.eq(-1).insertBefore($scene.eq(0));
        $inner_frame.animate({
            left: 0
        }, animation_speed, 'swing', function () {
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
}());