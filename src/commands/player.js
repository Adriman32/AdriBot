// Player command to store player info to json file.
exports.run = (message,args) => {
	//the sender id
	var senderId = message.member.toString();
	// the player id
	var playerId = args[1];
	if (playerId.toString().charAt(0) == "<") {
		playerId = playerId.substring(1,playerId.length)
	}
	if (playerId.toString().charAt(playerId.length - 1) == ">") {
		playerId = playerId.substring(0,playerId.length - 1)
	}
	// sets the args[0] to a string
	var whichId = args[0].toString().toUpperCase();
	// if proper syntax stores the player id in a json file
	if (whichId == "BLIZZARD") {
		console.log(senderId + " blizzard " + playerId);
	} 
	else if (whichId == "STEAM") {
		console.log(senderId + " steam " + playerId);
	}
	else if (whichId == "RIOT") {
		console.log(senderId + " riot " + playerId);
	} else {
		require("./playerHelp").run(message, args);
		console.log(args[0]);
	}
}