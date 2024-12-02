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
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_53_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEhHUmNXMG4rN0VnTGxENForMHZ4SFRnU3NOeHNmL1lxbFpZTEpQekVYaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYW50ZExwVTFUSHVfSHc3WWtKT0VXUVwiLFxuICBcInBob25lSWRcIjogXCJkOTRhODk3Ni01NzViLTRlNDAtYWI2My1jN2VkYjcwZTM1MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMzgsXG4gICAgICAxNjcsXG4gICAgICAxMzIsXG4gICAgICAxNjUsXG4gICAgICA3MixcbiAgICAgIDIxNCxcbiAgICAgIDEzNSxcbiAgICAgIDE0LFxuICAgICAgNjMsXG4gICAgICAxMjksXG4gICAgICAyNixcbiAgICAgIDE0NixcbiAgICAgIDE2MixcbiAgICAgIDE3NyxcbiAgICAgIDExOCxcbiAgICAgIDI0MyxcbiAgICAgIDE1MyxcbiAgICAgIDEzNixcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgNzMsXG4gICAgICAyMzIsXG4gICAgICA5MyxcbiAgICAgIDEyLFxuICAgICAgMzYsXG4gICAgICAyOSxcbiAgICAgIDUsXG4gICAgICAyMzAsXG4gICAgICAzMixcbiAgICAgIDE1NSxcbiAgICAgIDE0LFxuICAgICAgMTUyLFxuICAgICAgMjUwLFxuICAgICAgMjA3LFxuICAgICAgMTEzLFxuICAgICAgNzMsXG4gICAgICA5NixcbiAgICAgIDQwLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBDN1FNV1IxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTgwMjAxNzU6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2ODM1NDQxMzMzMDU5NzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcWU4TllGRVBtUXVib0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhqd3dCaTFnZUwzN1d2STBwOHQvR1RvSTNxZ253MXlEUUcwdFNTa0JaejQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTJLU2xIQTJYZUlSYVQ0NlhmN2JTa0hhMFFTY0ZlbUJiUEREVFBaS0RrM0IwQ2RXUEh4VnVlcERYUVhYcDhLV05Lc294RGlkRlA0T21TWU50K0Y4RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3N0Nmt4RzJIQS9YT2lib0NEQWdZMDNQMWMzU01Ic2FnaDJkU2R6aGlKQTlVSlNmVitiNTgxQnhnRjlNYWRCWkF4b09pL3UzYU1HRWpDOU1ReHA4aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk4MDIwMTc1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMTgzNjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1B2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLVExpdlpHU0loUnBYQ0xOaWFqYW9mdEtmd05tKy8zazNSdjgxdWJHWE13PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjQzNzEyNzQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzE4MzE4MDIzMFwifSIKfQ=="  // PUT your SESSION_ID 


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
