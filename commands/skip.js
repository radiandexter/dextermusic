const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Skip the currently playing song",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.channel.send("<a:G_cross3:788409821727555655> **There is nothing playing that I could skip for you**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`<a:G_check2:787421149377855538> **Skipped**`).catch(console.error);
  }
};
