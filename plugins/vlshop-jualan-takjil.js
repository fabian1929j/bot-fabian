let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastmisi)
    let _timers = (1200000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    let id = m.sender
    let kerja = 'jualan-takjil'
    conn.misi = conn.misi ? conn.misi : {}
    if (id in conn.misi) {
        conn.reply(m.chat, `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`, m)
        throw false
    }
    if (new Date - user.lastmisi > 1200000) {
        let randomaku1 = Math.floor(Math.random() * 1000000)
        let randomaku2 = Math.floor(Math.random() * 10000)
        
        var dimas = `
🚶Kamu Mulai Keluar Rumah...
`.trim()

        var dimas2 = `
 👫👨‍👨‍👧👩‍👧👨‍👧👩‍👩‍👧👨‍👦‍👦👨‍👩‍👧‍👦👨‍👧👯‍♂️\nPembeli Mulai Antri.......
`.trim()

        var dimas3 = `
😍👳 Alhamdulillah Takjil Kamu Diborong Oleh Ustad....
`.trim()

        var dimas4 = `
😍😇 Dagangan Takjil Kamu Habis.....
`.trim()

        var hsl = `
   *—[ Hasil Jualan Takjil ]—*
➕ 🗣️ Nama =  ${name}
➕ 💹 Hasil Uang = [ ${randomaku1} ]
➕ ✨ Bonus Exp = [ ${randomaku2} 
➕ 📥 Takjil Terjual = ${order}
`.trim()

        user.money += randomaku1
        user.exp += randomaku2
        user.ojekk += 1
        
        conn.misi[id] = [
            kerja,
        setTimeout(() => {
            delete conn.misi[id]
        }, 27000)
        ]
        
        setTimeout(() => {
            m.reply(hsl)
        }, 27000)

        setTimeout(() => {
            m.reply(dimas4)
        }, 25000)

        setTimeout(() => {
            m.reply(dimas3)
        }, 20000)

        setTimeout(() => {
            m.reply(dimas2)
        }, 15000)

        setTimeout(() => {
            m.reply(dimas)
        }, 10000)

        setTimeout(() => {
            m.reply('🍱🍡🍩🍦🍧🍝 \nKamu Mulai Menyiapkan Takjill.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Silahkan Menunggu Selama ${timers}, Untuk *jualan-takjil* Kembali`)
}
handler.help = ['jualan-takjil']
handler.tags = ['vlshop','menuprem']
handler.command = /^(jualan-takjil)$/i
handler.register = true
handler.group = true
handler.rpg = true
handler.premium = true
export default handler


function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}