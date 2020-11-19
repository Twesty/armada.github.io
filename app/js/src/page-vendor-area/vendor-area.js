'use strict';

$( document ).ready(function () {

    // Matherial select
    $('.mdb-select').materialSelect();

    // User edit input

    function editPersonalData() {
        let userBlock = $('.user-block');

        $.each(userBlock, function () {
            let editButton = $( this ).find('.user-block__edit');
            let inputs = $( this ).find('.user-block-info__value > *:not(span), .duplicate__delete, .duplicate__add');

            editButton.on('click', function (e) {
                e.preventDefault();
                let form = $( this ).parents('.user-block__wrap');

                if( $( this ).hasClass('active') ) {
                    form.submit();
                } else {
                    $( this ).addClass('active');
                    editButton.find('span').text('Сохранить');

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

    editPersonalData();

    function deleteItem() {
        let deleteButton = $('.duplicate__delete');

        deleteButton.on('click', function () {
            let item = $( this ).parents('.duplicate__item');
            let index = parseInt($(item).attr('data-duplicate-item-id'))

            if( index !== 1) {
                $.each(item.nextAll('.duplicate__item'), function () {
                    let index = parseInt($( this ).attr('data-duplicate-item-id'));

                    index--;

                    let inputs = $( this ).find('input, select');

                    $.each(inputs, function () {
                        $( this ).attr('name', $( this ).attr('name').slice(0, -1) + index);
                    });

                    $( this ).attr('data-duplicate-item-id', index)
                });


                item.detach();
            }

        });
    }

    deleteItem();

    // Select additional social value

    function selectAdditional() {
        let wrap = $('.user-block__additional-other');

        $.each(wrap, function(){
            let select = $( this ).find('select');
            let input = $( this ).find('input');

            select.on('change', function() {
                let selectValueType = this.value;

                if( selectValueType === 'viber' ) {
                    input
                        .attr('type','tel')
                        .unmask()
                        .val('')
                        .mask('+0 (000) 000-00-00', {placeholder: "+0 (123) 456 78 90"});
                } else if( selectValueType === 'telegram' ) {
                    input
                        .attr('type','tel')
                        .unmask()
                        .val('')
                        .mask('+0 (000) 000-00-00', {placeholder: "+0 (123) 456 78 90"});
                } else if( selectValueType === 'whatsup' ) {
                    input
                        .attr('type','tel')
                        .unmask()
                        .val('')
                        .mask('+0 (000) 000-00-00', {placeholder: "+0 (123) 456 78 90"});
                } else if( selectValueType === 'messenger' ) {
                    input
                        .attr('type','tel')
                        .unmask()
                        .val('')
                        .mask('+0 (000) 000-00-00', {placeholder: "+0 (123) 456 78 90"});
                } else if( selectValueType === 'site' ) {
                    input
                        .unmask()
                        .val('')
                        .attr({
                            'type' : 'url',
                            'placeholder' : 'Например: www.site.com.ua'
                        })
                } else if( selectValueType === 'skype' ) {
                    input
                        .unmask()
                        .val('')
                        .attr({
                            'type' : 'text',
                            'placeholder' : 'Логин Skype'
                        })
                } else if( selectValueType === 'icq' ) {
                    input
                        .unmask()
                        .val('')
                        .attr({
                            'type' : 'text',
                            'placeholder' : 'Например: 615295455'
                        })
                }
            })
        })
    }

    selectAdditional();

    // Duplicate

    {
        let wrap = $('.duplicate');

        $.each(wrap, function () {
            let $this = $( this );
            let addButton = $( this ).find('.duplicate__add');

            addButton.on('click', function () {
                let items = $this.find('.duplicate__item');

                let itemsLength = items.length;

                let newItemPattern = items.eq(itemsLength - 1).clone();

                let inputs = newItemPattern.find('input:not(.select-dropdown), select');
                let newItemIndex = parseInt(newItemPattern.attr('data-duplicate-item-id')) + 1;

                $.each(inputs, function () {
                    $( this ).attr('name', $( this ).attr('name').slice(0, -1) + newItemIndex);
                    $( this ).val('');
                    $( this ).attr('placeholder', '');
                    $( this ).siblings('span').text('Не указано');
                });

                newItemPattern.attr('data-duplicate-item-id', newItemIndex);

                items.eq(itemsLength-1).after(newItemPattern);

                let phoneInput = $('input[type=tel]');

                $.each(phoneInput, function () {
                    $(this).mask('+0 (000) 000-00-00', {placeholder: "+0 (123) 456 78 90"});
                });

                $('.user-block__edit').unbind('click');
                $('.duplicate__delete').unbind('click');
                $('.user-block-info__value .custom-select').unbind('change');
                selectAdditional();
                editPersonalData();
                deleteItem();
            });
        })
    }

    // Data Picker Initialization
    {
        $('.datepicker').datepicker({
            format: 'dd.mm.yyyy',

            monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Мая', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
            weekdaysFull: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
            weekdaysShort: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],

            labelMonthNext: 'След. месяц',
            labelMonthPrev: 'Пред. месяц',
            labelMonthSelect: 'Выбрать месяц',
            labelYearSelect: 'Выбрать год',

            today: 'Сегодня',
            clear: 'Очистить',
            close: 'Закрыть',

        });
    }

    // Menu slide right

    {
        let menu = $('.vendor-menu');
        let button = $('.vendor__bars');

        menu.mCustomScrollbar();

        button.on('click', function () {
            $( this ).toggleClass('active');
            menu.toggleClass('active');

            $('.vendor-menu__row').removeClass('active');
            $('.vendor-menu__dropdown').slideUp(200);
        });

        menu.on('mouseenter', function () {
            button.addClass('active');
        });

        menu.on('mouseleave', function () {
            $('.vendor-menu__row').removeClass('active');
            $('.vendor-menu__dropdown').slideUp(200);

            if($( this ).hasClass('active')) {

            } else {
                button.removeClass('active');
            }
        });
    }

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


    // Delete product

    {
        let modalDeleteSubmitButton = $('.confirm-delete-modal__accept');

        // Singe
        let deleteSingleItemButton = $('.products-table__delete');

        $.each(deleteSingleItemButton, function () {
            $( this ).on('click', function () {
                let itemId = $( this ).attr('data-item-id');

                modalDeleteSubmitButton.attr('data-items-ids', itemId)
            })
        });

        // Multiple
        let deleteMultipleItemsButton = $('.products__remove');

        deleteMultipleItemsButton.on('click', function () {
            let selectedItems = $('table .selected');
            let itemsIds = '';

            $.each(selectedItems, function (index) {
                let itemId = $( this ).find('.products-table__delete').attr('data-item-id');

                if(index >= selectedItems.length - 1) {
                    itemsIds += itemId;
                } else {
                    itemsIds += itemId + ',';
                }

                modalDeleteSubmitButton.attr('data-items-ids', itemsIds)
            });
        });
    }

    // Duplicate input

    {
        let button = $('.input-duplicate');
        let i = 2;

        $.each(button, function () {
            $( this ).on('click', function () {
                let duplicateLimit = $( this ).attr('data-limit');
                parseInt(duplicateLimit);

                let targetClass = $( this ).attr('data-target');
                let requiredInherit = $( this ).attr('data-required');
                let cloneType = $( this ).attr('data-clone-type');
                let target = $(targetClass);
                let targetWrap = target.parents('.form-row, .form-group');
                let targetClone = targetWrap.clone();
                let cloneDeleteButton = targetClone.find('.form-row__delete');

                if(requiredInherit) {
                    targetClone.find('input').removeAttr('required');
                    targetClone.find('.invalid-feedback').detach();
                }

                if(i <= duplicateLimit) {
                    let cloneInputName = targetClone.find('input').attr('name');
                    let cloneInputPlaceholder = targetClone.find('input').attr('placeholder');

                    targetClone.find('input').removeAttr('id').attr('name', cloneInputName.slice(0, -1) + i);
                    targetClone.find('input').attr('placeholder', cloneInputPlaceholder.slice(0, -1) + i);

                    targetClone.insertBefore($( this ));

                    i++;
                }

                // cloneDeleteButton.removeClass('hidden');
                //
                // cloneDeleteButton.on('click', function () {
                //     let cloneIndex = $( this ).parents('.form-row').find('input').attr('name').slice(-1);
                //     $( this ).parents('.form-row').detach();
                // });

            });
        })
    }

    // Work time

    {
        let button = $('.work-time-add');
        let workTime = $('.work-time');
        let i = 1;

        button.on('click', function () {
            workTime.eq(i).fadeIn(200);
            i++;
        })
    }

    // Date range picker

    {
        moment.locale('ru', {
            monthsShort : 'Янв._Февр._Март_Апр._Май_Июнь_Июль._Арг._Сент._Окт._Ноя._Дек.'.split('_'),
            monthsParseExact : true,
        });

        $('input.picker__input').daterangepicker({
            autoApply: false,
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(32, 'hour'),
            opens: 'left',
            locale: {
                "format": 'DD.MM.YYYY',
                "applyLabel" : "Применить",
                "cancelLabel" : "Отменить",
                "yearLabel" : "г.",
                "daysOfWeek" : [
                    "ПН",
                    "ВТ",
                    "СР",
                    "ЧТ",
                    "ПТ",
                    "СБ",
                    "ВС"
                ],
                "monthNames" : [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь"
                ]
            },
        });

        $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
            $('.graph__date span').text(picker.startDate.format('MM.DD.YY') + ' - ' + picker.endDate.format('MM.DD.YY'))
        });
    }

    // Map

    {
        let schemeBlocks = $('.svg polygon');
        let output = $('input[name="map-code"]');

        $.each(schemeBlocks, function () {
            let id = $( this ).attr('id');

            $( this ).on('click', function () {
                output.val(id);
            });
        });
    }

    // Submenu dropdown

    {
        let item = $('.vendor-menu__row--has-children');

        $.each(item, function () {
            let $this = $( this );
            let arrow = $( this ).find('.vendor-menu__row-dropdown-arrow');
            let trigger = $( this ).find('.vendor-menu__row-dropdown-arrow');
            let dropdown = $( this ).find('+ .vendor-menu__dropdown');

            trigger.on('click', function (e) {
                e.preventDefault();

                $this.toggleClass('active');
                arrow.toggleClass('active');
                dropdown.slideToggle(200)
            })
        });
    }

    // Upload and crop image

    {
        let wrap = $('.cabinet');
        let modal = $('#cropImagePop');

        let cancelCropBtn = $('#cancelCropBtn');
        let acceptCropBtn = $('#cropImageBtn');

        let imageOutput = $('.gambar');

        let $uploadCrop = $('#upload-demo').croppie({
            viewport: {
                width: 450,
                height: 200,
            },
            enforceBoundary: false,
            enableExif: true
        });

        let tempFilename,
            imageId,
            rawImg;

        $.each(wrap, function (index) {
            let input = $( this ).find('.item-img');

            input.on('click', function () {
                modal.attr('data-image-id', index);
                imageOutput.attr('data-image-id', index);
            });

            input.on('change', function () {
                imageId = $(this).data('id');
                tempFilename = $(this).val();
                cancelCropBtn.data('id', imageId);

                readFile(this, index);
            });
        });

        acceptCropBtn.on('click', function (ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {width: 450, height: 200}
            }).then(function (resp) {
                imageOutput.eq(modal.attr('data-image-id')).attr('src', resp);
                modal.modal('hide');
            });
        });

        $('#cropImagePop').on('shown.bs.modal', function(){
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function(){

            });
        });

        function readFile(input, index) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    $('.upload-demo').addClass('ready');
                    modal.modal('show');
                    rawImg = e.target.result;
                };
                reader.readAsDataURL(input.files[0]);
            }
            else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }
    }

    // Vendor navigation

    {
        // Dropdowns
        let itemWithDropdown = $('.vendor__nav-item--has-children');

        $.each(itemWithDropdown, function () {
            let $this = $( this );
            let triggers = $( this ).find('.vendor__nav-item-title');

            let dropdown = $( this ).find('.vendor__nav-item-dropdown');
            let arrow = $( this ).find('.vendor__nav-item-arrow');

            triggers.on('click', function () {
                if($this.hasClass('active')) {

                } else {
                    $('.vendor__nav-item-dropdown').slideUp(200);
                    $('.vendor__nav-item-arrow').removeClass('active');
                    itemWithDropdown.removeClass('active');

                    $this.toggleClass('active');
                    arrow.toggleClass('active');
                    dropdown.slideToggle(200);
                }
            })
        })
    }

    // Products navigation

    {
        let table = $('#dt-multi-checkbox');
        let columnCount = table.find('thead th').length - 1;

        table.DataTable({
            "aaSorting": [],
            "searching": true,
            "pagingType": "full_numbers",
            "language": {
                "processing": "Подождите...",
                "search": "Поиск:",
                "lengthMenu": "Показывать по _MENU_",
                "info": "Показано с _START_ до _END_ из _TOTAL_",
                "infoEmpty": "Показано с 0 до 0 из 0",
                "infoFiltered": "(отфильтровано из _MAX_ элементов)",
                "infoPostFix": "",
                "loadingRecords": "Загрузка таблицы...",
                "zeroRecords": "Данные отсутствуют.",
                "emptyTable": "В таблице отсутствуют данные",
                "paginate": {
                    // "first": "Первая",
                    // "previous": "Предыдущая",
                    // "next": "Следующая",
                    // "last": "Последняя"
                },
                "aria": {
                    "sortAscending": ": активировать для сортировки столбца по возрастанию",
                    "sortDescending": ": активировать для сортировки столбца по убыванию"
                },
                "select": {
                    "rows": {
                        "_": "Выбрано элементов: %d",
                        "0": "",
                        "1": "Выбран один элемент"
                    }
                }
            },
            columnDefs: [
                {
                    orderable: false,
                    className: 'select-checkbox',
                    targets: 0
                },
                {
                    orderable: false,
                    targets: [1,columnCount]
                }
            ],
            select: {
                style: 'multi',
                selector: 'td:first-child'
            }
        });

        $('.dataTables_length').addClass('bs-select');
    }

    // MDB Chart

    {
        //line
        var ctxL = document.getElementById("lineChart").getContext('2d');
        var gradientFill = ctxL.createLinearGradient(0, 0, 360, 0);
        gradientFill.addColorStop(0, "rgba(55, 81, 255, .1)");
        gradientFill.addColorStop(1, "rgba(55, 81, 255, 0)");

        var myLineChart = new Chart(ctxL, {
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                datasets: [
                    {
                        data: [12,20,28,30,28,30,32,40,51,35,18,25],
                        backgroundColor: gradientFill,
                        borderColor: [
                            '#3751FF',
                        ],
                        borderWidth: 2,
                        pointBorderColor: "transparent",
                        pointBackgroundColor: "transparent",
                    },
                    {
                        data: [31,32,28,24,24,28,32,33,31,25,20,17],
                        backgroundColor: [
                            'rgba(0,0,0,0)',
                        ],
                        borderColor: [
                            '#DFE0EB',
                        ],
                        borderWidth: 2,
                        pointBorderColor: "transparent",
                        pointBackgroundColor: "transparent",
                    }
                ]
            },
            options: {
                responsive: true,
                fontFamily: "Gotham Pro",
                fontSize: "9px",
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    }

});