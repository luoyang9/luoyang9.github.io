function getJam() {
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
            if (success == 0)
            {
            	alert("FUCK");
            }
            else
            {
            	var jamArr = success.split(";");
            	console.log(jamArr);
            	changeJam(jamArr);
                getMap();
            }
        }
    }
    xmlhttp.open("POST", "php/getJam.php", true);
    xmlhttp.send();
}

function addPopularity(brand, flavor){
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
            if (success == 0)
            {
            	alert("FUCK");
            }
            else if(success == 1)
            {
            	console.log("popular++");
            }
            else{
            	console.log(success);
            }
        }
    }
    var formData = new FormData();
    formData.append('brand', brand);
    formData.append('flavor', flavor);
    xmlhttp.open("POST", "php/addPopularity.php", true);
    xmlhttp.send(formData);
}