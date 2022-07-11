const aoijs = require('aoi.js');
//aoi modülü

const bot = new aoijs.Bot({
  token: process.env.bottoken,
  prefix: "$getServerVar[prefix]",
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]
});

//interactionlar butonlara, selectmenülere yarar buraya ellemeyin!
bot.onMessage();
bot.onInteractionCreate();
//-----------------------------------------------------------------------

//botun durumu burada yazıyor, text yazan yere statusda ne olacağını yazın
bot.status({
  text: "Bot",
  type: "WATCHING",
  time: 12
})

//botun prefixini girin (varsayılan)
bot.variables({
  prefix: "!"
})

bot.readyCommand({
  channel: "",
  code: `$log[Başlatıldı $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./Komutlar/")


const express = require('express')
const app = express();

app.get("/", async(req,res) => {
  res.send('Hmm, bir sıkıntı yok gibi, şuanda çalışıyor')
})

app.listen(3000, async () => {
  console.log('Uygulama Başlatıldı!')
})

//aoi music (isteğe bağlı), isterseniz bunun altındakileri silin
const voice = new aoijs.Voice(bot, {
  soundcloud: {
    //clientId: "SoundCloud clientID",
  },
  cache: {
    cacheType: "Memory",//Disk | None
    enabled: true,
  },
}, false);