module.exports = {
	name: 'ping',
	description: 'Pong!',
	async execute(message, args) {
		message.channel.send('Pong.');
	},
};