//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcd_1m5i_user:JAv7gj5LnaOKISKaPTz22UzuJqpcIFAO@dpg-cqnuav08fa8c73aul7r0-a.singapore-postgres.render.com/rcd_1m5i";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"0HA1khTQw0P+6hv7cUJK7B0RfshdoV032e7Nz1NFDm4="},"public":{"type":"Buffer","data":"zSXtk+LnQ1aShgteGK84vfqiMKgTZavdmMCNObOQuy0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aCrm3ISCf0DCL/AWVVoevIuA0PpCEoEY4KNV6phEGWE="},"public":{"type":"Buffer","data":"6RFjVES3SIVFd5Wzgj4EsiyfQ+AQJcJWvpLPgMxaEx8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"CBZFMCefO1ppl6jC/SORoT3bvaOL2vwB9Qvlp8RqKkM="},"public":{"type":"Buffer","data":"asU+wIWdhaQMBDxZZb8aJATqkI7BdzIayLD3r2oTnCI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YFj0XAKPEWOgaCbQWaBPeR/xv6WrfhA6o7YpiAtWVVQ="},"public":{"type":"Buffer","data":"otlfmeV8PXc5bl6KN8cOYE5z7rOp483vTbqSBHYWLTc="}},"signature":{"type":"Buffer","data":"jJsd9Ij/DDl5iZDPLpl43FDui05PC59WWQlXm40CcSkYZ1Ex+VzoZxkGigGG/9dm+WFbicyeaKSAyo8IHRxpgA=="},"keyId":1},"registrationId":88,"advSecretKey":"CcTSVnnL7aLUIoXvRImf5ooKU6EaUmn4DDPP1s99Qo4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"4KBzU3JKTS-LYXtWdgJ0pg","phoneId":"b90f6715-ba81-4200-a025-55fd951c0c05","identityId":{"type":"Buffer","data":"Iq3BLYcugeaJohwvS+2pq/7hF3U="},"registered":true,"backupToken":{"type":"Buffer","data":"I5svL3gk4botWzj/C+fgnZoVzR4="},"registration":{},"pairingCode":"XELYJ38D","me":{"id":"2348078854373:80@s.whatsapp.net"},"account":{"details":"CODOhYUEEJ+qzbUGGAEgACgA","accountSignatureKey":"byv+8Aax7L6ggd5ptWFomtc+ZocXMbiY6p2fB4mBy1M=","accountSignature":"Rntq+hBMyAQpY6FcH5jHmw0hvzYHIWwi+oYSCu7Jbfr+NUoPWrhlyxR/C4gKXp4GePboS15ZOwYRo/C9KaxDBQ==","deviceSignature":"XKg5IsFluR9K/WjTBALnhoaRhlEvDW6gTb9jitKZkQj9qdPfFsflHUdH65DxYHLmEtgCwP4IQIGG9fwdnOgHjw=="},"signalIdentities":[{"identifier":{"name":"2348078854373:80@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BW8r/vAGsey+oIHeabVhaJrXPmaHFzG4mOqdnweJgctT"}}],"platform":"android","lastAccountSyncTimestamp":1723028782}"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
