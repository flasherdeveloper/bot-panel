import { spawn } from 'child_process'
let handler = async (m, { conn }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
        await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
        await global.db.write()
        process.send('reset')
    } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Tidak Bekerja)')]
handler.tags = ['advanced']
handler.command = /^(debounce|dbnc)$/i
handler.owner = true

export default handler
