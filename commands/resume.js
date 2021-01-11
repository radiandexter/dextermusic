const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Resume currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("<a:G_cross3:788409821727555655> **There is nothing paused!**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`<a:G_check2:787421149377855538> **Resumed playing music!**`).catch(console.error);
    }

    return message.reply("The queue is not paused.").catch(console.error);
  }
};
