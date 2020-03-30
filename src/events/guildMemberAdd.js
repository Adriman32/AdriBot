// When users join for the first time, they get added to the 'Intern' role
// Original Version: 3/25/2020
// Original Author: Adrian Ruvalcaba
// Current Version: 3/25/2020
// Current Author: Adrian Ruvalcaba

module.exports = (member) => {
	
	console.log('User ' + member.user.username + ' joined the server');
	  
	var role = member.guild.roles.find(role => role.name === 'Interns');
	member.addRole(role)

}