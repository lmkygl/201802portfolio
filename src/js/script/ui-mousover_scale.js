//mouseover sacle 커짐 transfrom 대신 tweenmax 사용
(function(){
    var $scale = $('[data-ui="scale1"]');

    function mouseover__scale(){
        TweeMax.to($scale,0.3,{
            scale: 1, 
        });
    }
    $scale.on('mouseenter mouseleave', mouseover__scale);
}());