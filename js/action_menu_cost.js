$(document).ready(function(){

	"use strict";
	function set_cost_text(text){
		$(".switch-browse").text(text);
	}
	var count_1 = 0;
 	$(".switch-browse").click(function(){
		
		count_1++;
		
		if(count_1%2===1){
			$(".cost-info") .animate({height:"100%"},1000,set_cost_text("ЗАКРЫТЬ"));
		}else if(count_1%2===0){
			$(".cost-info")
				.animate({height:"40"},1000,set_cost_text("УЗНАТЬ СТОИМОСТЬ"));
		}
	});
	
});