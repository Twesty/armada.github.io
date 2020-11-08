'use strict';

$( document ).ready(function () {

    // Order - username crop

    {
        let username = $('.order-item__customer span');

        $.each(username, function () {
            let length = $(this).text().length;

            if (length > 15) {
                $(this).text($(this).text().substr(0, 15) + '...');
            }
        });
    }

    // Register validation

    {
        (function() {
            window.addEventListener('load', function() {
                let forms = document.getElementsByClassName('needs-validation');
                let validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
    }

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