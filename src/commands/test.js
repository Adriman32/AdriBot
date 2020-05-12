exports.run = (message,args) => {
	//console.log('You did it!');
	//console.log('Args: ' + args);
	let gezz = process.env.pwd
	message.channel.send(gezz);
}
