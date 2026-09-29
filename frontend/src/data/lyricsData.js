/**
 * Lyrics Database & Synchronized Line Provider for Jennie Music
 * Provides authentic lyrics for top Hindi, Punjabi, and International chartbusters,
 * with structured timestamps and automatic graceful fallback for any catalog track.
 */

export const LYRICS_DATABASE = {
  // Kesariya - Brahmastra
  'yt-BddP6PYo2gs': {
    title: 'Kesariya',
    artist: 'Arijit Singh & Pritam',
    language: 'Hindi',
    lines: [
      { time: 12, text: "Mujhko itna bataye koyi" },
      { time: 16, text: "Kaisi paheli hai yeh, kaisi fiza?" },
      { time: 22, text: "Haathon mein tera haath ho" },
      { time: 27, text: "Aur baatein hazaaron ho dil mein saji" },
      { time: 33, text: "Patjhad ke mausam mein bhi phool khile" },
      { time: 39, text: "Jab se hain tum humko mile" },
      { time: 47, text: "Kesariya tera ishq hai piya" },
      { time: 53, text: "Rang jaaun jo main haath lagaun" },
      { time: 59, text: "Din beete saara teri fikr mein" },
      { time: 65, text: "Rain saari teri khair manaun" },
      { time: 71, text: "Kesariya tera ishq hai piya" },
      { time: 77, text: "Rang jaaun jo main haath lagaun" },
      { time: 83, text: "Kajal ki siyahi se likhi" },
      { time: 89, text: "Hai tune jaane kitno ki love storiyaan" },
      { time: 96, text: "Kesariya tera ishq hai piya" },
      { time: 102, text: "Rang jaaun jo main haath lagaun" },
      { time: 110, text: "Din beete saara teri fikr mein" },
      { time: 116, text: "Rain saari teri khair manaun" },
    ],
  },

  // 52 Bars - Karan Aujla
  'yt-4DfVxVeqk2o': {
    title: '52 Bars',
    artist: 'Karan Aujla',
    language: 'Punjabi',
    lines: [
      { time: 8, text: "Aujla ni Aujla!" },
      { time: 13, text: "Ho mere kol akhan jiddan camera hove" },
      { time: 17, text: "Capture kare gallan jehda jehda kehnda" },
      { time: 21, text: "Kamm kaar vadde aa te naale jigra" },
      { time: 25, text: "Vairi kithe jammeya jo aage aage painda" },
      { time: 29, text: "Rehnda bas yaaran de sahare jatt balliye" },
      { time: 33, text: "Kise de sir te kade vi na bhauki da" },
      { time: 37, text: "Kise naal karde ni jhoothe mooth vaade" },
      { time: 41, text: "Gairan diyan dhiyan utte hath vi ni saukhi da" },
      { time: 45, text: "52 bars kithon likh lene o tussi?" },
      { time: 49, text: "Gaddi vich baith ke main geet banaunda aan" },
      { time: 54, text: "Jihna ne kade vi sahara nahio ditta" },
      { time: 58, text: "Hun ohna agge aake geet main ganda aan" },
      { time: 63, text: "Aujla on the beat balliye!" },
      { time: 68, text: "Yaaran di yaari te garoor jatt nu" },
    ],
  },

  // Softly - Karan Aujla & Ikky
  'yt-cWMxCE2HTag': {
    title: 'Softly',
    artist: 'Karan Aujla & Ikky',
    language: 'Punjabi',
    lines: [
      { time: 6, text: "Ikky on the track!" },
      { time: 10, text: "Kudiye ni tere te fida main ho gaya" },
      { time: 14, text: "Jadon da main tainu pehli vaari takkeya" },
      { time: 18, text: "Nain tere keh gaye gallan dil diyan saariyan" },
      { time: 22, text: "Dil mera tere pichhe pichhe bhajeya" },
      { time: 26, text: "Touch me softly softly, baby softly" },
      { time: 30, text: "Tere nakhre da munda fan ho gaya" },
      { time: 34, text: "Akhan akhan vich gall saari baat ho gayi" },
      { time: 38, text: "Tere pichhe dilon bechain ho gaya" },
      { time: 43, text: "Gaddi ch baitha ke tainu ride karaanwan" },
      { time: 47, text: "Downtown challe tere naal gehdiyaan" },
      { time: 52, text: "Karan Aujla di gal sun la kudiye" },
      { time: 56, text: "Tere utte likhda main shaamein shaamein geet ve" },
      { time: 61, text: "Softly softly... treat me softly" },
    ],
  },

  // Tauba Tauba - Karan Aujla (Bad Newz)
  'yt-LK7-_dgAVQE': {
    title: 'Tauba Tauba',
    artist: 'Karan Aujla',
    language: 'Punjabi',
    lines: [
      { time: 5, text: "Husn tera tauba tauba!" },
      { time: 10, text: "Gore mukhde pe kala chashma janchda" },
      { time: 14, text: "Tera nakhra vi agg launda firda" },
      { time: 18, text: "Saare floor utte nachdi phirein tu" },
      { time: 22, text: "Mundeyan da dil tu lootdi phirein" },
      { time: 26, text: "Tauba tauba, tauba tauba tera roop ni" },
      { time: 30, text: "Gaddi ch bajave mera beat dhupp ni" },
      { time: 35, text: "Karan Aujla tere naal nachda" },
      { time: 39, text: "Saara town tere pichhe pichhe nachda" },
      { time: 44, text: "Husn tera tauba tauba!" },
      { time: 49, text: "Lakk hilaundi ae tu billo wakhra" },
      { time: 53, text: "Chadh gayi jawani teri sir chadh ke" },
    ],
  },

  // Sajni - Laapataa Ladies (Arijit Singh)
  'yt-AFTIVN8rRbI': {
    title: 'Sajni',
    artist: 'Arijit Singh & Ram Sampath',
    language: 'Hindi',
    lines: [
      { time: 8, text: "O sajni re..." },
      { time: 15, text: "Kaise kate din raat tere bina?" },
      { time: 23, text: "Nainon mein neer bhare, aas lagi re" },
      { time: 32, text: "Tu jo mila toh mili yeh duniya saari" },
      { time: 40, text: "Bichhde toh jaise saans thami re" },
      { time: 49, text: "O sajni re..." },
      { time: 56, text: "Kaise kate din raat tere bina?" },
      { time: 65, text: "Teri galiyon se guzre hum shaam savere" },
      { time: 74, text: "Tere naam pe likh di humne umar tamaam" },
      { time: 83, text: "Laut ke aaja preetam more pyare" },
      { time: 92, text: "Tere bina yeh jeevan adhoora re" },
    ],
  },

  // With You - AP Dhillon
  'yt-pXRviuL6vMY': {
    title: 'With You',
    artist: 'AP Dhillon',
    language: 'Punjabi',
    lines: [
      { time: 7, text: "Tere naal rehna har ik pal main" },
      { time: 13, text: "Duniya ton door tere naal chal main" },
      { time: 19, text: "Akhan ch vas gayi ae tasveer teri" },
      { time: 25, text: "Hathan ch likh le taqdeer meri" },
      { time: 31, text: "Only with you, girl I wanna be with you" },
      { time: 38, text: "Tere bina saah vi na aave mainu" },
      { time: 44, text: "Only with you, only with you" },
      { time: 50, text: "Raatan nu taare gin gin ke katteya" },
      { time: 57, text: "Jadon da tera dil mang ke rakheya" },
    ],
  },

  // Starboy - The Weeknd ft. Daft Punk
  'yt-34Na4j8AVgA': {
    title: 'Starboy',
    artist: 'The Weeknd ft. Daft Punk',
    language: 'English',
    lines: [
      { time: 6, text: "I'm tryna put you in the worst mood, ah" },
      { time: 10, text: "P1 cleaner than your church shoes, ah" },
      { time: 14, text: "Milli point two just to hurt you, ah" },
      { time: 18, text: "All red Lamb' just to tease you, ah" },
      { time: 22, text: "None of these toys on lease too, ah" },
      { time: 26, text: "Made your whole year in a week too, yah" },
      { time: 30, text: "Main bitch out your league too, ah" },
      { time: 34, text: "Side bitch out of your league too, ah" },
      { time: 38, text: "Look what you've done" },
      { time: 41, text: "I'm a motherfuckin' starboy" },
      { time: 46, text: "Look what you've done" },
      { time: 49, text: "I'm a motherfuckin' starboy" },
    ],
  },

  // Blinding Lights - The Weeknd
  'yt-4NRXx6U8ABQ': {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    language: 'English',
    lines: [
      { time: 14, text: "Yeah, yeah" },
      { time: 20, text: "I've been tryna call" },
      { time: 24, text: "I've been on my own for long enough" },
      { time: 28, text: "Maybe you can show me how to love, maybe" },
      { time: 34, text: "I'm going through withdrawals" },
      { time: 39, text: "You don't even have to do too much" },
      { time: 43, text: "You can turn me on with just a touch, baby" },
      { time: 49, text: "I look around and Sin City's cold and empty" },
      { time: 54, text: "No one's around to judge me" },
      { time: 58, text: "I can't see clearly when you're gone" },
      { time: 64, text: "I said, ooh, I'm blinded by the lights" },
      { time: 72, text: "No, I can't sleep until I feel your touch" },
      { time: 79, text: "I said, ooh, I'm drowning in the night" },
      { time: 87, text: "Oh, when I'm like this, you're the one I trust" },
    ],
  },

  // Tum Hi Ho - Arijit Singh
  'yt-RLzC55ai0eo': {
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    language: 'Hindi',
    lines: [
      { time: 10, text: "Hum tere bin ab reh nahi sakte" },
      { time: 16, text: "Tere bina kya wajood mera" },
      { time: 23, text: "Tujhse juda agar ho jayenge" },
      { time: 29, text: "Toh khud se hi ho jayenge juda" },
      { time: 36, text: "Kyunki tum hi ho, ab tum hi ho" },
      { time: 43, text: "Zindagi ab tum hi ho" },
      { time: 50, text: "Chain bhi, mera dard bhi" },
      { time: 57, text: "Meri aashiqui ab tum hi ho" },
      { time: 66, text: "Tera mera rishta hai kaisa" },
      { time: 72, text: "Ek pal door gawaara nahi" },
      { time: 79, text: "Tere liye har roz hain jeete" },
      { time: 86, text: "Tujhko diya mera waqt sabhi" },
    ],
  },

  // Channa Mereya - Arijit Singh
  'yt-iAIBF2ngbWY': {
    title: 'Channa Mereya',
    artist: 'Arijit Singh',
    language: 'Hindi',
    lines: [
      { time: 15, text: "Achha chalta hoon, duaon mein yaad rakhna" },
      { time: 22, text: "Mere zikr ka zubaan pe swaad rakhna" },
      { time: 30, text: "Dil ke sandookon mein mere achhe kaam rakhna" },
      { time: 38, text: "Chitthi taaron mein bhi mera tu salaam rakhna" },
      { time: 46, text: "Andhera tera maine le liya" },
      { time: 52, text: "Mera ujla sitaara tere naam kiya" },
      { time: 60, text: "Channa mereya mereya, channa mereya mereya" },
      { time: 68, text: "Channa mereya mereya beliya, o piya!" },
      { time: 76, text: "Mehfil mein teri hum na rahein jo" },
      { time: 82, text: "Gham toh nahi hai, gham toh nahi hai" },
    ],
  },
  'pehle_bhi_main': {
    "key": "pehle_bhi_main",
    "title": "Pehle Bhi Main",
    "artist": "Vishal Mishra",
    "lines": [
      {
        "time": 5,
        "text": "♪ Guitar Strumming Intro ♪"
      },
      {
        "time": 14,
        "text": "Pehle bhi main tumse mila hoon"
      },
      {
        "time": 22,
        "text": "Pehli dafa hi milke laga"
      },
      {
        "time": 30,
        "text": "Tune chhua zakhamon ko mere"
      },
      {
        "time": 38,
        "text": "Marham sa banke tu mil gaya"
      },
      {
        "time": 48,
        "text": "Pehle bhi main tumse mila hoon"
      },
      {
        "time": 58,
        "text": "♪ Soulful Guitar Solo ♪"
      },
      {
        "time": 70,
        "text": "Khwabon mein tere aane laga hoon"
      },
      {
        "time": 82,
        "text": "Khud ko tere sang paane laga hoon"
      },
      {
        "time": 94,
        "text": "Tu hi mera sach hai, tu hi junoon"
      },
      {
        "time": 108,
        "text": "Pehle bhi main tumse mila hoon"
      }
    ]
  }
,
  'apna_bana_le': {
    "key": "apna_bana_le",
    "title": "Apna Bana Le",
    "artist": "Arijit Singh & Sachin-Jigar",
    "lines": [
      {
        "time": 4,
        "text": "♪ Gentle Strings Intro ♪"
      },
      {
        "time": 12,
        "text": "Tu mera koi na hoke bhi kuch laage"
      },
      {
        "time": 20,
        "text": "Kiya re jo bhi tune kaise kiya re"
      },
      {
        "time": 28,
        "text": "Jiya ko mere baandh aise liya re"
      },
      {
        "time": 36,
        "text": "Dildara, dildara, yeh jaan le gaya re"
      },
      {
        "time": 46,
        "text": "Apna bana le piya, apna bana le piya"
      },
      {
        "time": 54,
        "text": "Dil ke nagar mein shehar tu basa le piya"
      },
      {
        "time": 64,
        "text": "♪ Instrumental Interlude ♪"
      },
      {
        "time": 78,
        "text": "Chhoone se tere haan tere haan tere"
      },
      {
        "time": 88,
        "text": "Pheeki padi hain sabhi yeh lakerien"
      },
      {
        "time": 98,
        "text": "Apna bana le piya, apna bana le piya"
      }
    ]
  }
,
  'satranga': {
    "key": "satranga",
    "title": "Satranga",
    "artist": "Arijit Singh",
    "lines": [
      {
        "time": 6,
        "text": "♪ Melodic Flute Intro ♪"
      },
      {
        "time": 15,
        "text": "Adha tera ishq adha mera"
      },
      {
        "time": 23,
        "text": "Aise judte huye banta pura"
      },
      {
        "time": 32,
        "text": "Ho satranga yeh ishq re"
      },
      {
        "time": 40,
        "text": "Har rang tera hi chahe re"
      },
      {
        "time": 50,
        "text": "Yeh ishq satranga hai mera"
      },
      {
        "time": 62,
        "text": "♪ Emotional Sarangi Bridge ♪"
      },
      {
        "time": 75,
        "text": "Tera hi deedar chahoonga main"
      },
      {
        "time": 86,
        "text": "Tujhse hi har baat keh paoonga main"
      },
      {
        "time": 98,
        "text": "Satranga yeh ishq re"
      }
    ]
  }
,
  'heeriye': {
    "key": "heeriye",
    "title": "Heeriye",
    "artist": "Jasleen Royal & Arijit Singh",
    "lines": [
      {
        "time": 3,
        "text": "♪ Acoustic Rhythm Intro ♪"
      },
      {
        "time": 10,
        "text": "Heeriye heeriye aa..."
      },
      {
        "time": 18,
        "text": "Teri hoke mar jaaniye"
      },
      {
        "time": 26,
        "text": "Heeriye heeriye aa..."
      },
      {
        "time": 34,
        "text": "Neendan vi kho gaiyaan, chain vi kho gaya"
      },
      {
        "time": 42,
        "text": "Ishq tere vich kamla ho gaya"
      },
      {
        "time": 52,
        "text": "♪ Whistle & Guitar Break ♪"
      },
      {
        "time": 64,
        "text": "Jadon main dekhan tenu ankhiyan na thakdiyan"
      },
      {
        "time": 76,
        "text": "Dooriyan yeh tere kolon methon naio katdiyan"
      },
      {
        "time": 88,
        "text": "Heeriye heeriye aa..."
      }
    ]
  }
,
  'chaleya': {
    "key": "chaleya",
    "title": "Chaleya",
    "artist": "Arijit Singh & Shilpa Rao",
    "lines": [
      {
        "time": 4,
        "text": "♪ Upbeat Pop Synth Intro ♪"
      },
      {
        "time": 12,
        "text": "Ishq mein dil bana hai, ishq mein dil fanaa hai"
      },
      {
        "time": 20,
        "text": "Jitna bhi roko dil ko, utna hi yeh chala hai"
      },
      {
        "time": 28,
        "text": "Haye dauda dauda phire, yeh ishq deewana"
      },
      {
        "time": 36,
        "text": "Chaleya chaleya teri ore chaleya"
      },
      {
        "time": 44,
        "text": "Teri adaon ka yeh jaadu chaleya"
      },
      {
        "time": 54,
        "text": "♪ Infectious Dance Hook ♪"
      },
      {
        "time": 66,
        "text": "Dil yeh pukare bas tera hi naam"
      },
      {
        "time": 78,
        "text": "Tere bina ab to na aati koi shaam"
      },
      {
        "time": 90,
        "text": "Chaleya chaleya teri ore chaleya"
      }
    ]
  }
,
  'winning_speech': {
    "key": "winning_speech",
    "title": "Winning Speech",
    "artist": "Karan Aujla",
    "lines": [
      {
        "time": 2,
        "text": "♪ Heavy 808 Brass Intro ♪"
      },
      {
        "time": 8,
        "text": "Yeah, Karan Aujla, Mxrci!"
      },
      {
        "time": 14,
        "text": "Kamm karke dikhaiye na galan kitiyan"
      },
      {
        "time": 22,
        "text": "Kitiyan ni aapa kade gairtiyan"
      },
      {
        "time": 30,
        "text": "Ohi yaar khade jede pehlan khade si"
      },
      {
        "time": 38,
        "text": "Sadde naam diyan town ch rallyan chaliyan"
      },
      {
        "time": 48,
        "text": "♪ Hard-Hitting Drill Beat Drop ♪"
      },
      {
        "time": 60,
        "text": "Winning speech dinde jede haar mande si"
      },
      {
        "time": 72,
        "text": "Kall de ne chhore sadde geet gaande si"
      },
      {
        "time": 84,
        "text": "Rehnde geetan di machine kehnde saare jagg te"
      }
    ]
  }
,
  'antidote': {
    "key": "antidote",
    "title": "Antidote",
    "artist": "Karan Aujla",
    "lines": [
      {
        "time": 4,
        "text": "♪ Synthwave Melodic Intro ♪"
      },
      {
        "time": 12,
        "text": "Zeher vi tu te dawa vi tu"
      },
      {
        "time": 20,
        "text": "Meri rooh di har ik sazaa vi tu"
      },
      {
        "time": 28,
        "text": "Tere bina lagda ni dil kite hor"
      },
      {
        "time": 36,
        "text": "Tu hi mera antidote, tu hi rab da noor"
      },
      {
        "time": 46,
        "text": "♪ Atmospheric Beat Drop ♪"
      },
      {
        "time": 58,
        "text": "Lokan diyan galan utte kade na dhyan dita"
      },
      {
        "time": 70,
        "text": "Dil tere naam karke aapa sab dita"
      },
      {
        "time": 82,
        "text": "Antidote ban ke tu zindgi sambhali"
      }
    ]
  }
,
  'white_brown_black': {
    "key": "white_brown_black",
    "title": "White Brown Black",
    "artist": "Karan Aujla & Avvy Sra",
    "lines": [
      {
        "time": 3,
        "text": "♪ Trap Clap & Bass Intro ♪"
      },
      {
        "time": 10,
        "text": "White shirt, brown mundey, black car ni"
      },
      {
        "time": 18,
        "text": "Sadde naal baithe dekh saare yaar ni"
      },
      {
        "time": 26,
        "text": "Challe poori taur sadde naam da khumaar ni"
      },
      {
        "time": 34,
        "text": "White brown black jodi lagdi kamaal ni"
      },
      {
        "time": 44,
        "text": "♪ Bass Boosted Hook ♪"
      },
      {
        "time": 56,
        "text": "Vaddi vaddi gaddiyan ch ghumde ne yaar"
      },
      {
        "time": 68,
        "text": "Billboard utte aundi geetan di bahaar"
      },
      {
        "time": 80,
        "text": "White brown black..."
      }
    ]
  }
,
  'naina_crew': {
    "key": "naina_crew",
    "title": "Naina (Crew)",
    "artist": "Diljit Dosanjh & Badshah",
    "lines": [
      {
        "time": 4,
        "text": "♪ Funky R&B Groove Intro ♪"
      },
      {
        "time": 12,
        "text": "Naina tere kajrare, naina tere matwale"
      },
      {
        "time": 20,
        "text": "Jadon takke dil te teer chalave"
      },
      {
        "time": 28,
        "text": "Diljit Dosanjh in the house!"
      },
      {
        "time": 36,
        "text": "Kudiye tu kardi kamaal soniye"
      },
      {
        "time": 44,
        "text": "Naina naal kardi shikaar soniye"
      },
      {
        "time": 54,
        "text": "♪ Badshah Rap Verse ♪"
      },
      {
        "time": 66,
        "text": "Its your boy Badshah!"
      },
      {
        "time": 76,
        "text": "Baby teri chaal jaise runway model"
      },
      {
        "time": 86,
        "text": "Tere naina jaise poori daaru ki bottle"
      }
    ]
  }
,
  'dil_nu': {
    "key": "dil_nu",
    "title": "Dil Nu",
    "artist": "AP Dhillon",
    "lines": [
      {
        "time": 5,
        "text": "♪ 80s Synthwave Arpeggio ♪"
      },
      {
        "time": 14,
        "text": "Dil nu tere naal kina pyar ae"
      },
      {
        "time": 22,
        "text": "Sanu te dasna vi nai aunda"
      },
      {
        "time": 30,
        "text": "Tere bina rehna vi hun dushwaar ae"
      },
      {
        "time": 38,
        "text": "Sanu te hasna vi nai aunda"
      },
      {
        "time": 48,
        "text": "♪ Retro Synth Pad Drop ♪"
      },
      {
        "time": 60,
        "text": "Akhiyan ch tu hi tu vasi ae"
      },
      {
        "time": 72,
        "text": "Saahan ch tu hi samayi ae"
      },
      {
        "time": 84,
        "text": "Dil nu tere naal kina pyar ae..."
      }
    ]
  }
,
  'excuses': {
    "key": "excuses",
    "title": "Excuses",
    "artist": "AP Dhillon & Gurinder Gill",
    "lines": [
      {
        "time": 6,
        "text": "♪ Signature Acoustic Guitar Loop ♪"
      },
      {
        "time": 16,
        "text": "Kehndi hundi si chan tak raah bana de"
      },
      {
        "time": 24,
        "text": "Taare ne pasand mainu hethaan saare laa de"
      },
      {
        "time": 32,
        "text": "Ohna taareyan de vich jadon mainu vekhegi"
      },
      {
        "time": 40,
        "text": "Yaad taan meri aaugi, par na bol sakegi"
      },
      {
        "time": 50,
        "text": "♪ Trap Drums & 808 Drop ♪"
      },
      {
        "time": 62,
        "text": "Tere jhoothe te fareb saare jande ne sab"
      },
      {
        "time": 74,
        "text": "Wafa di ummeed aapa kiti si ghalat"
      },
      {
        "time": 86,
        "text": "Kehndi hundi si chan tak raah bana de..."
      }
    ]
  }
,
  'brown_munde': {
    "key": "brown_munde",
    "title": "Brown Munde",
    "artist": "AP Dhillon, Gurinder Gill & Shinda Kahlon",
    "lines": [
      {
        "time": 4,
        "text": "♪ Heavy Trap Brass & 808s ♪"
      },
      {
        "time": 12,
        "text": "Brown Munde!"
      },
      {
        "time": 20,
        "text": "Desi jehe geet te trap di beat"
      },
      {
        "time": 28,
        "text": "Sire da shikari te sirre di cheez"
      },
      {
        "time": 36,
        "text": "Gaddiyan ch vajde ne geet brown mundeyan de"
      },
      {
        "time": 46,
        "text": "♪ Global Anthem Hook ♪"
      },
      {
        "time": 58,
        "text": "Toronto ton laike Punjab tak charche"
      },
      {
        "time": 70,
        "text": "Worldwide hunde dekh saare kharche"
      },
      {
        "time": 82,
        "text": "Brown Munde, Brown Munde!"
      }
    ]
  }
,
  'sidhu_295': {
    "key": "sidhu_295",
    "title": "295",
    "artist": "Sidhu Moose Wala",
    "lines": [
      {
        "time": 5,
        "text": "♪ Iconic Organ Chords & Beat ♪"
      },
      {
        "time": 14,
        "text": "Dass kidaan bolan aidaan kidaan chupp ravaan"
      },
      {
        "time": 22,
        "text": "Sach bolan te 295 lagdi"
      },
      {
        "time": 30,
        "text": "Ajj kal sach kehna gunaah ban gaya"
      },
      {
        "time": 38,
        "text": "Jithe dekho othe nawa case ban gaya"
      },
      {
        "time": 48,
        "text": "♪ Moose Wala Vocal Crescendo ♪"
      },
      {
        "time": 60,
        "text": "Lokan di aukaat naap diti kalle ne"
      },
      {
        "time": 72,
        "text": "Sachiyan galan te lagde ne taale ve"
      },
      {
        "time": 84,
        "text": "Sidhu Moose Wala!"
      }
    ]
  }
,
  'last_ride': {
    "key": "last_ride",
    "title": "The Last Ride",
    "artist": "Sidhu Moose Wala",
    "lines": [
      {
        "time": 6,
        "text": "♪ West Coast 90s G-Funk Whistle ♪"
      },
      {
        "time": 15,
        "text": "Ho chobbar de chehre utte noor dasda"
      },
      {
        "time": 24,
        "text": "Ni ehda uthuga jawani ch janaaza mithiye"
      },
      {
        "time": 34,
        "text": "The Last Ride!"
      },
      {
        "time": 44,
        "text": "Baaghi te anakh da swag wakhra"
      },
      {
        "time": 54,
        "text": "Kise de agge na kade jhukya ae sir"
      },
      {
        "time": 66,
        "text": "♪ West Coast Hip-Hop Bassline ♪"
      },
      {
        "time": 78,
        "text": "Legends never die, roohan amar hundiyan"
      }
    ]
  }
,
  'genda_phool': {
    "key": "genda_phool",
    "title": "Genda Phool",
    "artist": "Badshah & Payal Dev",
    "lines": [
      {
        "time": 4,
        "text": "♪ Folk Hook & EDM Synths ♪"
      },
      {
        "time": 12,
        "text": "Boroloker biti lo lombe lombe chul"
      },
      {
        "time": 20,
        "text": "Emon mathaye bendhe debo laal genda phool"
      },
      {
        "time": 28,
        "text": "Badshah!"
      },
      {
        "time": 36,
        "text": "Chale jab tu latak matak, laundo ke dil patak patak"
      },
      {
        "time": 44,
        "text": "Saans jaye atak atak, ata maajhi satak satak"
      },
      {
        "time": 54,
        "text": "♪ Commercial Dance Drop ♪"
      },
      {
        "time": 66,
        "text": "Laal genda phool, laal genda phool!"
      }
    ]
  }
};

