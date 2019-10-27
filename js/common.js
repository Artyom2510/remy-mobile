$(function () {

	// Бургер и меню
	let burgerMenu = $('.js-burger-menu');
	let burger = $('.js-btn-burger');
	burger.on('click', function() {
		$(this).toggleClass('open');
		burgerMenu.slideToggle(200);
	});

	$('.js-manifest-btn').on('click', function() {
		$('.js-manifest-hidden').slideToggle(200);
	});
	
	let popupProgram = $('.popup-program');
	popupProgram.switchPopup({
		btnClass: 'js-tgl-program',
		duration: 300,
		overflow: true
	});

	let popupLk = $('.popup-lk');
	popupLk.switchPopup({
		btnClass: 'js-tgl-lk',
		duration: 300,
		overflow: true
	});

});
