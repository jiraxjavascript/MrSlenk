const Discord = require('discord.js')
const Client = new Discord.Client()
Client.login('NzU2NDk5ODMzNTc3MDEzMjg4.X2SvXw.sgJDoC_vKv3xO-vdc24Ms26DKWk');
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`
Client.on("ready", () => {
  console.log("Loading status..")
  Client.user.setActivity(`my leader Slenky#0001 | ;help`, { type: 2, browser: "DISCORD IOS"  });
});

const cheerio = require('cheerio');

const request = require('request');

const cooldown = new Set()
const cdtime = 180


const prefix = ";"

Client.on('message', async(message) =>{
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(" ")
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('Pong!');
    }

    if(command === 'invite') {
        message.channel.send('**Bota Mr. Slenk vieš pridať do svojho servera tu:** https://discord.com/oauth2/authorize?client_id=756499833577013288&scope=bot&permissions=8');
    }

    if(command === 'navod') {
        message.channel.send('https://i.imgur.com/S0xB9im.png');
    }

    if(command === 'cringeyoutuber') {
      message.channel.send('https://www.youtube.com/c/TommyInnit/');
  }


    if(command === 'help') {
      var embed = new Discord.MessageEmbed()
      .setTitle('List príkazov bota Mr. Slenk')
      .setColor ('ORANGE')
      .setAuthor('Bota vytvoril Slenky#0001')
      .setURL('https://discord.com/oauth2/authorize?client_id=756499833577013288&scope=bot&permissions=8')
      .addField('List príkazov:', "invite, navod, ping, zamavaj, meme, pes, macka, liska, dance, cringeyoutuber, cislo")
      .setFooter('Prefix pre všetky príkazy je ";"')
      message.channel.send(embed)
    }

    if(command === 'pravidla') {
      var embed = new Discord.MessageEmbed()
      .setColor ('ORANGE')
      .setURL('https://discord.com/oauth2/authorize?client_id=756499833577013288&scope=bot&permissions=8')
      .addField('Vitaj!', "Ahoj, vitaj na **oficiálnom serveri bota Mr. Slenk!** Tento server nemá nejaká priame pravidlá a snažíme sa vítať všetko ale úplne všetko jednoducho povolené byť nemôže. Seba propagácia a spam tu je zakázaný s tým že rasizmus je prísne zakázany a bude sa trestať okamžitým banom. Mimo toho dúfam že sa ti tu bude páčiť a že zostaneš!")
      .setFooter('Prefix pre všetky príkazy je ";"')
      message.channel.send(embed)
    }

    if(command === 'zamavaj') {
        message.channel.send(':wave:');
    }

    if(command === 'dance') {
      message.channel.send('https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/source.gif');
  }

  
  if(command === 'nnty') {
    message.channel.send('nn ty @MUDr. Seasick8083');
}

    if(command === "meme") {
      const fetch = require("node-fetch")
      var json = await (await fetch("https://api.hyrousek.tk/meme")).json();
      if(!json.url) return;
      
      var embed = new Discord.MessageEmbed()
        .setImage(json.url)
        .setTitle('Čerstvý a chrumkavý meme bol práve dopečený!')
        .setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
        .setURL('https://youtube.com/Slenkye')
      message.channel.send(embed)
    }

    if(command === "pes") {
      const fetch = require("node-fetch")
      var json = await (await fetch("https://api.hyrousek.tk/dog")).json();
      if(!json.url) return;
      
      var embed = new Discord.MessageEmbed()
        .setImage(json.url)
        .setTitle('Krásny psík pre teba! :3')
        .setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
        .setURL('https://youtube.com/Slenkye')
      message.channel.send(embed)
    }
    
    if(command === "macka") {
      const fetch = require("node-fetch")
      var json = await (await fetch("https://api.hyrousek.tk/cat")).json();
      if(!json.url) return;
      
      var embed = new Discord.MessageEmbed()
        .setImage(json.url)
        .setTitle('Mňau! :3')
        .setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
        .setURL('https://youtube.com/Slenkye')
      message.channel.send(embed)
    }

      
    if(command === "liska") {
      const fetch = require("node-fetch")
      var json = await (await fetch("https://api.hyrousek.tk/fox")).json();
      if(!json.url) return;

     
      
      var embed = new Discord.MessageEmbed()
        .setImage(json.url)
        .setTitle(':fox::fox::fox:')
        .setFooter('API vytvoril 𝙃𝙮𝙧𝙤#8938 | Bota vytvoril Slenky#0001')
        .setURL('https://youtube.com/Slenkye')
      message.channel.send(embed)
}
      if(command === "cislo") {
        const fetch = require("node-fetch")
        const json = await (await fetch('https://api.hyrousek.tk/useless/randomNumber?from=0&to=1000')).json();
        if(!json.number) return;

      var embed = new Discord.MessageEmbed()
      .setDescription(json.number)
      .setFooter('discord.gg/fRGSmns | Slenky#0001')
      .setAuthor('TIP: Pripoj sa do nášho Discordu! ')
      .setColor('ORANGE')
       message.channel.send(embed)
      }
    })