const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


var tesadtag =''
if(config.LANG === 'SI') tesadtag = '*මට tag කිරීමට text එකක් දෙන්න. !*'
else tesadtag = '*Give me text to tag !*'
var descg = ''
if(config.LANG === 'SI') descg = "එය කණ්ඩායමේ සියලුම සාමාජිකයින් tag කරයි."
else descg = "It tag all members in group."
var ONLGROUP = ''
if(config.LANG === 'SI') ONLGROUP = "*මෙය group නොවේ !*"
else ONLGROUP = "*This is not a group !*"
var ADMIN = ''
if(config.LANG === 'SI') ADMIN = "ඔබ admin නොවේ !"
else ADMIN = "You are not an admin !"

cmd({
    pattern: "hidetag",
    react: "🔖",
    desc: descg,
    category: "admin",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)
if (!q) return await  reply(tesadtag)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "tagall",
    react: "🔖",
    desc: descg,
    category: "admin",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
let teks = ` *ＧＲＯＵＰ  ＮＯＴＩＦＹ*
                   
*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n`
for (let mem of participants) {
teks += `🔵 @${mem.id.split('@')[0]}\n`
     }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('')
l(e)
}
})         


cmd({
    pattern: "report",
    react: "🔖",
    desc: "Put error message to owner number",
    category: "other",
    use: '.report',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                    
   let teks =  `Enter The Bug Example\n\n${command} < YOUR REPORT MASSAGE > `
                  await conn.sendMessage(`94766943622@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${mek.sender.split("@")[0]}\n\n*Bug Report*\n${q ? q : 'blank'}` })
                  const repo = await conn.sendMessage(`*『 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 』*`)
                  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})

cmd({
    pattern: "readmore",
    react: "🔖",
    desc: "convert message to a readmore message",
    category: "other",
    use: '.readmore',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                    
                                      
let teks = '*👸💬 Please Give Some Text*\n'+'```Example .readmore VAJIRA```'
reply(`​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${q ? q : 'blank'}`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('')
l(e)
}
})


cmd({
    pattern: "tagadmin",
    react: "🔖",
    desc: descg,
    category: "other",
    use: '.tagadmin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                    
                   if (!isGroup) return reply(ONLGROUP)
                  let teks = ` _❗ ${groupName}Admins ❗_
                  
*MASSAGE :* ${q ? q : 'blank'}\n\n`
                  for (let mem of groupAdmins) {
                                  teks += `    `
                                  }
                  conn.sendMessage(from, { text: teks, mentions: groupAdmins.map(a => a.id) })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('')
l(e)
}
})



cmd({
    pattern: "mute",
    react: "🔖",
    desc: "close a group",
    category: "other",
    use: '.mute',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
        await conn.groupSettingUpdate(mek.chat, 'announcement')
        const sendmsg = await conn.sendMessage(mek.chat.G_MUTE)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('🛑 GROUP IS CLOSED MY BOT OWNER')
l(e)
}
})


  
cmd({
    pattern: "unmute",
    react: "🔖",
    desc: "open a group",
    category: "other",
    use: '.unmute',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
if (!isGroup) return reply(ONLGROUP)
if (!isBotAdmins) return reply(botAdmin)
if (!isAdmins) return reply(ADMIN)
                                  
        await conn.groupSettingUpdate(mek.chat, 'not_announcement')
        const sendmsg = await conn.sendMessage(mek.chat.G_UNMUTE)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('🛑 GROUP IS OPEN MY BOT OWNER')
l(e)
}
})





