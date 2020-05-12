// playerProfile command to return a users info
exports.run = (message,args) => {
	// the target player.
	var playerId = args[0];
	require("./playerInfo.json").run(message, args);
}
