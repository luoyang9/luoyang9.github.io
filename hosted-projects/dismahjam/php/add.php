<?php
	$config = require "../../../../config_dismahjam.php";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	    $name = test_input($_POST["name"]);
	    $email = test_input($_POST["email"]);
	    $password = $_POST["password"];
		
	}

	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}

	function clean_string($string) {

	  $bad = array("SELECT","DELETE");

	  return str_replace($bad,"",$string);

	}
	 
	     
	$name = clean_string($name);
	$email = clean_string($email);

	//hashing and salting passwords
	$salt = "danielprilikdahuehue";
	$hashpassword = crypt($password, $salt);

	$servername = $config["name"];
	$serverusername = $config["username"];
	$serverpassword = $config["password"];
	$database = $config["database"];
	
	// Create connection
	$conn = new mysqli($servername, $serverusername, $serverpassword, $database);

	$duplicate = "SELECT email FROM Profiles";
	$duplicatecheck = $conn->query($duplicate);

	if ($duplicatecheck->num_rows > 0) {
	    while($row = $duplicatecheck->fetch_assoc()) {
	    	if($email === $row["email"]){
	    		echo 2;
	    		return;
	    	}
	    }
	}

	$data = "INSERT INTO Profiles (name, email, password)
	VALUES ('$name', '$email', '$hashpassword')";

	if ($conn->query($data) === TRUE) {
		session_start();
		$_SESSION['email'] = $email;
		$_SESSION['name'] = $name;
		$_SESSION['lastactivity'] = time();
        echo '<h1 id="welcome">Welcome back ' . $name . '</h1><button onclick="logOut()">Log Out</button>';
	} else {
		echo $conn->error;
	}
?>