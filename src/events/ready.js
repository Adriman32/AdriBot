// Performs the first time initialization of AdriBot.
// When complete, sends message to the console.
// Original Version: 3/23/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/23/2020
// Current Author: Adrian Ruvalcaba

module.exports = (bot) => {
	
	const prefix = '/AB';
	
	// Sends message to log when AdriBot is ready
	console.log("\n\t\t***********************************" +
    "\n\t\t* AdriBot is now at your service! *" +
    "\n\t\t***********************************\n");
	
	// Sets the status to available and plugs Adriman32's Twitch
	bot.user.setStatus('available');
	bot.user.setPresence({
		game: {
			name: 'Adriman32',
			type: "STREAMING",
			url: "https://www.twitch.tv/adriman32"
		}
	});
	bot.channels.get('548328604258533377').send('Back online!');
	bot.channels.get('615292734483333123').send("\\");
}
