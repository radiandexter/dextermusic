const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**<:dexterwingslogo:798860602126630962> Dexter Music**`)
      .setDescription(
        "The official **Dexter Palace** discord music bot owned by `DEXTER◥▶_◀◤#0429` delivers high quality music \n\nJoin a Voice Channel and use `.play` command to play songs. You can use track name or provide video links. Use `.help` command for more information. \n\n**__Invite Link__** \n*You can [Click Here](https://discord.com/oauth2/authorize?client_id=787223530894786591&permissions=${permissions}&scope=bot) to invite `Dexter Music` to your server*\n\n**__Discord Server__** \n*Join our discord server by [Clicking Here](https://discord.gg/k7QbPK8Zxs)*"
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=787223530894786591&permissions=${permissions}&scope=bot`
      )
      .setColor("00ffff");
    return message.channel.send(invite);
  }
};
