// JavaScript Document
exports.run = (message,args) => {
	//the argument being passed of the name for who to roast.
	var roasteeId = args;
	var senderId = message.member.toString();
	if (senderId == "<@255908979761348608>") {
			message.channel.send("Shutup forehead.")
	} else {

		// array of random roasts.
		var roasts = [  		"smells like wet dog.", 
						"built like bent iphone.", 
						"uses his cats literbox for cereal.",
						"looks like dead batteries.",
						"look like dog dick.",
						"look like burnt feta cheese.",
						"look like anne frank.",
						"even helen keller think you ugly.",
						"built like a public school basketball hoop.",
						"look like they use sunblock as salad dressing",
			      			"built like a bent iPhone",
			      			"look like a backwards road sign",
			      			"look like bernie sanders",
			      			"needs to wipe the bacon grease of his controller",
			      			"look like the bottom of a mouse pad"
			 ];
		var joshRoasts = [
			"forehead bigger than the washington monument.",
			"born with a receding hairline.",
			"grew out his hairline to coverup that fivehead."
		];

		/* randomizer to pull from roasts.
		expected output: a number between 0 and 1 multiplied by the array length.
		*/
		var randRoast = Math.floor(Math.random() * roasts.length);
		var joshRandRoast = Math.floor(Math.random() * joshRoasts.length);

		// return message including a random roast and the name passed to adriBot.
		if (roasteeId == "josh" || roasteeId == "Josh" || roasteeId == "JOSH" || roasteeId == "<@255908979761348608>") {
		message.channel.send(roasteeId + " " + joshRoasts[joshRandRoast]);
		} else {
			message.channel.send(roasteeId + " " + roasts[randRoast]);
		}
	}
}
