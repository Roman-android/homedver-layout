$(document).ready(function(){
	//alert("width: "+$(window).width()+" height: "+$(window).height());
	"use strict";
	var text_h1 = $("h1").text();
	$("h1").text(text_h1+" width: "+$(window).width());
	$("h1").click(function(){
		$(this).slideUp("slow");
	});
	//console.log("456");
	$(".button").click(function(){
		$(".test_ajax").load("../scripts/test_ajax.php","x=10&y=100");
	});
//====================================================================
	var s=0;
	$(".inner_item").click(function(){
		s++;
		console.log($(this).children().attr("src"));
	});
	//====================================================
	// Изменение картинки в блоке услуг при наведении
	//====================================================
	//$(".icon-provider"):nth-child
	//====================================================
	var count=0;
	 $('.but_search').keyup(function(){
		 count++;
		 var ttt = $(this).val().length;
		 if(ttt>=1){
			 $(this).css("background-color","green");
		 }else if(ttt === 0){
				  $(this).css("background-color","transparent");
				  }
		 console.log(ttt);
		 
      });
	//=========================================
	
	

});


