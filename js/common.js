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
		$('.manifest-img__title').toggleClass('manifest-img__title_open');
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

	$('.js-click-anim').on('click', function() {
		$('.regitstration__title').removeClass('regitstration__title_visible');
		$('.regitstration__wrap_1').addClass('regitstration__wrap_transform');
		setTimeout(function () {
			$('.regitstration__wrap_2').addClass('regitstration__wrap_transform-start');
			$('.regitstration__wrap').toggleClass('display');
		}, 300);
		setTimeout(function () {
			$('.regitstration__title').addClass('regitstration__title_visible');
			$('.regitstration__wrap_2').removeClass('regitstration__wrap_transform-start');
		}, 600);
	});

	$('.js-reg').on('click', function() {
		$('.page').addClass('page_transform');
	});

});
