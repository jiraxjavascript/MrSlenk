const Discord = require('discord.js')

module.exports = {
	name: 'help',
	description: 'Posle help',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
        .setTitle('List príkazov bota Mr. Slenk')
        .setColor ('ORANGE')
        .setAuthor('Bota vytvoril Slenky#0001')
        .setURL('https://discord.com/oauth2/authorize?client_id=756499833577013288&scope=bot&permissions=8')
        .addField('List príkazov:', "invite, navod, ping, zamavaj, meme, pes, macka, liska, dance, cringeyoutuber, cislo, keksik")
        .setFooter('Prefix pre všetky príkazy je ";"')
        message.channel.send(embed)
    },
};