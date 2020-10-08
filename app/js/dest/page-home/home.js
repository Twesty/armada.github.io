'use strict';

$( document ).ready(function () {

    // Video popup

    {
        let popupButton = $('.video__preview, .video__title');

        $.each(popupButton, function () {
            $( this ).YouTubePopUp();
        });
    }

});