"use strict";$(document).ready(function(){{let e=$(".input-duplicate"),t=2;$.each(e,function(){$(this).on("click",function(){let e=$(this).attr("data-limit");if(parseInt(e),t<=e){let e=$(this).attr("data-target"),a=$(this).attr("data-required"),o=$(e).parents(".form-row").clone();a&&(o.find("input").removeAttr("required"),o.find(".invalid-feedback").detach());let n=o.find("input").attr("name"),r=o.find("input").attr("placeholder");o.find(".form-row__delete");o.find("input").removeAttr("id").attr("name",n.slice(0,-1)+t),o.find("input").attr("placeholder",r.slice(0,-1)+t),o.insertBefore($(this)),t++}})})}moment.locale("ru",{monthsShort:"Янв._Февр._Март_Апр._Май_Июнь_Июль._Арг._Сент._Окт._Ноя._Дек.".split("_"),monthsParseExact:!0}),$("input.picker__input").daterangepicker({autoApply:!1,startDate:moment().startOf("hour"),endDate:moment().startOf("hour").add(32,"hour"),opens:"left",locale:{format:"DD.MM.YYYY",applyLabel:"Применить",cancelLabel:"Отменить",yearLabel:"г.",daysOfWeek:["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]}}),$('input[name="daterange"]').on("apply.daterangepicker",function(e,t){$(".graph__date span").text(t.startDate.format("MM.DD.YY")+" - "+t.endDate.format("MM.DD.YY"))});{let e=$(".svg polygon");console.log(e);let t=$('input[name="map-code"]');$.each(e,function(){let e=$(this).attr("id");$(this).on("click",function(){t.val(e)})})}{let e=$(".vendor-menu__row--has-children");$.each(e,function(){let e=$(this),t=$(this).find(".vendor-menu__row-dropdown-arrow"),a=$(this).find(".vendor-menu__row-dropdown-arrow"),o=$(this).find("+ .vendor-menu__dropdown");a.on("click",function(a){a.preventDefault(),e.toggleClass("active"),t.toggleClass("active"),o.slideToggle(200)})})}{let e,t,a,o=$(".cabinet"),n=$("#cropImagePop"),r=$("#cancelCropBtn"),i=$("#cropImageBtn"),d=$(".gambar"),l=$("#upload-demo").croppie({viewport:{width:450,height:200},enforceBoundary:!1,enableExif:!0});$.each(o,function(o){let i=$(this).find(".item-img");i.on("click",function(){n.attr("data-image-id",o),d.attr("data-image-id",o)}),i.on("change",function(){t=$(this).data("id"),e=$(this).val(),r.data("id",t),function(e,t){if(e.files&&e.files[0]){let t=new FileReader;t.onload=function(e){$(".upload-demo").addClass("ready"),n.modal("show"),a=e.target.result},t.readAsDataURL(e.files[0])}else swal("Sorry - you're browser doesn't support the FileReader API")}(this)})}),i.on("click",function(e){l.croppie("result",{type:"base64",format:"jpeg",size:{width:450,height:200}}).then(function(e){d.eq(n.attr("data-image-id")).attr("src",e),n.modal("hide")})}),$("#cropImagePop").on("shown.bs.modal",function(){l.croppie("bind",{url:a}).then(function(){console.log("jQuery bind complete")})})}{let e=$(".vendor-menu"),t=$(".vendor__bars");e.mCustomScrollbar(),t.on("click",function(){$(this).toggleClass("active"),e.toggleClass("active"),$(".vendor-menu__row").removeClass("active"),$(".vendor-menu__dropdown").slideUp(200)}),e.on("mouseenter",function(){t.addClass("active")}),e.on("mouseleave",function(){$(".vendor-menu__row").removeClass("active"),$(".vendor-menu__dropdown").slideUp(200),$(this).hasClass("active")||t.removeClass("active")})}{let e=$(".vendor__nav-item--has-children");$.each(e,function(){let t=$(this),a=$(this).find(".vendor__nav-item-title"),o=$(this).find(".vendor__nav-item-dropdown"),n=$(this).find(".vendor__nav-item-arrow");a.on("click",function(){t.hasClass("active")||($(".vendor__nav-item-dropdown").slideUp(200),$(".vendor__nav-item-arrow").removeClass("active"),e.removeClass("active"),t.toggleClass("active"),n.toggleClass("active"),o.slideToggle(200))})})}{let e=$("#dt-multi-checkbox"),t=e.find("thead th").length-1;e.DataTable({aaSorting:[],searching:!0,pagingType:"full_numbers",language:{processing:"Подождите...",search:"Поиск:",lengthMenu:"Показывать по _MENU_",info:"Показано с _START_ до _END_ из _TOTAL_",infoEmpty:"Показано с 0 до 0 из 0",infoFiltered:"(отфильтровано из _MAX_ элементов)",infoPostFix:"",loadingRecords:"Загрузка таблицы...",zeroRecords:"Данные отсутствуют.",emptyTable:"В таблице отсутствуют данные",paginate:{},aria:{sortAscending:": активировать для сортировки столбца по возрастанию",sortDescending:": активировать для сортировки столбца по убыванию"},select:{rows:{_:"Выбрано элементов: %d",0:"",1:"Выбран один элемент"}}},columnDefs:[{orderable:!1,className:"select-checkbox",targets:0},{orderable:!1,targets:[1,t]}],select:{style:"multi",selector:"td:first-child"}}),$(".dataTables_length").addClass("bs-select")}var e=document.getElementById("lineChart").getContext("2d"),t=e.createLinearGradient(0,0,360,0);t.addColorStop(0,"rgba(55, 81, 255, .1)"),t.addColorStop(1,"rgba(55, 81, 255, 0)");new Chart(e,{type:"line",data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],datasets:[{data:[12,20,28,30,28,30,32,40,51,35,18,25],backgroundColor:t,borderColor:["#3751FF"],borderWidth:2,pointBorderColor:"transparent",pointBackgroundColor:"transparent"},{data:[31,32,28,24,24,28,32,33,31,25,20,17],backgroundColor:["rgba(0,0,0,0)"],borderColor:["#DFE0EB"],borderWidth:2,pointBorderColor:"transparent",pointBackgroundColor:"transparent"}]},options:{responsive:!0,fontFamily:"Gotham Pro",fontSize:"9px",scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1},tooltips:{enabled:!1}}})});