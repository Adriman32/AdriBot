// Sends a GIF of the Legendary Frank Beamer partying!
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

const Discord = require('discord.js');

exports.run = (message,args) => {
	message.channel.send(new Discord.Attachment('../assets/GIF/frank_party.gif'));
}