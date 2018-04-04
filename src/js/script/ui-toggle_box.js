// 버튼 클릭시 하단의 상품 보여줌
(function(){
    var $button = $('[data-ui-btn="toggle_box"]').find('.toggle__btn');
    var toggled = false;
    var animating = false;
    
    function toggle_effect(e){
        var $target = $(e.target);
        var $sponsorship_box = $(e.target).parents('[data-ui-btn="toggle_box"]');
        var $product_area = $sponsorship_box.find('[data-ui="sponsorship_product_area"]');
       console.log($product_area);
        if (!animating) {
            animating = true;
            if (!toggled) {
                toggled = true;
                $sponsorship_box.animate({
                    "height":"530px",
                    'border-Bottom':'none'
                });
                $product_area.animate({
                    'opacity':'1',
                });
                $target.text("▲");
                return ;
            }
        }
        if (animating){
            animating = false;

            if (toggled) {
                toggled = false;
                $sponsorship_box.animate({
                    "height":"300px"
                });
                $product_area.animate({
                    "opacity":"0"
                });
                $target.text("▼");
                return;
            }
        }

        
    }
    
    $button.on('click', toggle_effect);
}());