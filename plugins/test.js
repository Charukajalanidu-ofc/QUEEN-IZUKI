const config = require('../config')
const { cmd, commands } = require('../command')
const { dBinary, eBinary } = require('../lib/binary')
var os = require('os')

cmd({
    pattern: "test",
    react: "👨‍💻",
    alias: [] ,
    desc: "",
    category: "main",
    use: '',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'QUEEN-IZUMI-MD SPEED'} ,
	]
    } 
]
const listMessage = {
  caption: `test`,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🥽 𝗔𝗤𝗨𝗔𝗕𝗢𝗧 𝗠𝗗 V2💦',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/85fe740b2385a55178500.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
return await conn.replyList(from, listMessage ,{ quoted : msg }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'QUEEN-IZUMI-MD SPEED'} ,
	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🥽 𝗔𝗤𝗨𝗔𝗕𝗢𝗧 𝗠𝗗 V2💦',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/85fe740b2385a55178500.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}
return await conn.replyList(from, listMessage ,{ quoted : msg })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "gitclone",
    react: "🔖",
    desc: "download github repos",
    category: "download",
    use: '.gitclone',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                              if (!args[0]) reply(`Use ${prefix}gitclone repo link\n: https://github.com/VajiraTech/QUEEN-IZUMI-MD`)
                              if (!regex1.test(args[0])) return reply('link')
                              let [, user, repo] = args[0].match(regex1) || []
                              repo = repo.replace(/.git$/, '')
                              let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                              let filename =  `${user}${repo}`
                              //(await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                              conn.sendMessage(mek.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip',caption: '*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*' }, { quoted: mek }).catch((err) => reply(mess.error))                             
} catch (e) {
reply()
l(e)
}
})


cmd({
    pattern: "ebinary",
    react: "🔖",
    desc: "ebinary search",
    category: "search",
    use: '.ebinary',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, text, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

                              if (!mek.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
                              let { eBinary } = require('./lib/binary')
                              let teks = text ? text : mek.quoted && mek.quoted.text ? mek.quoted.text : mek.text
                              let eb = await eBinary()
return await conn.replyList(from, listMessage ,{ quoted : msg })                                                               
} catch (e) {
reply()
l(e)
}
})
