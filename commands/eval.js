const Discord = require("discord.js")
const Client = new Discord.Client

module.exports.run = async (bot, message, args) => {

   if (message.author === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => !c.help.admin)

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval"
      }