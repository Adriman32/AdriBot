// Flips a coin.
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

exports.run = (message,args) => {
	
	var sender = message.member.user.tag;
	var senderId = message.member.toString();
	
	console.log("\n" + sender + " ran \'Coin\' trigger");
	var coinFlip = 'heads';
     
	if (Math.floor(Math.random() * 2)) {
		coinFlip = 'tails';
	}	
	message.channel.send( senderId + ' flipped a coin and it landed on ' + coinFlip + '!');
}