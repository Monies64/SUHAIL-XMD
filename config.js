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
global.caption = process.env.CAPTION || global.caption || "© Ods Technologies" 


global.devs = "233596780685" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233596780685";




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
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_39_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZUpldzFGSTErbXVnV29FK21td2RkbGMrZEdhdkF4WmRzanh4cUtvK1QzTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGJxVzc1NHdURUN6NE15MEZRXzNGQVwiLFxuICBcInBob25lSWRcIjogXCJjODlmNjZiMy00NGY5LTRjMmQtODJiNy0zMTQzNzg1MDU4MTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyMjAsXG4gICAgICAyMzQsXG4gICAgICAxODAsXG4gICAgICA1NixcbiAgICAgIDg2LFxuICAgICAgMjE3LFxuICAgICAgMTMsXG4gICAgICAxMDUsXG4gICAgICA3NixcbiAgICAgIDE0OCxcbiAgICAgIDExNSxcbiAgICAgIDcwLFxuICAgICAgOCxcbiAgICAgIDY4LFxuICAgICAgMjQ4LFxuICAgICAgNTEsXG4gICAgICA5NCxcbiAgICAgIDE4NyxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDY4LFxuICAgICAgNTMsXG4gICAgICAxLFxuICAgICAgMjQ2LFxuICAgICAgMTEsXG4gICAgICAxMzMsXG4gICAgICAxMjMsXG4gICAgICA4OSxcbiAgICAgIDY4LFxuICAgICAgMTc1LFxuICAgICAgODksXG4gICAgICAxMzcsXG4gICAgICAxOTAsXG4gICAgICA2NCxcbiAgICAgIDEzMyxcbiAgICAgIDEzOCxcbiAgICAgIDUsXG4gICAgICAxOTMsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUE1RDYxUlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5Njc4MDY4NTo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9kcyBUZWNobm9sb2dpZXNcIixcbiAgICBcImxpZFwiOiBcIjIyMjk5NjA0NDMwOTgwOjk1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QWDdNSUJFTld6cHJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWjN1MXJ2WDBVUFdZQ1hheXhsNGtVYnRjaURwbG5VU1hyYmd3SlBjQ01pUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUOHNoVkFVeXh2VHNmMnRNUXhHL2dpUU1iZU0zajh0SHZkcGtCRUlDdEVnemwvZnZ0cW80enMwbmxaNXBTOU5sTFRKTkNhZ1A5L1pvc1hlamZKWUdBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWbWtKVXJETHRtTzR2QTRUcXh5a0VkUnN6MUF3SkFvQ0tjRUNKZDVaR1JXWjUzYUIxSVhmYmpsT2pUZXFvL0p6NWE4UHl5bEVzT0dDTUpyeUtxUm5BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTY3ODA2ODU6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4NzY3NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxZNC5qc29uIjogIntcImtleURhdGFcIjpcIlRNOTRaQzFTbHMwSlp6OGVkUnRoSXU4OFh5emIyZmtaTEwvNXRMeXRWNTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDA4NjI4MTYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Ods Technologies",
  packname: process.env.PACK_NAME || "Ods Technologies",
  botname : process.env.BOT_NAME  || "Ods Technologies",
  ownername:process.env.OWNER_NAME|| "Ods Technologies",


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
