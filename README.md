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
