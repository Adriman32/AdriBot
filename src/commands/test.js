<<<<<<< HEAD
exports.run = (member, args) => {
	//console.log('You did it!');
	//console.log('Args: ' + args)
	try {
	require('../utils/playerHandler').run(member,args);
	} catch
	{
		console.log("no");
	}
}
=======
exports.run = (message,args) => {
	//console.log('You did it!');
	//console.log('Args: ' + args)
	message.channel.send(message.channel.id);
}
>>>>>>> b52be553c21790758c9583c044192f26a50cba08
