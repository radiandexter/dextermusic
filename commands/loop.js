const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ["l"],
  description: "Toggle music loop",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**<a:G_cross3:788409821727555655> There is nothing playing!**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`<a:G_check2:787421149377855538> Loop is now ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);
  }
};