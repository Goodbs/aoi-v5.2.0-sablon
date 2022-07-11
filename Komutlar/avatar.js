module.exports = {
  name: "avatar",
  aliases:["av"],
  code: `
  
$author[1;$username;$authorAvatar]
$color[1;RANDOM]
$image[1;$userAvatar[$mentioned[1;yes]]?size=2048] 
$addTimestamp[1]




  `
  
}