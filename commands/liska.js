const Discord = require('discord.js')

module.exports = {
	name: 'liska',
	description: 'Posle lisku',
	cooldown: 2,
	async execute(message, args) {
    	const fetch = require("node-fetch")
		var json = await (await fetch("https://api.hyrousek.tk/fox")).json();
		if(!json.url) return;

		
		
		var embed = new Discord.MessageEmbed()
			.setImage(json.url)
			.setTitle(':fox::fox::fox:')
			.setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
			.setURL('https://youtube.com/Slenkye')
		message.channel.send(embed)
    },
};