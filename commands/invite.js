module.exports = {
	name: 'invite',
	description: 'Posle invite',
	async execute(message, args) {
        message.channel.send('**Bota Mr. Slenk vieš pridať do svojho servera tu:** https://discord.com/oauth2/authorize?client_id=756499833577013288&scope=bot&permissions=8');
    },
};