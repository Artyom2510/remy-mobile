$(function () {

	// Бургер и меню
	let burgerMenu = $('.js-burger-menu');
	let burger = $('.js-btn-burger');
	burger.on('click', function() {
		$(this).toggleClass('open');
		burgerMenu.slideToggle(200);
	});

	function scrollToSect(sect) {
		burgerMenu.slideUp();
		let toSect = sect.offset().top - burgerMenu.outerHeight(true);
		console.log(burgerMenu.outerHeight())
		burger.toggleClass('open');
		$('body,html').animate({
			scrollTop: toSect
		}, 500);
	}

	$('.scroll-prog').on('click', function() {
		scrollToSect($('.main__programs'));
	});

	$('.scroll-loc').on('click', function() {
		scrollToSect($('.main__location'));
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

	$('.js-click-18').on('click', function() {
		$('.title-1').removeClass('visible');
		$('.regitstration__wrap_1').addClass('transform-up');
		setTimeout(function () {
			$('.regitstration__wrap_1, .title-1').removeClass('display');
			$('.regitstration__wrap_2, .title-2').addClass('display');
		}, 300);
		setTimeout(function () {
			$('.title-2').addClass('visible');
			$('.regitstration__wrap_2').removeClass('transform-down');
		}, 600);
	});

	$('.js-confirm').on('click', function() {
		$('.title-2').removeClass('visible');
		$('.regitstration__wrap_2').addClass('transform-up');
		setTimeout(function () {
			$('.regitstration__wrap_2, .title-2').removeClass('display');
			$('.regitstration__desc, .regitstration__wrap_3, .title-3').addClass('display');
		}, 300);
		setTimeout(function () {
			$('.title-3').addClass('visible');
			$('.regitstration__wrap_3, .regitstration__desc').removeClass('transform-down');
		}, 600);
	});

	$('.js-plus-1').on('click', function() {
		if (!$(this).hasClass('add')) {
			$(this).addClass('add').text('удалить');
			$('.regitstration__input-row-2').addClass('display');
		} else {
			$('.regitstration__input-row-2').removeClass('display');
			$(this).removeClass('add').text('добавить +1');
		}
	});

	$('.js-plus-11').on('click', function() {
		if (!$(this).hasClass('add')) {
			$(this).addClass('add').text('удалить');
			$('.popup-lk__registr-row-11').addClass('display');
		} else {
			$('.popup-lk__registr-row-11').removeClass('display');
			$(this).removeClass('add').text('добавить +1');
		}
	});

	$('.js-check').on('change', function() {
		if (!$(this).is(':checked')) {
			$('.js-reg').addClass('disabled').attr('disabled', 'disabled');
		} else {
			$('.js-reg').removeClass('disabled').removeAttr('disabled');
		}
	});

	$('.js-reg').on('click', function() {
		$('.page').addClass('page_transform');
		$('.notice').addClass('notice_exist');
	});

	$('.notice__close').on('click', function() {
		$('.notice').removeClass('notice_exist');
	});

});
