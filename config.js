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
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_57_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwNS9sUzloQitpNU1hZnNvbVJaZUp4OHdPNHhpV0lyMURaeE0zZk13ZzZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3cWYwNGRVdlRlaU9oLWx4TU1UcTNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyNzI5MmIyLTE2MDgtNDFkZS04NWEwLTgyN2YwN2ZmMzdkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA2NixcbiAgICAgIDI2LFxuICAgICAgOTMsXG4gICAgICAxMTMsXG4gICAgICAxNDEsXG4gICAgICA3MixcbiAgICAgIDI1MixcbiAgICAgIDE0MixcbiAgICAgIDU2LFxuICAgICAgNDUsXG4gICAgICA1NixcbiAgICAgIDE1MCxcbiAgICAgIDE2NCxcbiAgICAgIDIwNSxcbiAgICAgIDE3NSxcbiAgICAgIDgzLFxuICAgICAgMjUxLFxuICAgICAgMjE5LFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTgzLFxuICAgICAgMTQsXG4gICAgICAxMjYsXG4gICAgICA4MixcbiAgICAgIDk1LFxuICAgICAgMTQzLFxuICAgICAgMTg1LFxuICAgICAgNjQsXG4gICAgICAxNTksXG4gICAgICAyNixcbiAgICAgIDMzLFxuICAgICAgNyxcbiAgICAgIDcsXG4gICAgICAxMzQsXG4gICAgICA0NixcbiAgICAgIDk1LFxuICAgICAgMCxcbiAgICAgIDIxMixcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIySDk0M1M3TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTk4MDIwMTc1OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgzNTQ0MTMzMzA1OTc6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXFlOE5ZRkVPV05xYm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4and3QmkxZ2VMMzdXdkkwcDh0L0dUb0kzcWdudzF5RFFHMHRTU2tCWno0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpUWldyM3ZNMmhOR3lDTy9UQVBmU09IZG1ON3pPUHNRb2xBTmZTbVppaHZ1SnNLNEx5RTRSSUlyS0tuc1BBSnhxR3BDMUp2S1YwMkIrL2NXM1cwb0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBqazBvUmpCRmxac1VaWUlPNUlOM0o5dnFCSHJ3UllwWFRNQ0RZUjBuTDJZcFl0RThjdjkxcDNkTFg4Z2Y4bzc3eEsxNzUwekJpZEZkNThzTzkzaWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5ODAyMDE3NToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjkyMTA2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
