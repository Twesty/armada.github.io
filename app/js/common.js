'use strict';

$(function() {

    // Banner slider

    {
        let itemsWrap = $('.banner__items');
        let arrowNext = $('.banner__arrow--next');
        let arrowPrev = $('.banner__arrow--prev');

        itemsWrap.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            nextArrow: arrowNext,
            prevArrow: arrowPrev,
            autoplay: true,
            autoplaySpeed: 3000
        });

        let dots = itemsWrap.find('.slick-dots');

        dots.wrap('<div class="container banner__dots"></div>')
    }

});
