'use strict';

$( document ).ready(function () {

    // Product gallery

    {
        let thumbnails = $('.gallery__thumbnails');
        let thumbnail = $('.gallery__thumbnail');
        let currentImage = $('.gallery__selected');

        let nextArrow = $('.gallery__arrow--next');
        let prevArrow = $('.gallery__arrow--prev');

        let imagesArray = $('.gallery__thumbnail, .gallery__selected');

        thumbnails.on('init', function(event, slick){
            $.each(thumbnail, function (index) {
                $( this ).on('click', function () {
                    thumbnail.removeClass('gallery__thumbnail--active');
                    $( this ).addClass('gallery__thumbnail--active');
                    currentImage.html($( this ).html());
                    currentImage.fadeIn("slow").attr('data-item-index', index+1);
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

        let loopButton = $('.gallery__loop'),

            loopCurrentImage = $('.photo-modal__current'),
            loopModal = $('.photo-modal'),

            loopArrow = $('.photo-modal__arrow'),
            loopArrowNext = $('.photo-modal__arrow--next'),
            loopArrowPrev = $('.photo-modal__arrow--prev'),
            loopClose = $('.photo-modal__close');

        let currentGalleryItemIndex = 0;

        loopButton.on('click', function () {
            let currentGalleryItem = $('.gallery__selected img');

            loopCurrentImage.find('img').attr('src', currentGalleryItem.attr('src'));
            loopModal.addClass('active');

            currentGalleryItemIndex = parseInt($('.gallery__selected').attr('data-item-index'));
        });

        loopClose.on('click', function () {
            loopModal.removeClass('active');
        });

        loopArrowNext.on('click', function () {

            if(currentGalleryItemIndex >= imagesArray.length - 1) {
                currentGalleryItemIndex = 1;

                loopCurrentImage.fadeOut(200);
                loopCurrentImage.find('img').attr('src', imagesArray.eq(currentGalleryItemIndex-1).find('img').attr('src'));
                loopCurrentImage.fadeIn(200);
            } else {
                currentGalleryItemIndex++;

                loopCurrentImage.fadeOut(200);
                loopCurrentImage.find('img').attr('src', imagesArray.eq(currentGalleryItemIndex-1).find('img').attr('src'));
                loopCurrentImage.fadeIn(200);
            }

        });

        loopArrowPrev.on('click', function () {

            if(currentGalleryItemIndex <= 1) {
                currentGalleryItemIndex = imagesArray.length - 1;

                loopCurrentImage.fadeOut(200);
                loopCurrentImage.find('img').attr('src', imagesArray.eq(currentGalleryItemIndex-1).find('img').attr('src'));
                loopCurrentImage.fadeIn(200);
            } else {
                currentGalleryItemIndex--;

                loopCurrentImage.fadeOut(200);
                loopCurrentImage.find('img').attr('src', imagesArray.eq(currentGalleryItemIndex-1).find('img').attr('src'));
                loopCurrentImage.fadeIn(200);
            }

        });

    }

    var sticky = new Sticky('.product__gallery-sticky');

});