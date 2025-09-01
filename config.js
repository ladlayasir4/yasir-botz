const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUV6ZlVFVENlK2xqR1diSy9pWkVsdDJDYmZSRHNDWEU0QmZPRWtjSjRIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmcxUTRuT3kzRUZRMkFYRWJHVWNXWmRmV3RlTlpWSHd1eDhwTjhwdmhVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRXcvYmY1Ni9TWGp0aU1oU3hpUkVMbzQ0aDFKL01YcUhSR0Uva0s2ODMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYcHFOcSsyY1JlK0wraDBIZC82L29HaHVyYzg0V0tvY1ZyNm9GRCtNMUU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLWWFmMGc5aHZCSW5tYVV6Vm85c3BwdlhHaElWc3BuRkhzQ1hEUVVQRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdseGIweU4vUkRoelgvS0xzTyt6VWRjY1pKRndHS1l1TnhJRUl2VytnRE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdYWVlLSENmSWs3dTk2bzExTjY5ZnYwOHZBV0ovRkRHT2U2WkFjSmcwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzNpVlc3dmdvYzBaM1VYaWpPVGJLQ0F1SnVBa1lrVzZQajM1dUI0RXBsMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA0MTdxbnorVUp4NGJSZUdRMnlybWN2TkhvSnBsUHNTUXh4VEJwekdvcnNvcCsxa1pDeDZYZWFVVXpuOUdXaWY0WjBSYVUvZXBtZXJuYnlTN1VZRkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJsRzBnZUFTbnNuNXhwbFZGTVg4akppQkZNenhLZlpqak80SEN3Yno1OWpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTQyMjc4MDI3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI4OTYwRDk5Q0RGMDA2MzJGNTZCQUNDRTlGQjkxQzAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY3Mjg3MzN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyNTQyMjc4MDI3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBODVGRUU0NDRDNTQwMUJENjQwN0UxNzQ5MDg3NzRCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY3Mjg3MzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlFROVBLWVM5IiwibWUiOnsiaWQiOiIyMjU0MjI3ODAyNzozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQwNTQ5MjQ3OTk1OTg0OjNAbGlkIiwibmFtZSI6Inlhc2lyaGVvMiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGprajcwQ0VKV2Ixc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWjBQcC9nV1RqckRpY1NZcEc0WFpVT1R3RFBQek1KdFB1ZTVlYTZZZFV6dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidnhNRVdRL3hqWmNiUEZJRFBjUlhFR2NKTzdEc3U4MlNTNlRJZEFEYm9uMDAxK0N1YjQ3c2pDcTdERVNpOCtlSmRWMXpnYXpid1NiemxZQmpIYWxnQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlR5cmFkVXdlSVJFbkZlcWpQb2RFcWdINEhQMEJTeVljTzR4aXR6MDVEOTBybXcvZDV2OXJOVENRYmsxZzlGbTg3L0V0QVF6NzJQVTJ1akxDUFd0eURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NDIyNzgwMjc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXZEQ2ZjRGazQ2dzRuRW1LUnVGMlZEazhBeno4ekNiVDdudVhtdW1IVk04In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY3Mjg3MjksImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkxvIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY YASIR BOTZ 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || " YASIR BOTZ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || " YASIR BOTZ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2250142279027",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "* YASIR ABBAS BOTZ*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ  YASIR BOTZ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2250142279027",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