cmd({
    pattern: "number",
    react: "🔖",
    desc: "See the info of a number",
    category: "search",
    use: '.number',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
    const result = await fetchJson('https://inrl-web.vercel.app/api/truecaller?number=94' + q)
    if(result.truecaller) reply(`
*👱‍♂️ Name :* ${result.name}
*📡 Connection :* ${result.carrier}
*🇱🇰 Country :* ${result.country}
*📱 Type :* ${result.type}
*🏠 City :* ${result.city}
*👨‍💻 Access :* ${result.access}
*⌛ Timezone :* ${result.timeZone}
*☎️ Number :* ${result.format}
`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})


cmd({
    pattern: "timetest",
    react: "🔖",
    desc: "test the time",
    category: "search",
    use: '.timetest',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
           
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
           var utch = new Date().toLocaleDateString( get_localized_date)
           const biography = '📅 ' + utch + '\n⌚ ' + time + '\n\n'+'👸💬 ɪᴢᴜᴍɪ ɪꜱ ᴏɴʟɪɴᴇ'

      
     // var time = new Date().toLocaleString('HI', { timeZone: Config.STIME_ZONE }).split(' ')[1]
      await conn.sendText(mek.chat, biography )
      if (time == '6:08:01' ) {
      return await conn.sendText(mek.chat, biography )
      }
      if (time == '6:08:11' ) {
      return await conn.sendText(mek.chat, biography )
      }
       if (time == '6:08:20' ) {
      return await con .sendText(mek.chat, biography )
      }
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})   


cmd({
    pattern: "xnxx",
    react: "🔖",
    desc: "xnxx video downloader",
    category: "downloader",
    use: '.xnxx',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   await conn.sendMessage(from, { react: { text: `🤤`, key: mek.key }})
                                 
                               await conn.sendMessage(from, { react: { text: `🔄`, key: mek.key }})
                                const xns = await fetchJson(`https://api.botcahx.live/api/search/xnxx?query=${q}`)
                               const video = vid.data.url
                                
                               conn.sendMessage(mek.chat, { video: { url: video }, caption: `*${vid.data.title}*` }, { quoted: mek })
                               
                              await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       



cmd({
    pattern: "couplepp",
    react: "🔖",
    desc: "couple pic download",
    category: "search",
    use: '.couplepp',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   await conn.sendMessage(from, { react: { text: `💏`, key: mek.key }})
                                  
                                  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                                  let random = anu[Math.floor(Math.random() * anu.length)]
                                  conn.sendMessage(mek.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: mek })
                                  conn.sendMessage(mek.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: mek })
                              
                               
                              await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       



cmd({
    pattern: "pemoji",
    react: "🔖",
    desc: "imoji to image convert",
    category: "search",
    use: '.pemoji',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   if (!q) return reply(`*👸💬 Please Give me a imoji*\nExample - .${command}👸`)
    await conn.sendMessage(from, { react: { text: `✨`, key: mek.key }})
await conn.sendMessage(mek.chat, { image: { url:`https://api.vihangayt.me/search/semoji?q=${encodeURIComponent(q)} `},  caption: `${global.cap}`}, { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       



                              
cmd({
    pattern: "trt",
    react: "🔖",
    desc: "To trancelate",
    category: "search",
    use: '.trt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   const Tssst = `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
Afrikaans - af
Albanian - sq
Amharic - am
Arabic - ar
Armenian - hy
Azerbaijani - az
Basque - eu
Belarusian - be
Bengali - bn
Bosnian - bs
Bulgarian - bg
Catalan - ca
Cebuano - ceb 
Chinese (Simplified) - zh-CN or zh
Chinese (Traditional) - zh-TW 
Corsican - co
Croatian - hr
Czech - cs
Danish - da
Dutch - nl
English - en
Esperanto - eo
Estonian - et
Finnish - fi
French - fr
Frisian - fy
Galician - gl
Georgian - ka
German - de
Greek - el
Gujarati - gu
Haitian Creole - ht
Hausa - ha
Hawaiian - haw 
Hebrew - he or iw
Hindi - hi
Hmong - hmn
Hungarian - hu
Icelandic - is
Igbo - ig
Indonesian - id
Irish - ga
Italian - it
Japanese - ja
Javanese - jv
Kannada - kn
Kazakh - kk
Khmer - km
Kinyarwanda - rw
Korean - ko
Kurdish - ku
Kyrgyz - ky
Lao - lo
Latin - la
Latvian - lv
Lithuanian - lt
Luxembourgish - lb
Macedonian - mk
Malagasy - mg
Malay - ms
Malayalam - ml
Maltese - mt
Maori - mi
Marathi - mr
Mongolian - mn
Myanmar (Burmese) - my
Nepali - ne
Norwegian - no
Nyanja (Chichewa) - ny
Odia (Oriya) - or
Pashto - ps
Persian - fa
Polish - pl
Portuguese (Portugal, Brazil) - pt
Punjabi - pa
Romanian - ro
Russian - ru
Samoan - sm
Scots Gaelic - gd
Serbian - sr
Sesotho - st
Shona - sn
Sindhi - sd
Sinhala (Sinhalese) - si
Slovak - sk
Slovenian - sl
Somali - so
Spanish - es
Sundanese - su
Swahili - sw
Swedish - sv
Tagalog (Filipino) - tl
Tajik - tg
Tamil - ta
Tatar - tt
Telugu - te
Thai - th
Turkish - tr
Turkmen - tk
Ukrainian - uk
Urdu - ur
Uyghur - ug
Uzbek - uz
Vietnamese - vi
Welsh - cy
Xhosa - xh
Yiddish - yi
Yoruba - yo
Zulu - zu

© ǫᴜᴇᴇɴ ɪᴢᴜᴍɪ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`                           
                                         
//if (!quoted) return reply(MAX)
if (!q) return reply () 
text1 = q.split(";")[0]
text2 = q.split(";")[1]
//const wokwol = await ThivaBotMd.serializeM(await m.getQuotedObj())
//if (!wokwol.quoted)                       
 const vajira = await fetchJson(`https://api.tiodevhost.my.id/api/info/translate?text=${text1}&lang=${text2}`)
 if (vajira.stetus === 'false') return reply()
 const msg = vajira.result
await conn.sendMessage(mek.chat, `${vajira.result}`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       



       

                                   



