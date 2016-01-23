require("!style!css!less!./css/main.less");

$(function(){
	//Dropdown menu
	$('header .dropdown a').on('click', function(){
		$(this).parent().toggleClass('hover');
	});

	//Start setting up variables for functions that reduce vertical padding for small devices
	var $window = $( window ), 
		title = $('.title'), 
		main = $('.main'),
		mainH = main.children('h1'),
		windowHt, 
		hPad,
		mainPad,
		totalHt;

	var pad = function(){
		windowHt = $window.height();
		hPad = windowHt * 0.05;
		mainPad = windowHt * 0.1;
		
		title.css('padding-top', hPad);
		mainH.css({
			'padding-bottom': mainPad,
			'padding-top': mainPad						
			});
	};
	
	pad();
	
	

	//Call functions on resize
	var timer_id;

	$window.resize(function() {

		clearTimeout(timer_id);

		timer_id = setTimeout(function() {

			pad();
			
		}, 300);
	});


});

