//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sirjoea11y@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349075384496";
global.owner = process.env.OWNER_NUMBER || "2349075384496";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1iMitGLzBON0xjNWJnRElZRHRkckRGUTdKUWZoaGV6Qjh5WXdkMkZXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkhpT2hEWkRTeWsrekQ3R3NuTlhyR0l6citGQnlQNDRaYk15WlBRWElDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSndVc2YyU1EvZFhRUXRUQWF6ajlISzRHY1R1TW11b1VxUG9vaWxrMVUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJESS9qSU11ekZsb3J0OWtFcHhJdWxoSWJMYzFoMGt0c2FTdDROOFlCdDMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHWmViMkdNYWRqbEhadFFseFluaU9JVTVJOUFqQ1l4MDcxOW5POHNHbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNcGNrL1NyR1A2d1R1bXZXUjFtVXVaWGtyem1Ta2E0K2hONnVmTnlHV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tnRHFUckp5ZXp4VnVqYU1DbDYyR0tOMFNRY28vV2FTa1lRcmc0djVYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFY2SHhCdFcrUGNkY2JSYnV2OEtNSnZlSU4vSk0yY0IwdjFRaFovaHdGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFQbmFJUUgrR09oaS9yOUJhK21RcjVoVS9xN2s1Y2tVQzJ6UjYvRmU3K0tUMTY5UnpwdS80UzZYRGRUb3MxNDVZcXlUdEhYbEozUzY4aE1vSHBnQUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6ImFvUzBiZG1ZYWo3QXoyZFhFdDdCRlBTbVB3SzlBa0xMSUdHQmUyeStmRnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtyTi1wTHh6UXh1MVhVWU03LWJyZEEiLCJwaG9uZUlkIjoiNWEwNGI5ZWEtOTU5YS00YzYxLWEzZjUtOTdkMjA5ODQ5YTYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAveHpUWWJzNGMzSTdXSE5BYUgvZnp1V0cxaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUFp6WUoyb3NUTjZZSU42L2pzK3lLckExNk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVEyOUdIMUUiLCJtZSI6eyJpZCI6IjIzNDkwNzUzODQ0OTY6MjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05TUGxxQUNFSUd0ajdZR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik90UC9tVEpCMmo4c0Rqa0cwZ0VCNStqUkFNTC94NExxb0FOWk54ZGpRV1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1RWlo5bnFJTVV5RnErNDVDYWZkb1B3SHJuQUplWERxMnplSnBKWkpLK0x3dHRZWUM4dTBxczdlM3ZKNUxzc2hjWWpEMktIWlBQbytHZTBQSGh5dEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuUzhabHZtNEpZMWpiRDQ4RDhCblNUUGs1V1FBc045c3FJbWtQRTRLWXhEVkk3ZlprZ3ZMek14cHFRc1ZpRzRJeUZwaUdSOFhGUUd1NGtrVUxBajZBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzUzODQ0OTY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHJULzVreVFkby9MQTQ1QnRJQkFlZm8wUURDLzhlQzZxQURXVGNYWTBGbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDExMDQ3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKcnkifQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1iMitGLzBON0xjNWJnRElZRHRkckRGUTdKUWZoaGV6Qjh5WXdkMkZXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkhpT2hEWkRTeWsrekQ3R3NuTlhyR0l6citGQnlQNDRaYk15WlBRWElDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSndVc2YyU1EvZFhRUXRUQWF6ajlISzRHY1R1TW11b1VxUG9vaWxrMVUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJESS9qSU11ekZsb3J0OWtFcHhJdWxoSWJMYzFoMGt0c2FTdDROOFlCdDMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHWmViMkdNYWRqbEhadFFseFluaU9JVTVJOUFqQ1l4MDcxOW5POHNHbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNcGNrL1NyR1A2d1R1bXZXUjFtVXVaWGtyem1Ta2E0K2hONnVmTnlHV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tnRHFUckp5ZXp4VnVqYU1DbDYyR0tOMFNRY28vV2FTa1lRcmc0djVYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFY2SHhCdFcrUGNkY2JSYnV2OEtNSnZlSU4vSk0yY0IwdjFRaFovaHdGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFQbmFJUUgrR09oaS9yOUJhK21RcjVoVS9xN2s1Y2tVQzJ6UjYvRmU3K0tUMTY5UnpwdS80UzZYRGRUb3MxNDVZcXlUdEhYbEozUzY4aE1vSHBnQUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6ImFvUzBiZG1ZYWo3QXoyZFhFdDdCRlBTbVB3SzlBa0xMSUdHQmUyeStmRnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtyTi1wTHh6UXh1MVhVWU03LWJyZEEiLCJwaG9uZUlkIjoiNWEwNGI5ZWEtOTU5YS00YzYxLWEzZjUtOTdkMjA5ODQ5YTYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAveHpUWWJzNGMzSTdXSE5BYUgvZnp1V0cxaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUFp6WUoyb3NUTjZZSU42L2pzK3lLckExNk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVEyOUdIMUUiLCJtZSI6eyJpZCI6IjIzNDkwNzUzODQ0OTY6MjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05TUGxxQUNFSUd0ajdZR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik90UC9tVEpCMmo4c0Rqa0cwZ0VCNStqUkFNTC94NExxb0FOWk54ZGpRV1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1RWlo5bnFJTVV5RnErNDVDYWZkb1B3SHJuQUplWERxMnplSnBKWkpLK0x3dHRZWUM4dTBxczdlM3ZKNUxzc2hjWWpEMktIWlBQbytHZTBQSGh5dEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuUzhabHZtNEpZMWpiRDQ4RDhCblNUUGs1V1FBc045c3FJbWtQRTRLWXhEVkk3ZlprZ3ZMek14cHFRc1ZpRzRJeUZwaUdSOFhGUUd1NGtrVUxBajZBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzUzODQ0OTY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHJULzVreVFkby9MQTQ1QnRJQkFlZm8wUURDLzhlQzZxQURXVGNYWTBGbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDExMDQ3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKcnkifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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
