$(document).ready(function(){{let t=$(".filters"),e=$(".filters__open, .products__filter"),l=$(".filters__close, .overlay, .header__overlay"),i=$(".overlay, .header__overlay");l.on("click",function(){t.removeClass("active"),i.fadeOut(200)}),$.each(e,function(){$(this).on("click",function(){i.fadeIn(200),t.toggleClass("active")})})}{let t=$(".filter-apply"),e=$(".filters"),l=$(".filters input");$(".filter-apply button:first-child").on("click",function(){t.fadeOut(100)}),$.each(l,function(){$(this).on("change",function(){let l=$(this).offset(),i=e.offset(),o=l.top,f=i.left,c=e.width();t.css({top:o+"px",left:f+c+25+"px",display:"block"})})})}});