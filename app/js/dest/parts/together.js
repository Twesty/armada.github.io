$( document ).ready(function(){

    // Together slider

    {
        let items = $('.together__items');
        let nextArrow = $('.together__arrow--next');
        let prevArrow = $('.together__arrow--prev');

        $('.header__cart').on('click', function () {
            items.slick('slickGoTo', 1)
        });

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