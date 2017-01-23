var currentIndex = 1;
var timerSwitch = setInterval(function(){ switchJumbotronAuto() }, 6000);

function switchJumbotronAuto(){
	if(currentIndex == 1) switchJumbotron(2);
	else if(currentIndex == 2) switchJumbotron(1);
}

function switchJumbotron(index){
	if(index == 1){
		if(currentIndex == 1) return;
		$(".jumbotron").animate({opacity: 0}, 300, function(){

			$(".jumbotron").css("background-image", "url(img/jumbotron1.jpg)");
			$("#jumbotron-header").html("TopPlay");
			$("#caption").html("Introducing the future of outdoor play for children");
			$("#switcher1").css("background-color", "white");
			$("#switcher2").css("background-color", "transparent");
			$(".jumbotron").delay("100").animate({opacity: 1}, 300);
		});
		currentIndex = 1;
	}
	else if(index == 2){
		if(currentIndex == 2) return;
		$(".jumbotron").animate({opacity: 0}, 300, function(){

			$(".jumbotron").css("background-image", "url(img/jumbotron2.jpg)");
			$("#jumbotron-header").html("SecurePlay");
			$("#caption").html("The unique and innovative security system");
			$("#switcher1").css("background-color", "transparent");
			$("#switcher2").css("background-color", "white");
			$(".jumbotron").delay("100").animate({opacity: 1}, 300);
		});
		currentIndex = 2;
	}
}


//query loader
window.addEventListener('DOMContentLoaded', function() {
  new QueryLoader2(document.querySelector("body"), {
    barColor: "lightblue",
    backgroundColor: "white",
    percentage: true,
    barHeight: 3,
    minimumTime: 200,
    maxTime: 10000,
    fadeOutTime: 1000
  });
});

function submitEmail(){
	var email = $("#newsletter-email").val();
	if(email == "")
	{
		$("#feedback").html("Please enter an email.");
		$("#feedback").css("visibility", "visible");
		return;
	}
	if(email.match(/^\S+@\S+\.\S+$/))
	{
		$("#feedback").html("Thanks for signing up!");
		$("#feedback").css("color", "green");
		$("#feedback").css("visibility", "visible");
		return;
	}
	else
	{
		$("#feedback").html("Please enter a valid email.");
		$("#feedback").css("visibility", "visible");
		return;
	}
}




//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function()
{    
	$("#about-pic").css("height", $("#about-descrip").height() + "px");
	$("#about-descrip").css("height", $("#about-pic").height() + "px");


	$("#switcher1").click(function() {
		clearInterval(timerSwitch);
		timerSwitch = setInterval(function(){ switchJumbotronAuto() }, 6000);
		switchJumbotron(1);
	});
	$("#switcher2").click(function() {
		clearInterval(timerSwitch);
		timerSwitch = setInterval(function(){ switchJumbotronAuto() }, 6000);

		switchJumbotron(2);
	});

	//mobile jumbotron height
	if($(document).width() < 979)
	{
	    var screenHeight = $(window).height();
	    $(".jumbotron").css("height", screenHeight + "px");

	    $(".jumbotron").css("padding-top", "60px");

	    $(".navbar-toggle").mouseover(function(){
	    	$(".icon-bar").css("backgroundColor", "black");
	    }).mouseout(function(){
	    	$(".icon-bar").css("backgroundColor", "#888");
	    });
	}
	else
	{
		//navbar scroll change
		var scroll_start = 0;
		var startchange = $('#startchange');
		var offset = startchange.offset();
		if (startchange.length)
		{
			$(document).scroll(function() 
			{ 
				scroll_start = $(this).scrollTop();
				if(scroll_start > offset.top) 
				{
					TweenLite.to(".navbar", 0.5, {backgroundColor:"rgba(256, 256, 256, 0.9)"});

					$(".navbar-default .navbar-nav > li > a").css('color', '#007E57');

					$(".navbar-default .navbar-nav > li > a").mouseover(function() {
					  $(this).css("color","#78AC00")
					}).mouseout(function(){
					  $(this).css("color", "#007E57");
					});

					$(".navbar-default .navbar-nav > li > a").focus(function(){
					  $(this).css("color", "#78AC00");
					}).blur(function(){
					  $(this).css("color", "#007E57");
					});
				} 
				else 
				{
					TweenLite.to(".navbar", 0.5, {backgroundColor:"transparent"});

					$(".navbar-default .navbar-nav > li > a").css('color', 'white');

					$(".navbar-default .navbar-nav > li > a").mouseover(function() {
					  $(this).css("color","#333")
					}).mouseout(function(){
					  $(this).css("color", "white");
					});

					$(".navbar-default .navbar-nav > li > a").focus(function(){
					  $(this).css("color", "#333");
					}).blur(function(){
					  $(this).css("color", "#333");
					});
				}
			});
		}
	}
});