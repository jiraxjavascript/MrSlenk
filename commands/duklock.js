
const { execute } = require("./help");

module.exports = {
    name: 'duklock',
    description: 'Posle náhodný post z r/Duklock sub redditu',
    async execute(message, args) {
        const Discord = require('discord.js');
        const randomPuppy = require('random-puppy');

        const img = await randomPuppy("duklock")

        const embed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle('Priamo z Redditu r/Duklock!')
        .setURL('https://reddit.com/r/duklock')
        .setFooter('Bota vytvoril Slenky#0001')
        .setColor('ORANGE')
        message.channel.send(embed);
    },
}
