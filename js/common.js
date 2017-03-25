(function (argument) {
	//PORTFOLIO LINK
	$('.item-port').click(function(event) {
		var linkTo = $(this).data('url');
		var currentLink = window.location.hostname;
		window.location.href = currentLink + "/template/" + linkTo + "/index.html";
	});
	
	//NAVIGATION
	var itemsMenu = $('.items-menu li');

	$(itemsMenu).click(function(event) {
	//ADD ACTIVE CLASS
		for (var i = 0; i < itemsMenu.length; i++) {
			$(itemsMenu[i]).removeClass('active');
		};
		$(this).addClass('active');
	
	//LINK TO ANCHOR
		var hrefMenu = '#' + $(this).data('url');
		$('html,body').animate({scrollTop: $(hrefMenu).offset().top}, 500);
	});


})()