$( document ).ready(function(){

    // Filters responsive

    {
        let filters = $('.filters');
        let open = $('.filters__open, .products__filter');
        let close = $('.filters__close, .overlay, .header__overlay');
        let overlay = $('.overlay, .header__overlay');

        close.on('click', function () {
            if( filters.hasClass('active') ) {
                $('.filter-apply').fadeOut(100);
            }
            filters.removeClass('active');
            overlay.fadeOut(200);
        });

        $.each(open, function () {
            $( this ).on('click', function () {
                if( filters.hasClass('active') ) {
                    $('.filter-apply').fadeOut(100);
                }
                overlay.fadeIn(200);
                filters.toggleClass('active');
            })
        })
    }

    // Filter apply

    {
        let button = $('.filter-apply');
        let filters = $('.filters');
        let triggers = $('.filters input, .filters select, .filters textarea');

        let close = $('.filter-apply__close');
        let apply = $('.filter-apply__apply');

        close.on('click', function () {
            button.fadeOut(100);
        });

        setTimeout(function () {
            $.each(triggers, function() {
                $( this ).on('change', function(){
                    let form = $( this ).parents('form');

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

                    apply.on('click', function () {
                        form.submit();
                    })
                })
            })
        }, 1500)
    }

});
'use strict';

$( document ).ready(function () {

    // Mask
    {
        $('input[name="dob"]').mask('00.00.0000', {placeholder: "--.--.----"});
    }

    // Matherial select

    $('.mdb-select').materialSelect();

    // Forgot password

    {
        let remindButton = $('.login__forgot-button');
        let remindForm = $('.login__remind');
        let loginForm = $('.login__in');

        remindButton.on('click', function () {
            loginForm.hide();
            remindForm.show();
        });

        let rememberedButton = $('.login__remembered-button');

        rememberedButton.on('click', function () {
            loginForm.show();
            remindForm.hide();
        })
    }

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

            editButton.on('click', function (e) {
                e.preventDefault();
                let form = $( this ).parents('.user-block__wrap');
                if( $( this ).hasClass('active') ) {

                } else {
                    $( this ).addClass('active');
                    $( this ).find('span').text('Сохранить');

                    $( this ).replaceWith('<button type="submit" class="user-block__edit">' + $( this ).html() + '</button>');

                    $.each(inputs, function () {
                        let currentValue = $( this ).siblings('span');

                        if( $( this ).hasClass('user-block-info__value--no-change') ) {
                            return;
                        }

                        else if( $( this ).hasClass('user-block-info__value--password') ) {
                            currentValue.fadeOut(200);

                            setTimeout(() => {
                                let cloneInput = $( this )
                                    .clone()
                                    .attr({
                                        'name':'current-password',
                                        'placeholder':'Текущий пароль'
                                    })
                                    .insertBefore($( this ))
                                    .fadeIn(200);

                                $( this ).fadeIn(200);
                            }, 200)
                        }

                        else {
                            currentValue.fadeOut(200);

                            setTimeout(() => {
                                $( this ).fadeIn(200);
                            }, 200)
                        }
                    })
                }
            })
        })
    }

});