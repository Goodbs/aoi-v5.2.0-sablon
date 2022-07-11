module.exports = {
  name: "ping",
  code: `
$djsEval[ message.reply
({ 
content: 'Pingim : $ping', 
ephemeral: false 
})

]

  `
  
}
