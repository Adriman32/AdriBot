// Sends a kind message when someone is going to sleep.
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

exports.run = (message,args) => {
	var senderId = message.member.toString();
	message.channel.send('Goodnight ' + senderId + '. I\'ll see you tomorrow!');
}