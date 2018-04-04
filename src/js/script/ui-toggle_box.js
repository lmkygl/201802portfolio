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

        if (window.mobile_check) {
            if (!animating) {
                animating = true;
                if (!toggled) {
                    toggled = true;
                    // $sponsorship_box.animate({
                    //     "height": "100%",
                    //     'border-Bottom': 'none'
                    // });
                    $product_area.animate({
                        'opacity': '1',
                        'height':'100%'
                    }, speed);
                    $target.text("▲");
                    return;
                }
            }
            if (animating) {
                animating = false;
    
                if (toggled) {
                    toggled = false;
                    $sponsorship_box.animate({
                        "height": "100%"
                    },speed);
                    $product_area.animate({
                        "opacity": "0",
                        "height":"0"
                    },speed);
                    $target.text("▼");
                    return;
                }
            }

        } else {
            if (!animating) {
                animating = true;
                if (!toggled) {
                    toggled = true;
                    $sponsorship_box.animate({
                        "height": "100%",
                    });
                    $product_area.animate({
                        'opacity': '1',
                    });
                    $target.text("▲");
                    return;
                }
            }
            if (animating) {
                animating = false;
    
                if (toggled) {
                    toggled = false;
                    // $sponsorship_box.animate({
                    //     "height": "300px"
                    // });
                    $product_area.animate({
                        "opacity": "0",
                    });
                    $target.text("▼");
                    return;
                }
            }
        }

        

       
    }

    $button.on('click', toggle_effect);
}());