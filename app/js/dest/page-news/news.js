$( document ).ready(function(){

    // Add to cart
    let button = $('.product-card__add-to-card');

    function addToCartButton(button) {
        $.each(button, function () {
            let innerButton = $( this ).find('button.btn_to_basket.btn');

            if (innerButton.attr('data-chosen') === 'true') {
                innerButton.addClass('active');
                innerButton.slideUp(200);

                innerButton.find('span').text('В корзине');
                innerButton.find('svg').replaceWith('' +
                    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M2.05897 11.9411C2.70043 12.5826 3.44764 13.0863 4.27991 13.4383C5.14211 13.803 6.05737 13.9879 7.0003 13.9879C7.94321 13.9879 8.85849 13.803 9.72069 13.4383C10.5529 13.0863 11.3002 12.5825 11.9417 11.9411C12.5831 11.2997 13.0868 10.5525 13.4388 9.72018C13.8035 8.85798 13.9884 7.94269 13.9884 6.99981C13.9884 6.05686 13.8035 5.1416 13.4388 4.27942C13.0868 3.44715 12.5831 2.69994 11.9417 2.05848C11.3002 1.41703 10.553 0.913309 9.72069 0.561303C8.85847 0.196604 7.94321 0.0117188 7.0003 0.0117188C6.05737 0.0117188 5.14211 0.196628 4.27991 0.561303C3.44764 0.913309 2.70043 1.41705 2.05897 2.05848C1.41752 2.69992 0.913797 3.44715 0.561767 4.2794C0.197116 5.1416 0.012207 6.05686 0.012207 6.99981C0.012207 7.94272 0.197116 8.85798 0.561791 9.72018C0.913797 10.5525 1.41754 11.2997 2.05897 11.9411ZM7.0003 1.03187C10.2963 1.03187 12.9682 3.70381 12.9682 6.99981C12.9682 10.2958 10.2963 12.9677 7.0003 12.9677C3.7043 12.9677 1.03236 10.2958 1.03236 6.99981C1.03236 3.70381 3.7043 1.03187 7.0003 1.03187Z" fill="white"/>' +
                    '<path d="M7 14.0009C6.0554 14.0009 5.1386 13.8157 4.27496 13.4504C3.44126 13.0978 2.69277 12.5932 2.05027 11.9507C1.40772 11.3081 0.903138 10.5596 0.550537 9.72596C0.185219 8.86228 0 7.94545 0 7.00097C0 6.05647 0.185219 5.13962 0.550513 4.27592C0.903114 3.44226 1.40772 2.69377 2.05024 2.05122C2.69277 1.40867 3.44129 0.904091 4.27494 0.551489C5.13864 0.186195 6.05547 0.000976562 6.99998 0.000976562C7.94455 0.000976562 8.86138 0.186195 9.72499 0.551513C10.5587 0.904115 11.3072 1.40872 11.9497 2.05124C12.5923 2.69384 13.0969 3.44234 13.4495 4.27594C13.8148 5.13964 14 6.05647 14 7.00097C14 7.94545 13.8148 8.86228 13.4495 9.72599C13.0969 10.5596 12.5923 11.3081 11.9497 11.9507C11.3072 12.5932 10.5587 13.0978 9.72499 13.4505C8.86138 13.8157 7.94455 14.0009 7 14.0009ZM7 0.0247897C6.05869 0.0247897 5.145 0.209366 4.28425 0.573421C3.45343 0.924832 2.70746 1.42769 2.0671 2.06805C1.42672 2.70844 0.923856 3.45439 0.572445 4.28518C0.208389 5.14595 0.0238132 6.05966 0.0238132 7.00097C0.0238132 7.94224 0.208389 8.85597 0.572445 9.71672C0.923856 10.5475 1.42672 11.2935 2.0671 11.9339C2.70744 12.5742 3.45339 13.077 4.28425 13.4285C5.14491 13.7925 6.05862 13.9771 7 13.9771C7.94138 13.9771 8.85507 13.7925 9.71575 13.4285C10.5466 13.077 11.2926 12.5742 11.9329 11.9339C12.5733 11.2934 13.0761 10.5475 13.4275 9.71672C13.7916 8.85597 13.9762 7.94226 13.9762 7.00097C13.9762 6.05966 13.7916 5.14595 13.4275 4.28523C13.0762 3.45446 12.5733 2.70851 11.9329 2.06808C11.2925 1.42772 10.5465 0.924856 9.71575 0.573445C8.85505 0.209366 7.94133 0.0247897 7 0.0247897ZM7 12.9808C5.40273 12.9808 3.90105 12.3588 2.77161 11.2293C1.64218 10.0999 1.02016 8.59824 1.02016 7.00097C1.02016 5.40371 1.64216 3.90202 2.77161 2.77259C3.90105 1.64316 5.40273 1.02113 7 1.02113C8.59727 1.02113 10.0989 1.64316 11.2284 2.77259C12.3578 3.90205 12.9798 5.40371 12.9798 7.00097C12.9798 8.59824 12.3578 10.0999 11.2284 11.2293C10.0989 12.3588 8.59724 12.9808 7 12.9808ZM7 1.04495C5.40909 1.04495 3.91341 1.66449 2.78845 2.78943C1.66352 3.91438 1.04397 5.41006 1.04397 7.00097C1.04397 8.59188 1.66352 10.0876 2.78845 11.2125C3.91338 12.3374 5.40909 12.957 7 12.957C8.59091 12.957 10.0866 12.3374 11.2115 11.2125C12.3365 10.0876 12.956 8.59186 12.956 7.00097C12.956 5.41006 12.3365 3.91436 11.2115 2.78943C10.0866 1.66447 8.59091 1.04495 7 1.04495Z" fill="white"/>' +
                    '<path d="M5.45288 9.54437C5.54854 9.64006 5.67827 9.69375 5.81355 9.69375C5.94886 9.69375 6.07857 9.64003 6.17423 9.54437L10.5412 5.1774C10.7404 4.9782 10.7404 4.65524 10.5412 4.45605C10.342 4.25685 10.0191 4.25683 9.81986 4.45605L5.81355 8.46237L4.17983 6.82862C3.98063 6.6294 3.65768 6.6294 3.45848 6.82862C3.25928 7.02782 3.25928 7.35078 3.45848 7.54997L5.45288 9.54437Z" fill="white"/>' +
                    '<path d="M5.8135 9.70538C5.67407 9.70538 5.54298 9.65109 5.44439 9.5525L3.44999 7.5581C3.24649 7.35457 3.24649 7.02342 3.44999 6.81989C3.54858 6.72128 3.67967 6.66699 3.8191 6.66699C3.95852 6.66699 4.08959 6.72128 4.1882 6.81989L5.81352 8.44521L9.81139 4.44731C9.90998 4.3487 10.0411 4.29443 10.1805 4.29443C10.3199 4.29443 10.451 4.34873 10.5496 4.44731C10.6482 4.5459 10.7025 4.67699 10.7025 4.81642C10.7025 4.95584 10.6482 5.08691 10.5496 5.18552L6.1826 9.5525C6.08404 9.65109 5.95295 9.70538 5.8135 9.70538ZM3.8191 6.69082C3.68603 6.69082 3.56094 6.74264 3.46685 6.83675C3.27263 7.03099 3.27263 7.34702 3.46685 7.54126L5.46125 9.53566C5.55534 9.62975 5.68043 9.68157 5.8135 9.68157C5.94659 9.68157 6.07168 9.62975 6.16577 9.53566L10.5327 5.16869C10.6268 5.0746 10.6787 4.94949 10.6787 4.81644C10.6787 4.6834 10.6268 4.55826 10.5327 4.46417C10.4387 4.37006 10.3135 4.31827 10.1805 4.31827C10.0474 4.31827 9.92229 4.37009 9.82821 4.46417L5.8135 8.47891L4.17134 6.83675C4.07726 6.74264 3.95217 6.69082 3.8191 6.69082Z" fill="white"/>' +
                    '</svg>');

                innerButton.slideDown(200);
            } else {
                innerButton.removeClass('active');

                innerButton.find('span').text('В корзину');
                innerButton.find('svg').replaceWith('<svg class="btn_to_basket" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '                    <path d="M0.928974 0.457031H3.69167C3.97878 0.457031 4.22487 0.662109 4.27761 0.943359L5.75417 8.78027H12.1614L13.2864 4.71973H8.37331C8.04226 4.71973 7.77565 4.45312 7.77565 4.12207C7.77565 3.79102 8.04226 3.52441 8.37331 3.52441H14.0716C14.6048 3.52441 14.7278 3.99902 14.6458 4.28027L13.1897 9.53613C13.1194 9.79394 12.8821 9.97266 12.6155 9.97266H5.25905C4.97194 9.97266 4.72585 9.76758 4.67311 9.48633L3.19362 1.65234H0.926044C0.594989 1.65234 0.328388 1.38574 0.328388 1.05469C0.331318 0.723633 0.597919 0.457031 0.928974 0.457031Z" fill="white"/>' +
                    '                    <path d="M6.65088 10.9717C7.61768 10.9717 8.40283 11.7715 8.40283 12.7588C8.40283 13.7432 7.61768 14.5459 6.65088 14.5459C5.68408 14.5459 4.89892 13.7461 4.89892 12.7588C4.89892 11.7715 5.68408 10.9717 6.65088 10.9717ZM6.65088 13.3477C6.9585 13.3477 7.20752 13.0811 7.20752 12.7559C7.20752 12.4307 6.9585 12.1641 6.65088 12.1641C6.34326 12.1641 6.09424 12.4307 6.09424 12.7559C6.09424 13.084 6.34326 13.3477 6.65088 13.3477Z" fill="white"/>' +
                    '                    <path d="M11.2881 10.9717C12.2549 10.9717 13.04 11.7715 13.04 12.7588C13.04 13.7432 12.2549 14.5459 11.2881 14.5459C10.3213 14.5459 9.53613 13.7461 9.53613 12.7588C9.53613 11.7715 10.3213 10.9717 11.2881 10.9717ZM11.2881 13.3477C11.5957 13.3477 11.8447 13.0811 11.8447 12.7559C11.8447 12.4307 11.5957 12.1641 11.2881 12.1641C10.9805 12.1641 10.7314 12.4307 10.7314 12.7559C10.7314 13.084 10.9805 13.3477 11.2881 13.3477Z" fill="white"/>' +
                    '                </svg>');
            }
        });
    }

    addToCartButton(button);

    button.on('click', function () {
        let innerButton = $( this ).find('button.btn_to_basket.btn');

        if (innerButton.attr('data-chosen') === 'false') {
            innerButton.addClass('active');
            innerButton.slideUp(200);

            innerButton.find('span').text('В корзине');
            innerButton.find('svg').replaceWith('' +
                    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M2.05897 11.9411C2.70043 12.5826 3.44764 13.0863 4.27991 13.4383C5.14211 13.803 6.05737 13.9879 7.0003 13.9879C7.94321 13.9879 8.85849 13.803 9.72069 13.4383C10.5529 13.0863 11.3002 12.5825 11.9417 11.9411C12.5831 11.2997 13.0868 10.5525 13.4388 9.72018C13.8035 8.85798 13.9884 7.94269 13.9884 6.99981C13.9884 6.05686 13.8035 5.1416 13.4388 4.27942C13.0868 3.44715 12.5831 2.69994 11.9417 2.05848C11.3002 1.41703 10.553 0.913309 9.72069 0.561303C8.85847 0.196604 7.94321 0.0117188 7.0003 0.0117188C6.05737 0.0117188 5.14211 0.196628 4.27991 0.561303C3.44764 0.913309 2.70043 1.41705 2.05897 2.05848C1.41752 2.69992 0.913797 3.44715 0.561767 4.2794C0.197116 5.1416 0.012207 6.05686 0.012207 6.99981C0.012207 7.94272 0.197116 8.85798 0.561791 9.72018C0.913797 10.5525 1.41754 11.2997 2.05897 11.9411ZM7.0003 1.03187C10.2963 1.03187 12.9682 3.70381 12.9682 6.99981C12.9682 10.2958 10.2963 12.9677 7.0003 12.9677C3.7043 12.9677 1.03236 10.2958 1.03236 6.99981C1.03236 3.70381 3.7043 1.03187 7.0003 1.03187Z" fill="white"/>' +
                    '<path d="M7 14.0009C6.0554 14.0009 5.1386 13.8157 4.27496 13.4504C3.44126 13.0978 2.69277 12.5932 2.05027 11.9507C1.40772 11.3081 0.903138 10.5596 0.550537 9.72596C0.185219 8.86228 0 7.94545 0 7.00097C0 6.05647 0.185219 5.13962 0.550513 4.27592C0.903114 3.44226 1.40772 2.69377 2.05024 2.05122C2.69277 1.40867 3.44129 0.904091 4.27494 0.551489C5.13864 0.186195 6.05547 0.000976562 6.99998 0.000976562C7.94455 0.000976562 8.86138 0.186195 9.72499 0.551513C10.5587 0.904115 11.3072 1.40872 11.9497 2.05124C12.5923 2.69384 13.0969 3.44234 13.4495 4.27594C13.8148 5.13964 14 6.05647 14 7.00097C14 7.94545 13.8148 8.86228 13.4495 9.72599C13.0969 10.5596 12.5923 11.3081 11.9497 11.9507C11.3072 12.5932 10.5587 13.0978 9.72499 13.4505C8.86138 13.8157 7.94455 14.0009 7 14.0009ZM7 0.0247897C6.05869 0.0247897 5.145 0.209366 4.28425 0.573421C3.45343 0.924832 2.70746 1.42769 2.0671 2.06805C1.42672 2.70844 0.923856 3.45439 0.572445 4.28518C0.208389 5.14595 0.0238132 6.05966 0.0238132 7.00097C0.0238132 7.94224 0.208389 8.85597 0.572445 9.71672C0.923856 10.5475 1.42672 11.2935 2.0671 11.9339C2.70744 12.5742 3.45339 13.077 4.28425 13.4285C5.14491 13.7925 6.05862 13.9771 7 13.9771C7.94138 13.9771 8.85507 13.7925 9.71575 13.4285C10.5466 13.077 11.2926 12.5742 11.9329 11.9339C12.5733 11.2934 13.0761 10.5475 13.4275 9.71672C13.7916 8.85597 13.9762 7.94226 13.9762 7.00097C13.9762 6.05966 13.7916 5.14595 13.4275 4.28523C13.0762 3.45446 12.5733 2.70851 11.9329 2.06808C11.2925 1.42772 10.5465 0.924856 9.71575 0.573445C8.85505 0.209366 7.94133 0.0247897 7 0.0247897ZM7 12.9808C5.40273 12.9808 3.90105 12.3588 2.77161 11.2293C1.64218 10.0999 1.02016 8.59824 1.02016 7.00097C1.02016 5.40371 1.64216 3.90202 2.77161 2.77259C3.90105 1.64316 5.40273 1.02113 7 1.02113C8.59727 1.02113 10.0989 1.64316 11.2284 2.77259C12.3578 3.90205 12.9798 5.40371 12.9798 7.00097C12.9798 8.59824 12.3578 10.0999 11.2284 11.2293C10.0989 12.3588 8.59724 12.9808 7 12.9808ZM7 1.04495C5.40909 1.04495 3.91341 1.66449 2.78845 2.78943C1.66352 3.91438 1.04397 5.41006 1.04397 7.00097C1.04397 8.59188 1.66352 10.0876 2.78845 11.2125C3.91338 12.3374 5.40909 12.957 7 12.957C8.59091 12.957 10.0866 12.3374 11.2115 11.2125C12.3365 10.0876 12.956 8.59186 12.956 7.00097C12.956 5.41006 12.3365 3.91436 11.2115 2.78943C10.0866 1.66447 8.59091 1.04495 7 1.04495Z" fill="white"/>' +
                    '<path d="M5.45288 9.54437C5.54854 9.64006 5.67827 9.69375 5.81355 9.69375C5.94886 9.69375 6.07857 9.64003 6.17423 9.54437L10.5412 5.1774C10.7404 4.9782 10.7404 4.65524 10.5412 4.45605C10.342 4.25685 10.0191 4.25683 9.81986 4.45605L5.81355 8.46237L4.17983 6.82862C3.98063 6.6294 3.65768 6.6294 3.45848 6.82862C3.25928 7.02782 3.25928 7.35078 3.45848 7.54997L5.45288 9.54437Z" fill="white"/>' +
                    '<path d="M5.8135 9.70538C5.67407 9.70538 5.54298 9.65109 5.44439 9.5525L3.44999 7.5581C3.24649 7.35457 3.24649 7.02342 3.44999 6.81989C3.54858 6.72128 3.67967 6.66699 3.8191 6.66699C3.95852 6.66699 4.08959 6.72128 4.1882 6.81989L5.81352 8.44521L9.81139 4.44731C9.90998 4.3487 10.0411 4.29443 10.1805 4.29443C10.3199 4.29443 10.451 4.34873 10.5496 4.44731C10.6482 4.5459 10.7025 4.67699 10.7025 4.81642C10.7025 4.95584 10.6482 5.08691 10.5496 5.18552L6.1826 9.5525C6.08404 9.65109 5.95295 9.70538 5.8135 9.70538ZM3.8191 6.69082C3.68603 6.69082 3.56094 6.74264 3.46685 6.83675C3.27263 7.03099 3.27263 7.34702 3.46685 7.54126L5.46125 9.53566C5.55534 9.62975 5.68043 9.68157 5.8135 9.68157C5.94659 9.68157 6.07168 9.62975 6.16577 9.53566L10.5327 5.16869C10.6268 5.0746 10.6787 4.94949 10.6787 4.81644C10.6787 4.6834 10.6268 4.55826 10.5327 4.46417C10.4387 4.37006 10.3135 4.31827 10.1805 4.31827C10.0474 4.31827 9.92229 4.37009 9.82821 4.46417L5.8135 8.47891L4.17134 6.83675C4.07726 6.74264 3.95217 6.69082 3.8191 6.69082Z" fill="white"/>' +
                '</svg>');

            innerButton.slideDown(200);
        }
    });

    $("#cardModal").on('hide.bs.modal', function(){
        addToCartButton(button);
    });

    // Product card zoom
    // {
    //     let loopButton = $('.product-card__zoom'),
    //         loopModal = $('.photo-modal'),
    //         loopClose = $('.photo-modal__close'),
    //         loopModalImage = $('.photo-modal__current img');
    //
    //     loopButton.on('click', function () {
    //         let loopProductImage = $( this ).parents('.product-card__wrap').find('.product-card__image img');
    //         loopModalImage.attr('src', loopProductImage.attr('src'));
    //
    //         $('.photo-modal__zoom').zoom({
    //             url: loopProductImage.attr('data-zoom-image')
    //         });
    //
    //         loopModal.addClass('active');
    //     });
    //
    //     loopClose.on('click', function () {
    //         loopModal.removeClass('active');
    //     });
    //
    // }

    // Product card limitation text and hover

    {
        let productCard = $('.product-card__wrap');

        $.each(productCard, function () {
            let title = $(this).find('.product-card__title'),
                vendor = $(this).find('.product-card__vendor'),
                titleText = title.text(),
                vendorText = vendor.text(),
                standartLimit = 30,
                expandedLimit = 70,
                limitRatio = expandedLimit / standartLimit;

            $.each([title, vendor], function () {
                let length = $(this).text().length;

                if (length > standartLimit) {
                    $(this).text($(this).text().substr(0, standartLimit) + '...');
                }
            });

            let titleHeight = title.height(),
                vendorHeight = vendor.height();

            // Product card hover

            if(titleText.length > standartLimit || vendorText.length > standartLimit) {
                let productContent = $( this ).find('.product-card__content');

                if($( this ).hasClass('limited')) {

                } else if($(window).width() > 768) {
                    $( this ).on('mouseenter', function () {
                        title.text(titleText);
                        vendor.text(vendorText);


                        productContent.css({
                            'margin-top' : '-' + ((titleHeight * limitRatio) + (vendorHeight * limitRatio) - 50) + 'px',
                        });

                        $.each([title, vendor], function () {
                            let length = $(this).text().length;

                            if (length > expandedLimit) {
                                $(this).text($(this).text().substr(0, expandedLimit) + '...');
                            }
                        });

                    });

                    $( this ).on('mouseleave', function () {

                        productContent.css({
                            'margin-top' : '0'
                        });

                        $.each([title, vendor], function () {
                            let length = $(this).text().length;

                            if (length > standartLimit) {
                                $(this).text($(this).text().substr(0, standartLimit) + '...');
                            }
                        });

                    })
                }
            }

        })
    }

});
$( document ).ready(function(){

    // Together slider

    {
        let together = $('.together__wrap');

        $.each(together, function () {
            let items = $( this ).find('.together__items');
            let nextArrow = $( this ).find('.together__arrow--next');
            let prevArrow = $( this ).find('.together__arrow--prev');

            $('.header__cart').on('click', function () {
                items.slick('slickGoTo', 1);
            });

            items.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                nextArrow: nextArrow,
                prevArrow: prevArrow,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            dots: true
                        }
                    }
                ]
            });

            let dots = $( this ).find('.slick-dots');

            if(window.matchMedia('(max-width: 1024px)').matches){
                dots.append(nextArrow);
                dots.prepend(prevArrow);
            } else {

            }
        });


    }

});
'use strict';

$( document ).ready(function () {


});