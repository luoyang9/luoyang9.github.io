var preload = function(images, callback) {
	if (!('Promise' in window)) {
		return;
	}

	var imagePromises = [];

	images.forEach(function(image) {
		imagePromises.push(new Promise(function(resolve, reject){
			var img = new Image();
			img.onload = resolve;
			img.onerror = resolve;
			img.src = image;
		}));
	});

	Promise.all(imagePromises)
		.then(function() { callback(); })
		.catch(function(err) { console.error(err); });
};

$( document ).ready( () => {

	// initial values
	var ball_distance = $(window).width() < 780 ? 55 : 80;
	var desktop = $(window).height() > 400;
	var nav_hidden = false;

	function init() {
		// remove loading ball and pulse
		$(".nav-init").remove();
		$(".nav-pulse").remove();

		// fade in website
		TweenLite.to($(".wrapper"), 0.5, { opacity: 1 } );

		if($(window).height() > 400) { // desktop animation

			// tween to position
			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 1, {delay:0.1*i, left: 15, top: 15+i*ball_distance, margin: 0});
			});

		} else { // mobile animation

			// tween to position
			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 0.4, {delay:0.1*i, top: 15, left: 15+i*ball_distance, margin: 0});
			});
		}

		if( $(window).width() < 780) {
			$(".nav-ball").css("position", "absolute");
		}
	}

	// preload images
	
	preload( 
		$(".preload").map(function() { 
			return $(this).data("image"); } 
		).get()
	, init);


	// resize callback

	$(window).resize(function(evt) {
		var expand = false;

		// recalculate ball distance
		if($(window).width() < 780 && ball_distance == 80) {
			ball_distance = 55;
			expand = true;
		} else if($(window).width() >= 780 && ball_distance == 55){
			ball_distance = 80;
			expand = true;
		}

		// tween if necessary
		if( $(window).height() > 400 && (!desktop || expand) ) {
			desktop = true;

			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 0.4, {delay:0.1*i, left: 15, top: 15+i*ball_distance});
			});
		} else if( $(window).height() <= 400 && (desktop || expand) ){
			desktop = false;

			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 0.4, {delay:0.1*i, top: 15, left: 15+i*ball_distance});
			});
		}
	});

	var pressedKeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

	// konami code
	$(document).keydown(function(e) {
		pressedKeys.push(e.keyCode);
		if ( pressedKeys.toString().indexOf( konami ) >= 0 ) {
			pressedKeys = [];

			
	    }
	});

	// onclicks for navigation

	$(".nav-home").off().click(function() {
		$(window).scrollTo($(".intro")[0], 400);
	});

	$(".nav-about").off().click(function() {
		$(window).scrollTo($(".about")[0], 400);
	});

	$(".nav-projects").off().click(function() {
		$(window).scrollTo($(".projects")[0], 400);
	});

	$(".nav-contact").off().click(function() {
		$(window).scrollTo($(".contact")[0], 400);
	});

	$(".cta-about").click(function() {
		$(window).scrollTo($(".about")[0], 400);
	});

	$(".cta-projects").click(function() {
		$(window).scrollTo($(".projects")[0], 400);
	});

	$(".footer-home").off().click(function() {
		$(window).scrollTo($(".intro")[0], 400);
	});

	$(".footer-about").off().click(function() {
		$(window).scrollTo($(".about")[0], 400);
	});

	$(".footer-projects").off().click(function() {
		$(window).scrollTo($(".projects")[0], 400);
	});

	$(".footer-contact").off().click(function() {
		$(window).scrollTo($(".contact")[0], 400);
	});

});