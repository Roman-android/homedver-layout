$(document).ready(function(){
	"use strict";
	
	var navigation = $(".wrap_top_menu");
	var menu_on_top;
	
	function item_menu_hover_on(){
		$("body").on("mouseenter",".menu li",function(){
			$(this).find(".submenu").stop(true,true).slideDown(1000); 
		});

		$("body").on("mouseleave",".menu li",function(){
			$(this).find(".submenu").stop(true,true).css("display","none");
		});

		
/*		$("body").on({
			mouseenter:function(){
				$(this).find(".submenu").stop(true,true).slideDown(1000); 
			},
			mouseleave:function(){
				$(this).find(".submenu").stop(true,true).css("display","none");
			}
		},".menu li");*/	 


		$("body").on("mouseenter mouseleave",".submenu",function(){
			$(this).prev(".item").toggleClass("active-item");
		});
		$("body").on("mouseenter mouseleave",".item",function(){
			$(this).toggleClass("active-item");
		});
	}
	
	function test_func(){
		$("body").on("mouseenter mouseleave",".item",function(){
			$(this).toggleClass("active-item");
		});
	}
	
	if(window.matchMedia('(max-width: 1024px)').matches){//меньше 1024 px
		$(".vizov_zamer").after(navigation);
		menu_on_top = false;
	}else{//больше 1024 px
		$(".logo").after(navigation);
		item_menu_hover_on();

		/*Добавляем к разделу с выпадающим меню стрелку "вниз"*/ 
		$(".submenu").prev(".item").addClass("is-submenu");
		menu_on_top = true;
		//test_func();
	}
	
	$(window).on("resize",function(){
		
		if(window.matchMedia('(max-width: 1024px)').matches){//меньше 1024 px
			if(menu_on_top === true){
				$(".vizov_zamer").after(navigation);
				//$(".submenu").prev(".item").removeClass("is-submenu");
				menu_on_top = false;
				console.log("menu_on_top: "+menu_on_top);
				//$("body").off("mouseenter mouseleave",".item");
				$("body").off("mouseenter mouseleave");
			}
			
	    }else{//больше 1024 px
			if(menu_on_top === false){
				$(".logo").after(navigation);
				item_menu_hover_on();

				/*Добавляем к разделу с выпадающим меню стрелку "вниз" */
				//$(".submenu").prev(".item").addClass("is-submenu");
				menu_on_top = true;
				//test_func();
				console.log("menu_on_top: "+menu_on_top);
			}
			
		}
		
	});
	
		
	
	
	
});