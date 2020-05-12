// Sends a message containing the rules. Either random rule, specific rule, or all rules.
// 
// Original Version: 4/26/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 4/27/2020
// Current Author: Adrian Ruvalcaba

const rules = require('./rules.json');

exports.run = (message, args) => {


	var msg = message.content.toUpperCase();
	var sender = message.member.user.tag;
	var senderId = message.member.toString();
		
	if(args == '')
	{
		message.channel.send("Here are the server rules for this Discord Server:\n\n" +
								">>> " + rules.RULES);
		//rules.RULES.forEach(element => message.channel.send(">>> " + element));
	}
	else
	{
		try {
				message.channel.send(rules.RULES[args-1]);
			}
			catch (error) {
				message.channel.send("Invalid rule. Please try again.");
			}
	}

}
