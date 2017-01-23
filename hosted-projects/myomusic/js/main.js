var previousActionR;
var previousActionL;

$(document).ready(function(){
	window.onkeydown = function (e) {
	    var code = e.keyCode ? e.keyCode : e.which;
	    if (code === 65) { 
	    	angular.element(document.getElementById('wrapper')).scope().noteBarClick(1);
	    } else if (code === 83) { 
	    	angular.element(document.getElementById('wrapper')).scope().noteBarClick(2);
	    } else if (code === 68){
	    	angular.element(document.getElementById('wrapper')).scope().noteBarClick(3);
	    } else if (code === 70){
	    	angular.element(document.getElementById('wrapper')).scope().noteBarClick(4);
	    }
	};
});


function removeNote(note){
	$(note).remove();
}

function reverseFade(noteDir){
	TweenLite.to(document.getElementById(noteDir), 0.1, {opacity: "0.7"});
}

function callCreateSong(notes, noteDelays){
	angular.element(document.getElementById('wrapper')).scope().createSong(notes, noteDelays);
}

Myo.connect('com.enghack.poseDetect');


function yawSync(){
	setTimeout(function(){
		Myo.myos[0].zeroOrientation();
		Myo.myos[1].zeroOrientation();
		console.log('Synced');
	}, 1000);
}

Myo.on('connected', function(){
	Myo.setLockingPolicy('none');

	var directionL = 'middle', directionR = 'middle';
	var poseL = 'open', poseR = 'open';
	var pitch, yaw;


	function getDir(p, y){
		if(-0.5 < p && p < 0.5){
			if(y > 0.5){
				return 'left';
			}else if(y < -0.5){
				return 'right';
			}else{
				return 'middle';
			}
		}else{
			if(p > 0.5){
				return 'up';
			}else{
				return 'down';
			}
		}
	}

	Myo.on('pose', function(pose){
		if(pose == 'fist'){
			if(this.name == 'Right Myo'){
				poseR = 'fist';
			}else if(this.name == 'Left Myo'){
				poseL = 'fist';
			}
		}
	});

	Myo.on('pose_off', function(pose){
		if(this.name == 'Right Myo'){
			poseR = 'open';
		}else{
			poseL = 'open';
		}

	});

	Myo.on('orientation', function(data){
		pitch = Math.asin(Math.max(-1.0, Math.min(1.0, 2.0 * (data.w * data.y - data.z * data.x))));
	    yaw = Math.atan2(2.0 * (data.w * data.z + data.x * data.y), 1.0 - 2.0 * (data.y * data.y + data.z * data.z));
	    if(this.name == 'Right Myo'){
	    	directionR = getDir(pitch, yaw);
	    }else{
	    	directionL = getDir(pitch, yaw);
	    }
	});

	setInterval(function(){
		if(previousActionR != directionR)
		{
		  previousActionR = directionR;
		  switch(directionR){
		  	case "up": angular.element(document.getElementById('wrapper')).scope().noteBarClick(3); break;  	
	    	case "down": angular.element(document.getElementById('wrapper')).scope().noteBarClick(4); break;
		  }
		}
		if(previousActionL != directionL)
		{
		  previousActionL = directionL;
		  switch(directionL){
		  	case "up": angular.element(document.getElementById('wrapper')).scope().noteBarClick(1); break;  	
	    	case "down": angular.element(document.getElementById('wrapper')).scope().noteBarClick(2); break;
		  }
		}
	}, 0);
});



 function CSVToArray( strData, strDelimiter ){
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = (strDelimiter || ",");

        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
            (
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"
            ),
            "gi"
            );


        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];

        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;


        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches = objPattern.exec( strData )){

            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[ 1 ];

            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (
                strMatchedDelimiter.length &&
                strMatchedDelimiter !== strDelimiter
                ){

                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push( [] );

            }

            var strMatchedValue;

            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[ 2 ]){

                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                strMatchedValue = arrMatches[ 2 ].replace(
                    new RegExp( "\"\"", "g" ),
                    "\""
                    );

            } else {

                // We found a non-quoted value.
                strMatchedValue = arrMatches[ 3 ];

            }


            // Now that we have our value string, let's add
            // it to the data array.
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }

        // Return the parsed data.
        return( arrData );
    }
