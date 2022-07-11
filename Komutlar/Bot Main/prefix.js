module.exports = {
  name: "prefix",
  aliases: "ön-ek",
  code: `
 $argsCheck[1;Lütfen prefixi girin]
 $title[1;Prefix Başarıyla Ayarlandı!]
 $description[1;Bu sunucudaki prefix $getVar[am]$message$getVar[am] olarak değiştirildi!]
 $color[1;RANDOM]
 $setServerVar[prefix;$message]
 $onlyPerms[admin;Bu komutu kullanabilmek için $getVar[am]Yönetici$getVar[am] iznine sahip olmalısın]

  `
  
}