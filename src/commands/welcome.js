// Sends a nice message to welcome user.
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

exports.run = (message,args) => {
	var senderId = message.member.toString();
	message.channel.send('Welcome back, ' + senderId + '! Let me know if you need anything!');
}