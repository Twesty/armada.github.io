$( document ).ready(function(){

    // Dropdown
    {
        let button = $('.dropdown');

        $.each(button, function(){
            let dropdown = $('.' + $( this ).attr('data-dropdown'));

            $( this ).on('click', function () {
                if(dropdown.is(":visible")) {
                    dropdown.slideUp(200);
                } else {
                    dropdown.slideDown(200);
                }
            });

            $( document ).mouseup(function(e)
            {
                if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0)
                {
                    dropdown.slideUp(200);
                }
            });
        });
    }

});