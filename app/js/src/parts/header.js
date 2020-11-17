$( document ).ready(function(){

    // Header media position fixed

    {
        let mainContent = $('.main-content');
        let header = $('.header');
        let headerHeight = header.outerHeight();

        $( window ).resize(function(){
            let headerHeight = header.outerHeight();
            if(($(window).width() + 17) < 1280) {
                mainContent.css({'margin-top': headerHeight + 'px'});
            } else {
                mainContent.css({'margin-top': '0'});
            }
        });

        if(($(window).width() + 17) < 1280) {
            mainContent.css({'margin-top': headerHeight + 'px'});
        }
    }

    // Header responsive menu

    {
        let header = $('.header');
        let button = $('.header__bars');
        let overlay = $('.overlay, .header__overlay');
        let menu = $('.header__responsive');

        overlay.on('click', function () {
            overlay.fadeOut(200);
            menu.removeClass('active');
        });

        $.each(button, function () {
            $( this ).on('click', function () {
                overlay.fadeIn(200);
                menu.toggleClass('active');
            })
        })
    }

    // Header autocomplete

    {
        let autosearch = $('.autosearch');
        let autosearchWrap = $('.autosearch__wrap');

        let overlay = $('.overlay');

        overlay.on('click', function () {
            overlay.fadeOut(200);
            autosearch.slideUp(200);
        });

        let searchBox = $('.header__search .search');
        let searchInput = searchBox.find('input');
        let searchBoxWidth = searchBox.width();
        let searchBoxOffset = searchBox.offset();
        let searchBoxOffsetLeft = searchBoxOffset.left;

        searchInput.keyup(function(){
            if($( this ).val().length === 0) {
                autosearch.slideUp(200);
                searchBox.find('button').removeClass('active');
                overlay.fadeOut(200);
            } else {
                overlay.fadeIn(200);
                searchBox.find('button').addClass('active');
                autosearchWrap.css({
                    'max-width' : 'calc(100% - ' + searchBoxOffsetLeft - 40 + 'px)',
                    'left' : searchBoxOffsetLeft + 'px'
                });
                autosearch.slideDown(200);
            }
        })
    }

    // Header categories

    {
        let button = $('.categories__show');
        let dropdown = $('.all-categories');

        button.on('click', function () {
            dropdown.slideToggle(200, function(){
                if ($(this).is(':visible'))
                    $(this).css('display','flex');
            });
        });

        $(document).mouseup(function(e)
        {
            let container = dropdown;

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                container.slideUp(200);
            }
        });
    }

    // Header subcategories dropdown

    {
        let item = $('.all-categories__main-item--has-children');
        let wrap = $('.all-categories');

        $.each(item, function(){
            let dropdown = $( this ).find('.all-categories__subcategories');

            $( this ).on('mouseenter', function () {
                dropdown.css({'display':'flex'});
                dropdown.find('.all-categories__subcategories-main-ul').css({
                    'height': dropdown.find('.all-categories__subcategories-items-wrap').height()
                });
                dropdown.find('.all-categories__subcategories-items-wrap').mCustomScrollbar({
                    axis: 'x'
                });
            });

            $( this ).on('mouseleave', function () {
                dropdown.css({'display':'none'});
            })
        })
    }

});