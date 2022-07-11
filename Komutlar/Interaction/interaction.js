module.exports = [{
  name: "boş",
  type: "interaction",
  prototype: "button",
  code: ``
},
{
  name: "avatarintent",
  type: "interaction",
  prototype: "button",
  code: `
$author[1;$username;$authorAvatar]
$color[1;RANDOM]
$image[1;$userAvatar[$mentioned[1;yes]]?size=2048] 
$addTimestamp[1]
  `
  
}]