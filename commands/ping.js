module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
   message.channel.send(`<a:G_spinner:787423364339597372> Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
