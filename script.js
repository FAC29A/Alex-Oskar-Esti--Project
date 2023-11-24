require("dotenv/config");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

client.on("message", (message) => {
  if (message.author.bot) return; // Ignore messages from bots

  // Process the message here
  console.log(`Message from ${message.author.tag}: ${message.content}`);
});
