 function login(email, password) {
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
                 $(".darkBackground").fadeOut();
             } else if (success == 0) {
                 alert("fuckkkkk");
             } else if (success == 2) {
                 alert("Username or password incorrect.");
             } else {
                 $(".darkBackground").fadeOut();
                 $(".jam-account").html(success);
                 console.log(success);
             }
         }
     }
     var formData = new FormData();
     formData.append('email', email);
     formData.append('password', password);
     xmlhttp.open("POST", "php/login.php", true);
     xmlhttp.send(formData);
 }

 function logOut(){

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
                location.reload();
             } else if (success == 0) {
                 alert("fuckkkkk");
             } else {
                 console.log(success);
             }
         }
     }
     xmlhttp.open("POST", "php/logout.php", true);
     xmlhttp.send();
 }