// search 매장명, 주소 입력시 그 해당 객체만 보여줌

(function () {
    var $search_text = $('[data-ui="search__text"]');
    var $search_btn = $('[data-ui="search__btn"]');

    function list_search(e) {
        var $search_val = $search_text.val();
        var $list = $('.offline__list').find('li');
        if ($search_val == '') {
            $list.show();
        } else {
            $list.hide();
            $('.offline__list li:contains("' + $search_val + '")').show();
        }
    }
    $search_btn.on('click', list_search);
}());