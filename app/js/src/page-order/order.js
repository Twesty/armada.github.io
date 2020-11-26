'use strict';

$( document ).ready(function () {

    $('.mdb-select').materialSelect();

    // Order details dropdown

    {
        let block = $('.seller__order-detail');

        $.each(block, function () {
            let button = $( this ).find('.seller__order-detail-title');
            let content = $( this ).find('.seller__order-detail-content');
            let arrow = button.find('svg');

            button.on('click', function () {
                content.slideToggle(200);
                arrow.toggleClass('active');
            })
        });
    }

});
