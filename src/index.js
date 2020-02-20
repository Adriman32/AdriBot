const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

var DNE = 'I don\'t currently have this implemented yet! Try again later!';


// Sends message to log when AdriBot is ready
bot.on('ready', function() {
  console.log("\n\t\t***********************************" +
    "\n\t\t* AdriBot is now at your service! *" +
    "\n\t\t***********************************\n");
	bot.user.setStatus('available');
	bot.user.setPresence({
		game: {
			name: 'Adriman32',
			type: "STREAMING",
			url: "https://www.twitch.tv/adriman32"
		}
	});
});

// -------------------------Responses--------------------------------------------- //

bot.on('message', function(message) {

var sender = message.member.user.tag;
var senderId = message.member.toString();
var msg = message.content.toUpperCase();
var prefix = '/AB ';
var channelId = message.channel.id;
var botId = bot.user.id.toString();
botId = botId.toUpperCase();

  if (senderId.bot) return;
  //if (!message.content.startsWith('/ab')) return;


 /*		Trigger: /ab test
		Response: Custom test cases for development of AdriBot   */
  
  if (msg.includes(prefix + 'TEST')) {
	message.channel.send('My name is <@' + botId + '>');
	message.channel.send('My message I received was ' + msg);
	
	for ( var i = 9; i < msg.length; i++ )
	{
		message.channel.send('Letter ' + i + ' of message: ' + msg[i]);
	}
  }
  
  
  /*      Trigger: /ab help
          Response: Help Prompt   */
  if (msg === prefix + 'HELP') {
    message.reply('Here is a list of things I can currently do:\n```\n\n'+
              '/ab coin\t\t\t   Flip a coin! Heads or Tails?\n'+
              '/ab rules\t\t\t  I read a random Official Rule! Read all five!\n' +
              '\`\t\t\t\t\t  Press the icon under the escape key and I will delete it for you! Designed\n\t\t\t\t\t   for PokeCord!\n' +
			  '/ab dab\t\t\t    Dab!\n' +
              '\nComing Soon:\n'+
              '/ab mute <@person>\t Is someone annoying you? Vote to see if they should get a temp mute! It only\n\t\t\t\t\t   takes 3 votes!\n' +
			  '```');
  }

/*      Trigger: /ab rules
        Response: Random Server Rule   */
  if (msg === prefix + 'RULES') {
	
	console.log("\n" + sender + " ran \'Rules\' trigger.");

    var rulesArray = [	'Rule #1: Never Pull Out!',
						'Rule #2: Spitters Are Quitters!',
						'Rule #3: Safety First!',
						'Rule #4: No Take-Backs!',
						'Rule #5: If It Twerks, It Works!'];								
	
	message.channel.send(rulesArray[Math.floor(Math.random() * 5)]);
  }
  
  /*      Trigger: /ab rules all
        Response: Returns all rules   */
  if (msg === prefix + 'RULES' + ' ALL') {

    console.log("\n" + sender + " ran \'Rules All\' trigger.");
		
	message.reply('Here are the Laws of the Lodge:' +
	'\n```Rule #1: Never Pull Out!' +
	'\nRule #2: Spitters Are Quitters!' +
    '\nRule #3: Safety First!' +
    '\nRule #4: No Take-Backs!' +
    '\nRule #5: If It Twerks, It Works!```');
  }

  /*      Trigger: /ab coin
          Response: Flips a coin   */
   if (msg === prefix + 'COIN') {
	   console.log("\n" + sender + " ran \'Coin\' trigger");
		var coinFlip = 'heads';
     
		if (Math.floor(Math.random() * 2)) {
			coinFlip = 'tails';
		}
		
		message.channel.send( senderId + ' flipped a coin and it landed on ' + coinFlip + '!');
	}

  /*      Trigger: -help, !help, /help
          Response: Redirects to Bot Help   */
    if (msg === '-HELP' || msg === '!HELP' || msg === "/HELP") {

      message.reply('This server uses multiple bots, therefore the summon words have been modified.'
                + '\nTo pull up the help info for a specific bot, use the following commands:'
                + '\nAdriBot: /ab help'
                + '\nGroovy Music: /g help'
                + '\nPokeCord Bot: /pokehelp'
                + '\nRyan Help: /r help');
    }

    /*      Trigger: /r help
            Response: Displays a kind help prompt   */
    if (msg === '/R HELP') {
      message.reply('Frick you fruitcake!');
    }

    /*      Trigger: `
            Response: Deletes message sent. Used to increase PokeCord spawns   */
    if (msg === '\`' || msg === '\`\`'|| msg === '\'\'\'') {

      message.delete();
      //for(i = 0; i < 5; i++){
      //message.channel.send('Dear PokeCord, please spawn some Pokemon for us. We would love to catch them all!\nWith love,\nAdribot');
	  //}
    }


    /*      Trigger: /ab mute
            Response: In Development. Will allow players to vote on temp mutes   */
    if (msg.includes(prefix + "MUTE")) {
      message.channel.send(DNE);
	  //message.channel.send(senderId + ' has initiated a mute on ' + senderId);
	}
	
	
    /*      Trigger: /ab status
            Response: Displays whether bot is online or not   */
    if (msg === prefix + "STATUS") {
      message.channel.send('AdriBot is active! Use the prefix \"/ab\" to send commands!');
    }

    if (msg === prefix + 'GOODNIGHT' || ( msg.includes('GOODNIGHT') && (msg.includes(botId) || msg.includes('ADRIBOT')))) {
	  message.channel.send('Goodnight ' + senderId + '. I\'ll see you tomorrow!');
    }

    if (msg === prefix + 'WELCOME' || ( msg.includes('WELCOME') && (msg.includes(botId) || msg.includes('ADRIBOT')))) {
      message.channel.send('Welcome back, ' + senderId + '! Let me know if you need anything!');
    } 
	
	if (msg === prefix + 'DAB'){
		var randDab = Math.floor(Math.random() * 11);
		var fileName = '../assets/GIF/dab_' + randDab + '.gif';
		message.channel.send(new Discord.Attachment(fileName));
	}
	
	if ( ( /*msg.includes(prefix) || msg.includes('ADRIBOT') ) && */ msg.includes('PARTY'))) {
		message.channel.send(new Discord.Attachment('../assets/GIF/frank_party.gif'));
	}
	
	if ( msg.includes('GOOD ') && msg.includes('BOT') ) {
		message.channel.send(':smile:');
	}
	
	if ( msg.includes('BAD ') && msg.includes('BOT') ) {
		message.channel.send(':cry:');
	}
	
	if (msg.includes(prefix + 'REE')) {
	message.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
						+ 'EEEEEEEEEEE');	
	}
});

bot.login(config.DISCORD_TOKEN).then().catch('Error logging in: ${console.error}');
