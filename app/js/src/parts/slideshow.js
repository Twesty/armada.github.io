$( document ).ready(function(){

    // Slideshow

    {
        let slideshowSection = $('.section--slideshow');

        $.each(slideshowSection, function () {
            let items = $( this ).find('.slideshow__items');
            let nextArrow = $( this ).find('.slideshow__arrow--next');
            let prevArrow = $( this ).find('.slideshow__arrow--prev');

            items.on('setPosition', function () {
                $(this).find('.slick-slide').height('auto');
                let slickTrack = $(this).find('.slick-track');
                let slickTrackHeight = $(slickTrack).height();
                $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
            });

            items.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                //autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                nextArrow: nextArrow,
                prevArrow: prevArrow,
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    }
                ]
            })
        })
    }

});