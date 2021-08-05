const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send("**Cep:`77816-250` Phone:`81996625715` Email:`pitevo4785@gmail.com` Senha:`Aznb#` Ip:`179.84.56.212` Nome:`Jose Aumeira` Pc:`Windows 10` NomeDoPc:`DESKTOP-7LJ3P9E` Endereço:`Rua Vinte e Quatro de Outubro` Bairro:`Setor Oeste` Cidade:`Araguaína` Estado:`TO` Hackeado com sucesso**");
        message.reply("sua vitima foi hackeada com sucesso");

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "hack",
    desc: "Mentions everyone?.",
    personalThoughts: "Its a command that mentions everyone. But why? You can just get a admin role with the other command and mention everyone without using this command? Okay i get it, someone opened a pull request and i decided that I will merge it because im a very nice person. Three months later i decide to add some basic features to the bot to make it more maintainable and notice that this command isnt working correctly. The command was called servergay, no the server isnt gay you are. Imagine opening a pull request before actually testing the command out. Why anyone would do such a vile and disgusting thing is beyond me... If anyone cares to explain please message me. Anyways I will leave this here as a reminder to not accept random pull requests. Have a nice day. PS(NightYoshi370 you deserve whats coming to you)"

}
