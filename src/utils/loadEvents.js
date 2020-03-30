// Routes functions to the appropriate commands
// Original Version: 3/23/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

const requireEvent = (event) => require(`../events/${event}`);

module.exports = (bot) => {
  bot.on('message', requireEvent('message'));
  bot.on('ready', () => requireEvent('ready')(bot));
  bot.on('guildMemberAdd', member => requireEvent('guildMemberAdd')(member));
  process.on('unhandledRejection', error => requireEvent('unhandledRejection')(error));
  
};

