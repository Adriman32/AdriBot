// Displays how long the bot has been online
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/30/2020
// Current Author: Adrian Ruvalcaba

exports.run = (message,args) => {
	var upVar = message.client.uptime;
	var scale = " milliseconds";
	if(1000 <= upVar && upVar <= 59999) {
		upVar = upVar/1000;
		scale = " seconds";
	}
	else if (upVar <= 3599999) {
		upVar = upVar/60000;
		scale = " minutes";
	}
	else if (upVar <= (3600000*60)-1) {
		upVar = upVar/3600000;
		scale = " hours";
	}
	else {
		upVar = "too";
		scale = " damn long. Turn me off";	
	}
			
	message.channel.send("I have been online for " + upVar.toFixed(2) + scale + "!");
}