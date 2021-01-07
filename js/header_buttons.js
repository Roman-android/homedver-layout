$(document).ready(function(){
	"use strict";
	var search = $(".search");
	var zamer = $(".zamer_button");
	var menu = $(".menu_button");
	var transparent_block = $(".transparent_block");
	
	var call_zamer = $(".vizov_zamer");
	var call_menu = $(".wrap_top_menu");
	var call_search = $(".search_popup_menu");
	
	var initialTopOfZamer = $(".vizov_zamer").css("top");
	var initialTopOfSearch = $(".search_popup_menu").css("top");
	var initialTopOfWrapTopMenu = $(".wrap_top_menu").css("top");
	console.log("initial: "+initialTopOfZamer);
	var initialTopOfPopup = $(".popup").css("top");
	
	/*сохранение местоположени popup окна при прокрутке*/
	$(".door-item-wrapper").click(function(){
		var currentTopOfPopup = parseInt(initialTopOfPopup) + scrolled + "px";
		$(".popup").css("top",currentTopOfPopup);
	});
	
	function visible_of_transparent_block(button,nameOfClass,action,classOfAction){
		if(button.hasClass(nameOfClass)){
			transparent_block.addClass("transparent_block_visible");
			action.addClass(classOfAction);
				
			/*сохранение местоположения меню, поиска и замера при прокрутке*/
			var currentTopOfZamer = parseInt(initialTopOfZamer) + scrolled+"px";
		    $(".vizov_zamer").css("top",currentTopOfZamer);
			
			var currentTopOfSearch = parseInt(initialTopOfSearch)+scrolled+"px";
			$(".search_popup_menu").css("top",currentTopOfSearch);
			
			var currentTopOfWrapTopMenu = parseInt(initialTopOfWrapTopMenu)+scrolled+"px";
			$(".wrap_top_menu").css("top",currentTopOfWrapTopMenu);
			
		}else{
			transparent_block.removeClass("transparent_block_visible");
			action.removeClass(classOfAction);
		}
	}
	
	
	var scrolled;
	$(window).scroll(function(){
		scrolled = $(this).scrollTop();
	});
	
	zamer.on("click",function(){
		$(this).toggleClass("zamer_button_active");
			
		search.removeClass("search_active");
		$(".c-hamburger").removeClass("is-active");
		
		visible_of_transparent_block($(this),"zamer_button_active",call_zamer,"vizov_zamer_active");
				
		call_menu.removeClass("wrap_top_menu_active");
		menu.removeClass("menu_button_active");
		call_search.removeClass("search_popup_menu_active");
	});
	
	search.on("click",function(){
		$(this).toggleClass("search_active");
		
		zamer.removeClass("zamer_button_active");
		$(".c-hamburger").removeClass("is-active");
		
		visible_of_transparent_block($(this),"search_active",call_search,"search_popup_menu_active");
		//$("search_popup_menu").addClass("search_popup_menu_active");
		
		call_menu.removeClass("wrap_top_menu_active");
		menu.removeClass("menu_button_active");
		call_zamer.removeClass("vizov_zamer_active");
	});
	
	menu.on("click",function(){
		$(".c-hamburger").toggleClass("is-active");
		
		$(this).toggleClass("menu_button_active");
		search.removeClass("search_active");
		zamer.removeClass("zamer_button_active");
		
		visible_of_transparent_block($(".c-hamburger"),"is-active",call_menu,"wrap_top_menu_active");
		
		call_zamer.removeClass("vizov_zamer_active");
		call_search.removeClass("search_popup_menu_active");
	});
	
	
	
	
	
	
});