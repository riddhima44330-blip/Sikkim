export type District = "East" | "West" | "North" | "South";
export type Tradition = "Karma Kagyu" | "Nyingma";

export interface Monastery {
  id: string;
  name: string;
  district: District;
  tradition: Tradition;
  yearBuilt: string;
  founder: string;
  tagline: string;
  description: string;
  architecture: string;
  history: string;
  festivals: string[];
  hours: string;
  facts: string[];
  heritage: "National" | "State" | "Regional";
  popular: boolean;
  hiddenGem: boolean;
  scene: string;
  image?: string;
  nearby: string[];
  mapTop: string;
  mapLeft: string;
  mapsQuery: string;
}

export const MONASTERIES: Monastery[] = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    district: "East",
    tradition: "Karma Kagyu",
    yearBuilt: "1960s (rebuilt on 1740 site)",
    founder: "16th Gyalwa Karmapa, Rangjung Rigpe Dorje",
    tagline: "One of the most important monasteries in Tibetan Buddhism.",
    description:
      "Seat of the Karmapa and the global headquarters of the Karma Kagyu lineage, Rumtek rises above Gangtok wrapped in forest and long prayer-flag strings.",
    architecture:
      "A faithful replica of the original Tsurphu Monastery in Tibet — four storeys of warm earth tones, tiered golden roofs, an ornate Golden Stupa, and an old monastery of gold-painted halls with towering painted pillars.",
    history:
      "Founded by the 16th Karmapa after his exile from Tibet in the 1960s. It holds the lineage's most sacred relics and remains a vibrant centre of monastic learning.",
    festivals: ["Losar", "Kagyud Dance Festival"],
    hours: "8:00 AM – 6:00 PM (main shrine), best before noon",
    facts: [
      "Houses the reliquary stupa of the 16th Karmapa.",
      "The monastery university trains monks from around the world.",
      "A 'Tsurphu Labrang' guards the Dharma Chakra Centre within.",
    ],
    heritage: "National",
    popular: true,
    hiddenGem: false,
    scene: "rumtek",
    nearby: ["Enchey Monastery", "Do Drul Chorten"],
    mapTop: "41%",
    mapLeft: "62%",
    mapsQuery: "Rumtek Monastery, Gangtok, Sikkim",
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    district: "West",
    tradition: "Nyingma",
    yearBuilt: "1705",
    founder: "Lhatsun Chenpo",
    tagline: "One of Sikkim's oldest and most sacred monasteries, watching the peaks from on high.",
    description:
      "Perched above Pelling, Pemayangtse ('the supreme lotus') offers sweeping views of Khangchendzonga and holds a secret seven-storey wooden model of the celestial palace of Guru Rinpoche.",
    architecture:
      "Whitewashed walls, richly painted interiors and a three-tiered golden roof. The jewel is the seven-tiered Zangtopalri wooden mandala — the celestial abode of Guru Rinpoche — crafted by one man over many years.",
    history:
      "Established in 1705 for high-ranking monks of the Nyingma order. It once served as a residence for the old kings of Sikkim and remains a principal seat of the order.",
    festivals: ["Pang Lhabsol", "Losar"],
    hours: "8:00 AM – 5:00 PM",
    facts: [
      "The Zangtopalri model is carved entirely from wood, without a single nail.",
      "Three-storey wooden mandala is the only one of its kind.",
      "Its courtyard faces the sacred peaks of Khangchendzonga.",
    ],
    heritage: "National",
    popular: true,
    hiddenGem: false,
    scene: "pemayangtse",
    nearby: ["Dubdi Monastery", "Rabdentse Ruins", "Khecheopalri"],
    mapTop: "55%",
    mapLeft: "33%",
    mapsQuery: "Pemayangtse Monastery, Pelling, Sikkim",
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    district: "East",
    tradition: "Nyingma",
    yearBuilt: "1909",
    founder: "Sidkeong Tulku",
    tagline: "An ancient Nyingma-pa monastery known for its mystical masked dance festivals.",
    description:
      "Tucked into the treeline above Gangtok, Enchey is believed to have been built where the great tantric master Drupthob Karpo meditated.",
    architecture:
      "A jewel-box of painted pillars, golden deities and intricately carved lattice work, its pagoda-shaped roof rising quietly above the forest canopy.",
    history:
      "Enchey ('the solitary temple') was consecrated in 1909 by the 12th king of Sikkim, upon the site of a lama's meditation hermitage. Its monks practice the Nyingma tradition.",
    festivals: ["Cham (masked) Dance Festivals in winter"],
    hours: "7:00 AM – 5:00 PM",
    facts: [
      "Believed to be blessed by the miracles of Drupthob Karpo.",
      "Hosts two famous masked cham dance festivals yearly.",
      "Its location is said to be a power spot chosen for meditative energy.",
    ],
    heritage: "State",
    popular: true,
    hiddenGem: false,
    scene: "enchey",
    nearby: ["Rumtek Monastery", "Do Drul Chorten"],
    mapTop: "38%",
    mapLeft: "60%",
    mapsQuery: "Enchey Monastery, Gangtok, Sikkim",
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    district: "South",
    tradition: "Nyingma",
    yearBuilt: "1641",
    founder: "Lhatsun Chenpo",
    tagline: "Considered the holiest monastery in Sikkim — an island of pure reverence.",
    description:
      "Crowning a hill above the Rathong river, Tashiding ('the central glorious peak') is the spiritual heart of Sikkim, holding the sacred chorten that pilgrims bow to from afar.",
    architecture:
      "A white and gold complex of stupas and shrines; the great Thong-Wa-Rang-Dol stupa, said to grant liberation on sight, is its most venerated structure.",
    history:
      "Consecrated in 1641 by Lhatsun Chenpo, one of the three patron saints who enthroned the first Chogyal. Pilgrims for centuries have made the arduous climb to its summit shrine.",
    festivals: ["Bhumchu", "Losar"],
    hours: "7:00 AM – 4:00 PM; Bhumchu in Feb–Mar",
    facts: [
      "Thong-Wa-Rang-Dol literally means 'liberation upon seeing'.",
      "Bhumchu festival reads a sacred water-vessel to predict the year ahead.",
      "Trekking to its hilltop shrine is itself considered an act of merit.",
    ],
    heritage: "National",
    popular: true,
    hiddenGem: false,
    scene: "tashiding",
    nearby: ["Ralang Monastery", "Dubdi Monastery"],
    mapTop: "63%",
    mapLeft: "42%",
    mapsQuery: "Tashiding Monastery, Sikkim",
  },
  {
    id: "dubdi",
    name: "Dubdi Monastery",
    district: "West",
    tradition: "Nyingma",
    yearBuilt: "1701",
    founder: "Lhatsun Chenpo",
    tagline: "Sikkim's oldest monastery — a tiny weathered gem on a quiet Yuksom hillside.",
    description:
      "Hidden in the forest above Yuksom, Dubdi ('the retreat') is Sikkim's first monastery, a small white chapel glowing gold inside, built soon after the first king's coronation.",
    architecture:
      "A single small stone-and-wood chapel of Nyingma design, its interior dense with gilded statues, tankhas and murals that have survived three centuries of mountain weather.",
    history:
      "Built in 1701 near the coronation site of the first Chogyal of Sikkim, it marks the birthplace of monastic Buddhism in the kingdom and is protected as an Ancient Monument.",
    festivals: ["Losar"],
    hours: "9:00 AM – 4:00 PM (caretaker on site)",
    facts: [
      "The oldest monastery in Sikkim, founded just after the first king's enthronement.",
      "Accessible by a short, atmospheric forest climb from Yuksom.",
      "Designated an Ancient Monument by the Archaeological Survey of India.",
    ],
    heritage: "National",
    popular: false,
    hiddenGem: true,
    scene: "dubdi",
    nearby: ["Pemayangtse Monastery", "Rabdentse Ruins"],
    mapTop: "69%",
    mapLeft: "33%",
    mapsQuery: "Dubdi Monastery, Yuksom, Sikkim",
  },
  {
    id: "phodong",
    name: "Phodong Monastery",
    district: "North",
    tradition: "Karma Kagyu",
    yearBuilt: "1700s",
    founder: "12th Karmapa",
    tagline: "A 17th-century Karma Kagyu monastery rich in history and golden shrines.",
    description:
      "On a forested ridge above the Teesta, Phodong is a serene white-and-gold monastery of the Karma Kagyu order, once the seat of Sikkim's king.",
    architecture:
      "Great golden halls, a three-storey assembly house and an adjoining former royal palace create a complex that feels both sacred and kingly.",
    history:
      "Founded in the early 1700s, it later served as the royal seat of the Chogyal of Sikkim before the capital moved to Gangtok. Its monks belong to the Karma Kagyu school.",
    festivals: ["Losar", "Pang Lhabsol"],
    hours: "8:00 AM – 5:00 PM",
    facts: [
      "The last royal residence of the Chogyal before Gangtok.",
      "Its murals and gold shrines date back centuries.",
      "Remote and quiet — often nearly empty of visitors.",
    ],
    heritage: "State",
    popular: false,
    hiddenGem: true,
    scene: "phodong",
    nearby: ["Ralang Monastery", "Rumtek Monastery"],
    mapTop: "24%",
    mapLeft: "55%",
    mapsQuery: "Phodong Monastery, Sikkim",
  },
  {
    id: "ralang",
    name: "Ralang Monastery",
    district: "South",
    tradition: "Karma Kagyu",
    yearBuilt: "1700s",
    founder: "Dali Lama I (12th Karmapa's line)",
    tagline: "A Karma Kagyu sanctuary where rivers meet and prayer wheels turn.",
    description:
      "Above the confluence of the Ranikhola and Rangit rivers, Ralang is one of the region's most important Karma Kagyu monasteries, rebuilt in the 1970s after a fire.",
    architecture:
      "A grand golden-roofed prayer hall ringed by red-clad monks' quarters, housing exquisite golden statues and frescoes of the Karmapa lineage.",
    history:
      "Founded in the 18th century under the 12th Karmapa, Ralang served as his summer residence and remains the seat of the Karma Kagyu in South Sikkim.",
    festivals: ["Kagyu Monlam", "Losar"],
    hours: "8:00 AM – 5:00 PM",
    facts: [
      "Holds one of the largest Karma Kagyu monastic communities in Sikkim.",
      "Home to an important college of Buddhist philosophy.",
      "Its hilltop faces the confluence of two sacred rivers.",
    ],
    heritage: "Regional",
    popular: false,
    hiddenGem: false,
    scene: "ralang",
    nearby: ["Tashiding Monastery", "Phodong Monastery"],
    mapTop: "66%",
    mapLeft: "47%",
    mapsQuery: "Ralang Monastery, Sikkim",
  },
  {
    id: "kartok",
    name: "Kartok Monastery",
    district: "South",
    tradition: "Karma Kagyu",
    yearBuilt: "1600s",
    founder: "Lama Kartok",
    tagline: "A weathered old monastery watching over the valley of the river Rangit.",
    description:
      "One of Sikkim's older monasteries, Kartok sits quietly on a spur above the Rangit valley — worn stone, creaking prayer wheels and enormous silence.",
    architecture:
      "Old whitewashed assembly halls with faded murals and a cluster of chortens; its age shows in timber beams and hand-painted lintels rather than gilding.",
    history:
      "Dating to the 1600s, Kartok is among the oldest Karma Kagyu establishments in the state and has weathered wars, fires and centuries of monsoon.",
    festivals: ["Losar"],
    hours: "Open daylight hours; caretaker on site",
    facts: [
      "One of the oldest Karma Kagyu monasteries in Sikkim.",
      "Deliberately unpolished — its charm is its age.",
      "Practically no crowds; a true hidden gem.",
    ],
    heritage: "Regional",
    popular: false,
    hiddenGem: true,
    scene: "kartok",
    image: "/monasteries/kartok.jpg",
    nearby: ["Ralang Monastery", "Tashiding Monastery"],
    mapTop: "62%",
    mapLeft: "40%",
    mapsQuery: "Kartok Monastery, Sikkim",
  },
];

