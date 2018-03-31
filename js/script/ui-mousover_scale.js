//mouseover sacle 커짐 transfrom 대신 tweenmax 사용
(function(){
    var $scale = $('[data-ui="scale"]');

    function mouseover__scale(e){
        var $target = $(e.target);
        var $event__type = e.type;
        
        if($event__type === 'mouseenter'){
            TweenMax.to($(this),0.2,{
                scale: 1.1, 
            });
        }else{
            TweenMax.to($(this),0.3,{
                scale: 1, 
            });
        }
    }
    $scale.on('mouseenter mouseleave', mouseover__scale);
}());