"use strict";$(document).ready(function(){$("#slider-range").slider({range:!0,orientation:"horizontal",min:0,max:1e4,values:[0,1e4],step:100,slide:function(e,t){if(t.values[0]==t.values[1])return!1;$("#min_price").val(t.values[0]).trigger("change"),$("#max_price").val(t.values[1]).trigger("change")}})}),$(document).ready(function(){{let e=$(".video__preview, .video__title");$.each(e,function(){$(this).YouTubePopUp()})}}),$(document).ready(function(){}),$(document).ready(function(){{let e=$(".gallery__thumbnails"),t=$(".gallery__thumbnail"),a=$(".gallery__selected"),n=$(".gallery__arrow--next"),o=$(".gallery__arrow--prev");e.on("init",function(e,n){$.each(t,function(){$(this).on("click",function(){t.removeClass("gallery__thumbnail--active"),$(this).addClass("gallery__thumbnail--active"),a.html($(this).html()),a.fadeIn("slow")})})}),e.slick({slidesToShow:4,slidesToScroll:1,vertical:!0,arrows:!0,prevArrow:o,nextArrow:n,swipeToSlide:!0,infinite:!1,speed:200,responsive:[{breakpoint:1024,settings:{vertical:!1}}]})}}),$(document).ready(function(){{let e=$(".catalog__shop");$.each(e,function(){let e=$(this).find(".shop-card__footer"),t=$(this).find(".shop-card__content > div:first-child").height();console.log(t),t>=220&&e.addClass("shop-card__footer--row")})}}),$(document).ready(function(){$(".datepicker").datepicker(),$(document).ready(function(){$(".mdb-select").materialSelect()});{let e=$(".user-block");$.each(e,function(){let e=$(this).find(".user-block__edit"),t=$(this).find(".user-block-info__value > *:not(span)"),a=$(this).find(".user-block-info__value > span");e.on("click",function(n){n.preventDefault();let o=$(this).parents(".user-block__wrap");$(this).hasClass("active")?o.submit():($(this).addClass("active"),e.find("span").text("Сохранить"),a.fadeOut(200),setTimeout(function(){t.fadeIn(200)},200))})})}}),$(document).ready(function(){{let e=$(".vendor__nav-item--has-children");$.each(e,function(){let t=$(this),a=$(this).find(".vendor__nav-item-title"),n=$(this).find(".vendor__nav-item-dropdown"),o=$(this).find(".vendor__nav-item-arrow");a.on("click",function(){t.hasClass("active")||($(".vendor__nav-item-dropdown").slideUp(200),$(".vendor__nav-item-arrow").removeClass("active"),e.removeClass("active"),t.toggleClass("active"),o.toggleClass("active"),n.slideToggle(200))})})}var e=document.getElementById("lineChart").getContext("2d"),t=e.createLinearGradient(0,0,360,0);t.addColorStop(0,"rgba(55, 81, 255, .1)"),t.addColorStop(1,"rgba(55, 81, 255, 0)");new Chart(e,{type:"line",data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],datasets:[{data:[12,20,28,30,28,30,32,40,51,35,18,25],backgroundColor:t,borderColor:["#3751FF"],borderWidth:2,pointBorderColor:"transparent",pointBackgroundColor:"transparent"},{data:[31,32,28,24,24,28,32,33,31,25,20,17],backgroundColor:["rgba(0,0,0,0)"],borderColor:["#DFE0EB"],borderWidth:2,pointBorderColor:"transparent",pointBackgroundColor:"transparent"}]},options:{responsive:!0,fontFamily:"Gotham Pro",fontSize:"9px",scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1},tooltips:{enabled:!1}}});moment.locale("ru",{monthsShort:"Янв._Февр._Март_Апр._Май_Июнь_Июль._Арг._Сент._Окт._Ноя._Дек.".split("_"),monthsParseExact:!0}),$('input[name="daterange"]').daterangepicker({maxSpan:{days:31},autoApply:!1,startDate:moment().startOf("hour"),endDate:moment().startOf("hour").add(32,"hour"),opens:"left",locale:{format:"DD MMM Y г.",applyLabel:"Применить",cancelLabel:"Отменить",yearLabel:"г.",daysOfWeek:["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]}}),$('input[name="daterange"]').on("apply.daterangepicker",function(e,t){$(".graph__date span").text(t.startDate.format("MM.DD.YY")+" - "+t.endDate.format("MM.DD.YY"))})});