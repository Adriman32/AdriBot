// player help for the commands to create  player profile or return one.
exports.run = (message,args) => {
	message.reply("To add you're saved profiles use one of the following commands \n" +
				  "/ab player blizzard <blizzardID>\n" +
				  "/ab player steam <steamID>\n" +
				  "/ab player riot <riotgamesID>\n" +
				  "to return another players ID use\n" +
				  "/playerProfile <@user>"
				  );
}