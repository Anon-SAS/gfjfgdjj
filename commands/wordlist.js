const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send("**Senha:`V&b^`,| `Wp!$VJ%TjNhZjz8u@ux`,| `%lOH3Uil@0tE^W2OvjK`,| `hQnCJ6TCUs2^*lM$dDE`,| `3Xz^jdwoDHyFz3%5WZV`,| `&ZZudPnIOCv!wFMni#Q`,| `#FPM5lXSKt$%iVq!XTe`,| `!ep57oNrK@h$vFi*j#0`,| `j#5*uEGWbfr*LRW%nzJ`,| `E4&LmO1JUZ6xhAVpj^4`,| `q1KzzaGGj*K!yD*kII3rXGAZm9GPneRqlFrwP*oFLtl@S1!$t!`,| `#Lb4m*SgcHun$KvHLVz1Bin`,| `v6^haFkAMUbT1UtwAW#UkJ6wQe9M4rB$`.**");
	message.reply('**Essas são todas nossas senhas geradas ate agora.**')

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "wordlist",
    desc: "Mentions everyone?.",
    personalThoughts: "Its a command that mentions everyone. But why? You can just get a admin role with the other command and mention everyone without using this command? Okay i get it, someone opened a pull request and i decided that I will merge it because im a very nice person. Three months later i decide to add some basic features to the bot to make it more maintainable and notice that this command isnt working correctly. The command was called servergay, no the server isnt gay you are. Imagine opening a pull request before actually testing the command out. Why anyone would do such a vile and disgusting thing is beyond me... If anyone cares to explain please message me. Anyways I will leave this here as a reminder to not accept random pull requests. Have a nice day. PS(NightYoshi370 you deserve whats coming to you)"

}
