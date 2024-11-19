const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID : process.env.SESSION_ID || 'WjBFTJTZ#U-2qTWkduvpgrDXLhyjxjvD8NM0DIUA9254oy7gFk_k',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? "" : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? "" : process.env.GITHUB_USERNAME,
BOT_NUMBER: process.env.BOT_NUMBER === undefined ? "" : process.env.BOT_NUMBER,
};
