!function(){var e=767;$(window).on("resize load",function(){window.innerWidth<e?window.mobile_check=!0:window.mobile_check=!1})}(),function(){var e=$('[data-ui="hamburger__btn"]'),t=$('[data-ui="navi__area"]'),n=$(".span__before"),a=$(".span__after");e.on("click",function(e){var o;$(this).toggleClass("m_hamburgercloseactive"),o=window.mobile_check?0:"5%",$(this).hasClass("m_hamburgercloseactive")?(TweenMax.to(t,.2,{left:o}),TweenMax.to(n,.2,{rotation:-45,top:40}),TweenMax.to(a,.2,{rotation:45,bottom:47})):(TweenMax.to(t,.2,{left:"-100%"}),TweenMax.to(n,.2,{rotation:0,top:35}),TweenMax.to(a,.2,{rotation:0,bottom:33}))})}(),$('[data-ui="scale"]').on("mouseenter mouseleave",function(e){$(e.target),"mouseenter"===e.type?TweenMax.to($(this),.2,{scale:1.1}):TweenMax.to($(this),.3,{scale:1})}),$('[data-ui="navi_underline"]').on("mouseenter mouseleave",function(e){var t=$(e.target),n=e.type,a=t.find(".underline");"mouseenter"===n?TweenMax.to(a,.3,{width:"100%"}):"mouseleave"===n&&TweenMax.to(a,.3,{width:0})}),function(){var e=$('[data-ui="section__area"]'),t=$('[data-ui="background__position"]'),n=$('[data-ui="bg__opacity"]'),a=$('[data-ui="position"]');function o(){TweenMax.set(t,{backgroundPosition:"50% 60%"}),TweenMax.set(n,{opacity:.7}),TweenMax.set(a,{top:"117px",opacity:1})}function i(){TweenMax.set(n,{opacity:0}),TweenMax.set(t,{backgroundPosition:"50% 0"}),TweenMax.set(a,{top:0,opacity:1})}$(window).on("load scroll",function(){var t=$(window).scrollTop(),n=t-void 0;console.log(t),t>=e.eq(0).data("offset")&&t<e.eq(1).data("offset")&&(o(),n>0?i():o())}),$(window).on("load",function(){i(),e.each(function(){$(this).attr("data-offset",$(this).offset().top-$(window).height()/2)})})}(),function(){var e,t=$('[data-ui="slider__area"]'),n=t.find(".btn"),a=!1,o=500;function i(){clearInterval(e),e=setInterval(function(){$(".next_btn").trigger("click")},2e3)}n.on("click",function(e){var t,n,i,r,s,c,u,d,f=$(e.target);f.hasClass("next_btn")?a||(a=!0,s=$(e.target).parents('[data-ui="slider__area"]'),c=s.find('[data-ui="inner__frames"]'),u=s.find('[data-ui="out__frame"]').width(),d=c.find(".scene"),c.animate({marginLeft:-u},o,"swing",function(){d.eq(0).insertAfter(d.eq(-1)),c.css("marginLeft",0),a=!1})):f.hasClass("prve_btn")&&(a||(a=!0,t=$(e.target).parents('[data-ui="slider__area"]'),n=t.find('[data-ui="inner__frames"]'),i=t.find('[data-ui="out__frame"]').width(),r=n.find(".scene"),n.css("marginLeft",-i),r.eq(-1).insertBefore(r.eq(0)),n.animate({marginLeft:0},300,"swing",function(){a=!1})))}),$(window).on("load blur focus",function(t){"blur"===t.type?clearInterval(e):i()}),t.on("mouseenter mouseleave",function(t){"mouseenter"===t.type?clearInterval(e):i()})}();
//# sourceMappingURL=client.js.map
