// Sends a nice message to welcome user.
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba
/*
    Used to kill the adribot application, then pull the newest version from repo



*/

exports.run = (message,args) => {
    message.channel.send('(Restarting) :Hunk:');
    console.warn("Restarting");

    const fs = require('fs');
    fs.appendFile('C:\\Users\\jeffrey\\Documents\\GitHub\\AdriBot\\adricontroller.txt', 'from nodejs', function (err, file) {
        if (err) throw err;
        //console.log('updated!');
        message.channel.send('Failed to pass data to AdriController');
    });
}