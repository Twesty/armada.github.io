'use strict';

$( document ).ready(function () {

    $('.mdb-select').materialSelect();

    // Recipient

    {
        let recipientRadioButtons = $('.seller__recipient');

        recipientRadioButtons.on('click', function(){
            let dropdown = $('.details__other-recipient');

            if( $( this ).attr('id') === 'other' && $( this ).prop('checked')) {
                dropdown.slideDown(200);
            } else {
                dropdown.slideUp(200);
            }
        });

        let deatilsOtherRecipient = $('.details__other-recipient');
        let fields = deatilsOtherRecipient.find('input:not([type="checkbox"]), select, textarea');

        function recipient(fields) {
            $.each(fields, function () {
                let recipientInfo = '';

                $.each(fields, function(index) {
                    if( index === 0 ) {
                        recipientInfo += $( this ).val();
                    } else if( $( this ).val() ) {
                        recipientInfo += ', ' + $( this ).val();
                    }
                });

                $( this ).attr('title', recipientInfo);
            })
        }

        fields.on('change', function () {
            recipient($( this ));
        });

        recipient(fields);
    }

    // Additional services

    {
        let orderItem = $('.order-item');

        $.each(orderItem, function () {
            let orderIndex = $( this ).attr('data-order-index');

            let additionalServices = $( this ).find('.order-item__order-detail[ data-seller-detail-type="additional-services"]');
            let fields = additionalServices.find('input, select, textarea');
            let detailType = additionalServices.attr('data-seller-detail-type');

            function addtitionalServices(fields) {
                let selectedServices = '';
                let orderItemTotalDetail = $('.order-item-total[data-order-index=' + orderIndex + '] .order-item-total__details-item[data-seller-detail-type=' + detailType + ']');

                $.each(fields, function(index) {
                    let servicePrice = $( this ).attr('data-service-price');
                    let servicePriceInt = parseInt(servicePrice);

                    if(isNaN(servicePriceInt)) {

                    } else {
                        servicePrice = '+' + servicePrice;
                    }

                    if( $( this ).prop('checked') ) {
                        selectedServices += $( this ).attr('title')  + '<span class="color--accent font-weight-normal">  ' + servicePrice + '</span><br>';
                    }
                });

                if(selectedServices === '') {
                    $('.order-item-total[data-order-index=' + orderIndex + '] .order-item-total__details-item[data-seller-detail-type="additional-services"]').find('b span').text('Не выбрано');
                } else {
                    orderItemTotalDetail.find('b span').html(selectedServices);
                }
            }

            fields.on('change', function () {
                addtitionalServices($( this ));
            });

            addtitionalServices(fields);

        });

    }

    // Order details dropdown

    {
        let block = $('.order-item__order-detail');

        $.each(block, function () {
            let button = $( this ).find('.order-item__order-detail-title');
            let content = $( this ).find('.order-item__order-detail-content');
            let arrow = button.find('svg');

            button.on('click', function () {
                content.slideToggle(200);
                arrow.toggleClass('active');
            })
        });
    }

    // Order detail change

    {
        let orderItem = $('.order-item');

        $.each(orderItem, function () {
            let orderIndex = $( this ).attr('data-order-index');
            let changeDetailBlock = $( this ).find('.order-item__order-detail:not([data-seller-detail-type="additional-services"])');

            $.each(changeDetailBlock, function () {

                let detailType = $( this ).attr('data-seller-detail-type');
                let fields = $( this ).find('input, select, textarea');

                fields.on('change', function () {
                    let orderItemTotalDetail = $('.order-item-total[data-order-index=' + orderIndex + '] .order-item-total__details-item[data-seller-detail-type=' + detailType + ']');
                    let value = $( this ).attr('title');

                    orderItemTotalDetail.find('b span').html(value);
                });

                $.each(fields, function () {
                    if( $( this ).attr('checked') ) {
                        $( this ).trigger('change');
                    }
                })

            });
        });
    }

    // Order detail click

    {
        let orderDetailsItems = $('.order-item-total__details-item');

        $.each(orderDetailsItems, function () {
            $( this ).on('click', function () {
                let orderIndex = $( this ).parents('.order-item-total').attr('data-order-index');
                let detailType = $( this ).attr('data-seller-detail-type');
                let orderChangeDetail = $('.order-item[data-order-index=' + orderIndex + '] .details__block[data-seller-detail-type=' + detailType + ']');

                $([document.documentElement, document.body]).animate({
                    scrollTop: orderChangeDetail.offset().top - ($(window).height() / 2)
                }, 1000);

                $('.order-item__order-detail').css({
                    'border-color' : 'rgba(0,0,0,0)'
                });
                $('.order-item__order-detail-content').slideUp(100);

                setTimeout(function(){
                    orderChangeDetail.css({
                        'border' : '1px solid',
                        'border-color' : '#E0001A'
                    });
                    orderChangeDetail.find('.order-item__order-detail-title').trigger('click');
                }, 800);

                setTimeout(function () {
                    orderChangeDetail.css({
                        'border' : '1px solid',
                        'border-color' : 'rgba(0,0,0,0)'
                    });
                }, 5000);
            });
        })
    }

});
