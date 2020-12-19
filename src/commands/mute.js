// {COMMAND DESCRIPTION}
// 
// Original Version: 6/18/2020
// Original Author: Adrian Ruvalcaba
// Current Version: {DATE}
// Current Author: {AUTHOR}



//	You can use the variables 'message' and 'args' 
//	to create your command
exports.run = (message, args) => {
	
	var sender = message.member.toString();
	var server = message.guild;
	try {
		var muteMember = message.mentions.users.first().id; } catch {};
	
	if(args[0] == null)
		message.channel.send("Please tag the person you would like to mute with the @ symbol.");
	else if(server.member(muteMember) != null)
		message.channel.send(sender + " has initiated a 10 minute MUTE VOTE against " + message.mentions.users.first().toString() + "! React below to vote!")
		.then(function (message) {
              message.react("✅")
              message.react("❌")
			  });
	
	
	
	
	
	
	else
		message.channel.send("Member does not exist! Please tag the person you would like to mute with the @ symbol.");
}