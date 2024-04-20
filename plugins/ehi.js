const config = require('../config')
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const apkdl = require('../lib/apkdl')
const api = require("caliph-api");
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
function ytreg(url) {
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    return ytIdRegex.test(url);
}
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, getsize} = require('../lib/functions')
const dl2 = require('inrl-dl')

cmd({
    pattern: "ehi",
    react: '🖼️',
    desc: "ehi files downloader",
    category: "downloader",
    use: '.ehi',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `╔══════❨ ❄ ❩══════╗

            *🎗️ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ ᴍᴅ ᴇʜɪ 🎗️*
    
 ▫ ғʀᴇᴇ ᴇʜɪ
 ▫ ᴍᴀᴋᴇ ᴅᴀᴛᴇ
 ▫ ᴇxᴘɪʀᴇ ᴅᴀᴛᴇ 
     
 _✕ ɴᴏ ʜᴀᴄᴋɪɴɢ_
 _✕ ɴᴏ sᴘᴀᴍ_ 
 _✕ ɴᴏ ᴅᴅᴏs_
 _✕ ᴅᴏɴ\'ᴛ ᴜsᴇ ᴜɴɴᴇᴄᴇssᴀʀʏ ᴡᴏʀᴋ_
 
    *ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴇʜɪ ғɪʟᴇs 💞.*

╚══════[💀]`

   const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'httpinjector ' + q , description: 'apk of http injector'},
	    {title: "2", rowId: prefix + 'ehifiles ' + q , description: 'Down ehi files'} ,
            {title: "3", rowId: prefix + 'aboutehi ' + q , description: 'Info of ehi files'} 

	]
    } 
] 
  const listMessage = {
  text: dat ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})





cmd({
    pattern: "aboutehi",
    category: "",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                    
   let dat =  `💬 Ehi file යනු* ,
ඔබට whatsapp package බාවිතාකර free internet ලබාගත හැකි ක්‍රමයකි.

උදාහරණයක් ලෙස , ඔබට whatsapp package එක බාවිතාකරමින් tiktok , fb , youtube , google යාම වැනිදේ සිදුකර හැකිවීම.
මෙම ehi file උපරිම අන්තර්ජාල වේගයක් ලබා නොදෙයි. නමුත් ඔබට යම් වේගයකින් අන්තර්ජාල පහසුකම් ලබාගත හැක.
ඔබට මෙම ehi file සාමාන්‍යයෙන් අප බාවිතාකරන 
whatsapp , facebook , youtube , zoom යන ආදී package වලට ගැලපෙන ආකාරයේ file බාවිතාකර හැක 


බාවිතාකරන්නේ කෙසේද ?
1. http injector app එක ඔබගේ phone එකට install කරගන්න 
2. ඔබගේ package එකට අදාල ehi file එක තෝරාගන්න 
3. එම file එක httpinjector app එකට ඇතුලත් කර start බටන් එක ඔබන්න 
( ඔබට මෙම file බාවිතාකිරීමටනම් ඉහත කිසියම් හෝ package 1ක් දමාගෙන තිබිය යුතුය )

*© ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*

//============================================================================

*💬 Ehi file is*,
 It is a method where you can get free internet by using whatsapp package.
 For example, you can use whatsapp package to go to tiktok, fb, youtube, google etc.

 This ehi file does not provide maximum internet speed.  But you can get internet facility at some speed.
 You can find this ehi file which we usually use
 You can use the type of file suitable for packages like whatsapp, facebook, youtube, zoom etc

*How to use*
 1. Install the http injector app on your phone.
 2. Select the ehi file related to your package.
 3. Enter that file into the httpinjector app and press the start button.
_( If you want to use this file, you must have one of the above packages installed )_


*© ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*`
                  
                  const buttons = []
  const buttonMessage = {
      caption: dat,
      footer: `*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*`,
      buttons: buttons,
      headerType: 1
  }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
l(e)
}
})




  cmd({
  pattern: "httpinjector",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: { url: 'https://github.com/VajiraTech/Izumi-ehi/blob/main/Http_injector/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk' },mimetype: 'application/vnd.android.package-archive', fileName: `HTTP Injector Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ (SSHProxyV2Ray) VPN.apk`,  caption: config.FOOTER}, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


cmd({
  pattern: "ehifiles",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 const ehiVajira = await fetchJson ('https://gist.github.com/VajiraTech/e13022d2d3eacaac87967d8ee67ddf25/raw')
  ehi = ehiVajira.EHI_FILES[0].SG_FILE1
  ehi2 = ehiVajira.EHI_FILES[0].SG_FILE2
  ehi3 = ehiVajira.EHI_FILES[0].SG_FILE3
  ehi4 = ehiVajira.EHI_FILES[0].SG_FILE4
  ehi5 = ehiVajira.EHI_FILES[1].US_FILE1
  ehi6 = ehiVajira.EHI_FILES[1].US_FILE2
  ehi7 = ehiVajira.EHI_FILES[1].US_FILE3
  ehi8 = ehiVajira.EHI_FILES[1].US_FILE4
                 
                await conn.sendMessage(mek.chat, { text : `
${ehiVajira.EHI}
${ehiVajira.C_E_DATES}
${ehiVajira.XX_XX}
` } ,{ quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} FaceBook ${ehiVajira.EHI_IMOJI}.ehi`}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi2 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} Whatsapp ${ehiVajira.EHI_IMOJI}.ehi `}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi3 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} Youtube ${ehiVajira.EHI_IMOJI}.ehi`}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi4 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI} Zoom ${ehiVajira.EHI_IMOJI}.ehi`}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi5 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI2} FaceBook ${ehiVajira.EHI_IMOJI2}.ehi`}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi6 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI2} Whatsapp ${ehiVajira.EHI_IMOJI2}.ehi `}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi7 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI2} Youtube ${ehiVajira.EHI_IMOJI2}.ehi`}, { quoted: mek })
                await conn.sendMessage(mek.chat, { document: { url: ehi8 }, mimetype: 'application/octet-stream', fileName: `${ehiVajira.EHI_IMOJI2} Zoom ${ehiVajira.EHI_IMOJI2}.ehi`}, { quoted: mek })
                
                await conn.sendMessage(mek.chat, `✅ _Success send_ *${mek.pushName}* _Ehi Files..._`,mek)
} catch (e) {
  reply('*📥 𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝘿 𝘽𝙔 𝙌𝙐𝙀𝙀𝙉 𝙄𝙕𝙐𝙈𝙄 𝙊𝙒𝙉𝙀𝙍*')
l(e)
}
})
  
