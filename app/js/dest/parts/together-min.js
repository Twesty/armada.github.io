$(document).ready(function(){{let e=$(".together__items"),o=$(".together__arrow--next"),t=$(".together__arrow--prev");$(".header__cart").on("click",function(){e.slick("slickGoTo",1)}),e.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,nextArrow:o,prevArrow:t,responsive:[{breakpoint:1024,settings:{dots:!0}}]});let r=e.find(".slick-dots");window.matchMedia("(max-width: 1024px)").matches&&(r.append(o),r.prepend(t))}});