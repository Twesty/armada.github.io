'use strict';

$(function() {

    // Tooltips

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

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

    // Product gallery

    {
        let thumbnails = $('.gallery__thumbnails');
        let thumbnail = $('.gallery__thumbnail');
        let currentImage = $('.gallery__selected');

        let nextArrow = $('.gallery__arrow--next');
        let prevArrow = $('.gallery__arrow--prev');

        thumbnails.on('init', function(event, slick){
            $.each(thumbnail, function () {
                $( this ).on('click', function () {
                    thumbnail.removeClass('gallery__thumbnail--active');
                    $( this ).addClass('gallery__thumbnail--active');
                    currentImage.html($( this ).html());
                    currentImage.fadeIn("slow");
                });
            });
        });

        thumbnails.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            swipeToSlide: true,
            infinite: false,
            speed: 200
        });

    }

    // Together slider

    {
        let items = $('.together__items');
        let nextArrow = $('.together__arrow--next');
        let prevArrow = $('.together__arrow--prev');

        items.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: nextArrow,
            prevArrow: prevArrow
        })
    }

    // Image popup

    {
        let image = $('.image-popup');
        let overlay = $('.overlay, .modal-image');
        let modalImage = $('.modal-image__wrap');
        let closeButton = $('.modal-image__close');

        let triggersToClose = [overlay, closeButton];

        $.each(image, function () {
            $( this ).click(function () {
                overlay.fadeIn(200);
                modalImage.html($( this ).html());
                modalImage.fadeIn(200);
            });
        });

        $.each(triggersToClose, function () {
            $( this ).on('click', function () {
                overlay.fadeOut(200);
                modalImage.fadeOut(200);
            })
        })
    }

    // FAQ dropdown

    {
        let items = $('.faq__item');

        $.each(items, function () {
            let trigger = $( this ).find('.faq__question');
            let content = $( this ).find('.faq__response');

            trigger.on('click', function () {
                $( this ).find('.faq__expand').toggleClass('active');
                content.slideToggle(200);
            })
        });

        $('.faq__question').eq(0).trigger('click');
    }

    // Vendor navigation

    {
        // Dropdowns
        let itemWithDropdown = $('.vendor__nav-item--has-children');

        $.each(itemWithDropdown, function () {
            let $this = $( this );
            let triggers = $( this ).find('.vendor__nav-item-title');

            let dropdown = $( this ).find('.vendor__nav-item-dropdown');
            let arrow = $( this ).find('.vendor__nav-item-arrow');

            triggers.on('click', function () {
                if($this.hasClass('active')) {

                } else {
                    $('.vendor__nav-item-dropdown').slideUp(200);
                    $('.vendor__nav-item-arrow').removeClass('active');
                    itemWithDropdown.removeClass('active');

                    $this.toggleClass('active');
                    arrow.toggleClass('active');
                    dropdown.slideToggle(200);
                }
            })
        })
    }

});