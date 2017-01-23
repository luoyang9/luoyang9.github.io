<?php
    $config = require "../../../../config_dismahjam.php";
    session_start();

    $servername = $config["name"];
    $serverusername = $config["username"];
    $serverpassword = $config["password"];
    $database = $config["database"];

    // Create connection 
    $conn           = new mysqli($servername, $serverusername, $serverpassword, $database);
    $data           = "SELECT brand, flavor, cost, jammieness, popularity FROM jamDB ORDER BY rand() LIMIT 1";
    $result         = $conn->query($data);
    if ($result->num_rows > 0) 
    {
        $row = $result->fetch_assoc();
        echo $row["brand"] . ";" . $row["flavor"] . ";" . $row["cost"] . ";" . $row["jammieness"] . ";" . $row["popularity"];
    } 
    else 
    {
        echo 0;
    }
?> 