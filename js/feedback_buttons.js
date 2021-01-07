$(document).ready(function(){
	"use strict";
	
	var OPEN = "open";
	var CLOSE = "close";
	var isOpenFeedback = CLOSE;
	
	function showFeedbackButtons(){
		$(".feedback_watsapp").css({
			"display":"block"
		}).animate({bottom:"+=70px"},200,function(){
			$(".feedback_call").css({
				"display":"block"}).animate({bottom:"+=70px"},200);
		});
		isOpenFeedback = OPEN;
	}
	function hideFeedbackButtons(){
		$(".feedback_call").animate({bottom:"-=70px"},200,function(){
			$(this).css("display","none");
			$(".feedback_watsapp").animate({
				bottom:"-=70px"
			},200,function(){
				$(".feedback_watsapp").css("display","none");
			});
		});
		isOpenFeedback = CLOSE;
	}
	
	var count_click = 0;
	$(".feedback_main").click(function(){
		count_click++;
		if(count_click%2 === 1){
			showFeedbackButtons();
		}else if(count_click%2 === 0){
			hideFeedbackButtons();
		}
	
	});

//====================================================
	var feed_main = $(".feedback_main");
	var feed_watsapp = $(".feedback_watsapp");
	var feed_call = $(".feedback_call");
	
	var TOUCHSTART = "touchstart";
	var TOUCHEND = "touchend";
	
	function animateInvisibleOnOpen(){
	feed_main.add(feed_watsapp).add(feed_call).animate({opacity:"0"},500);
	}
	function animateVisibleOnOpen(){
	feed_main.add(feed_watsapp).add(feed_call).animate({opacity:"1"},500);
	}
	
	function animateInvisibleOnClose(){
		feed_main.animate({opacity:"0"},500);
	}
	function animateVisibleOnClose(){
		feed_main.animate({opacity:"1"},500);
	}
	
	function animateFeedBackBlock(event){
		if($(event.target).closest(feed_main).length) {
			return;
		}
		  
		if(isOpenFeedback === OPEN){

			if(event.data.action === TOUCHSTART){
				animateInvisibleOnOpen();
			   }
			if(event.data.action === TOUCHEND){
				animateVisibleOnOpen();
			   }
			
		}else if(isOpenFeedback === CLOSE){

			if(event.data.action === TOUCHSTART){
				animateInvisibleOnClose();
			   }
			if(event.data.action === TOUCHEND){
				animateVisibleOnClose();
			   }
			
			}
		   
		event.stopPropagation();
	}	

//====================================================
$(document).on("touchstart",{ action: TOUCHSTART},animateFeedBackBlock);
$(document).on("touchend",{ action: TOUCHEND},animateFeedBackBlock);
	
});