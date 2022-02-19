/* ================================
  Table of Content
=================================
	# .Fixed Header
	# .Navigation
	# .Back to Top 
*/
$(function($) {
"use strict";

/*========================
	Fixed Header
========================*/
$(window).on('scroll', function() {
	/**Fixed header**/
	if ($(window).scrollTop() > 250) {
		$('.ts-menu-sticky').addClass('sticky fade_down_effect');
	} else {
		$('.ts-menu-sticky').removeClass('sticky fade_down_effect');
	}
});

/*======================== 
	 Navigation 
==========================*/
if ($('.ts-main-menu').length > 0) {
	$(".ts-main-menu").navigation({
		effect: "fade",
		mobileBreakpoint: 992,
	});
}

$(window).scroll(function() {
	if ($(this).scrollTop() > 50) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});

/*======================== 
	 Back to Top 
==========================*/
// scroll body to 0px on click
$('#back-to-top').on('click', function() {
	$('#back-to-top').tooltip('hide');
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

$('#back-to-top').tooltip('hide');

/*======================== 
	 Input Group Select Files 
==========================*/
$(document).on("change", ".custom-file-input", function (e) {
	var file_name = e.target.files[0].name;

	if(file_name){
		$(this).next("label").text(file_name);
	}
	else{
		$(this).next("label").text('Choose file');
	}
})

});