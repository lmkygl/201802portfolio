// 네비게이션 링크 마우스 오버시 언더라인 생성

(function(){
    var $navi_link_event = $('[data-ui="navi_underline"]');

    function navi_effect(e) {
        var $naviEvnet_target = $(e.target);
        var naviEvnet_type = e.type;
        var $naviEvent_line = $naviEvnet_target.find('.underline');
        //console.log($naviEvent_line);
                
        if (naviEvnet_type === 'mouseenter') {
            
            TweenMax.to($naviEvent_line, 0.3,{
                width: '100%'
            });
        } else if (naviEvnet_type === 'mouseleave') {
            TweenMax.to($naviEvent_line, 0.3,{
                width: 0
            });
        }
    }
    
    $navi_link_event.on('mouseenter mouseleave', navi_effect);
}());
