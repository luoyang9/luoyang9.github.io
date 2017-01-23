<html>

<head>
    <meta charset="utf-8">
    
    <!--I'm a web-app. Treat me accordingly-->
    <meta name="viewport" content="width=device-width; initial-scale=1.0;">

    <!--Open Graph tags for facebook and such-->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="DMJ" />
    <meta property="og:site_name" content="Dis Mah Jam" />
    <meta property="og:url" content="http://dismahjam.xyz/" />
    <meta property="og:description" content="What's your Jam?" />
<!--     <meta property="og:image" content="http://www.prilik.ca/1212/meta/og_image.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" /> -->

    <title>DMJ</title>
    
    <!--Play nice with i-devices-->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="True">
    <meta name="format-detection" content="telephone=no">
    
    <!--mmmmmm, icons-->
<!--     <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="meta/apple-touch-icon.png">
 -->    
    <!--"Needs more jQuery" -StackOverflow -->
    <script src="js/jquery-1.11.3.min.js"></script>

     <!--mapbox js and css-->
    <script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.2/mapbox.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox.js/v2.2.2/mapbox.css' rel='stylesheet' />


    <script src="js/map.js"></script>

    <!--log in and sign up crap-->
    <script src="js/login.js"></script>
    <script src="js/signup.js"></script>

    <!-- jamminess -->
    <script src="js/jam.js"></script>
    
    <!--For Facebook, Twitter, Paypal, and Pause-->
    <link rel="stylesheet" href="css/font-awesome.min.css">
    
    <!--My code :)-->
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/main.js"></script>
</head>

<body>
    <div class="container">
        <div class="jam-account">
            <h1 id="welcome">Welcome Back <?php echo $_SESSION["name"] ?></h1>
            <button onclick="logOut()">Log Out</button>
        </div>
        <div class="jam-main">
            <h1>IS DIS YO JAM?</h1>
            <div class="jam-container">
                <div class="img-container"><img src="jams/smuckers/strawberry.jpg"></div>
            </div>
            <a id="stats-button"><div class="jam-stats-button">Jam Stats</div></a>
            <div class="jam-stats">
                <h3>Jam brand</h3>
                <p id="j_brand">XYZ</p>
                <h3>jam flavor</h3>
                <p id="j_flavor">XYZ</p>
                <h3>cost</h3>
                <p id="j_cost">XYZ</p>
                <h3>jamieness</h3>
                <p id="j_jamminess">XYZ</p>
                <h3>popularity</h3>
                <p id="j_popular">XYZ</p>
            </div>

            <a id="yee"><div class="yee">DIS MAH JAM!</div></a><br>

            <div class="jam-found">
                <h1>Aww yiss !</h1>
                <h1> Dis yo jam !</h1>
                <h2>Tell yo friends !</h2>
                <!--Twitter-->
                <a class="tweet-button" target="_blank"><i class="fa fa-twitter"></i> Tweet</a>
                <h2>These peeps also got dis jam as der jam:</h2>
                <div id="map_geo" class="map"></div>
            </div>

            <a id="nah" href="#"><div class="nah">Nah, dis ain't mah jam.</div></a>
        </div>
        <div class="contact">
            <h3>Frontend Design and Concept</h3>
            <p>Daniel Prilik</p>

            <h3>Backend and Swagocity</h3>
            <p>Charlie Zhang</p>
        </div>
    </div>

    <div class="share">
        <!--Twitter-->
        <a class="tweet-button" target="_blank"><i class="fa fa-twitter"></i> Tweet</a>
    </div>

    <?php

        session_start();

        if (!isset($_SESSION['email'])) {
            echo ' <div class="darkBackground">
                    <div class="login">
                        <!--<div onclick="$(\'.darkBackground\').fadeOut()">DANIEL CLICK HERE</div>-->
                        <h1>Login</h1>
                        <form>
                            Email: <input type="email" name="lemail" /><br/>
                            Password: <input type="password" name="lpassword" /><br/>
                            <input type="button" onclick="login(lemail.value, lpassword.value)" value="Login" />
                        </form>
                        <p onclick="switchDiv(2)">Not signed up?</p>
                    </div>
                    <div class="signup"> 
                        <h1>Sign Up</h1>
                        <form>
                            Name: <input type="test" name="sname" /><br/>
                            Email: <input type="email" name="semail" /><br/>
                            Password: <input type="password" name="spassword" /><br/>
                            <input type="button" onclick="signup(sname.value, semail.value, spassword.value)" value="Sign Up" />
                        </form> 
                        <p onclick="switchDiv(1)">Already signed up?</p>
                    </div>
                </div>';
            die();
        }

        if(isset($_SESSION['lastactivity'])){
            $secondsInactive = time() - $_SESSION['lastactivity'];
            if($secondsInactive >= 600){ //10 minutes for each session before expiring
                session_unset();
                session_destroy();
                echo ' <div class="darkBackground">
                    <div class="login">
                        <!--<div onclick="$(\'.darkBackground\').fadeOut()">DANIEL CLICK HERE</div>-->
                        <h1>Login</h1>
                        <form>
                            Email: <input type="email" name="lemail" /><br/>
                            Password: <input type="password" name="lpassword" /><br/>
                            <input type="button" onclick="login(lemail.value, lpassword.value)" value="Login" />
                        </form>
                        <p onclick="switchDiv(2)">Not signed up?</p>
                    </div>
                    <div class="signup"> 
                        <h1>Sign Up</h1>
                        <form>
                            Name: <input type="test" name="sname" /><br/>
                            Email: <input type="email" name="semail" /><br/>
                            Password: <input type="password" name="spassword" /><br/>
                            <input type="button" onclick="signup(sname.value, semail.value, spassword.value)" value="Sign Up" />
                        </form> 
                        <p onclick="switchDiv(1)">Already signed up?</p>
                    </div>
                </div>';
                die();
            }
            $_SESSION["lastactivity"] = time();
        }

?>
   
</body>


</html>