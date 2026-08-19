// Moduleeeee
const fs = require('fs')

//Bot Settingsssssss
global.connect = true // True For Pairing // False For Qrrrrrrrr
global.publicX = true // True For Public // False For Self
global.owner = ['628'] //Own Number
global.developer = "AmmNotDev" //Dev Name
global.botname = "SUPER CRASH AMM-V1" //Bot Name
global.version = "1.0" //Version Bottttt

//Sticker Setiingssssss
global.packname = "Sticker By " //Pack Nameeeee
global.author = "Amm" // Authorrrrr

//Social Media Settingssssss
global.ytube = "-/"
global.ttok = ""
global.igram = "-/"
global.chtele = ""
global.tgram = "-/"
global.limitCount = 1,

global.mess = {
 owner: '*Kamu bukan owner!!!*',
 premium: '*Kamu belum premium minta duku ke AmmNotDev*'
}

//System Bot Settingssssss
global.prefa = ['','!','.','/','🐤','🗿'] // JAN GANTI // INI AJA

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
