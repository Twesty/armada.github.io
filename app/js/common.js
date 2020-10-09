'use strict';

$( document ).ready(function () {

    // Header media position fixed

    {
        let mainContent = $('.main-content');
        let header = $('.header');
        let headerHeight = header.outerHeight();

        $( window ).resize(function(){
            let headerHeight = header.outerHeight();
            if(($(window).width() + 17) < 1280) {
                mainContent.css({'margin-top': headerHeight + 'px'});
            } else {
                mainContent.css({'margin-top': '0'});
            }
        });

        if(($(window).width() + 17) < 1280) {
            mainContent.css({'margin-top': headerHeight + 'px'});
        }
    }

    // Tooltips

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


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
            //autoplay: true,
            autoplaySpeed: 5000
        });

        let dots = itemsWrap.find('.slick-dots');

        dots.wrap('<div class="banner__dots"></div>');

        dots = $('.banner__dots').appendTo('.banner__controls');
    }

    // Header responsive menu

    {
        let header = $('.header');
        let button = $('.header__bars');
        let overlay = $('.overlay, .header__overlay');
        let menu = $('.header__responsive');

        overlay.on('click', function () {
            overlay.fadeOut(200);
            menu.removeClass('active');
        });

        $.each(button, function () {
            $( this ).on('click', function () {
                overlay.fadeIn(200);
                menu.toggleClass('active');
            })
        })
    }

    // Filters responsive

    {
        let filters = $('.filters');
        let open = $('.filters__open');
        let close = $('.filters__close, .overlay, .header__overlay');
        let overlay = $('.overlay, .header__overlay');

        close.on('click', function () {
            filters.removeClass('active');
            overlay.fadeOut(200);
        });

        $.each(open, function () {
            $( this ).on('click', function () {
                overlay.fadeIn(200);
                filters.toggleClass('active');
            })
        })
    }

    // Header autocomplete

    {
        let autosearch = $('.autosearch');
        let autosearchWrap = $('.autosearch__wrap');

        let overlay = $('.overlay');

        overlay.on('click', function () {
            overlay.fadeOut(200);
            autosearch.slideUp(200);
        });

        let searchBox = $('.header__search .search');
        let searchInput = searchBox.find('input');
        let searchBoxWidth = searchBox.width();
        let searchBoxOffset = searchBox.offset();
        let searchBoxOffsetLeft = searchBoxOffset.left;

        searchInput.keyup(function(){
            if($( this ).val().length === 0) {
                autosearch.slideUp(200);
                searchBox.find('button').removeClass('active');
                overlay.fadeOut(200);
            } else {
                overlay.fadeIn(200);
                searchBox.find('button').addClass('active');
                autosearchWrap.css({
                    'max-width' : 'calc(100% - ' + searchBoxOffsetLeft - 40 + 'px)',
                    'left' : searchBoxOffsetLeft + 'px'
                });
                autosearch.slideDown(200);
            }
        })
    }

    // Header categories dropdown

    {
        let button = $('.categories__show');
        let dropdown = $('.all-categories__wrap');

        button.on('click', function () {
            dropdown.slideToggle(200, function(){
                if ($(this).is(':visible'))
                    $(this).css('display','flex');
            });
        });

        $(document).mouseup(function(e)
        {
            let container = dropdown;

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                container.slideUp(200);
            }
        });
    }

    // Header subcategories dropdown

    {
        let item = $('.all-categories__main-item--has-children');
        let wrap = $('.all-categories__wrap');

        $.each(item, function(){
            let dropdown = $( this ).find('.all-categories__subcategories');

            $( this ).on('mouseenter', function () {
                dropdown.show();
                wrap.addClass('active');
            })

            $( this ).on('mouseleave', function () {
                dropdown.hide();
                wrap.removeClass('active');
            })
        })
    }

    // Filter apply

    {
        let button = $('.filter-apply');
        let filters = $('.filters');
        let triggers = $('.filters input');

        let close = $('.filter-apply button:first-child');

        close.on('click', function () {
            button.fadeOut(100);
        });

        $.each(triggers, function() {
            $( this ).on('change', function(){
                let inputOffset = $( this ).offset();
                let filtersOffset = filters.offset();
                let offsetTop = inputOffset.top;
                let offsetLeft = filtersOffset.left;
                let filtersWidth = filters.width();

                button.css({
                    'top' : offsetTop + 'px',
                    'left' : offsetLeft + filtersWidth + 25 + 'px',
                    'display' : 'block'
                });
            })
        })
    }

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

    // Seo text content scrollbar

    {
        let content = $('.seo-text__content, .catalog__categories-list, .custom-scrollbar');

        $.each(content, function () {
            $( this ).customScrollbar();
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

    // Product card limitation text and hover

    {
        let productCard = $('.slideshow .product-card__wrap');

        $.each(productCard, function () {
            let title = $(this).find('.product-card__title'),
                vendor = $(this).find('.product-card__vendor'),
                titleText = title.text(),
                vendorText = vendor.text(),
                standartLimit = 30,
                expandedLimit = 70,
                limitRatio = expandedLimit / standartLimit;

            $.each([title, vendor], function () {
                let length = $(this).text().length;

                if (length > standartLimit) {
                    $(this).text($(this).text().substr(0, standartLimit) + '...');
                }
            });

            let titleHeight = title.height(),
                vendorHeight = vendor.height();

            // Product card hover

            if(titleText.length > standartLimit || vendorText.length > standartLimit) {
                let productContent = $( this ).find('.product-card__content');

                $( this ).on('mouseenter', function () {

                    title.text(titleText);
                    vendor.text(vendorText);

                    $.each([title, vendor], function () {
                        let length = $(this).text().length;

                        if (length > expandedLimit) {
                            $(this).text($(this).text().substr(0, expandedLimit) + '...');
                        }
                    });

                    productContent.css({
                        'margin-top' : '-' + ((titleHeight * limitRatio) + (vendorHeight * limitRatio) - 50) + 'px',
                    });

                });

                $( this ).on('mouseleave', function () {

                    productContent.css({
                        'margin-top' : '0'
                    });

                    $.each([title, vendor], function () {
                        let length = $(this).text().length;

                        if (length > standartLimit) {
                            $(this).text($(this).text().substr(0, standartLimit) + '...');
                        }
                    });

                })
            }

        })
    }

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