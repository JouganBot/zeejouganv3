const infobot = (latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `โโ๐พ *B O T  S T A T I S T I C*

๐จโ๐ป *Owner : @${ownerNumberrr.split('@')[0]}*
๐จโ๐จโ๐งโ๐ฆ *Group Chat : ${giid.length}*
๐ฅ *Personal Chat : ${totalchat.length - giid.length}*
๐จโ๐ฉโ๐งโ๐ง *Total Chat : ${totalchat.length}*
๐ *Speed : ${latensii.toFixed(4)} Second (s)* 
๐พ *Runtime : ${kyun(runtime)}*


โโ๐ฒ *P H O N E  S T A T I S T I C*

๐ช *WhatsApp V : ${wa_version}*
๐ *RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
๐ *MCC : ${mcc}*
๐ *MNC : ${mnc}*
๐ *OS Version : ${os_version}*
๐ซ *Merk Hp : ${device_manufacturer}*
๐ฎ *Versi Hp : ${device_model}*


โโ๐จโ๐ป *C O N N E C T  W I T H  M E*




โ Instagram : instagram.com/itsmealwi_
โ Telegram : t.me/Mhmmd_Alwi
โ WhatsApp : https://wa.me/message/ZS2XV5LWCW5NL1
`}

exports.infobot = infobot
 
