const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var desct =''
if(config.LANG === 'SI') desct = 'එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.'
else desct = "It search on chatgpt ai for what you provided."
var needus =''
if(config.LANG === 'SI') needus = '*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*'
else needus = "*Please give me words to search on chatgpt ai !*" 
var cantf =''
if(config.LANG === 'SI') cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
else cantf = "*Server is busy. Try again later.!*"


cmd({
    pattern: "chatgpt",
    alias: ["ai","gpt","openai","zerotwo","chat"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt ha',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = ''
try{
res = (await fetchJson('https://api.vihangayt.me/tools/chatgpt?q=' + q)).data
} catch (e) {
try{
res = (await fetchJson('https://api.vihangayt.me/tools/chatgpt2?q=' + q)).data
} catch (e) {
res = (await fetchJson('https://api.vihangayt.me/tools/chatgpt3?q=' + q)).data
}
}

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "chatgpt4",
    alias: ["ai2","gpt4","openai4","zerotwo2","chat2"],
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt4 ha',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = (await fetchJson('https://chatgpt4.my.id/api/processdata?question=' + q)).response

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    


cmd({
    pattern: "geminitgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.chatgpt2 ha',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = (await fetchJson('https://api.vihangayt.me/tools/gemini?q=' + q)).data

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    

cmd({
    pattern: "mathsgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.gptmaths 2-3',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = (await fetchJson('https://api.vihangayt.me/tools/mathssolve?q=' + q)).data

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    


cmd({
    pattern: "liyamagpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.liyamagpt hello',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = (await fetchJson('https://api.vihangayt.me/tools/llama-2?q=' + q)).data

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    


cmd({
    pattern: "voicegpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.voicegpt hello',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = (await fetchJson('https://api.vihangayt.me/tools/gptvoice?q=' + q)).data

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    



cmd({
    pattern: "photoleapgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: '.photoleapgpt hello',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
var res = (await fetchJson('https://api.vihangayt.me/tools/photoleap?q=' + q)).data

return await reply(res)
} catch (e) {
reply(cantf)
l(e)
}
})                    



