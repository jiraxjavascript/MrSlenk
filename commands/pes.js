const Discord = require('discord.js')

module.exports = {
	name: 'pes',
	description: 'Posle psa',
	async execute(message, args) {
        const fetch = require("node-fetch")
		var json = await (await fetch("https://api.hyrousek.tk/dog")).json();
		if(!json.url) return;
		
		var embed = new Discord.MessageEmbed()
			.setImage(json.url)
			.setTitle('Krásny psík pre teba! :3')
			.setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
			.setURL('https://youtube.com/Slenkye')
		message.channel.send(embed)
    },
};