const settings = require('../ayarlar.json');
const prefix = settings.prefix;

exports.run = (client, msg) => {
  let mesaj = msg.content.split(`${prefix}say`).join("");
    if(!mesaj) {
      msg.reply("**Yazacağım mesajı belirtmelisin!** :x:").then(m => m.delete(4500));
      return; 
    }
  msg.delete();
    msg.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'bota istediğiniz şeyi söyletirsiniz',
  usage: 'say'
};