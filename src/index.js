/*
    Index.js
    Description: Creates the bot and initializes it

    Original Version: 2/21/2020
    Original Author: Adrian Ruvalcaba
    Current Version: 3/23/2020
    Current Author: Adrian Ruvalcaba
*/

const Discord = require('discord.js');
const config = require('./config.json');

// Creates Bot
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

require('./utils/loadEvents.js')(bot);

bot.login(config.DISCORD_TOKEN);
//console.log(config.DISCORD_TOKEN); //debug code
