module.exports = {
    name: 'cislo',
    aliases: ['number', 'num'],
	description: 'Posle cislo od 0 do 100',
	async execute(message, args) {
        message.channel.send(Math.floor(Math.random()*101));
    },
};