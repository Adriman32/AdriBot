// Looks at messages sent and determines whether they are commands or not
// Original Version: 3/23/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

const config = require('../config.json');
const {log,} = require('./log');

module.exports = {
	messageHandler: (message) => {
		let args;
		let command;
		
		if(message.content.toUpperCase().startsWith(config.PREFIX)) {
			args = message.content.split(' ');
			args.shift();
			command = args.shift();
		}
		else {
			command = 'noPrefix';
			args = message.content;	
		}
		
		
		try {
			require(`../commands/${command}`).run(message, args);
		} catch (error) {
			message.channel.send('I don\'t recognize that command. Please check your spelling, or type "\/ab help" for a list of my commands!');
			console.log(`${error.name}: ${error.message}`);
		}
	}
	
};