const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "94742314485"
global.ownername = "SAHAN.X"
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Indian"

global.ownername = 'SAHAN' //owner name
global.botname = '𝐌𝐀𝐑𝐈𝐀-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘SAHAN✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'SAHAN MD'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/ERpN9UTLqzU58QL3zQM03y'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +92 
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'OOOPS!!!Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
