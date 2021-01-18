'use strict';

$( document ).ready(function () {

    // Input masks

    {
        // Phone input mask
        let phoneInput = $('input[type=tel]');

        $.each(phoneInput, function () {
            $(this).mask('+0 (000) 000-00-00');
        });
    }

    // Show/hide password

    {
        let inputWrap = $('.show_hide_password');

        inputWrap.each(function () {
            let button = $( this ).find('a');
            let input = $( this ).find('input');
            let icon = $( this ).find('i');

            button.on('click', function (e) {
                e.preventDefault();

                if(input.attr("type") == "text"){
                    input.attr('type', 'password');
                    icon
                        .addClass( "fa-eye-slash" )
                        .removeClass( "fa-eye" );
                }else if(input.attr("type") == "password"){
                    input.attr('type', 'text');
                    icon
                        .removeClass( "fa-eye-slash" )
                        .addClass( "fa-eye" );
                }
            })
        });
    }

});