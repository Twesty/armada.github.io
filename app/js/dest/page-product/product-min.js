"use strict";$(document).ready(function(){{let t=$(".gallery__thumbnails"),e=$(".gallery__thumbnail"),a=$(".gallery__selected"),l=$(".gallery__arrow--next"),r=$(".gallery__arrow--prev"),i=$(".gallery__thumbnail, .gallery__selected");t.on("init",function(t,l){$.each(e,function(t){$(this).on("click",function(){e.removeClass("gallery__thumbnail--active"),$(this).addClass("gallery__thumbnail--active"),a.html($(this).html()),a.fadeIn("slow").attr("data-item-index",t+1)})})}),t.slick({slidesToShow:4,slidesToScroll:1,vertical:!0,arrows:!0,prevArrow:r,nextArrow:l,swipeToSlide:!0,infinite:!1,speed:200,responsive:[{breakpoint:1024,settings:{vertical:!1}}]});let n=$(".gallery__loop"),o=$(".photo-modal__current"),c=$(".photo-modal"),s=($(".photo-modal__arrow"),$(".photo-modal__arrow--next")),d=$(".photo-modal__arrow--prev"),_=$(".photo-modal__close"),m=0;n.on("click",function(){let t=$(".gallery__selected img");o.find("img").attr("src",t.attr("src")),c.addClass("active"),m=parseInt($(".gallery__selected").attr("data-item-index"))}),_.on("click",function(){c.removeClass("active")}),s.on("click",function(){m>=i.length-1?(m=1,o.fadeOut(200),o.find("img").attr("src",i.eq(m-1).find("img").attr("src")),o.fadeIn(200)):(m++,o.fadeOut(200),o.find("img").attr("src",i.eq(m-1).find("img").attr("src")),o.fadeIn(200))}),d.on("click",function(){m<=1?(m=i.length-1,o.fadeOut(200),o.find("img").attr("src",i.eq(m-1).find("img").attr("src")),o.fadeIn(200)):(m--,o.fadeOut(200),o.find("img").attr("src",i.eq(m-1).find("img").attr("src")),o.fadeIn(200))})}new Sticky(".product__gallery-sticky")});