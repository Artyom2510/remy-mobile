ymaps.ready(function () {
	const myMap = new ymaps.Map('map', {
		center: [55.723257, 37.527660],
		zoom: 9,
		controls: ['zoomControl']
	}, {
		searchControlProvider: 'yandex#search'
	});

	const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	  // hintContent: 'Собственный значок метки',
	  // balloonContent: 'Это красивая метка'
	}, {
	    // Опции.
	    // Необходимо указать данный тип макета.
	    iconLayout: 'default#image',
	    // Своё изображение иконки метки.
	    iconImageHref: 'img/pin.png',
	    // Размеры метки.
	    iconImageSize: [60, 60],
	    // Смещение левого верхнего угла иконки относительно
	    // её "ножки" (точки привязки).
	    iconImageOffset: [-30, -60]
	});
	
	myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
	// const control = myMap.controls.get('routePanelControl');
	
	// // Зададим состояние панели для построения машрутов.
	// control.routePanel.state.set({
	// 	// Тип маршрутизации.
	// 	type: 'masstransit',
	// 	// Выключим возможность задавать пункт отправления в поле ввода.
	// 	fromEnabled: true,
	// 	// Адрес или координаты пункта отправления.
	// 	// from: 'Москва, Льва Толстого 16',
	// 	// Включим возможность задавать пункт назначения в поле ввода.
	// 	toEnabled: false,
	// 	// Адрес или координаты пункта назначения.
	// 	to: 'г. Москва, улица Мосфильмовская, дом 8',
	// });

	// // Зададим опции панели для построения машрутов.
	// control.routePanel.options.set({
	// 	// Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
	// 	allowSwitch: false,
	// 	// Включим определение адреса по координатам клика.
	// 	// Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
	// 	reverseGeocoding: true,
	// 	// Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
	// 	types: { auto: true, masstransit: true, pedestrian: true, taxi: true },

	// 	floar: 'right',
	// 	// Задаем собственную картинку для последней путевой точки.
	// 	wayPointFinishIconLayout: "default#image",
	// 	wayPointFinishIconImageHref: "img/pin.png",
	// 	wayPointFinishIconImageSize: [60, 60],
	// 	wayPointFinishIconImageOffset: [-30, -60]
	// });

	myMap.geoObjects.add(myPlacemark);
});
