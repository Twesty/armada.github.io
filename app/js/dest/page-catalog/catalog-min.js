"use strict";$(document).ready(function(){$("#slider-range").slider({range:!0,orientation:"horizontal",min:0,max:1e4,values:[0,1e4],step:100,slide:function(e,a){if(a.values[0]==a.values[1])return!1;$("#min_price").val(a.values[0]).trigger("change"),$("#max_price").val(a.values[1]).trigger("change")}})});