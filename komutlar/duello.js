const Discord = require('discord.js');
const settings = require('../ayarlar.json');
const prefix = settings.prefix; 

exports.run = (client, msg) => { // main kod
  
  let check = msg.content.split(`${prefix}düello`).join("");
  
  if(!check) {
    msg.reply("Birini etiketle!")
    return;
  }                                                 
  let user = msg.mentions.users.first();
  
  if(!user) {
    msg.reply("etiketlediğin kişi bu sunucuda değil!")
    return;
  }
  
  if(user.id === msg.author.id) {
    msg.reply("kendinle düello atamazsın!")
    return;
  }
  
  if(user.bot === true) {
    msg.reply("bot ile vs atamazsın!")
    return;
  }
  
  if(user.id === "745625315606397140") {
    msg.reply("adam asmaca botuyla düello yapamazsın!")
    return;
  }
  
  let cagrilan = user
  let cagiran = msg.author
  
  msg.channel.send(`${user} **düello teklifi geldi kabul etmek için: __evet__, reddetmek için: __hayır__ yazın.**`).then(() => {  
  
    msg.channel.awaitMessages(response => response.content.toLowerCase == 'evet' && response.author.id == cagrilan.id || response.content.toLowerCase == 'hayır' && response.author.id == cagrilan.id, {
      
                max: 1,
                time: 20000,
                errors: ['time']
    }).then((collected) => {
      msg.channel.send("bilgi alındı!")
                if (collected.first().content == 'evet') {
                    msg.channel.send(`düello kabul edildi`);
                }
                else if(collected.first().content == 'hayır') { 
                    msg.channel.send(`düello reddedildi!`);
                  return;
                }
            })
    
  })
  
  
};  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['düello'],
  permLevel: 0
};

exports.help = {
  name: 'duello',
  description: 'duello yaparsınız',
  usage: 'duello'
};