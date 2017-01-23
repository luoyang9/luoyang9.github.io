"use strict";

(function(){
	var app = angular.module('personal', ['ui.router']);

	app.factory('projectsFactory', function projectsFactory(){
		var projectsFactory = {};
		projectsFactory.projects = [
			{
				name: "LMS4TBH",
				date: "2016-11-26",
				description: "Posts a 'Like my status for a To Be Honest' post on your Facebook wall, then scrapes your private messages with everyone who liked your post and generates brutally honest TBHs for each of them . Made at TerribleHack V.",
				image: "img/lms4tbh.png",
				hasURL: false,
				url: "",
				urlType: "",
				source: "http://github.com/tyler-zhang/lms4tbh",
				used: [
					"React",
					"Facebook Javascript SDK",
					"Firebase",
					"markovify"
				],
				tags: [
					"react", "firebase", "markov", "facebook", "terrible", "TerribleHack"
				]
			},
			{
				name: "Know Yourself",
				date: "2016-08-21",
				description: "Analyzes your Facebook profile and displays interesting facts/statistics. Made at Hack the 6ix 2016.",
				image: "img/knowyourself.jpg",
				hasURL: true,
				url: "https://www.youtube.com/watch?v=l9A_PH_t830",
				urlType: "Video",
				source: "http://github.com/luoyang9/6ix",
				used: [
					"AngularJS",
					"Express",
					"Facebook SDK",
					"Clarifai API"
				],
				tags: [
					"angular", "express", "node", "facebook", "clarifai", "analysis"
				]
			},
			{
				name: "Scary Bears VR",
				date: "2016-09-18",
				description: "A Google Cardboard game where you must survive a horde of undead teddy bears. Made at Hack the North 2016.",
				image: "img/scarybearsvr.jpg",
				hasURL: true,
				url: "https://www.youtube.com/watch?v=ihczpw6ch0o",
				urlType: "Video",
				source: "http://github.com/luoyang9/HackTheNorth2016",
				used: [
					"C#",
					"Unity"
				],
				tags: [
					"android", "c#", "vr", "unity", "cardboard", "game", "gaming"
				]
			},
			{
				name: "Vertical Shooter Game",
				date: "2016-02-14",
				description: "A vertical shooter game made in libGDX. Currently in development. Features different powerups, enemies, and levels.",
				image: "img/shooter.png",
				hasURL: false,
				url: "",
				urlType: "",
				source: "http://github.com/luoyang9/shooter",
				used: [
					"Java",
					"libGDX"
				],
				tags: [
					"android", "video", "game", "gaming", "arcade", "shooter"
				]
			},
			{
				name: "Voyagr",
				date: "2015-09-20",
				description: "An online travel blog featuring an interactive map with markers for each blog post. Made at Hack the North 2015.",
				image: "img/voyagr.png",
				hasURL: true,
				url: "http://www.charliezhang.xyz/hosted-projects/voyagr",
				urlType: "Live",
				source: "http://github.com/rickeywang/hack2015",
				used: [
					"MapBox API",
					"Google Picker API",
					"Google Sign-In API",
					"Google App Engine"
				],
				tags: [
					"Hack The North", "hackathon", "frontend", "web app"
				]
			},
			{
				name: "Edibit",
				date: "2016-03-12",
				description: "Edibit is a web and mobile app where users can buy and sell food at cheap prices. Perfect for when you order too many wings for Friday's party. Created at NHacks 16.",
				image: "img/edibit.png",
				hasURL: true,
				url: "http://www.edibit.org",
				urlType: "Live",
				source: "http://github.com/utk9/edibit",
				used: [
					"AngularJS",
					"PHP",
					"MySQL",
					"Clarifai"
				],
				tags: [
					"NHacks 16", "hackathon", "frontend", "web app", "backend"
				]
			},
			{
				name: "OfflineBling",
				date: "2016-01-24",
				description: "OfflineBling allows users to query popular sites like Wikipedia and Wolfram Alpha offline, without WiFi, or data. Created at UofTHacks 2016.",
				image: "img/offlinebling.png",
				hasURL: true,
				url: "https://www.youtube.com/watch?v=NVjwlWY4EpM",
				urlType: "Video",
				source: "http://github.com/utk9/OfflineBling",
				used: [
					"Twilio API",
					"PHP",
					"MySQL",
					"Android"
				],
				tags: [
					"UofTHacks", "hackathon", "app", "backend"
				]
			},
			{
				name: "Personal Website",
				date: "2016-02-13",
				description: "The new and updated website about Charlie Zhang (me).",
				image: "img/charliezhang.png",
				hasURL: true,
				url: "http://www.charliezhang.xyz/",
				urlType: "Live",
				source: "http://github.com/luoyang9/personal-site",
				used: [
					"AngularJS",
					"GreenSock",
					"HTML5 Canvas"
				]
			},
			{
				name: "GetOut!",
				date: "2015-07-30",
				description: "A web platform that matches together university students with similar physical interests. Created for the final design project for SHAD 2015.",
				image: "img/getout.png",
				hasURL: true,
				url: "http://www.charliezhang.xyz/hosted-projects/getout",
				urlType: "Demo",
				source: "http://github.com/luoyang9/SHAD-2015-Project",
				used: [
					"PHP",
					"MySQL",
					"Bootstrap"
				],
				tags: [
					"SHAD", "web app", "fitness", "matchmaking"
				]
			},
			{
				name: "MyoMusic",
				date: "2015-11-15",
				description: "Ever wanted to play Guitar Hero/DDR with a Myo? Now you can with MyoMusic! Created at EngHack Fall 2015.",
				image: "img/myomusic.png",
				hasURL: true,
				url: "http://www.charliezhang.xyz/hosted-projects/myomusic",
				urlType: "Live",
				source: "http://github.com/luoyang9/MyoDDR",
				used: [
					"Myo.js",
					"AngularJS",
					"GreenSock"
				],
				tags: [
					"EngHack", "hackathon", "web app", "music"
				]
			},
			{
				name: "DisMahJam",
				date: "2015-10-04",
				description: "Ever wanted to know what yo jam is? Now you can with DisMahJam! Made at TerribleHack 2015. (Note: The terribleness of this project was intended)",
				image: "img/dismahjam.png",
				hasURL: true,
				url: "http://www.charliezhang.xyz/hosted-projects/dismahjam",
				urlType: "Live",
				source : "http://github.com/daniel5151/dismahjam",
				used: [
					"PHP",
					"MySQL",
					"jQuery"
				],
				tags: [
					"TerribleHack", "hackathon", "terrible", "jam", "tinder"
				]
			},
			{
				name: "Lectorial!",
				date: "2015-08-15",
				description: "A native Android app where students can communicate with peers in the same course. Made at Tech Retreat 2015.",
				image: "img/lectorial.png",
				hasURL: false,
				url: "",
				urlType: "",
				source: "http://github.com/HCastano/Lectorial",
				used: [
					"Android",
					"PHP"
				],
				tags: [
					"Tech Retreat", "hackathon", "app", "lectures", "university"
				]
			},
			{
				name: "Green Identity",
				date: "2015-08-25",
				description: "A company website built for Green Identity, the winning team at SHAD 2015. ",
				image: "img/greenidentity.png",
				hasURL: true,
				url: "http://www.charliezhang.xyz/hosted-projects/greenidentity",
				urlType: "Live",
				source : "http://github.com/luoyang9/Green-Identity-Website",
				used: [
					"Bootstrap",
					"jQuery",
					"PHP"
				],
				tags: [
					"SHAD", "website", "frontend", "design"
				]
			}
		];
		return projectsFactory;
	});

	app.config(function($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: 'partial-home.html'
			})
			.state('projects', {
				url: "/projects",
				templateUrl: "partial-projects.html",
				controller: "ProjectsController",
				controllerAs: "projects"

			})
			.state('about', {
				url: "/about",
				templateUrl: "partial-about.html"
			});
	});

	app.controller("NavController", function(){

		this.active = false;
		this.unclicked = true;
		this.mobile = false;

		this.trigger = function(){
			this.unclicked = false;
			this.activate();
			this.fly();
			window.location = "#/home";
		}

		this.change = function(){
			if(this.active) this.deactivate();
			else this.activate();
		};
		this.activate = function(){
			if(!this.active) 
			{
				this.active = true;
				TweenLite.to($(".nav-home"), 0.3, {top:$(".nav-start").position().top+80});
				TweenLite.to($(".nav-about"), 0.3, {top:$(".nav-start").position().top+160});
				TweenLite.to($(".nav-projects"), 0.3, {top:$(".nav-start").position().top+240});
				TweenLite.to($(".nav-resume"), 0.3, {top:$(".nav-start").position().top+320});
				TweenLite.to($(".nav-ball"), 0.3, {opacity: 1, color: "white"});
			}
		};
		this.deactivate = function(){
			if(this.active)
			{
				this.active = false;
				TweenLite.to($(".nav-ball"), 0.3, {top:$(".nav-start").position().top, opacity: 0.2, color: "transparent"});
			}
		};

		this.desktopActivate = function(){
			if(!this.mobile)
			{
				if(!TweenMax.isTweening($(".nav-ball")))
				{
					this.activate();
				}
			}
		}

		this.fly = function(){
			for(var i = 0; i < $(".nav-ball").length; i++)
			{
				TweenLite.to($(".nav-ball")[i], 0.4, {delay:.15*i, left: 25, top: 25+i*80, margin: 0, ease: Power1.easeIn});
			}	
		}

		this.mobileShrink = function(){
			if(this.mobile) this.change(); 
		};

		this.init = function(){
			if($(window).width() < 600) this.mobile = true;

			var split = window.location.href.split("/");
			if(split[split.length-1] != "") 
			{
				this.unclicked = false;
				this.activate();
				this.fly();
			}
			else
			{
				console.log("PRELOADING");
				var preload = new createjs.LoadQueue();
				preload.on("complete", function(){
					$(".nav-init")[0].click();
				}, this);
				preload.loadManifest([
			     {src:"img/edibit.png"},
			     {src:"img/charliezhang.png"},
			     {src:"img/dismahjam.png"},
			     {src:"img/offlinebling.png"},
			     {src:"img/getout.png"},
			     {src:"img/greenidentity.png"},
			     {src:"img/lectorial.png"},
			     {src:"img/myomusic.png"},
			     {src:"img/shooter.png"},
			     {src:"img/voyagr.png"},
			     {src:"partial-home.html"},
			     {src:"partial-about.html"},
			     {src:"partial-projects.html"}
			 	]);
			}
		};

    	this.init();
	});

	app.controller("ProjectsController", ["projectsFactory", function(projectsFactory){
		this.projects = projectsFactory.projects;
	}]);
})();

$(document).ready(function(){
	$("#bg").height($(window).height() + 60);
});

function goToHome()
{
	$("#trigger-home").trigger('click');
}

function handleComplete()
{
	$(".nav-init")[0].click();
}