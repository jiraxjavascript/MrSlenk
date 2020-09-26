module.exports = {
	name: 'ping',
	description: 'Pong!',
	usage: '<user> <role>',
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
		message.channel.send('Pong.');
	},
};