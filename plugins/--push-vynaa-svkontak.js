import fs from 'fs/promises';

// Definisi fungsi sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const handler = async (m, { conn, args }) => {
  const idgroup = args[0];
  if (!idgroup || !idgroup.endsWith('@g.us')) {
    return m.reply('Mohon berikan ID grup dengan format yang benar.');
  }

  const chatID = idgroup;
  const groupInfo = await conn.groupMetadata(chatID);
  const participants = groupInfo.participants;
  const groupName = groupInfo.subject;

  let vcard = '';
  let noPort = 0;
  for (let participant of participants) {
    if (participant.id && participant.id.includes('@s.whatsapp.net')) {
      vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${participant.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${participant.id.split("@")[0]}:+${participant.id.split("@")[0]}\nEND:VCARD\n`;
    }
  }

  if (noPort === 0) {
    return m.reply('Tidak ada kontak yang dapat disimpan.');
  }

  const fileName = './contacts.vcf';
  await fs.writeFile(fileName, vcard.trim());

  m.reply('Mengimpor ' + noPort + ' kontak..');
  await sleep(2000); // Menggunakan fungsi sleep di sini
  conn.sendMessage(m.chat, {
    document: await fs.readFile(fileName),
    mimetype: 'text/vcard',
    fileName: 'Contact.vcf',
    caption: 'GROUP: ' + groupName + '\nMEMBER: ' + noPort
  }, { quoted: m });
  await fs.unlink(fileName);
};

handler.help = ['vynaa-svkontak <idgroup>'];
handler.tags = ['pushkontak'];
handler.command = ['vynaa-svkontak'];
handler.owner = true;
export default handler;
/*
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (t.me/VLShop2)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 
*/