$(document).ready(function(){
	"use strict";
	
	var catalogLength = $(".catalog").children().length;
	var doorItemWrapperLength = $(".catalog").find(".door-item-wrapper").length;
	var split = catalogLength/doorItemWrapperLength;
	var catalogIndex;
	var arrayOfRubles = [];
	
	for(var i=0;i<$(".rubles").length;i++){
		arrayOfRubles[i] = parseFloat($(".popup").eq(i).find(".rubles").text());
	}
	
 	$(".door-item-wrapper").click(function(){
		catalogIndex =$(this).index()/split;
	});
	
	$(".choice-value").change(function(){
		
		var currentPopup = $(".popup").eq(catalogIndex).find(".choice-value option:selected");
		var finalSum = 0;
		
		$.each(currentPopup,function(index){
			finalSum += parseFloat(currentPopup.eq(index).attr("value"));
		});
		
		console.log("Сумма: "+ parseInt(finalSum));
		console.log("Начальное значение: "+ parseInt(arrayOfRubles[catalogIndex]));
		
		$(".popup").eq(catalogIndex).find(".rubles").text(finalSum + arrayOfRubles[catalogIndex]);
		
	});
		
		

	
	
	
});