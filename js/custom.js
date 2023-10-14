$(function(){

	
	$(".open-menu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuSide").fadeIn();
		
	});
	

	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuSide").fadeOut();
		
	});


	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="flaticon-back"></i>',
		prevText: '<i class="flaticon-right-arrow"></i>'
		
	});
	
	
	/****** Start NavBar ******/
	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 50) {
			
			
			$(".header").addClass("HeaderFixed");
						
		} else {
			
			$(".header").removeClass("HeaderFixed");
		}
		
	});


	/****** End NavBar ******/
		 
	$.scrollIt({topOffset:-90});
	
	
	
	  var OwlShopping = $('#OwlShopping,#OwlShopping2');
	 
	  OwlShopping.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='flaticon-back'></i>","<i class='flaticon-right-arrow'></i>"]
	  });
	
	
	
	  var OwlBlog = $('#OwlBlog,#OwlBlog2,#OwlBlog3');
	 
	  OwlBlog.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='flaticon-back'></i>","<i class='flaticon-right-arrow'></i>"]
	  });
	
	
	
	
	
	
	
	/****** Start Tabs ******/
	
	$(".btnsTabs li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/	
	
	

	  
	  var OwlClients = $('#OwlClients');
	 
	  OwlClients.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,3], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:false,
	      autoPlay:true,
	  });
	
	
	  var OwlProjects = $('#OwlProjects');
	 
	  OwlProjects.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='flaticon-back'></i>","<i class='flaticon-right-arrow'></i>"]
	  });
	
	
	
	
	
	
	
	
	 new WOW().init();

	
	
	
	
	
	
	
	
	
	
	
	
	
});
