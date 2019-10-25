$(function () {

	// Бургер и меню
	let popupMenu = $('.js-menu-popup');
	let burger = $('.js-btn-burger');
	burger.on('click', function() {
		$(this).toggleClass('open close');
	});

	popupMenu.switchPopup({
		btnClass: 'js-btn-burger',
		duration: 300,
	});

	// Слайдер брендов
	$('.slider-brands').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	// Скролл наверх
	$('.js-up').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});

});
