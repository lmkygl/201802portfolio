// 버튼 클릭시 하단의 상품 보여줌
(function () {
    var $button = $('[data-ui-btn="toggle_box"]').find('.toggle__btn');
    var toggled = false;
    var animating = false;
    var speed = 0.2;

    function toggle_effect(e) {
        var $target = $(e.target);
        var $sponsorship_box = $(e.target).parents('[data-ui-btn="toggle_box"]');
        var $product_area = $sponsorship_box.find('[data-ui="sponsorship_product_area"]');

        if (!animating) {
            animating = true;

            if (!toggled) {
                $product_area.slideDown(function(){
                    toggled = true;
                    animating = false;
                });
                $target.text("▲");
            } else {
                $product_area.slideUp(function(){
                    toggled = false;
                    animating = false;
                });
                $target.text("▼");
            }
        }
    }

    $button.on('click', toggle_effect);
}());