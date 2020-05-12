// JavaScript Document
exports.run = (message,args) => {
	//the argument being passed of the name for who to roast.
	var roasteeId = args;
	// array of random roasts.
	var roasts = [  "Smells like wet dog.", 
                    "built like bent iphone.", 
                    "uses his cats literbox for cereal."];
	/* randomizer to pull from roasts.
 	expected output: a number between 0 and 1 multiplied by the array length.
	*/
	var randRoast = Math.floor(Math.random() * roasts.length);
	
	// return message including a random roast and the name passed to adriBot.
	message.channel.send(roasteeId + " " + roasts[randRoast]);
}