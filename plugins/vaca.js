import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 50 
global.db.data.users[m.sender].exp += 50
  
let vn = './media/vaca.mp3'
conn.sendFile(m.chat, vn, 'vaca.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /d19|D19|d019|D019|random/
handler.command = new RegExp
export default handler