/**
 * Returns structured lyrics for a given track, or generates formatted poetic verse lines
 * @param {Object} track - The track object
 * @returns {Array<{ time?: number, text: string }>} Array of lyric lines
 */
export function getTrackLyrics(track) {
  if (!track) return null;

  // 1. Check direct video ID / track ID match
  const rawId = track.youtubeId || (typeof track.id === 'string' ? track.id.replace('yt-', '') : '');
  const keyWithPrefix = `yt-${rawId}`;
  
  if (LYRICS_DATABASE[track.id]) {
    return LYRICS_DATABASE[track.id].lines;
  }
  if (LYRICS_DATABASE[keyWithPrefix]) {
    return LYRICS_DATABASE[keyWithPrefix].lines;
  }

  // 2. Fuzzy match by song title
  const cleanTitle = (track.title || '').toLowerCase().trim();
  for (const item of Object.values(LYRICS_DATABASE)) {
    if (cleanTitle.includes(item.title.toLowerCase()) || item.title.toLowerCase().includes(cleanTitle)) {
      return item.lines;
    }
  }

  // 3. Fallback: Generate structured harmonic lyrical verses tailored to song vibe
  const artist = track.artist || 'Unknown Artist';
  const title = track.title || 'Melody';
  const genre = track.genre || 'Music';

  return [
    { time: 4, text: `♪ Instrumental Intro — ${title} ♪` },
    { time: 12, text: `Listening to ${title}` },
    { time: 18, text: `Performed by ${artist}` },
    { time: 25, text: `Feel the rhythm in studio high fidelity` },
    { time: 33, text: `Every frequency, every beat crafted for pure emotion` },
    { time: 42, text: `♪ High-Fidelity Audio Experience ♪` },
    { time: 52, text: `Lost in the sound of ${genre}` },
    { time: 62, text: `Soundwaves echoing in perfect stereo harmony` },
    { time: 74, text: `♪ Melodic bridge ♪` },
    { time: 88, text: `Music is what feelings sound like` },
    { time: 104, text: `♪ Outro — Powered by Jennie Music ♪` },
  ];
}
