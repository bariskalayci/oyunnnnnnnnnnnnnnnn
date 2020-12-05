const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
require("moment-duration-format");

exports.run = (client, msg) => {
  msg.channel.sendCode("asciidoc", `=            YARDIM MENÜSÜ            =
      『prefix [${prefix}] İŞARETİDİR』[Andro & Mnp]
• ${prefix}ping       :: Pingi hesaplar. 
• ${prefix}adamasmaca :: Adam asmaca Toplam 200+ Kelimeden Oluşan Bir Botdur İyi eğlenceler. 
• ${prefix}bruh       :: rasgele bruh gif atar. 
• ${prefix}oylama     :: oylama başlatır dm guruplarında da çalışır. 
• ${prefix}token      :: botun tokenini alırsınız. 
• ${prefix}say        :: bota herhangi bir mesaj söyletirsiniz. 
• ${prefix}avatar     :: yazan kişinin avatarını gösterir. 
• ${prefix}düello     :: etiketlediğiz kişiyle düello daveti atar.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'yardim', 'yardım menüsü', 'help'],
  permLevel:0
};

exports.help = {
  name: 'yardım',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};