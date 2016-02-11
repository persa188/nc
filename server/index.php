<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<div class="container">
		<div class="transbox">
			<!-- center the server status on page-->
			<!-- <div id="h1"> -->
			<p>
				<?php
				function ping($host, $port, $timeout) { 
				  $tB = microtime(true); 
				  $fP = fSockOpen($host, $port, $errno, $errstr, $timeout); 
					if (!$fP) { return "Server Status:<div id='h2'>Offline</div> @Ping:"."N/A"; } 
				  $tA = microtime(true); 
				  return "Server Status<div id='h1'>Online</div> @Ping: ".round((($tA - $tB) * 1000), 0)." ms"; 
				}

				//Echoing it will display the ping if the host is up, if not it'll say "server down".

				echo @ping("swaggify.me", 4000, 10);

				?>
			</p>
			<!-- </div> -->
		</div>
	</div>
</body>
</html>