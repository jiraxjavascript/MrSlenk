module.exports = {
    name: 'duklock',
    description: 'Posle náhodný post z r/Duklock sub redditu'

}

const { DiscordAPIError } = require('discord.js');
const randomPuppy = require('random-puppy');
const snekfetch = require ('snekfetch')

module.exports.run = async (bot, message, args) => {
    const subReddits = ["duklock"]
    const random = subReddits[Math.floor(Math.random() * subReddits.lenght)];
    const img = await randomPuppy(subReddits)

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle('Priamo z Redditu r/Duklock!')
    .setURL('https://reddit.com/r/duklock')

    message.channel.send(embed);
    
};

