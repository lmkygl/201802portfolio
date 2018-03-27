// 네비게이션 링크 마우스 오버시 언더라인 생성

(function(){
    var $navi_link_event = $('[data-ui="navi_underline"]');

    function navi_effect(e) {
        var $naviEvnet_target = $(e.target);
        var naviEvnet_type = e.type;
        var $naviEvent_line = $naviEvnet_target.find('.underline');
        //console.log($naviEvent_line);
                
        if (naviEvnet_type === 'mouseenter') {
            $naviEvent_line.animate({
                width: '100%'
            }, 0.3);
        } else if (naviEvnet_type === 'mouseleave') {
            $naviEvent_line.animate({
                width: 0
            }, 0.3); 
        }
    }
    
    $navi_link_event.on('mouseenter mouseleave', navi_effect);
}());
