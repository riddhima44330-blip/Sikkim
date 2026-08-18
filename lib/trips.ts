export interface Trip {
  id: string;
  title: string;
  description: string;
  scene: string;
  image?: string; // optional override — uses a real local photo when set
  bestSeason: string;
  duration: string;
  places: string[];
  highlights: string[];
  exploreUrl: string;
}

export const TRIPS: Trip[] = [
  {
    id: "weekend",
    title: "Weekend Trip",
    description:
      "A short escape into the clouds — Gangtok's monasteries, a lake at altitude, and the city's quiet cafés.",
    scene: "gangtok",
    bestSeason: "All year; Mar–May & Sep–Nov",
    duration: "2–3 days",
    places: ["Gangtok", "Tsomgo Lake", "Rumtek Monastery", "Do Drul Chorten"],
    highlights: ["Dawn prayers at Rumtek", "Tsomgo Lake in morning light", "MG Marg's evening walk", "Cable car over Gangtok"],
    exploreUrl: "https://www.makemytrip.com/holidays-india/sikkim-weekend-trips.html",
  },
  {
    id: "adventure",
    title: "Adventure Trip",
    description:
      "White water, high passes and treks through rhododendron forests — Sikkim's adrenaline side.",
    scene: "yumthang",
    bestSeason: "Sep–Nov; May–Jun",
    duration: "5–7 days",
    places: ["Teesta / Rangit rivers", "Yumthang Valley", "Goechala Trek", "Nathula Pass"],
    highlights: ["River rafting on the Teesta", "Trek toward Kanchenjunga base", "Snowfield fun at Yumthang", "High-altitude cycling"],
    exploreUrl: "https://www.yatra.com/holiday-packages/sikkim-adventure-tour",
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage Tour",
    description:
      "Walk the sacred circuit — from the holiest hill at Tashiding to the Karmapa's seat at Rumtek.",
    scene: "tashiding",
    bestSeason: "Mar–May; Oct–Dec",
    duration: "5–6 days",
    places: ["Rumtek", "Enchey", "Pemayangtse", "Tashiding", "Dubdi", "Phodong"],
    highlights: ["Bumchu vessel at Tashiding", "Zangtopalri wooden mandala", "Dawn at Pemayangtse", "Spin wheels at Phodong"],
    exploreUrl: "https://www.sikkimtourism.gov.in",
  },
  {
    id: "nature",
    title: "Nature Escape",
    description:
      "Botanical gardens, sacred lakes and bird-filled forests for slow travellers and dreamers.",
    scene: "barsey",
    bestSeason: "Mar–May (rhododendrons); Sep–Nov",
    duration: "4–6 days",
    places: ["Barsey Rhododendron Sanctuary", "Khecheopalri Lake", "Aritar Lake", "Maan Dhaan (Maenam) Hill"],
    highlights: ["Rhododendron bloom trails", "Khecheopalri's sacred stillness", "Birdwatching at dawn", "Forest walks above Ravangla"],
    exploreUrl: "https://www.tripadvisor.in/Attractions-g297674-Activities-Sikkim.html",
  },
  {
    id: "family",
    title: "Family Vacation",
    description:
      "Gentle days, ropeways and monastery gardens — everything easy, everything memorable.",
    scene: "ravangla",
    bestSeason: "Mar–Jun; Sep–Dec",
    duration: "5–7 days",
    places: ["Gangtok", "Namchi", "Ravangla", "Pelling"],
    highlights: ["Ropeway over Gangtok", "Giant Buddha at Ravangla", "Samdruptse statue at Namchi", "Pelling's mountain views"],
    exploreUrl: "https://www.makemytrip.com/holidays-india/sikkim-family-tour.html",
  },
  {
    id: "photography",
    title: "Photography Tour",
    description:
      "Golden roofs, prayer flags and Kanchenjunga at first light — a tour built around the frame.",
    scene: "khangchendzonga",
    bestSeason: "Oct–Apr (clear peaks)",
    duration: "6–8 days",
    places: ["Pelling", "Tsomgo Lake", "Gurudongmar Lake", "Lachung", "Rumtek"],
    highlights: ["Sunrise on Kanchenjunga", "Gurudongmar at dawn", "Monastery gold at golden hour", "Prayer flags in high wind"],
    exploreUrl: "https://www.sikkimtourism.gov.in",
  },
  {
    id: "cultural",
    title: "Cultural Tour",
    description:
      "Festivals, masks, murals and the kitchen table — a deep immersion in Sikkim's living heritage.",
    scene: "cham",
    bestSeason: "Feb (Losar); Aug (Pang Lhabsol)",
    duration: "6–8 days",
    places: ["Gangtok", "Pemayangtse", "Ralang", "Tashiding", "Dzongu"],
    highlights: ["Cham dance festivals", "Thangka masterclass", "Lepcha village life in Dzongu", "Sikkimese food trail"],
    exploreUrl: "https://www.tripadvisor.in/Attractions-g297674-Activities-c42-Sikkim.html",
  },
  {
    id: "luxury",
    title: "Luxury Stay",
    description:
      "Forest lodges, spa evenings and private monastery tours — Sikkim at its most serene.",
    scene: "pelling",
    image: "/trips/luxury-stay.jpg",
    bestSeason: "Oct–Apr",
    duration: "4–5 days",
    places: ["Gangtok", "Pelling", "Namchi"],
    highlights: ["Boutique forest lodges", "Private sunrise viewings", "Candle-lit spa evenings", "Curated monastery visits"],
    exploreUrl: "https://www.booking.com/destination/in/sikkim.en-gb.html",
  },
  {
    id: "backpacking",
    title: "Backpacking Route",
    description:
      "Share taxis, homestays and high passes — the honest way to know Sikkim on a budget.",
    scene: "zuluk",
    image: "/trips/backpacking-route.jpg",
    bestSeason: "Sep–Nov; Mar–May",
    duration: "10–14 days",
    places: ["Gangtok", "Lachung", "Lachen", "Gurudongmar Lake", "Yuksom", "Zuluk"],
    highlights: ["Share-taxi mountain bus routes", "Homestays in Lachung & Lachen", "Old Silk Route loop via Zuluk", "Sunrise over the great peaks"],
    exploreUrl: "https://www.hostelworld.com/blog/sikkim-backpacking-guide/",
  },
];