/* ---------- Map landmarks (non-monastery pins) ---------- */
export interface Landmark {
  id: string;
  label: string;
  kind: "lake" | "pass" | "peak" | "park" | "ruin";
  mapTop: string;
  mapLeft: string;
}

export const LANDMARKS: Landmark[] = [
  { id: "tsomgo", label: "Tsomgo Lake", kind: "lake", mapTop: "48%", mapLeft: "72%" },
  { id: "gurudongmar", label: "Gurudongmar Lake", kind: "lake", mapTop: "9%", mapLeft: "70%" },
  { id: "yumthang", label: "Yumthang Valley", kind: "park", mapTop: "17%", mapLeft: "54%" },
  { id: "nathula", label: "Nathula Pass", kind: "pass", mapTop: "36%", mapLeft: "78%" },
  { id: "khangchendzonga", label: "Khangchendzonga", kind: "peak", mapTop: "24%", mapLeft: "32%" },
  { id: "khecheopalri", label: "Khecheopalri Lake", kind: "lake", mapTop: "59%", mapLeft: "28%" },
  { id: "rabdentse", label: "Rabdentse Ruins", kind: "ruin", mapTop: "58%", mapLeft: "37%" },
  { id: "namchi", label: "Namchi", kind: "park", mapTop: "72%", mapLeft: "58%" },
];

