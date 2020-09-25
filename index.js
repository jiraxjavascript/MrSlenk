const fs              = require('fs');
const Discord         = require('discord.js');
const {prefix, token} = require('./config.json');
const client          = new Discord.Client();
client.commands       = new Discord.Collection();
const commandFiles    = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`
client.on("ready", () => {
  console.log("Loading status..")
  client.user.setActivity(`my leader Slenky#0001 | ;help`, { type: 2, browser: "DISCORD IOS"  });
});

client.on('message', async(message) => {
  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  try{
    client.commands.get(command).execute(message, args);
  }catch{
    console.log('error');
  }

});

client.login(token);
