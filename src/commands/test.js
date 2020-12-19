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