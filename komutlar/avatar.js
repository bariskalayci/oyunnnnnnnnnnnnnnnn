const discord = require('discord.js');
const client = new discord.Client();

exports.run = (client, msg) => {
const embed = new discord.RichEmbed()
.setTitle("Avatar")
.setColor('RANDOM')
.setFooter("Powered by AdamAsmaca_Bot")
.setImage(msg.author.displayAvatarURL)
.setTimestamp()
msg.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'yazan kişinin avatarını gösterir',
  usage: 'avatar'
};