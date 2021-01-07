$(document).ready(function(){
	"use strict";
	
      $(".gallery_main").slick({
		  
		  infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
		  appendArrows:'.container-arrows',
		  prevArrow:$(".slider-arrow"),
          nextArrow:$(".slider-arrow"),
		  adaptiveHeight: true,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}]
	  });
	//==============================================
	$(".gallery_product").slick();
	
    });