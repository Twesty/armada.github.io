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

        dots.wrap('<div class="banner__dots"></div>');

        dots = $('.banner__dots').appendTo('.banner__controls');
    }

    // Slideshow

    {
        let slideshowSection = $('.section--slideshow');

        $.each(slideshowSection, function () {
            let items = $( this ).find('.slideshow__items');
            let nextArrow = $( this ).find('.slideshow__arrow--next');
            let prevArrow = $( this ).find('.slideshow__arrow--prev');

            items.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                nextArrow: nextArrow,
                prevArrow: prevArrow
            })
        })
    }

    // Video popup

    {
        let popupButton = $('.video__preview, .video__title');

        $.each(popupButton, function () {
            $( this ).YouTubePopUp();
        });
    }

    // Seo text content scrollbar

    {
        let content = $('.seo-text__content');

        $.each(content, function () {
            $( this ).customScrollbar();
        })
    }

});