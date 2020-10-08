'use strict';

$( document ).ready(function () {

    // Data Picker Initialization
    $('.datepicker').datepicker();

    // Material Select Initialization
    $(document).ready(function() {
        $('.mdb-select').materialSelect();
    });

    // User edit input

    {
        let userBlock = $('.user-block');

        $.each(userBlock, function () {
            let editButton = $( this ).find('.user-block__edit');
            let inputs = $( this ).find('.user-block-info__value > *:not(span)');
            let currentValue = $( this ).find('.user-block-info__value > span');

            editButton.on('click', function (e) {
                e.preventDefault();
                let form = $( this ).parents('.user-block__wrap');

                if( $( this ).hasClass('active') ) {
                    form.submit();
                } else {
                    $( this ).addClass('active');
                    editButton.find('span').text('Сохранить');
                    currentValue.fadeOut(200);

                    setTimeout(function () {
                        inputs.fadeIn(200);
                    }, 200);
                }
            })
        })
    }

});