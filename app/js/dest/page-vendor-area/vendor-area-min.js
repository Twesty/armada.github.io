"use strict";$(document).ready(function(){$("#dt-multi-checkbox").DataTable({aaSorting:[],searching:!1,pagingType:"full_numbers",language:{processing:"Подождите...",search:"Поиск:",lengthMenu:"Показывать по _MENU_",info:"Продукты с _START_ до _END_ из _TOTAL_ продуктов",infoEmpty:"Показано с 0 до 0 из 0",infoFiltered:"(отфильтровано из _MAX_ продуктов)",infoPostFix:"",loadingRecords:"Загрузка продуктов...",zeroRecords:"Продукты отсутствуют.",emptyTable:"В таблице отсутствуют данные",paginate:{},aria:{sortAscending:": активировать для сортировки столбца по возрастанию",sortDescending:": активировать для сортировки столбца по убыванию"},select:{rows:{_:"Выбрано продуктов: %d",0:"",1:"Выбран один продукт"}}},columnDefs:[{orderable:!1,className:"select-checkbox",targets:0},{orderable:!1,targets:[1,10]}],select:{style:"multi",selector:"td:first-child"}}),$(".dataTables_length").addClass("bs-select");{let e=$(".vendor__nav-item--has-children");$.each(e,function(){let t=$(this),a=$(this).find(".vendor__nav-item-title"),o=$(this).find(".vendor__nav-item-dropdown"),r=$(this).find(".vendor__nav-item-arrow");a.on("click",function(){t.hasClass("active")||($(".vendor__nav-item-dropdown").slideUp(200),$(".vendor__nav-item-arrow").removeClass("active"),e.removeClass("active"),t.toggleClass("active"),r.toggleClass("active"),o.slideToggle(200))})})}var e=document.getElementById("lineChart").getContext("2d"),t=e.createLinearGradient(0,0,360,0);t.addColorStop(0,"rgba(55, 81, 255, .1)"),t.addColorStop(1,"rgba(55, 81, 255, 0)");new Chart(e,{type:"line",data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],datasets:[{data:[12,20,28,30,28,30,32,40,51,35,18,25],backgroundColor:t,borderColor:["#3751FF"],borderWidth:2,pointBorderColor:"transparent",pointBackgroundColor:"transparent"},{data:[31,32,28,24,24,28,32,33,31,25,20,17],backgroundColor:["rgba(0,0,0,0)"],borderColor:["#DFE0EB"],borderWidth:2,pointBorderColor:"transparent",pointBackgroundColor:"transparent"}]},options:{responsive:!0,fontFamily:"Gotham Pro",fontSize:"9px",scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1},tooltips:{enabled:!1}}});moment.locale("ru",{monthsShort:"Янв._Февр._Март_Апр._Май_Июнь_Июль._Арг._Сент._Окт._Ноя._Дек.".split("_"),monthsParseExact:!0}),$('input[name="daterange"]').daterangepicker({maxSpan:{days:31},autoApply:!1,startDate:moment().startOf("hour"),endDate:moment().startOf("hour").add(32,"hour"),opens:"left",locale:{format:"DD MMM Y г.",applyLabel:"Применить",cancelLabel:"Отменить",yearLabel:"г.",daysOfWeek:["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]}}),$('input[name="daterange"]').on("apply.daterangepicker",function(e,t){$(".graph__date span").text(t.startDate.format("MM.DD.YY")+" - "+t.endDate.format("MM.DD.YY"))})});