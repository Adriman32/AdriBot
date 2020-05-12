// Sends a message containing AdriBot commands
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 4/27/2020
// Current Author: Adrian Ruvalcaba

exports.run = (message,args) => {
	message.reply('Here is a list of things I can currently do:\n```\n\n'+
              '/ab coin\t\t\t\t   Flip a coin! Heads or Tails?\n'+
              '/ab rules\t\t\t\t  I read the Official Rules!\n' +
              '\ \t\t\t\t\t\t  Press the icon under the escape key and I will delete it for you! Designed\n\t\t\t\t\t\t   for PokeCord.\n' +
			  '/ab dab\t\t\t\t    Dab!\n' +
			  '/ab status\t\t\t\t Displays whether I am online or not.\n' +
			  '/ab uptime\t\t\t\t Displays how long I have been online!\n' +
			  "/ab mc \t\t\t\t\ \ \  Displays our minecraft server and pixelmon server ip's.\n" +
			  "/ab invite \t\t\t \ \  Displays the global discord invite for the server.\n" +
			  "/ab roast \t\t\t\t To hurt someone's ego.\n" +
              '\nComing Soon:\n'+
			  "/ab player \t\t\t \ \  To link your gaming accounts.\n" +
              '/ab mute <@person>\t\t Is someone annoying you? Vote to see if they should get a temp mute! It only\n\t\t\t\t\t\t   takes 3 votes!\n' +
			  '/ab cc <#channel_name>\t Want to create your own temporary channel? Use this command and it will\n\t\t\t\t\t\t   do it for you!' +
			  '```');

}