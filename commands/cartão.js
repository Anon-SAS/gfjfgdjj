const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send("**Cartão de credito: `5109 7589 3976 8778,| 29/11/2022, 133`,| `4916 7994 4116 8517, 01/03/2022, 216`,| `3431 625463 66935, 29/07/2022, 8239`,| `3824 431326 0168, 29/12/2021, 570`,| `6011 5242 3799 5058, 29/05/2023, 4192`,| `2149 7237342 4094, 29/12/2022, 861`,| `3547 5338 1641 7525, 29/05/2023, 979`,| `86995 7407 75689 0, 29/06/2022, 255`,| `6062 8278 6042 0270, 29/06/2022, 286`,| `5047 5035 7698 4865, 29/03/2022, 486`.**");
        message.reply("Esses são todos os ccartões de creditos gerados.");

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "cartão",
    desc: "Mentions everyone?.",
    personalThoughts: "Its a command that mentions everyone. But why? You can just get a admin role with the other command and mention everyone without using this command? Okay i get it, someone opened a pull request and i decided that I will merge it because im a very nice person. Three months later i decide to add some basic features to the bot to make it more maintainable and notice that this command isnt working correctly. The command was called servergay, no the server isnt gay you are. Imagine opening a pull request before actually testing the command out. Why anyone would do such a vile and disgusting thing is beyond me... If anyone cares to explain please message me. Anyways I will leave this here as a reminder to not accept random pull requests. Have a nice day. PS(NightYoshi370 you deserve whats coming to you)"

}
