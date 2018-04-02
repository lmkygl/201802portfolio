//스크롤 높이값을 이용한 기능 
(function(){
    var $area = $('[data-ui="section__area"]');
    var $bg_position = $('[data-ui="background__position"]');
    var isScrolling;
    var lastScroll;

    
    function scroll_event(){
        $bg_position.css('background-position','100%');
    }
    function init() {
        $area.each(function(){
            // $(this).attr('속성 (id, class, src)', 넣고자하는 값);
            $(this).attr('data-offset', $(this).offset().top - $(window).height() /2);
        });
    }
    $(window).on('load scroll', function() {
        var scrollTop = $(window).scrollTop();
        var scrollDiff =  scrollTop - lastScroll;
       
        if(scrollTop >= $area.eq(0).data('offset') && scrollTop < $area.eq(1).data('offset')){
            scroll_event();

            if (scrollDiff > 0) {
                common_Anima(0);
            }
            else{
                common_Animation(0);
            }
        } else if (scrollTop >= $inner_padding.eq(1).data('offset') && scrollTop < $inner_padding.eq(2).data('offset')) { 
            common_Animation(1);

            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(1);
                
            }
            
        } else if (scrollTop >= $inner_padding.eq(2).data('offset') && scrollTop < $inner_padding.eq(3).data('offset')) {
            common_Animation(2);
            
            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(2);  
            }
        } else if (scrollTop >= $inner_padding.eq(3).data('offset')) {
            common_Animation(3);

            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(3);
            }  
        }

        clearTimeout(isScrolling);
        isScrolling = setTimeout(function(){
            lastScroll = $(window).scrollTop();
        },300);

    });
}());