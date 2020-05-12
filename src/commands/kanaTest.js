// {COMMAND DESCRIPTION}
// 
// Original Version: {DATE}
// Original Author: {AUTHOR}
// Current Version: {DATE}
// Current Author: {AUTHOR}



//	You can use the variables 'message' and 'args' 
//	to create your command
exports.run = (message, args) => {

	//var msg = message.content.toUpperCase();
	//var sender = message.member.user.tag;
	var senderId = message.member.toString();
	//var botId = message.client.user.id.toString();
	
	if (args.includes("HI BOT") {
        message.channel.send("Hey " + senderId);
    }
}
