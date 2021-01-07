/*
ymaps.ready(init);
	
function init(){
	var myMap = new ymaps.Map("map", {
		center: [56.706406, 60.825502],
		zoom: 16
	}),
	myGeoObject = new ymaps.GeoObject({
	geometry: {
		type: "Point", // тип геометрии - точка
		coordinates: [56.706299, 60.825426] // координаты точки
		},
		properties: {
			// Контент метки.
			iconContent: 'ТК Сельский привоз',
			hintContent: 'г. Арамиль, ул. Пролетарская, 82/7'
		}
	},{
		// Опции.
		// Иконка метки будет растягиваться под размер ее содержимого.
		preset: 'islands#greenStretchyIcon',
		//strokeColor: '#000000'
	});
	//myPlacemark = new ymaps.Placemark([56.706299, 60.825426]);
	// Размещение геообъекта на карте.
	myMap.geoObjects.add(myGeoObject);
}
*/

/*======================================================================*/
"use strict";
/*=======КАРТА НА ГЛАВНОЙ СТРАНИЦЕ==============================*/
ymaps.ready(init_main);

function init_main() {
	
	var myMap = new ymaps.Map("map", {
			center: [56.713603, 60.831031],
			zoom: 16
		}),
		filialCollection = new ymaps.GeoObjectCollection(null, {
			preset: 'islands#greenStretchyIcon'
		}),
		filialCoords = [[56.713603, 60.831031],[56.717131, 60.830494],[56.698631, 60.534116]],
	
	/*============тестовое=================*/
	filialContent = ['ТК Арамильский привоз','ТК Сельский привоз','ТК Колхозный двор'];
	/*============тестовое=================*/

	for (var i = 0, l = filialCoords.length; i < l; i++) {
		filialCollection.add(new ymaps.Placemark(filialCoords[i]));

	}

	myMap.geoObjects.add(filialCollection);
	
	$.each(filialCoords,function(index,value){
		var myAction = new ymaps.map.action.Single({
			center: filialCoords[index],
			zoom:16,
			duration: 2000,
			timingFunction: "easy-in"
		});
		
		$(".addres-text").eq(index).click(function(){
			myMap.action.execute(myAction);
		});
	});
	
	
	}
/*=======КАРТА НА ГЛАВНОЙ СТРАНИЦЕ==============================*/
/*=====================================================================*/

/*=======КАРТА НА СТРАНИЦЕ КОНТАКТЫ==============================*/
ymaps.ready(init_contacts);

function init_contacts(){
	var map_length = $(".map").length;
	var map_block;
	var map_content = [];
	
	var centrCoords = [[56.713603, 60.831031],[56.717131, 60.830494],[56.698631, 60.534116]];
		
	for(var i = 1;i<=map_length;i++){
		
		map_block = "map_"+i;
		console.log("map_block = "+map_block);
		
		
		var myMap = new ymaps.Map(map_block, {
			center: centrCoords[i-1],
			zoom: 16
		}),
		filialCollection = new ymaps.GeoObjectCollection(null, {
			preset: 'islands#greenStretchyIcon'
		}),
		filialCoords = centrCoords[i-1];
		
		filialCollection.add(new ymaps.Placemark(filialCoords));
		myMap.geoObjects.add(filialCollection);
		
		/*=добавляем каждую яндекс карту (в каждом из блоков $(".map")) 
		в массив map_content*/
		map_content.push(myMap);
	}
	
	
	/*===================================================*/
	$.each(centrCoords,function(index,value){
		var myAction = new ymaps.map.action.Single({
			center: centrCoords[index],
			zoom:16,
			duration: 1000,
			timingFunction: "easy-in"
		});
		
		$(".addres-text").eq(index).click(function(){
			map_content[index].action.execute(myAction);
			//alert("index = "+index);
		});
	});
	/*===================================================*/
	
	
}

