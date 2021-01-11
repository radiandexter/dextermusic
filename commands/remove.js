const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  aliases: ["rm"],
  description: "Remove song from the queue",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("<a:G_cross3:788409821727555655> **There is no queue!**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`<a:G_check2:787421149377855538> Removed **${song[0].title}** from the queue.`);
  }
};
