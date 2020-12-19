// {COMMAND DESCRIPTION}
// 
// Original Version: 6/3/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 6/18/2020
// Current Author: Adrian Ruvalcaba



//	You can use the variables 'message' and 'args' 
//	to create your command
exports.run = (message, args) => {


	var msg = message.content.toUpperCase();
	var sender = message.member.user.tag;
	var senderId = message.member.toString();
	
	// User wants to create their own channel. 
	if (args[0] == "create")
	{
		// Creating channel with given name
		if (args[1] != null)
		{
			//channelManager(message,args);
			channelCreate(message,args);		
		}
		// No name for channel entered. Prompting user.
		else
		{
			message.channel.send("Please enter a name for the channel!");
		}
	}
	
	// User requested help with the Channel command
	else if (args[0] == "help")
	{
		message.channel.send('/ab channel create <#channel_name>\t   Create your own personal temporary channel.\n');
	}
	
	
	
	else if (args[0] == "timer")
	{
		function tester() {
			message.channel.send("Welcome");
		}
		setTimeout(tester, 5000);
	}
	
	
	
	
	else
	{
		channelError(message);
	}
	
	
}

// Creates channel in appropriate category.
function channelCreate(message,args) {
	
	var server = message.guild;
	var name = args[1];
	
	if (server.channels.find("name", name))
	{
		message.channel.send("That channel name is already in use. Please try again.");
	}
	else
	{		
		
		setImmediate();
		
		
		
		
		server.createChannel(name, "voice")
			.then(channel => {
			let category = server.channels.find(c => c.name == "Guests" && c.type == "category");
			channel.setParent(category.id);
			
			message.channel.send("Created channel " + args[1] + "! You have 30 seconds to join it before I delete it.");
			
			channelManager(message,args);
			});		
	}
}

function channelManager(message, args)
{
	var server = message.guild;
	var name = args[1];
	const newChannel = server.channels.find(c => c.name == "General" && c.type == 'voice');
	var timer = Date.now();

	while (Date.now() <= (timer + 3000))
	{
		if (newChannel.members.size)
		{
			console.log(newChannel.fetch());
			timer = Date.now();
		}
	}
	
	console.log ("Time is up!");
	
	
}


// Error occured. Sending help message to user.
function channelError(message)  {
	message.channel.send("Invalid syntax. Use \"/ab channel help\" for more information.");
}