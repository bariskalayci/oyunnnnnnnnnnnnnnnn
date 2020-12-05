const discord = require('discord.js');
const client = new discord.Client();
const ayarlar = require('../ayarlar.json');
const owner = ayarlar.sahip;
const diger = ayarlar.digersahip;
const token = ayarlar.token;

exports.run = (client, msg) => {
  msg.reply("tokenim; ")
  msg.channel.send("https://media.discordapp.net/attachments/755132729707724904/755132828966060102/a_df45711759095e85d3740fdf9ec7ff30.gif");
  msg.channel.send("iyi bak tokene bak bak " + msg.author.username);
  if(msg.author.id === owner || msg.author.id === diger) {
    msg.author.send("sen benim ownerimsin oyüzden tokenimi sana veriyom\ntokenim; "+token);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['token','Token','TOKEN',"toekn","tokn","toen"],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'botun tokenini alırsınız.',
  usage: 'token'
};