// Sends a message containing AdriBot commands
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

exports.run = (message,args) => {
	message.reply('Here is a list of things I can currently do:\n```\n\n'+
              '/ab coin\t\t\t   Flip a coin! Heads or Tails?\n'+
              '/ab rules\t\t\t  I read a random Official Rule! Read all five!\n' +
              '\`\t\t\t\t\t  Press the icon under the escape key and I will delete it for you! Designed\n\t\t\t\t\t   for PokeCord!\n' +
			  '/ab dab\t\t\t    Dab!\n' +
              '\nComing Soon:\n'+
              '/ab mute <@person>\t Is someone annoying you? Vote to see if they should get a temp mute! It only\n\t\t\t\t\t   takes 3 votes!\n' +
			  '```');
}