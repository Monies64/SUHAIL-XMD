const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Abdul Haqq" 


global.devs = "233596780685" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233598020175";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.on
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_07_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm4rNEREOGVMelJaL0RWQ3RlZVBYMEtkSHhEcTZvWFBIWWJzTFV3cG5WaXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk45cWkwMklfUXVLRFRpaEJLQzJkNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2EzZjZjYmYtZDdiMy00ODBmLTk4M2ItNDU4YTY1MmJmMWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTAyLFxuICAgICAgNjcsXG4gICAgICAxNixcbiAgICAgIDQ3LFxuICAgICAgNDYsXG4gICAgICAxNDgsXG4gICAgICAxMzksXG4gICAgICAxNjQsXG4gICAgICA2OSxcbiAgICAgIDE5MCxcbiAgICAgIDcsXG4gICAgICAyMCxcbiAgICAgIDE1NCxcbiAgICAgIDE5LFxuICAgICAgMTI2LFxuICAgICAgMTI3LFxuICAgICAgNDcsXG4gICAgICAyNDIsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIzLFxuICAgICAgMTg0LFxuICAgICAgMjYsXG4gICAgICAxNDEsXG4gICAgICAyMTEsXG4gICAgICAyMjgsXG4gICAgICA0MixcbiAgICAgIDExMSxcbiAgICAgIDEyOCxcbiAgICAgIDIyMixcbiAgICAgIDEyNyxcbiAgICAgIDIwNCxcbiAgICAgIDIwNCxcbiAgICAgIDMxLFxuICAgICAgMTY4LFxuICAgICAgMjA0LFxuICAgICAgMjcsXG4gICAgICAxNzUsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3TDZNUVhKV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTk4MDIwMTc1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgzNTQ0MTMzMzA1OTc6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXFlOE5ZRkVJT1ZwN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4and3QmkxZ2VMMzdXdkkwcDh0L0dUb0kzcWdudzF5RFFHMHRTU2tCWno0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxvOG5XL3pJckhmYitmN3pFRWZkV1BTc0o5c0RqVlBnQ3FIYlRXTjU5aGI2TEt5R2l4RDNpTTl0NlU0ZFZkUTJlb2VFVHFRT3Z6QkNJbDJtaTRGcER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjA4ODYrNEE5VWl6QUlKWkNpS0xhU095bUFBRW12bUZZMzV2d0ZOZ2xXaEpnQXBrdnZnRWNSeDJOTlVYWXlxaEM1TzhRNDFiaWR4ZFZrQVlsOUliYmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5ODAyMDE3NToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjg4OTIyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9QdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1B0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFNmck1NVng1SURpdElvTWhaYStuWHlTU2lvRUowcGxZRXlWdUFGaWRLZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTI0MzcxMjc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI3OTM3NDY0NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Abdul Haqq",
  packname: process.env.PACK_NAME || "Abdul Haqq",
  botname : process.env.BOT_NAME  || "Abdul Haqq",
  ownername:process.env.OWNER_NAME|| "Abdul Haqq",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
