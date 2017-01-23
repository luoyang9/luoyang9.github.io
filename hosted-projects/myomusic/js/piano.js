
$(document).ready(function(){
	window.onkeydown = function (e) {
	    var code = e.keyCode ? e.keyCode : e.which;
	    if (code === 65) {  
	    	play("C");
	    } else if (code === 83) { 
	    	play("D");
	    } else if (code === 68){
	    	play("E");
	    } else if (code === 70){
	    	play("F");
	    }else if (code === 74){
	    	play("G");
	    }else if (code === 75){
	    	play("A");
	    }else if (code === 76){
	    	play("B");
	    }else if (code === 186){
	    	play("HC");
	    }
	};
});

function play(key){
	switch(key){
		case "A": document.getElementById("ASound").pause(); 
		document.getElementById("ASound").currentTime = 0;
		document.getElementById("ASound").play();
		TweenLite.to(document.getElementById("A"), 0.2, {opacity: 1}).reverse(0); break;
		case "B": document.getElementById("BSound").play(); 
		document.getElementById("BSound").currentTime = 0;
		document.getElementById("BSound").play();
		TweenLite.to(document.getElementById("B"), 0.2, {opacity: 1}).reverse(0); break;
		case "C": document.getElementById("CSound").play(); 
		document.getElementById("CSound").currentTime = 0;
		document.getElementById("CSound").play();
		TweenLite.to(document.getElementById("C"), 0.2, {opacity: 1}).reverse(0); break;
		case "D": document.getElementById("DSound").play(); 
		document.getElementById("DSound").currentTime = 0;
		document.getElementById("DSound").play();
		TweenLite.to(document.getElementById("D"), 0.2, {opacity: 1}).reverse(0); break;
		case "E": document.getElementById("ESound").play(); 
		document.getElementById("ESound").currentTime = 0;
		document.getElementById("ESound").play();
		TweenLite.to(document.getElementById("E"), 0.2, {opacity: 1}).reverse(0); break;
		case "F": document.getElementById("FSound").play();
		document.getElementById("FSound").currentTime = 0;
		document.getElementById("FSound").play();
		TweenLite.to(document.getElementById("F"), 0.2, {opacity: 1}).reverse(0); break;
		case "G": document.getElementById("GSound").play(); 
		document.getElementById("GSound").currentTime = 0;
		document.getElementById("GSound").play();
		TweenLite.to(document.getElementById("G"), 0.2, {opacity: 1}).reverse(0); break;
		case "HC": document.getElementById("HCSound").play(); 
		document.getElementById("HCSound").currentTime = 0;
		document.getElementById("HCSound").play();
		TweenLite.to(document.getElementById("HC"), 0.2, {opacity: 1}).reverse(0); break;
	}
}
var previousActionR;
var previousActionL;

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
	if(-0.6 < p && p < 0.6){
		if(y > 0.6){
			return 'left';
		}else if(y < -0.6){
			return 'right';
		}else{
			return 'middle';
		}
	}else{
		if(p > 0.6){
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
	console.log(previousActionR);
	if(previousActionR != directionR)
	{
	  previousActionR = directionR;
	  switch(directionR){
	  	case "up": play("G"); break;  	
    	case "down": play("A"); break;
	  	case "left": play("B"); break;  	
    	case "right": play("HC"); break;
	  }
	}
	if(previousActionL != directionL)
	{
	  previousActionL = directionL;
	  switch(directionL){
	  	case "up": play("C"); break;  	
    	case "down": play("D"); break;
	  	case "left": play("E"); break;  	
    	case "right": play("F"); break;
	  }
	}
}, 0);
});

