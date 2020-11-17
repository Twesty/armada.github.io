$( document ).ready(function(){

    // Product card zoom
    {
        let loopButton = $('.product-card__zoom'),
            loopModal = $('.photo-modal'),
            loopClose = $('.photo-modal__close'),
            loopModalImage = $('.photo-modal__current img');

        loopButton.on('click', function () {
            let loopProductImage = $( this ).parents('.product-card__wrap').find('.product-card__image img');
            loopModalImage.attr('src', loopProductImage.attr('src'));

            $('.photo-modal__zoom').zoom({
                url: loopProductImage.attr('data-zoom-image')
            });

            loopModal.addClass('active');
        });

        loopClose.on('click', function () {
            loopModal.removeClass('active');
        });

    }

    // Product card limitation text and hover

    {
        let productCard = $('.product-card__wrap');

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

                if($( this ).hasClass('limited')) {

                } else {
                    $( this ).on('mouseenter', function () {
                        title.text(titleText);
                        vendor.text(vendorText);

                        productContent.css({
                            'margin-top' : '-' + ((titleHeight * limitRatio) + (vendorHeight * limitRatio) - 50) + 'px',
                        });

                        $.each([title, vendor], function () {
                            let length = $(this).text().length;

                            if (length > expandedLimit) {
                                $(this).text($(this).text().substr(0, expandedLimit) + '...');
                            }
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
            }

        })
    }

});