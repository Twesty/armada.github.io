'use strict';

$( document ).ready(function () {

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

    // Date range picker

    {
        moment.locale('ru', {
            monthsShort : 'Янв._Февр._Март_Апр._Май_Июнь_Июль._Арг._Сент._Окт._Ноя._Дек.'.split('_'),
            monthsParseExact : true,
        });

        $('input[name="daterange"]').daterangepicker({
            maxSpan: {
                "days": 31
            },
            autoApply: false,
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(32, 'hour'),
            opens: 'left',
            locale: {
                "format": 'DD MMM Y г.',
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

});