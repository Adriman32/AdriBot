// Sends a nice message to welcome user.
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba
/*
    Used to kill the adribot application, then pull the newest version from repo



*/

exports.run = (message,args) => {
    var validUser = false;
    var admins = [  "102565363631284224", 
                    "256291758013415425", 
                    "177584293269340162", 
                    "346818915294380032"]; //jeff, adrian, ribs, nicky
    //console.log(message.author.id);
    for (i = 0; i < admins.length; i++) {
        if(message.author.id === admins[i]){
            validUser = true;
        }
    } 
    if (validUser === true){
        message.channel.send('(Restarting) :Hunk:');
        console.warn("Restarting");

        const fs = require('fs');
        fs.appendFile('C:\\Users\\jeffrey\\Documents\\GitHub\\AdriBot\\adricontroller.txt', 'from nodejs', function (err, file) {
            if (err) throw err;
                console.log(err);
            //message.channel.send('Failed to pass data to AdriController');
        });
    }else{
        message.channel.send("You're not allowed to do that.");
        //perhaps also roast user
    }
}