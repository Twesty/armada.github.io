$(document).ready(function(){{let t=$(".dropdown");$.each(t,function(){let t=$(this).find("svg[data-dropdown-arrow]"),e=$(this).attr("data-dropdown-outside-close"),a=$("."+$(this).attr("data-dropdown"));$(this).on("click",function(){a.is(":visible")?(a.slideUp(200),t.removeClass("active")):(a.slideDown(200),t.addClass("active"))}),e&&$(document).mouseup(function(e){var o=a;o.is(e.target)||0!==o.has(e.target).length||(o.slideUp(200),t.removeClass("active"))})})}});