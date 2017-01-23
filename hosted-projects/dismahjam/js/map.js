
//access token
L.mapbox.accessToken = 'pk.eyJ1IjoibHVveWFuZzkiLCJhIjoiY2llbm5nd3ExMGhtdHNzbTJtOXU0NzgwOSJ9.J8foZzRMoJhim7PslJlO5w';

function getMap(){

    //create map, set view
    mapGeo = L.mapbox.map('map_geo', 'mapbox.streets').setView([43.4667, -80.5167], 6);

    //get markers
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
             console.log(success);
             var temp = success.split(";");
             var latArr = temp[0].split(",");
             var lngArr = temp[1].split(",");

             for(var i = 0; i < latArr.length; i++){
                if(latArr[i] != "0" && lngArr[i] != "0"){
                    console.log("ad marker");
                    L.marker([parseFloat(latArr[i]) + Math.random()*2-1, parseFloat(lngArr[i]) + Math.random()*2-1]).addTo(mapGeo);
                }
            }
        }
    }

     var formData = new FormData();
     formData.append('brand', $("#j_brand").text());
     formData.append('flavor', $("#j_flavor").text());
     xmlhttp.open("POST", "php/getMarkers.php", true);
     xmlhttp.send(formData);

}