const Discord = require('discord.js')

module.exports = {
	name: 'meme',
	description: 'Posle meme',
	async execute(message, args) {
        const fetch = require("node-fetch");
      	var json = await (await fetch("https://api.hyrousek.tk/meme")).json();
      	if(!json.url) return;
      
      	var embed = new Discord.MessageEmbed()
        	.setImage(json.url)
        	.setTitle('Čerstvý a chrumkavý meme bol práve dopečený!')
        	.setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
        	.setURL('https://youtube.com/Slenkye')
     	message.channel.send(embed)
    },
};