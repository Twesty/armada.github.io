'use strict';

$( document ).ready(function () {

    // Matherial select
    $('.mdb-select').materialSelect();


    // TinyMCE

    {
        tinymce.init({
            selector: '.tinyMCE',
            plugin: 'a_tinymce_plugin',
            plugins: 'codesample code',
            a_plugin_option: true,
            a_configuration_option: 400,
            toolbar: 'undo redo removeformat | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | codesample code',
            language: 'ru'
        });

        // Validation
        let form = $('form.was-validated');

        form.on('submit', function (e) {
            let editorContent = tinymce.get('description').getContent();
            if (editorContent.length < 20)
            {
                e.preventDefault();

                $('.description .invalid-feedback').css({'display':'block'});
                $('.tox-tinymce').css({
                    'border-color' : '#dc3545'
                });
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".description").offset().top - 100
                }, 1000);
            }
        })
    }

    // Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({html:true})
    });

    // Menu slide right

    {
        let menu = $('.vendor-menu');
        let button = $('.vendor__bars');

        menu.mCustomScrollbar();

        button.on('click', function () {
            $(this).toggleClass('active');
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

            if ($(this).hasClass('active')) {

            } else {
                button.removeClass('active');
            }
        });
    }

    // User edit input

    function editPersonalData() {
        let userBlock = $('.user-block');

        $.each(userBlock, function () {
            let editButton = $( this ).find('.user-block__edit');
            let inputs = $( this ).find('.user-block-info__value > *:not(span), .duplicate__delete, .duplicate__add');

            editButton.on('click', function (e) {
                let form = $( this ).parents('form');

                if( $( this ).hasClass('active') ) {

                } else {
                    //e.preventDefault();


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
                    "first": "Первая",
                    "previous": "Предыдущая",
                    "next": "Следующая",
                    "last": "Последняя"
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
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'csv',
                    text: 'CSV',
                    charset: 'utf-8',
                    extension: '.csv',
                    fieldSeparator: ';',
                    fieldBoundary: '',
                    bom: true,
                    exportOptions: {
                        columns: [ '.export' ]
                    }
                },
                {
                    extend: 'excel',
                    text: 'Excel',
                    charset: 'utf-8',
                    exportOptions: {
                        columns: [ '.export' ]
                    }
                },
                {
                    extend: 'pdf',
                    text: 'PDF',
                    charset: 'utf-8',
                    exportOptions: {
                        columns: [ '.export' ]
                    }
                },
                {
                    extend: 'print',
                    text: 'Распечатать',
                    charset: 'utf-8',
                    exportOptions: {
                        columns: [ '.export' ]
                    }
                },
                {
                    extend: 'copy',
                    text: 'Копировать',
                    charset: 'utf-8',
                    exportOptions: {
                        columns: [ '.export' ]
                    }
                }
            ],
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

        $('.dt-buttons').addClass('d-flex align-items-center').prepend('<span class="mr-3">Экспорт:</span>');
        $('.dt-button').addClass('button btn-light mr-2').removeClass('dt-button');

        $('.dataTables_length').addClass('bs-select');
    }

});