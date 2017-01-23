var lat = 43.472932899999996;
var lng = -80.5435064;

window.onload = function () {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }


    $('#stats-button').click(function(){
        if ($('.jam-stats').height() > 0) {
            $('.jam-stats').height(0);
        } else {
            if ($(window).width() >= 600) $('.jam-stats').height("350");
            else $('.jam-stats').height("175");
        }
    });

    $('#stats-button').hover(function(){
        if ($('.jam-stats').height() == 0) {
            if ($(window).width() >= 600) $('.jam-stats').height("350");
            else $('.jam-stats').height("175");
        }
    });

    getJam();

    $("#nah").click(function(){
    	getJam()
        $('.jam-stats').height(0);
        $('.jam-found').height(0);
    })

    $("#yee").click(function(){
            if ($(window).width() >= 600) $('.jam-found').height("800");
            else $('.jam-found').height("400");
        addPopularity($("#j_brand").text(), $("#j_flavor").text());
        addMarker(lat, lng);

    })

    $(".tweet-button").click(function () {
        var jam = $("#j_brand").text().capitalize() + " Brand " + $("#j_flavor").text().capitalize() + " Jam"
        var href = ("https://twitter.com/intent/tweet?hashtags=dismahjam,TerribleHack&ref_src=twsrc%5Etfw&text=Mah%20Jam%20was%20"+jam+".%20What's%20yo%20jam%3f%20Find%20out%20at%20dismahjam.xyz&tw_p=tweetbutton")
        window.open(href);
    })
}

function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function changeJam(jamArr) {
    $("body").css("background-image","url(../jams/"+jamArr[0]+"/"+jamArr[1]+".jpg"+")")

    $("#j_brand").text(jamArr[0]);
    $("#j_flavor").text(jamArr[1]);
    $("#j_cost").text(jamArr[2]);
    $("#j_jamminess").text(jamArr[3]);
    $("#j_popular").text(jamArr[4]);

    $(".img-container img").attr("src","jams/"+jamArr[0]+"/"+jamArr[1]+".jpg")
}

function switchDiv(num){
	switch(num){
		case 1: $(".login").show();
				$(".signup").hide();
				break;
		case 2: $(".login").hide();
				$(".signup").show();
				break;
	}
}

function addMarker(lat, lng){
      var success = 0;
     var xmlhttp;
     if (window.XMLHttpRequest) {
         xmlhttp = new XMLHttpRequest();
     } else {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
     }
     xmlhttp.onreadystatechange = function() {
         if (xmlhttp.readyState == 0) {
             console.log("not initialized");
         }
         if (xmlhttp.readyState == 1) {
             console.log("connection established");
         }
         if (xmlhttp.readyState == 2) {
             console.log("request received");
         }
         if (xmlhttp.readyState == 3) {
             console.log("processing request");
         }
         if (xmlhttp.readyState == 4) {
             success = xmlhttp.responseText;
             if (success == 1) {
                console.log("FUCK YES")
             } else if (success == 0) {
                 alert("fuckkkkk");
             }  
             else {
                 console.log(success);
             }
         }
     }
     var formData = new FormData();
     formData.append('brand', $("#j_brand").text());
     formData.append('flavor', $("#j_flavor").text());
     formData.append('lat', lat);
     formData.append('lng', lng);
     xmlhttp.open("POST", "php/addMarker.php", true);
     xmlhttp.send(formData);
}