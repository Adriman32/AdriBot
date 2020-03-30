// Routes message to handler to determine if they are commands
// Original Version: 3/23/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/23/2020
// Current Author: Adrian Ruvalcaba

const {messageHandler} = require('../utils/messageHandler.js');

module.exports = (message) => {
	// If a bot sent the message, ignore
	if(message.author.bot){
		return;
	}
	
	messageHandler(message);
}