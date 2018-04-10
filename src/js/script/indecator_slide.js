// indecator slide 
(function(){
    var interval;
    var $indicator = $('.indicator');
    var $indicator_btn = $indicator.find('span');
    var speed = 300;
    var animating = false;
    var index = 0;
    
    function slide_show(e, index) {
        // indecator index 
        if (e !== null) {
            // event 값이 널값이 아닐 경우
            var $target = $(e.target);
            var $target_index = $target.index();
            // clearInterval(interval);
            // console.log($target_index);
            $indicator_btn.removeClass('select_indicator');
            $indicator_btn.eq($target_index).addClass('select_indicator');

            indecator_animating($target_index);
            
        } else {
            $indicator_btn.removeClass('select_indicator');
            $indicator_btn.eq(index).addClass('select_indicator');
           
        }
    }

    function indecator_animating(idx) {
        // slide animate 
        var $side_out_frame = $('[data-ui="side_slide_out_frame"]');
        var $side_out_frame_width = $side_out_frame.width();
        var $side_inner_frame = $('[data-ui="side_slide_inner_frame"]');

        $side_inner_frame.animate({
            marginLeft: -$side_out_frame_width * idx
        }, speed, 'swing');
    }
    
    function startInterval() {
        clearInterval(interval);
        interval = setInterval(function() {
            // var index = 0; 
            index++;
            if (index == 3) {
                index = 0;
            }
            indecator_animating(index);
            slide_show(null, index);
        }, 2000);
    }

    $indicator_btn.on('click', slide_show);

    $(window).on('load blur focus', function(e) {
        if (e.type === 'blur') {
            clearInterval(interval);
        } else {
            startInterval();
        }
    });

    
}());