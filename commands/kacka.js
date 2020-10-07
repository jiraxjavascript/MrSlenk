const Discord = require('discord.js')

module.exports = {
	name: 'kacka',
	description: 'Posle kacku',
	cooldown: 4,
	async execute(message, args) {
        const fetch = require("node-fetch")
		var json = await (await fetch("https://random-d.uk/api/v2/random")).json();
		if(!json.url) return;
		
		var embed = new Discord.MessageEmbed()
			.setImage(json.url)
			.setTitle('Kačička pre teba! :3')
			.setFooter('API random-d.uk | Bota vytvoril Slenky#0001')
			.setURL('http://memesare.fun')
		message.channel.send(embed)
    },
};