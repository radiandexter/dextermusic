const createBar = require("string-progressbar");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "np",
  description: "Show now playing song",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**<a:G_cross3:788409821727555655> Nothing, Let's get this party started! 🎉**").catch(console.error);

    const song = queue.songs[0];
    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    const left = song.duration - seek;

    let nowPlaying = new MessageEmbed()
      .setTitle("<a:G_headphones:787421469134946304>  **Now Playing**")
      .setThumbnail(message.guild.iconURL())
      .setDescription(`**[${song.title}](${song.url})**`)
      .setURL(`https://discord.gg/k7QbPK8Zxs`)
      .setColor("#FD0250")

    if (song.duration > 0) {
      nowPlaying.addField(
        "\u200b",
          "▶ " +
          createBar(song.duration == 0 ? seek : song.duration, seek, 10)[0] +   
          "\n" +
        new Date(seek * 1000).toISOString().substr(11, 8) + 
        "/" + 
        (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
        false
      );
      nowPlaying.setFooter("Time Remaining: " + new Date(left * 1000).toISOString().substr(11, 8));
    }

    return message.channel.send(nowPlaying);
  }
};
