# v5.2.0/v5.1.2 sürümü şablon
---------------------                 
BUNU REPLİTTEN KULLANMANIZ ÖNERİLİR,              
replitten kullanıyorsanız;
  * Envler kısımına girin
  * bottoken adında bir env oluşturun
  * Oluşturduğunuz envnin içine botun tokenini girin (bu güvenlik içindir)
---------------------               
# Öğreticiler
### Botu 2 tane prefixli yapma
   * prefix: "$getServerVar[prefix]" yazan yere şunu yazın; prefix: ["$getServerVar[prefix]","diğerprefixiyazın"]
### Komut şablonu
Genel Komut Şablonu
```javascript
module.exports = {
  name: "komutadı",
  description: "Komut açıklaması"
  code: ``
  
}
```
Interaction Button
```javascript
module.exports = [{
  name: "interactionadı",
  type: "interaction",
  prototype: "button",
  code: ``
}]
```
### Eval komutu (komut testi)
   * Komutlar dosyasına girip "eval.js" adında bir dosya oluşturun
   * İçine şunları yazın;
   ```javascript
  module.exports = {
  name: "eval",
  code: `
$eval[$message]
$onlyForIDs[idnizigirin;XD]
$deletecommand



  `
  
}
```
  * onlyforids yerine idnizi girin! sakın başka birinin idsini girmeyin yoksa botunuzu patlatırlar
### Discord.js Biliyorsanız
  * Aoi.jsye yeni geçtiyseniz discord.js biliyorsanız discord js komutlarını aoi.jsdede kullanabilirsiniz, `$djsEval[djs kodları]`
# Kurulum (replit)
  * https://replit.com/ sitesine girin
  * Createye basın
  * "Import from Github"a tıklayın
  * Github URL yerine "https://github.com/Goodbs/aoi-v5.2.0-sablon/" yazın
  * Yeniden Import from Githuba tıklayın
