<?php
	$config = require "../../../../config_dismahjam.php";
	session_start();

	$jams = test_input($_POST["jams"]);

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

	$jams = clean_string($jams);
	$jams = strtolower($jams);

	$servername = $config["name"];
	$serverusername = $config["username"];
	$serverpassword = $config["password"];
	$database = $config["database"];

	// Create connection
	$conn = new mysqli($servername, $serverusername, $serverpassword, $database);

	$tempusername = $_SESSION["username"];
	$data = "UPDATE Profiles SET interests='$interests' WHERE username='$tempusername'";
	if ($conn->query($data) === TRUE) {
		echo 1;
	} else {
		error_log("something happened lol");
	}

?>