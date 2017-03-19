$( document ).ready( () => {

	var ball_distance = $(window).width() < 900 ? 55 : 80;
	var desktop = $(window).height() > 400;

	function init() {
		// remove loading ball and pulse
		$(".nav-init").remove();
		$(".nav-pulse").remove();



		$(".nav-selected").data("index", 0);

		// fade in website
		TweenLite.to($(".wrapper"), 0.5, { opacity: 1 } );

		if($(window).height() > 400) { // desktop animation

			var base = $(".nav-home").position().top;

			// tween to position
			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 1, {delay:0.1*i, left: 15, top: 15+i*ball_distance, margin: 0});
			});

		} else { // mobile animation

			var base = $(".nav-home").position().left;

			// tween to position
			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 0.4, {delay:0.1*i, top: 15, left: 15+i*ball_distance, margin: 0});
			});

		}
	}

	init();

	// resize callback
	$(window).resize(function(evt) {
		var expand = false;

		// recalculate ball distance
		if($(window).width() < 900 && ball_distance == 80) {
			ball_distance = 55;
			expand = true;
		} else if($(window).width() >= 900 && ball_distance == 55){
			ball_distance = 80;
			expand = true;
		}

		var selectPos = $(".nav-selected").position();
		var selectIndex = $(".nav-selected").data("index");

		// tween if necessary
		if( $(window).height() > 400 && (!desktop || expand) ) {
			desktop = true;

			TweenLite.to($(".nav-selected"), 0.4, {
				delay: 0.1 * selectIndex,
				left: 15, 
				top: 15+selectIndex*ball_distance
			});
			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 0.4, {delay:0.1*i, left: 15, top: 15+i*ball_distance});
			});
		} else if( $(window).height() <= 400 && (desktop || expand) ){
			desktop = false;

			TweenLite.to($(".nav-selected"), 0.4, {
				delay: 0.1 * selectIndex,
				top: 15, 
				left: 15+selectIndex*ball_distance
			});
			$(".nav-ball").each(function(i, ball) {
				TweenLite.to(ball, 0.4, {delay:0.1*i, top: 15, left: 15+i*ball_distance});
			});
		}
	});

	// onclicks for navigation

	$(".nav-home").off().click(function() {
		var position = $(".nav-home").position();
		$(".nav-selected").data("index", 0);
		TweenLite.to($(".nav-selected"), 0.25, {top: position.top, left: position.left});
	});

	$(".nav-about").off().click(function() {
		var position = $(".nav-about").position();
		$(".nav-selected").data("index", 1);
		TweenLite.to($(".nav-selected"), 0.25, {top: position.top, left: position.left});
	});

	$(".nav-projects").off().click(function() {
		var position = $(".nav-projects").position();
		$(".nav-selected").data("index", 2);
		TweenLite.to($(".nav-selected"), 0.25, {top: position.top, left: position.left});
	});

	$(".nav-resume").off().click(function() {
		var position = $(".nav-resume").position();
		$(".nav-selected").data("index", 3);
		TweenLite.to($(".nav-selected"), 0.25, {top: position.top, left: position.left});
	});
});