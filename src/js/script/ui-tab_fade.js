//tab 버튼 클릭시 fade in out
(function(){
    var $data_tab_id = $('[data-id]');
    var $tab_wrap = $('[data-ui="tab_button_wrap"]');
    var $tab_btn = $tab_wrap.find('span');
    var speed = 200;

    function tab_button(e) {
        var $target = $(e.target);
        var tab_id;
        // var tab_content;
        var $tab_con = $('.btn_content').find('li');
        console.log($target);

        tab_id = $target.attr('data-id');
        // console.log(tab_id);
        // tab select
        $tab_btn.removeClass('select__tab');
        $tab_btn.eq(tab_id).addClass('select__tab');

        // tab_content = $('[data-content-id="' + tab_id + '"]');
        // console.log(tab_content);

        if (tab_id == 0) {
            // $tab_con.eq(1).show();
            $tab_con.fadeOut();
            $tab_con.eq(0).fadeIn();
            return false;
        } else if (tab_id == 1) {
            // $tab_con.eq(1).show();
            $tab_con.fadeOut();
            $tab_con.eq(1).fadeIn();
            return false;
        } else if (tab_id == 2) {
            // $tab_con.eq(1).show();
            $tab_con.fadeOut();
            $tab_con.eq(2).fadeIn();
            return false;
        }
    }
    $tab_btn.on('click', tab_button);
}());