const infobot = (latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *B O T  S T A T I S T I C*

👨‍💻 *Owner : @${ownerNumberrr.split('@')[0]}*
👨‍👨‍👧‍👦 *Group Chat : ${giid.length}*
👥 *Personal Chat : ${totalchat.length - giid.length}*
👨‍👩‍👧‍👧 *Total Chat : ${totalchat.length}*
🍃 *Speed : ${latensii.toFixed(4)} Second (s)* 
🌾 *Runtime : ${kyun(runtime)}*


ℒ⃝📲 *P H O N E  S T A T I S T I C*

🪀 *WhatsApp V : ${wa_version}*
🛑 *RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
📈 *MCC : ${mcc}*
📉 *MNC : ${mnc}*
📊 *OS Version : ${os_version}*
📫 *Merk Hp : ${device_manufacturer}*
📮 *Versi Hp : ${device_model}*


ℒ⃝👨‍💻 *C O N N E C T  W I T H  M E*




♊ Instagram : instagram.com/itsmealwi_
♌ Telegram : t.me/Mhmmd_Alwi
♏ WhatsApp : https://wa.me/message/ZS2XV5LWCW5NL1
`}

exports.infobot = infobot
 