export const DISTRICT_LIST: District[] = ["East", "West", "North", "South"];
export const TRADITION_LIST: Tradition[] = ["Karma Kagyu", "Nyingma"];

export const NEARBY_MAP: Record<string, string[]> = Object.fromEntries(
  MONASTERIES.map((m) => [m.id, m.nearby]),
);

/* ---------- Timeline ---------- */
export interface TimelineEvent {
  year: string;
  title: string;
  titleHi: string;
  body: string;
  bodyHi: string;
  scene: string;
  image: string;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1642",
    title: "The Namgyal Dynasty Begins",
    titleHi: "नामग्याल राजवंश की शुरुआत",
    body:
      "Three patron lamas — Lhatsun Chenpo, Ngedub and Rinpoche — gather at Yuksom and consecrate Phuntsog Namgyal as the first Chogyal, sealing the destiny of Sikkim.",
    bodyHi:
      "तीन संरक्षक लामाओं ने युक्सोम में फुनत्सोग नामग्याल को सिक्किम के प्रथम चोग्याल के रूप में राज्याभिषेक किया।",
    scene: "coronation",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "1700s",
    title: "Monasteries Flourish Across Sikkim",
    titleHi: "सिक्किम में मठों का विकास",
    body:
      "Dubdi, Pemayangtse and a hundred smaller shrines rise through the forest. Monks build temples in every valley and the golden age of monastic Buddhism begins.",
    bodyHi:
      "दुब्दी, पेमायांगत्से और सैकड़ों छोटे मंदिर जंगलों में उभरते हैं; हर घाटी में मठ बनते हैं।",
    scene: "builders",
    image: "/timeline/monasteries-flourish.jpg",
  },
  {
    year: "1800s",
    title: "Growth of Buddhist Art",
    titleHi: "बौद्ध कला का विकास",
    body:
      "Artists colour the walls of Ralang and Phodong with murals; gold leaf, crushed minerals and patient brushwork turn monastery halls into open scripture.",
    bodyHi:
      "कलाकार रालांग और फोदोंग की दीवारों को भित्तिचित्रों से सजाते हैं; मठ कक्ष पवित्र ग्रंथ बन जाते हैं।",
    scene: "artists",
    image: "/timeline/buddhist-art.jpg",
  },
  {
    year: "1975",
    title: "Sikkim Becomes a State of India",
    titleHi: "सिक्किम भारत का राज्य बना",
    body:
      "Through referendum, the kingdom dissolves into the Indian Union. Its monasteries, now heritage, keep the flame of the old faith alive in the new state.",
    bodyHi:
      "जनमत के माध्यम से राज्य भारतीय संघ में विलीन होता है; मठ विरासत बनकर आस्था की लौ जलाए रखते हैं।",
    scene: "mapchange",
    image: "/timeline/sikkim-state.jpg",
  },
  {
    year: "2026",
    title: "Digital Preservation of Monasteries Begins",
    titleHi: "मठों का डिजिटल संरक्षण शुरू",
    body:
      "Laser scans and holographic archives meet ancient stone. A new kind of pilgrimage begins — one that can walk these halls from anywhere in the world.",
    bodyHi:
      "लेज़र स्कैन और होलोग्राफ़िक अभिलेख प्राचीन पत्थरों से मिलते हैं — विश्व से कहीं भी तीर्थयात्रा संभव होती है।",
    scene: "digital",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
  },
];

