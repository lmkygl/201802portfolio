!function(){var t=767;$(window).on("resize load",function(){window.innerWidth<t?window.mobile_check=!0:window.mobile_check=!1})}(),function(){var t=$('[data-ui="hamburger__btn"]'),e=$('[data-ui="navi__area"]'),a=$(".span__before"),n=$(".span__after");t.on("click",function(t){var i;$(this).toggleClass("m_hamburgercloseactive"),i=window.mobile_check?0:"5%",$(this).hasClass("m_hamburgercloseactive")?(TweenMax.to(e,.2,{left:i}),TweenMax.to(a,.2,{rotation:-45,top:40}),TweenMax.to(n,.2,{rotation:45,bottom:47})):(TweenMax.to(e,.2,{left:"-100%"}),TweenMax.to(a,.2,{rotation:0,top:35}),TweenMax.to(n,.2,{rotation:0,bottom:33}))})}(),function(){var t,e=$(".indicator").find("span"),a=300,n=0;function i(t,a){if(null!==t){var n=$(t.target).index();e.removeClass("select_indicator"),e.eq(n).addClass("select_indicator"),o(n)}else e.removeClass("select_indicator"),e.eq(a).addClass("select_indicator")}function o(t){var e=$('[data-ui="side_slide_out_frame"]').width();$('[data-ui="side_slide_inner_frame"]').animate({marginLeft:-e*t},a,"swing")}e.on("click",i),$(window).on("load blur focus",function(e){"blur"===e.type?clearInterval(t):(clearInterval(t),t=setInterval(function(){3==++n&&(n=0),o(n),i(null,n)},2e3))})}(),function(){var t=$('[data-ui="search__text"]');$('[data-ui="search__btn"]').on("click",function(e){var a=t.val(),n=$(".offline__list").find("li");""==a?n.show():(n.hide(),$('.offline__list li:contains("'+a+'")').show())})}(),$('[data-ui="scale"]').on("mouseenter mouseleave",function(t){$(t.target),"mouseenter"===t.type?TweenMax.to($(this),.2,{scale:1.1}):TweenMax.to($(this),.3,{scale:1})}),$('[data-ui="navi_underline"]').on("mouseenter mouseleave",function(t){var e=$(t.target),a=t.type,n=e.find(".underline");"mouseenter"===a?TweenMax.to(n,.3,{width:"100%"}):"mouseleave"===a&&TweenMax.to(n,.3,{width:0})}),function(){var t=$('[data-ui-position="background__position"]'),e=$('[data-ui="bg__opacity"]'),a=$('[data-ui="position"]');var n,i,o=$('[data-ui-animate="section__area"]');function r(t){var n=o.eq(t).find("[data-ui-position]");TweenMax.to(n,.1,{backgroundPosition:"50% 0"}),TweenMax.to(e,.1,{opacity:0}),TweenMax.to(a,.3,{top:0})}function s(n){TweenMax.to(t,.1,{backgroundPosition:"50% 60%",ease:Power1.easeOut}),TweenMax.to(e,.1,{opacity:.7}),TweenMax.to(a,.3,{top:"220px"})}$(window).on("load",function(){o.each(function(){$(this).attr("data-offset",$(this).offset().top-$(window).height()/2)})}),$(window).on("load scroll",function(){var t=$(window).scrollTop(),e=t-i;console.log(),t>o.eq(0).data("offset")&&t<=o.eq(1).data("offset")?e>0?s():r(0):t>=o.eq(1).data("offset")&&t<o.eq(2).data("offset")?e<0?s():r(1):t>=o.eq(2).data("offset")&&(e<0?s():r(2)),clearTimeout(n),n=setTimeout(function(){i=$(window).scrollTop()},300)})}(),function(){var t,e=$('[data-ui="slider__area"]'),a=e.find(".btn"),n=!1,i=500;function o(){clearInterval(t),t=setInterval(function(){$(".interval__next").trigger("click")},2e3)}a.on("click",function(t){var e,a,o,r,s,d,l,c,u=$(t.target);u.hasClass("next_btn")?n||(n=!0,s=$(t.target).parents('[data-ui="slider__area"]'),d=s.find('[data-ui="inner__frames"]'),l=s.find('[data-ui="out__frame"]').width(),c=d.find(".scene"),d.animate({marginLeft:-l},i,"swing",function(){c.eq(0).insertAfter(c.eq(-1)),d.css("marginLeft",0),n=!1})):u.hasClass("prve_btn")&&(n||(n=!0,e=$(t.target).parents('[data-ui="slider__area"]'),a=e.find('[data-ui="inner__frames"]'),o=e.find('[data-ui="out__frame"]').width(),r=a.find(".scene"),a.css("marginLeft",-o),r.eq(-1).insertBefore(r.eq(0)),a.animate({marginLeft:0},i,"swing",function(){n=!1})))}),$(window).on("load blur focus",function(e){"blur"===e.type?clearInterval(t):o()}),e.on("mouseenter mouseleave",function(e){"mouseenter"===e.type?clearInterval(t):o()})}(),function(){var t=$('[data-ui="tab_button_wrap"]').find(".icon__sort__wrap"),e=$(".pannel__list__wrap").find(".pannel__list");t.on("click",function(a){var n=$(a.currentTarget),i=n.attr("data-id"),o=$(".pannel__list__wrap").find('[data-id="'+i+'"]');t.removeClass("active"),n.addClass("active"),e.hide(),o.show()})}(),function(){var t=$('[data-ui-btn="toggle_box"]').find(".toggle__btn"),e=!1;t.on("click",function(t){var a=$(t.target),n=a.data("toggle"),i=$(t.target).parents('[data-ui-btn="toggle_box"]').find('[data-ui="sponsorship_product_area"]');console.log(a.data),e||(e=!0,n?(i.slideUp(function(){a.data("toggle",!1).attr("data-toggle",!1),e=!1}),a.text("▼")):(i.slideDown(function(){a.data("toggle",!0).attr("data-toggle",!0),e=!1}),a.text("▲")))})}();
//# sourceMappingURL=client.js.map
