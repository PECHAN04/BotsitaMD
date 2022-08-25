import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50
  
let vn = './media/sensual.mp3'
conn.sendFile(m.chat, vn, 'sensual.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /d14|D14|7u7|7v7|d014|D014|sensual/ 
handler.command = new RegExp
export default handler
