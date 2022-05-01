const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `restart`,
  category: `🎶 Music`,
  aliases: [`replay`],
  description: `Restarts the current song`,
  usage: `restart`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "song",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //seek to 0
    player.seek(0);
    //send informational message
    message.react(emoji.react.replay_track).catch(() => {})
  }
};

/**********************************************************
 * @INFO
 * Bot Coded by nqbill | https://discord.gg/homely
 * @INFO
 * Work for Homely Development | https://homely.dev
 * @INFO
 * Please mention him / Homely Development, when using this Code!
 * @INFO
 *********************************************************/