/* ---------- Culture exhibits ---------- */
export interface CultureExhibit {
  id: string;
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  scene: string;
  image: string;
  body: string;
  bodyHi: string;
}

export const CULTURE: CultureExhibit[] = [
  {
    id: "festivals",
    title: "Festivals",
    titleHi: "उत्सव",
    subtitle: "Losar · Saga Dawa · Pang Lhabsol",
    subtitleHi: "लोसार · सागा दावा · पांग ल्हाबसोल",
    scene: "festival",
    image: "/culture/culture-1.jpg",
    body:
      "Sikkim's calendar is strung with festivals. Losar, the Tibetan New Year, opens winter with offerings and fresh prayer flags. Saga Dawa honours the Buddha's birth, enlightenment and passing. Pang Lhabsol celebrates the mountain god Khangchendzonga with a great masked dance, while Bumchu reads a sacred water-vessel to prophesy the year ahead.",
    bodyHi:
      "सिक्किम का कैलेंडर उत्सवों से सजा है। लोसार, तिब्बती नववर्ष, सर्दियों को प्रार्थनाओं से खोलता है। सागा दावा बुद्ध के जन्म, ज्ञान और परिनिर्वाण को समर्पित है।",
  },
  {
    id: "clothing",
    title: "Traditional Clothing",
    titleHi: "पारंपरिक वस्त्र",
    subtitle: "Bakhu · Kho · Thokro",
    subtitleHi: "बखु · खो · थोकरो",
    scene: "clothing",
    image: "/culture/culture-2.jpg",
    body:
      "The bakhu, a wraparound robe fastened with a woven sash, is worn across Sikkim in bright stripes and brocades — the Bhutia style with its sleeveless kho, the Lepcha dumdyam with its vivid checks. Monks wear the deep maroon robes of the order, with yellow for senior lamas.",
    bodyHi:
      "बखु, एक लपेटा हुआ वस्त्र, सिक्किम में चमकीली धारियों और ब्रोकेड में पहना जाता है। भिक्षु गहरे मैरून वस्त्र पहनते हैं।",
  },
  {
    id: "food",
    title: "Food",
    titleHi: "भोजन",
    subtitle: "Momos · Thukpa · Sel Roti · Gundruk",
    subtitleHi: "मोमो · थुकपा · सेल रोटी · गुन्द्रुक",
    scene: "momos",
    image: "/culture/culture-3.jpg",
    body:
      "A Sikkimese kitchen is a meeting of three cuisines. Steamed momos and thukpa arrive from Tibet; phagshapa and sel roti from Nepal; fermented gundruk and kinema are the state's own sour-salted treasures, eaten with rice at almost every meal.",
    bodyHi:
      "सिक्किम की रसोई तीन व्यंजनों का संगम है — मोमो और थुकपा तिब्बत से, सेल रोटी नेपाल से, और गुन्द्रुक व किनेमा यहाँ की अपनी धरोहर।",
  },
  {
    id: "prayerwheels",
    title: "Prayer Wheels",
    titleHi: "प्रार्थना चक्र",
    subtitle: "Turning the world's good fortune",
    subtitleHi: "संसार का सौभाग्य घुमाते हुए",
    scene: "wheels",
    image: "/culture/culture-4.jpg",
    body:
      "Each prayer wheel is filled with rolled mantras. Spinning it clockwise with the right hand is believed to send the prayers out into the world — the kindness of one rotation multiplied a thousandfold.",
    bodyHi:
      "प्रत्येक प्रार्थना चक्र में मंत्र भरे होते हैं; इसे दक्षिणावर्त घुमाना संसार में प्रार्थनाएँ भेजना माना जाता है।",
  },
  {
    id: "architecture",
    title: "Architecture",
    titleHi: "वास्तुकला",
    subtitle: "Mandala-shaped halls",
    subtitleHi: "मंडल आकार के सभाकक्ष",
    scene: "architecture",
    image: "/culture/culture-5.jpg",
    body:
      "Monasteries mirror the mandala — a walled square courtyard enclosing a central shrine, oriented to the cardinal points, roof tiers stepping toward the sky like a prayer ascending. Wood carving, painted lintels and golden finials complete the geometry.",
    bodyHi:
      "मठ मंडल का प्रतिबिम्ब हैं — दीवारों से घिरा वर्गाकार प्रांगण जिसके केंद्र में मंदिर है।",
  },
  {
    id: "music",
    title: "Music",
    titleHi: "संगीत",
    subtitle: "Long horns, cymbals, the conch",
    subtitleHi: "लंबे सींग, झाँझ, शंख",
    scene: "music",
    image: "/culture/culture-6.jpg",
    body:
      "Tibetan ritual music is a slow architecture of sound — six-foot horns calling across valleys, cymbals marking time, drums beating the heartbeat of the ritual, and the conch opening and closing each ceremony.",
    bodyHi:
      "तिब्बती अनुष्ठान संगीत ध्वनि की धीमी रचना है — छह फुट के सींग घाटियों में गूंजते हैं।",
  },
  {
    id: "dance",
    title: "Dance",
    titleHi: "नृत्य",
    subtitle: "The slow turning of cham",
    subtitleHi: "चाम का धीमा घूर्णन",
    scene: "dance",
    image: "/culture/culture-7.jpg",
    body:
      "Cham dance is prayer made movement — dancers turn in fixed circles, their steps measured, their costumes brilliant, each gesture a syllable of a mantra. Masked and drum-led, it drives away negativity and blesses onlookers.",
    bodyHi:
      "चाम नृत्य प्रार्थना का गति रूप है — नर्तक नियत वृत्तों में घूमते हैं, हर भाव मंत्र का अक्षर है।",
  },
  {
    id: "monasteries",
    title: "Monasteries",
    titleHi: "मठ",
    subtitle: "Rumtek · Pemayangtse · Tashiding",
    subtitleHi: "रुमटेक · पेमायांगत्से · ताशिदिंग",
    scene: "rumtek",
    image: "/culture/culture-8.jpg",
    body:
      "From the Karmapa's great seat at Rumtek to the tiny forest chapel of Dubdi, Sikkim's monasteries are the soul of the state. Each preserves scriptures, murals and the daily rhythm of prayer that has shaped the hills for three centuries.",
    bodyHi:
      "रुमटेक के महान मठ से लेकर दुब्दी के छोटे चैपल तक — सिक्किम के मठ ही राज्य की आत्मा हैं।",
  },
  {
    id: "manuscripts",
    title: "Ancient Manuscripts",
    titleHi: "प्राचीन पांडुलिपियाँ",
    subtitle: "Wooden covers, gold ink",
    subtitleHi: "काष्ठ आवरण, स्वर्ण स्याही",
    scene: "manuscript",
    image: "/culture/culture-9.jpg",
    body:
      "Sacred texts on hand-made paper, pressed between carved wooden covers and wrapped in silk. Scribes copied the word of the Buddha by hand, each page a meditation.",
    bodyHi:
      "हाथ से बने कागज़ पर लिखे ग्रंथ, नक्काशीदार काष्ठ आवरणों में सुरक्षित हैं — प्रत्येक पृष्ठ एक ध्यान।",
  },
  {
    id: "symbols",
    title: "Buddhist Symbols",
    titleHi: "बौद्ध प्रतीक",
    subtitle: "The eight auspicious signs",
    subtitleHi: "आठ शुभ चिह्न",
    scene: "wheels",
    image: "/culture/culture-10.jpg",
    body:
      "The endless knot, the lotus, the golden fish, the parasol, the conch, the vase, the banner and the wheel — the eight auspicious symbols recur in murals, thangkas and woodwork, each an instruction about compassion and impermanence.",
    bodyHi:
      "अनंत गाँठ, कमल, सुनहरी मछली, छत्र, शंख, कलश, ध्वज और चक्र — ये आठ शुभ चिह्न हर चित्रकला में करुणा और अनित्यता का पाठ सिखाते हैं।",
  },
  {
    id: "paintings",
    title: "Paintings",
    titleHi: "चित्रकला",
    subtitle: "Thangkas of mineral and gold",
    subtitleHi: "खनिज और स्वर्ण से बनी थंगका",
    scene: "thangka",
    image: "/culture/culture-11.jpg",
    body:
      "Thangka painting follows a strict grammar — a perfectly measured grid, ground mineral pigments, and gold leaf applied last. A single masterpiece can take months, and its iconography is never improvised.",
    bodyHi:
      "थंगका चित्रकला का अपना कठोर व्याकरण है — सटीक माप, खनिज रंग और अंत में स्वर्ण पत्ती। एक चित्र महीनों में बनता है।",
  },
  {
    id: "handicrafts",
    title: "Local Handicrafts",
    titleHi: "स्थानीय हस्तशिल्प",
    subtitle: "Carpets, bamboo, hand-made paper",
    subtitleHi: "कारपेट, बाँस, हस्तनिर्मित कागज़",
    scene: "flags",
    image: "/culture/culture-12.jpg",
    body:
      "Sikkimese hands weave carpets and blankets, carve prayer wheels and masks, stitch thangkas and fold fine paper from the daphne shrub. Every object carries the forest and the monastery into the home.",
    bodyHi:
      "सिक्किमी हाथ कारपेट बुनते हैं, प्रार्थना चक्र और मुखौटे गढ़ते हैं, और झाड़ियों से महीन कागज़ बनाते हैं।",
  },
  {
    id: "monklife",
    title: "Monastic Life",
    titleHi: "भिक्षु जीवन",
    subtitle: "Study, debate, chant, sleep under stars",
    subtitleHi: "अध्ययन, शास्त्रार्थ, जप",
    scene: "monk",
    image: "/culture/culture-13.jpg",
    body:
      "The day begins before sunrise with the deep tone of the conch. Monks study Buddhist philosophy, debate in courtyards, chant in unison and live in quiet service to the sangha.",
    bodyHi:
      "सूर्योदय से पहले शंख की गहरी ध्वनि से दिन शुरू होता है; भिक्षु दर्शन का अध्ययन और सामूहिक जप करते हैं।",
  },
  {
    id: "language",
    title: "Language",
    titleHi: "भाषा",
    subtitle: "Bhutia · Lepcha · Nepali · Hindi",
    subtitleHi: "भूटिया · लेपचा · नेपाली · हिन्दी",
    scene: "manuscript",
    image: "/culture/culture-14.jpg",
    body:
      "Sikkim speaks in many tongues — Bhutia and Lepcha, the autochthonous languages of the hills, Nepali, the lingua franca of everyday life, and Hindi. Each carries a distinct script and a distinct way of naming the world.",
    bodyHi:
      "सिक्किम कई भाषाएँ बोलता है — भूटिया और लेपचा, पहाड़ों की अपनी भाषाएँ, नेपाली और हिन्दी।",
  },
  {
    id: "religion",
    title: "Religion",
    titleHi: "धर्म",
    subtitle: "Buddhism · Hinduism · Bon",
    subtitleHi: "बौद्ध · हिन्दू · बॉन",
    scene: "lamps",
    image: "/culture/culture-1.jpg",
    body:
      "Buddhism in its Karma Kagyu and Nyingma schools shares the hills with Hinduism, the pre-Buddhist Bon tradition, and Lepcha animism. Monasteries, temples and sacred lakes stand side by side, each with its own ceremonies and its own saints.",
    bodyHi:
      "बौद्ध धर्म, हिन्दू धर्म और बॉन परंपरा एक साथ पहाड़ों में रहते हैं — मठ, मंदिर और पवित्र झीलें साथ-साथ खड़े हैं।",
  },
];

