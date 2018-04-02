// height scroll 기능

(function(){

    // 초기값 세팅
    var $bg_position = $('[data-ui-position="background__position"]');
    var $bg_opacity = $('[data-ui="bg__opacity"]');
    var $text_position = $('[data-ui="position"]');

    function scroll_event_inital_value(){

        TweenMax.set($bg_position, {
            backgroundPosition:'50% 0'
        });
        TweenMax.set($bg_opacity, {
            opacity: 0
        });
    }

    // 스크롤이 해당 영역에 닿았을시 발생되는 공통 애니메이션 
    var $section_area = $('[data-ui-animate="section__area"]');

    function common_Animation(index) {
        var $ui_motion = $section_area.eq(index).find('[data-ui-position]');
        TweenMax.to($ui_motion, 0.1, {
            backgroundPosition:'50% 0'
        });
        TweenMax.to($bg_opacity, 0.1, {
            opacity: 0
        });
        TweenMax.to($text_position, 0.3, {
           top: 0,
        });
    }

    function common_Anima(index) {

        TweenMax.to($bg_position, 0.1, {
            backgroundPosition:'50% 60%',
            ease: Power1.easeOut
        });
        TweenMax.to($bg_opacity, 0.1, {
            opacity: 0.7
        });
        TweenMax.to($text_position, 0.3, {
            top: '220px',
         });
        
    }
   
    function init() {
       // common_Animation();
        $section_area.each(function(){
            // $(this).attr('속성 (id, class, src)', 넣고자하는 값);
            $(this).attr('data-offset', $(this).offset().top - $(window).height() /2);
        });
    }

    $(window).on('load', init);
    
    var isScrolling;
    var lastScroll;

    $(window).on('load scroll', function() {
        var scrollTop = $(window).scrollTop();
        var scrollDiff =  scrollTop - lastScroll;
        console.log();
        if(scrollTop > $section_area.eq(0).data('offset') && scrollTop <= $section_area.eq(1).data('offset')){

            if (scrollDiff > 0) {
                common_Anima(0);
            }
            else{
                common_Animation(0);
            }
        } else if (scrollTop >= $section_area.eq(1).data('offset') && scrollTop < $section_area.eq(2).data('offset')) { 

            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(1);   
            }
            
        }  else if (scrollTop >= $section_area.eq(2).data('offset')) {

            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(2);
            }  
        }

        clearTimeout(isScrolling);
        isScrolling = setTimeout(function(){
            lastScroll = $(window).scrollTop();
        },300);

    });
}());



