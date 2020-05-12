// Sends a GIF of a dab. Used for celebration
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

const Discord = require ('discord.js');

exports.run = (message,args) => {
	var randDab = Math.floor(Math.random() * 11);
	var fileName = './assets/GIF/dab_' + randDab + '.gif';
	message.channel.send(new Discord.Attachment(fileName));
}