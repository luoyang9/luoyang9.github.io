var count;

(function(){
	var app = angular.module('personal', []);

	app.controller("GameController", function($scope){
		$scope.score = 0;

		$scope.createNote = function(noteID){
			var notepath; 
			switch(noteID){
				case 1: notepath = document.getElementById("note-path-left"); break;
				case 2: notepath = document.getElementById("note-path-right"); break;
				case 3: notepath = document.getElementById("note-path-up"); break;
				case 4: notepath = document.getElementById("note-path-down"); break;
				default: notepath = document.getElementById("note-path-left"); 
			};

			var note = document.createElement("div");
			note.className = "activeNote";
			note.setAttribute("note", noteID);

			TweenLite.to(note, 2, {top:580, ease:Linear.easeNone, onComplete: removeNote, onCompleteParams: [note]});
			notepath.appendChild(note);
		};


		$scope.loadSong = function(songURL){
			$(".start-btn")[0].style.pointerEvents = 'none';
			$(".start-btn")[1].style.pointerEvents = 'none';

			if(songURL == "fire"){
				document.getElementById("currentSong").src = "music/throughthefireandflames.mp3";
				var songDelay = 750;
				var delay = 74.5;
				var notes = [1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,3,1,4,2,3,1,1,2,3,1,2,3,4,2,4,2,1,2,4,3,1,3,3,3,1,3,3,1,3,1,3,3,1,3,3,1,3,1,4,4,1,4,4,1,4,1,4,4,1,4,4,1,4,1,3,3,1,3,3,1,3,1,3,3,1,3,3,1,3,1,2,2,1,2,2,1,2,1,4,2,1,2,4,3,1,3,3,3,1,3,3,1,3,1,3,3,1,3,3,1,3,1,4,4,1,4,4,1,4,1,4,4,1,4,4,1,4,1,3,3,1,3,3,1,3,1,3,3,1,3,3,1,3,1,3,1,2,3,4,2,3,4,4,3,4,2,3,1,2,2,2,2,2,3,3,4,3,1,3,4];
				var noteDelays = [0, delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay,delay*8,delay*16,0,delay*16,0,delay*16,0,delay*2,delay*2,delay,delay*2,delay*2,delay,delay,delay,delay,delay];
			}else{
				var songDelay = 0;
				var notes = [3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1,2,1,3,2,3,4,4,3,4,3,4,2,4,4,2,4,2,4,3,2,3,4,3,4,3,4,3,4,2,4,4,3,4,2,4,3,2,3,4,3, 3,2,4,3,2,1,3,3,3,4,3,3,3,3,4,3,2,4,3,2,1,3,3,3,4,3,3,3,3,4,3,2,4,3,2,1,3,3,3,4,3,3,3,3,4,2,1,3,2,3,4,2,3,3,2,3,3,3,2,3,4,4,4,3,2,3,3,2,3,3,3,3,3,2,3,4,4,3,2,2,3,3,2,3,3,3,2,3,4,4,3,2,2,4,4,3,2,4,4,3,2,2,3,3,2,3,2,3,3,2,1,2,3,3,2,1,3,3,2,1,2,3,3,2,1,2,3,2,3,1,2,3,2,3,1,2,4,4,3,1,2,3,2,3,1,2,3,3,1,2,4,4,3,1,3,4,3,4,2,3,4,3,4,2,2,4,4,3,1,2,3,2,3,1,3,3,3,2,1,1,2,2,1,2,2,4,4,3,1,2,2,4,4,3,1,2,4,4,3,1,2,2,4,4,3,1,3,2,4,3,2,1,3,3,3,4,3,3,3,3,4,3,2,4,3,2,1,3,3,3,4,3,3,3,3,4,3,2,4,3,2,1,3,3,3,4,3,3,3,3,4,2,1,3,2,3,4, 3,2,3,2,3,1,3,3,1,3,1,3,3,3,3,3,2,3,2,3,1,3,3,1,3,1,3,3,3,3,3,2,3,2,3,1,3,3,1,3,1,3,2,3,2,3,1,3,3,1,3,1,3,2,3,2,3,1,3,3,1,3,1,3,2,3,2,3,1,3,3,1,3,1,3];
				var noteDelays = [4000, 250, 550, 250, 550, 250, 1000,250, 550, 250, 550, 250, 1000, 250, 550, 250, 550, 250, 1000, 250, 550, 250, 550, 250, 1000, 250, 550, 250, 550, 250, 6300, 110, 110, 110, 110, 110, 210, 210, 210, 110, 210, 210, 210, 210, 110, 110, 110, 840, 110, 110, 110, 110, 110, 210, 210, 210, 110, 210, 210, 210, 210, 110, 110, 110, 3150, 150, 240, 150, 240, 150, 260, 100, 100, 100, 300, 100, 100, 100, 100, 300, 150, 240, 150, 240, 150, 260, 100, 100, 100, 300, 100, 100, 100, 100, 300, 150, 240, 150, 240, 150, 260, 100, 100, 100, 300, 100, 100, 100, 100, 300, 150, 240, 150, 240, 240, 3610, 100, 100, 100, 100, 500, 100, 100, 100, 500, 100, 100, 200, 1300, 100, 100, 100, 100, 400, 100, 100, 100, 100, 400, 100, 100, 100, 100, 1300, 100, 100, 100, 100, 500, 100, 100, 120, 500, 100, 100, 100, 1300, 100, 100, 110, 110, 550, 100, 100, 110, 400, 100, 100, 100, 100, 400, 100, 100, 100, 200, 1150, 100, 100, 100, 200, 1150, 150, 150, 100, 1150, 120, 120, 120, 200, 1950, 100, 100, 100, 190, 300, 100, 100, 100, 190, 300, 100, 100, 100, 100, 1300, 100, 100, 100, 190, 350, 100, 100, 250, 300, 100, 120, 120, 120, 1260, 100, 100, 100, 190, 300, 100, 100, 100, 190, 300, 100, 100, 100, 100, 1300, 100, 100, 100, 190, 350, 100, 100, 250, 250, 100, 100, 100, 100, 100, 350, 120, 120, 120, 150, 300, 1000, 120, 120, 120, 130, 300, 900, 120, 120, 150, 900,300,120,120,120,150,1500,150, 240, 150, 240, 150, 260, 100, 100, 100, 300, 100, 100, 100, 100, 300, 150, 240, 150, 240, 150, 260, 100, 100, 100, 300, 100, 100, 100, 100, 300, 150, 240, 150, 240, 150, 260, 100, 100, 100, 300, 100, 100, 100, 100, 300, 150, 240, 150, 260, 260, 3400,50, 50, 50, 50, 300, 50, 300, 300, 50, 250,250, 50, 700,50, 700,60, 60, 60, 60, 300, 60, 300, 300, 60, 250,250, 60, 700,60, 650,60, 60, 60, 60, 300, 60, 300, 300,60,300,300,60, 60, 60, 60, 300, 60, 300, 300,60,300,300,60, 60, 60, 60, 300, 60, 290, 290,60,290,290,60, 60, 60, 60, 290, 60, 290, 290,60,290,60];		
			}

			console.log(notes.length + " " + noteDelays.length);	
		 	count = 0;
			this.createSong(notes, noteDelays);

			setTimeout(function(){document.getElementById("currentSong").play()}, songDelay);

		};
		
		$scope.createSong = function(notes, noteDelays){
			setTimeout(function(){
				$scope.createNote(notes[count]);
				count++;
				if(count != notes.length) setTimeout(function(){callCreateSong(notes, noteDelays)}, noteDelays[count]);
			}, noteDelays[count]);
		}

		$scope.noteBarClick = function(noteID){
			var noteBarBtn;
			switch(noteID)
			{
				case 1: noteBarBtn = document.getElementById("left"); break;
				case 2: noteBarBtn = document.getElementById("right"); break;
				case 3: noteBarBtn = document.getElementById("up"); break;
				case 4: noteBarBtn = document.getElementById("down"); break;
				default: noteBarBtn = document.getElementById("left");
			}
			var activeNotes = [];
			var bars = [];

			for(var i = 0; i < document.getElementById("note-path").childNodes.length; i++)
			{
				if(document.getElementById("note-path").childNodes[i].nodeType == 1) bars.push(document.getElementById("note-path").childNodes[i]);
			}

			//console.log(bars);

			for(var i = 0; i < bars.length; i++)
			{
				for(var j = 0; j < bars[i].childNodes.length; j++)
				{
					activeNotes.push(bars[i].childNodes[j]);
				}
			}	
			//console.log(activeNotes);

			for(var i = 0; i < activeNotes.length; i++)
			{
				if(activeNotes[i].getAttribute("note") == noteID && $scope.collision($(activeNotes[i]), $(noteBarBtn)))
				{
					var noteDir;
					$scope.score += 1;
					switch(noteID){
						case 1: noteDir = 'left'; break;
						case 2: noteDir = 'right'; break;
						case 3: noteDir = 'up'; break;
						case 4: noteDir = 'down'; break;
					}
					TweenLite.to(document.getElementById(noteDir), 0.1, {opacity: "0.25", onComplete: reverseFade, onCompleteParams: [noteDir]});
					removeNote(activeNotes[i]);
        			$scope.$apply();
				}
			}
		};

		$scope.collision = function($div1, $div2) {
		  var x1 = $div1.offset().left;
		  var y1 = $div1.offset().top;
		  var h1 = $div1.outerHeight(true);
		  var w1 = $div1.outerWidth(true);
		  var b1 = y1 + h1;
		  var r1 = x1 + w1;
		  var x2 = $div2.offset().left;
		  var y2 = $div2.offset().top;
		  var h2 = $div2.outerHeight(true);
		  var w2 = $div2.outerWidth(true);
		  var b2 = y2 + h2;
		  var r2 = x2 + w2;

		  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
		  return true;
		};

	});

})();