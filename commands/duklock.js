const { execute } = require("./help");

module.exports = {
    name: 'duklock',
    description: 'Posle náhodný post z r/Duklock sub redditu',
    async execute(message, args) {
        const Discord = require('discord.js');
        const randomPuppy = require('random-puppy');
        const snekfetch = require ('snekfetch')

        const subReddits = ["duklock"]
        const random = subReddits[Math.floor(Math.random() * subReddits.lenght)];
        const img = await randomPuppy(subReddits)

        const embed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle('Priamo z Redditu r/Duklock!')
        .setURL('https://reddit.com/r/duklock')
        .setFooter('Bota vytvoril Slenky#0001')

        message.channel.send(embed);
    },
}