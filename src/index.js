//Index.js
// Description: Creates the bot and initializes it

// Original Version: 2/21/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/23/2020
// Current Author: Adrian Ruvalcaba


const Discord = require('discord.js');
const config = require('./config.json');
//const init = require('./utils/init.js');

// Creates Bot
const bot = new Discord.Client();

require('./utils/loadEvents.js')(bot);

bot.login(config.DISCORD_TOKEN);