/* ---------- Gallery ---------- */
export interface GalleryItem {
  id: string;
  scene: string;
  category: string;
  title: string;
  place: string;
  credit: string;
}

export const GALLERY: GalleryItem[] = [
  { id: "g1", scene: "rumtek", category: "Monasteries", title: "Golden roofs at Rumtek", place: "Gangtok", credit: "Bernard Gagnon" },
  { id: "g2", scene: "pemayangtse", category: "Monasteries", title: "The supreme lotus above Pelling", place: "Pelling", credit: "Prof Ranga Sai" },
  { id: "g3", scene: "tsomgo", category: "Mountains", title: "Tsomgo in morning light", place: "East Sikkim", credit: "Kuldeepburjbhalaike" },
  { id: "g4", scene: "cham", category: "Festivals", title: "Masked dancers of cham", place: "Monastery courtyards", credit: "Ondrej Havelka" },
  { id: "g5", scene: "thangka", category: "Ancient Paintings", title: "Illuminated thangka", place: "Ralang", credit: "Prof Ranga Sai" },
  { id: "g6", scene: "dubdi", category: "Monasteries", title: "The oldest door in Sikkim", place: "Yuksom", credit: "Rangan Datta" },
  { id: "g7", scene: "khecheopalri", category: "Prayer Ceremonies", title: "Sacred waters of Khecheopalri", place: "West Sikkim", credit: "Amitabha Gupta" },
  { id: "g8", scene: "yumthang", category: "Mountains", title: "Valley of flowers", place: "Yumthang", credit: "Joginder Pathak" },
  { id: "g9", scene: "gurudongmar", category: "Night Photography", title: "The sacred lake at the roof of the world", place: "North Sikkim", credit: "Yoghya" },
  { id: "g10", scene: "phodong", category: "Architecture", title: "Tiered roofs against sky", place: "Phodong", credit: "Amitabha Gupta" },
  { id: "g11", scene: "khangchendzonga", category: "Snow Landscapes", title: "Sunrise over Kanchenjunga", place: "Pelling", credit: "Santanu Paul" },
  { id: "g12", scene: "ravangla", category: "Drone Views", title: "The valley from above", place: "Ravangla", credit: "Subhrajyoti07" },
];

