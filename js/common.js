$(document).ready(function($) {

	var link = $('.menu-link');
	var link_active =  $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu a');

	link.click(function(){
		$(this).toggleClass('menu-link_active');
		$(menu).toggleClass('menu_active');
	});

	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});

	$('.nav_link').mPageScroll2id();
	$('.button').mPageScroll2id();

	$(window).on('load', function() {
		$('#slider').nivoSlider();
	});



	function wResize() {
		$("header").css("min-height", $(window).height());
	};

	wResize();
	$(window).resize(function(){
		wResize();
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


});

$(document).ready(function(){
	//E-mail Ajax Send

});

$(document).ready(function(){
	$('.greet_line').animated("slideInLeft", "slideInLeft");
	$('.top_name, .top_desc').animated('slideInRight', 'slideInRight');
	$('.button').animated('fadeInUpBig', 'fadeInUpBig');

	$('.about_anim').animated('slideUp', 'slideUp');
	$('.list-left').animated("slideInLeft", "slideInLeft");
	$('.list-right').animated('slideInRight', 'slideInRight');
	$('.about_desc').animated('flipInX', 'flipInX');
	$('.link_resume').animated('swing', 'swing');

	$('.design').animated("slideInLeft", "slideInLeft");
	$('.back-end').animated('slideInRight', 'slideInRight');
	$('.web').animated('zoomInDown', 'zoomInDown');

	// $('.map').animated("slideInLeft", "slideInLeft");
	$('.location-list-item').animated('zoomInDown', 'zoomInDown');
});


function initMap() {
	var myLatLng = {lat: 50.446748, lng: 30.451086};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: '144, Borschagivska, str'
	});
}
