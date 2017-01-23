
<?php
    $config = require "../../../../config_dismahjam.php";
    session_start();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $brand = $_POST["brand"];
        $flavor = $_POST["flavor"];
        $lat = $_POST["lat"];
        $lng = $_POST["lng"];
    } 

    $servername = $config["name"];
    $serverusername = $config["username"];
    $serverpassword = $config["password"];
    $database = $config["database"];

    // Create connection 
    $conn           = new mysqli($servername, $serverusername, $serverpassword, $database);
    $data           = "SELECT brand, flavor, lat, lng FROM jamDB";
    $result         = $conn->query($data);
    if ($result->num_rows > 0) 
    {
        while ($row = $result->fetch_assoc()) 
        {
            if ($row["brand"] === $brand && $row["flavor"] === $flavor)
            {

                $latTemp = $row["lat"] . "," . $lat;
                $lngTemp = $row["lng"] . "," . $lng;

            }
        }
    } 

    $data = "UPDATE jamDB SET lat='$latTemp', lng='$lngTemp' WHERE brand='$brand' and flavor='$flavor'";

    if ($conn->query($data) === TRUE) {
        echo 1;
    } else {
        echo 0;
    }
?> 