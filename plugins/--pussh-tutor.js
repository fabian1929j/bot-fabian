/*
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (t.me/VLShop2)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 
*/

import fs from 'fs';

let handler = async (m, { conn }) => {
    let text = `
*Panduan Fitur pushkontak*
_Contact push Feature Guide_

Versi Indonesia🇮🇩
• .grouplist
untuk melihat semua list group join dan melihat informasi group beserta semua id group 

• .vynaa-svkontak 
fitur ini otomatis menyimpan nomor WhatsApp member di group yg di tentukan menggunakan id group

• .vynaa-pushgc
fitur ini otomatis mengirimkan pesan ke group dengan id group yg di tentukan dan bisa mengatur delay mengirim pesan agar menghindari spam

• .vynaa-push
fitur ini otomatis mengirim kan pesan ke semua member group dan bisa mengatur delay mengirim pesan

• pushkontak
fitur ini otomatis mengirimkan pesan di group yg di tentukan sama seperti *vynaa-push* tapi fitur ini tidak bisa mengatur delay mengirim pesan

• .svkontak
fitur ini otomatis menyimpan nomor WhatsApp member di group yg kamu mau tanpa id group jadi anda bisa mencari group terbuka untuk menyimpan kontak

• .pushgc 
fitur ini otomatis mengirim pesan ke group yg di tentukan menggunakan id group tanpa mengatur delay pesan

• .idgc
Fitur untuk mengetahui id group yg terbuka


(English Version 🇬🇧)

• .grouplist
to view all joined group lists and see group information along with all group IDs

• .vynaa-svkontak
this feature automatically saves WhatsApp numbers of members in the specified group using the group ID

• .vynaa-pushgc
this feature automatically sends messages to the specified group with the specified group ID and can set a delay in sending messages to avoid spam

• .vynaa-push
this feature automatically sends messages to all group members and can set a delay in sending messages

• pushkontak
this feature automatically sends messages in the specified group just like vynaa-push but this feature cannot set a delay in sending messages

• .svkontak
this feature automatically saves WhatsApp numbers of members in the group you want without a group ID so you can search for open groups to save contacts

• .pushgc
this feature automatically sends messages to the specified group using the group ID without setting a message delay

• .idgc
Feature to find out the IDs of open groups
`;
    let ihu = 'https://telegra.ph/file/8b0651d035ec5a5303b0f.jpg';   
    conn.sendMessage(m.chat, {
        video: { url: "https://telegra.ph/file/eac09e84b085214b73a5b.mp4" },
        gifPlayback: true,
        caption: text,
        contextInfo: {
            externalAdReply: {
                title: `© 𝙑𝙮𝙣𝙖𝙖 𝙑𝙖𝙡𝙚𝙧𝙞𝙚`,
                body: global.author,
                thumbnailUrl: ihu,
                sourceUrl: `https://whatsapp.com/channel/0029VaHPYh6LNSa81M9Xcq1K`,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    });
};
handler.help = ['menu'];
handler.tags = ['pushkontak'];
handler.command = /^(tutor|panduan|help)$/i;

export default handler;
/*
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (t.me/VLShop2)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 
*/