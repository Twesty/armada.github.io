'use strict';

$( document ).ready(function () {

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
            speed: 200,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        vertical: false
                    }
                }
            ]
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
            prevArrow: prevArrow,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true
                    }
                }
            ]
        });

        let dots = items.find('.slick-dots');

        if(window.matchMedia('(max-width: 1024px)').matches){
            dots.append(nextArrow);
            dots.prepend(prevArrow);
        } else {

        }

    }

});