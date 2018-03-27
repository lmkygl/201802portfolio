// hamburger button 클릭시 네비게이션 보임 
(function(){
    var navi__btn = ('[data-ui="hamburger__btn"]');
    var navi__area = ('[data-ui="navi__area"]');

    function navigation__click(){
        console.log(111);
    }
    
    navi__btn.on('click', navigation__click)
}());