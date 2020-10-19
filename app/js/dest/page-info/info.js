'use strict';

$( document ).ready(function () {

    // Service show contacts

    {
        let serviceItem = $('.service');

        $.each(serviceItem, function () {
            let button = $( this ).find('.service__contacts-wrap > span:first-child');
            let contacts = $( this ).find('.service__contacts');

            button.on('click', function () {
                button.hide();
                contacts.show();
            })
        });
    }

});