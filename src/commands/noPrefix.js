// Certain commands don't need a prefix. This will determine
// if those commands have been called.
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/30/2020
// Current Author: Adrian Ruvalcaba

var badCount = 1;

exports.run = (message,args) => {
	var msg = message.content.toUpperCase();
	var sender = message.member.user.tag;
	var senderId = message.member.toString();
	var botId = message.client.user.id.toString();
	//botId = botId.toUpperCase();
	
	/*	Trigger: -help, !help, /help
		Response: Redirects to Bot Help   */
	if (msg === '-HELP' || msg === '!HELP' || msg === "/HELP") {
		message.reply('This server uses multiple bots, therefore the summon words have been modified.'
                + '\nTo pull up the help info for a specific bot, use the following commands:'
                + '\nAdriBot: /ab help'
                + '\nGroovy Music: /g help'
                + '\nPokeCord Bot: /pokehelp');
	}
	
	/*	Trigger: `
		Response: Deletes message sent. Used to increase PokeCord spawns   */
    if (msg === '\`' || msg === '\`\`'|| msg === '\'\'\'') {
		message.delete();
    }
	
	/*	Trigger: Goodnight Adribot
		Response: Calls the Goodnight Command   */
    if (msg.includes('GOODNIGHT') && (msg.includes(botId) || msg.includes('ADRIBOT'))) {
		require(`./goodnight`).run(message, args);
    }
	
	/*	Trigger: Welcome Adribot
		Response: Calls the Welcome Command   */
	if (msg.includes('WELCOME') && (msg.includes(botId) || msg.includes('ADRIBOT'))) {
		require(`./welcome`).run(message, args);
	}
	
	
	
	if (msg.includes('GOOD ') && msg.includes('BOT')) {
		message.channel.send(':smile:');
		badCount = 1;
	}
	

	if (msg.includes('BAD ') && msg.includes('BOT')) {
			if(badCount){
			message.channel.send(':cry:');
			badCount = 0;
			}
			else
			{
				message.channel.send("Fuck off, " + senderId);
			}
	}
	
	if (msg.includes('PARTY')) {
		require(`./party`).run(message, args);
	}
	
	

}