export interface Place {
  id: string;
  name: string;
  district: string;
  scene: string;
  image?: string;
  description: string;
  bestTime: string;
  gem?: boolean;
  hiddenTip?: string;
}

export const FAMOUS_PLACES: Place[] = [
  {
    id: "tsomgo",
    name: "Tsomgo (Changu) Lake",
    district: "East Sikkim",
    scene: "tsomgo",
    description:
      "A glacial lake at 3,753 m cradled by mountains, glowing turquoise through the seasons — sacred to the local Buddhist and Hindu communities.",
    bestTime: "Mar–Jun; Sep–Dec",
  },
  {
    id: "nathula",
    name: "Nathula Pass",
    district: "East Sikkim",
    scene: "nathula",
    description:
      "A 4,310 m pass on the historic Silk Route to Tibet, where the Indo-China border gate stands among prayer flags and high-altitude winds.",
    bestTime: "May–Oct (permit + clearance required)",
  },
  {
    id: "yumthang",
    name: "Yumthang Valley",
    district: "North Sikkim",
    scene: "yumthang",
    description:
      "The 'Valley of Flowers' of Sikkim — rhododendron blooms, the swirl of the Lachung river and meadows beneath Himalayan giants.",
    bestTime: "Mar–May (blooms); Nov–Feb (snow)",
  },
  {
    id: "gurudongmar",
    name: "Gurudongmar Lake",
    district: "North Sikkim",
    scene: "gurudongmar",
    description:
      "One of the highest lakes in the world at 5,430 m, sacred to Buddhists, Hindus and Sikhs alike — its waters said to bless the region.",
    bestTime: "Jun–Oct (beyond snowline)",
  },
  {
    id: "khecheopalri",
    name: "Khecheopalri Lake",
    district: "West Sikkim",
    scene: "khecheopalri",
    description:
      "The 'Wishing Lake' — a mirror-still sacred lake in the forest where no leaf is said to rest on the water's surface.",
    bestTime: "Mar–Jun; Sep–Nov",
  },
  {
    id: "pelling",
    name: "Pelling",
    district: "West Sikkim",
    scene: "pelling",
    description:
      "A hill town famous for its uninterrupted views of Kanchenjunga and its proximity to Pemayangtse and Sangachoeling monasteries.",
    bestTime: "Oct–Apr (clear skies)",
  },
  {
    id: "zuluk",
    name: "Zuluk",
    district: "East Sikkim",
    scene: "zuluk",
    image: "/activities/zuluk.jpg",
    description:
      "A loop of thirty switchbacks on the Old Silk Route — a photographer's dream rising through mist toward the Nathang Valley.",
    bestTime: "Sep–Nov; Mar–May",
  },
  {
    id: "lachen",
    name: "Lachen",
    district: "North Sikkim",
    scene: "lachen",
    description:
      "A high mountain village on the road to Gurudongmar — prayer-wheel-lined lanes and barley fields beneath the great peaks.",
    bestTime: "Sep–Dec; Apr–May",
  },
];

export const HIDDEN_GEMS: Place[] = [
  {
    id: "maenam",
    name: "Maan Dhaan (Maenam) Hill",
    district: "South Sikkim",
    scene: "barsey",
    description:
      "A wild ridge above Ravangla draped in cloud forest, with an 8 km ridge walk and legendary mountain views, far from the crowds.",
    bestTime: "Mar–May; Oct–Nov",
    gem: true,
    hiddenTip: "Trek the full ridge from Ravangla to Maenam Peak at sunrise.",
  },
  {
    id: "aritar",
    name: "Aritar Lake",
    district: "East Sikkim",
    scene: "tsomgo",
    description:
      "A turquoise gem of a lake in the far east, circled by forest — boating, a lakeside lamahouse and the historic Aritar Gumpa.",
    bestTime: "Oct–Mar",
    gem: true,
    hiddenTip: "Camp beside the lake to catch the mirror reflections.",
  },
  {
    id: "temi",
    name: "Temi Tea Garden",
    district: "South Sikkim",
    scene: "temi",
    image: "/activities/temi.jpg",
    description:
      "India's only organic tea estate — emerald terraces rolling into a quiet valley, and the finest tea you can taste at source.",
    bestTime: "Apr–Nov",
    gem: true,
    hiddenTip: "The estate factory sells single-estate teas not available elsewhere.",
  },
  {
    id: "dzongu",
    name: "Dzongu",
    district: "North Sikkim",
    scene: "manuscript",
    description:
      "The reserved homeland of the Lepcha people — sacred folklore, bamboo bridges and the purest river valley in Sikkim.",
    bestTime: "Sep–Nov; Apr–May",
    gem: true,
    hiddenTip: "A Lepcha homestay here offers storytelling you won't find in any guide.",
  },
  {
    id: "dubdi",
    name: "Dubdi Monastery",
    district: "West Sikkim",
    scene: "dubdi",
    description:
      "Sikkim's oldest monastery (1701), tucked in silent woods above Yuksom — a tiny jewel of painted gold and fading murals.",
    bestTime: "Mar–May; Oct–Dec",
    gem: true,
    hiddenTip: "The 40-minute forest climb from Yuksom is as sacred as the shrine.",
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    district: "West Sikkim",
    scene: "tashiding",
    description:
      "The holiest of all Sikkim monasteries, perched on a conical hill — its sacred water and the Bumchu vessel draw pilgrims from afar.",
    bestTime: "Feb–Mar (Bumchu festival)",
    gem: true,
    hiddenTip: "The panorama of the entire Tashiding valley from the crown of the hill.",
  },
  {
    id: "sangachoeling",
    name: "Sangachoeling Monastery",
    district: "West Sikkim",
    scene: "rumtek",
    description:
      "One of Sikkim's oldest monasteries, reached by a quiet forest trail with dramatic views over the Rangit gorge.",
    bestTime: "Oct–Apr",
    gem: true,
    hiddenTip: "Sunrise from the monastery viewpoint over the gorge.",
  },
  {
    id: "phodong",
    name: "Phodong Monastery",
    district: "North Sikkim",
    scene: "phodong",
    description:
      "A 300-year-old Karma Kagyu seat of great spiritual weight, sitting in peaceful farmland far off the tourist track.",
    bestTime: "Sep–Nov; Feb–Mar",
    gem: true,
    hiddenTip: "Combine with nearby Ralang and Labrang in one quiet circuit.",
  },
];