/* ---------- Voices (creator feed) ---------- */
export interface Voice {
  id: string;
  platform: "instagram" | "youtube" | "blog";
  handle: string;
  caption: string;
  location: string;
  scene: string;
  url: string;
}

export const VOICES: Voice[] = [
  {
    id: "v1",
    platform: "instagram",
    handle: "Sikkim Tourism",
    caption: "Sunrise at Pemayangtse — the mountains were showing off.",
    location: "Pemayangtse",
    scene: "pemayangtse",
    url: "https://www.instagram.com/sikkimtourism/",
  },
  {
    id: "v2",
    platform: "youtube",
    handle: "Sikkim Tourism Films",
    caption: "A cinematic walk through Rumtek's golden halls.",
    location: "Rumtek",
    scene: "rumtek",
    url: "https://www.youtube.com/results?search_query=sikkim+tourism+official+rumtek",
  },
  {
    id: "v3",
    platform: "blog",
    handle: "Sikkim Tourism (Official)",
    caption: "Everything you need to plan your journey into the clouds.",
    location: "Gangtok",
    scene: "gangtok",
    url: "https://www.sikkimtourism.gov.in",
  },
  {
    id: "v4",
    platform: "instagram",
    handle: "Department of Tourism, Sikkim",
    caption: "Tashiding at dusk. The holiest hill in Sikkim.",
    location: "Tashiding",
    scene: "tashiding",
    url: "https://www.instagram.com/explore/tags/tashiding/",
  },
  {
    id: "v5",
    platform: "youtube",
    handle: "Sikkim Tourism Films",
    caption: "Cham dance season — masks, drums and rain.",
    location: "Enchey",
    scene: "cham",
    url: "https://www.youtube.com/results?search_query=cham+dance+sikkim+monastery",
  },
  {
    id: "v6",
    platform: "blog",
    handle: "Wikipedia — Dubdi Monastery",
    caption: "Dubdi is small, weathered and utterly perfect.",
    location: "Dubdi",
    scene: "dubdi",
    url: "https://en.wikipedia.org/wiki/Dubdi_Monastery",
  },
  {
    id: "v7",
    platform: "instagram",
    handle: "Explore #Sikkim",
    caption: "Kanchenjunga at first light from the Pelling ridge.",
    location: "Pelling",
    scene: "khangchendzonga",
    url: "https://www.instagram.com/explore/tags/sikkim/",
  },
  {
    id: "v8",
    platform: "blog",
    handle: "Wikipedia — Phodong Monastery",
    caption: "Phodong's gold halls under a northern sky.",
    location: "Phodong",
    scene: "phodong",
    url: "https://en.wikipedia.org/wiki/Phodong_Monastery",
  },
];

/* ---------- FAQ / Guide ---------- */
export interface GuideFaq {
  q: string;
  a: string;
}

export const GUIDE_FAQ: GuideFaq[] = [
  {
    q: "Do I need a permit to visit monasteries in Sikkim?",
    a: "Indian nationals need an Inner Line Permit for North Sikkim (e.g. Phodong). Foreign nationals require a Protected Area Permit — best arranged through a registered tour operator before arrival.",
  },
  {
    q: "What should I wear inside a monastery?",
    a: "Cover shoulders and knees, and remove shoes before entering prayer halls. Ask before photographing monks or sacred objects.",
  },
  {
    q: "When is the best time to visit?",
    a: "March to May for blooms and clear peaks; September to November for crisp light and festivals like Losar in winter.",
  },
  {
    q: "Can I take photos inside the shrine halls?",
    a: "Often not — some inner shrines prohibit photography entirely. When in doubt, ask a monk. Flash is almost always forbidden.",
  },
  {
    q: "How do I reach Rumtek from Gangtok?",
    a: "About 45 minutes by road, southeast of Gangtok. Public share taxis and private cabs run daily.",
  },
];
