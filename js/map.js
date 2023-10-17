let myMap = $('#map');
if (myMap.length) {
	ymaps.ready(function () {
		myMap = new ymaps.Map("map", {
			center: [55.17839002605341, 61.29953036291623],
			zoom: 17
		});
		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'СПБ, 10-я Советская ул. д.4',

		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			// iconImageHref: 'images/myIcon.gif',
			// Размеры метки.

		})
		myMap.geoObjects.add(myPlacemark);
	});

}




