function signup(name, email, password)
{
	
	var success = 0;
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==0)
		{
			console.log("not initialized");
		}
		if(xmlhttp.readyState==1)
		{
			console.log("connection established");
		}
		
		if(xmlhttp.readyState==2)
		{
			console.log("request received");
		}
		
		if(xmlhttp.readyState==3)
		{
			console.log("processing request");
		}
		if(xmlhttp.readyState==4)
		{
			success = xmlhttp.responseText;
			if(success == 1)
			{
				$(".darkBackground").fadeOut();
			}
			else if(success == 0)
			{
				alert("fuckkkkk");
			}
			else if(success == 2){
				alert("already exists");
			}
			else
			{
				$(".jam-account").html(success);
				$(".darkBackground").fadeOut();
			}
		}
		
	}
	var formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('password', password);
	xmlhttp.open("POST", "php/add.php", true);
	xmlhttp.send(formData);
}