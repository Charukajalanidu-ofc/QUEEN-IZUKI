const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
LANG: process.env.BOT_LANG || 'EN' ,
PREFIX:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
ANTI_BAD: process.env.ANTI_BAD === undefined ? false : process.env.ANTI_BAD ,
MAX_SIZE: process.env.MAX_SIZE || 300,
WORK_TYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE ,
ANTI_LINK: process.env.ANTI_LINK === undefined ? false : process.env.ANTI_LINK ,
ANTI_BOT: process.env.ANTI_BOT === undefined ? false : process.env.ANTI_BOT ,
ALIVE: process.env.ALIVE || `default`,
AUTO_VOICE:  process.env.AUTO_VOICE  === undefined ? false : process.env.AUTO_VOICE ,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? false : process.env.AUTO_STICKER ,
NUMBER_212_BLOCK: process.env.NUMBER_212_BLOCK === undefined ? false : process.env.NUMBER_212_BLOCK ,
FOOTER: process.env.FOOTER ||  '©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
LOGO: process.env.LOGO || `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg` 
};
