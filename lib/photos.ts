/**
 * Real photographs of Sikkim, sourced from Wikimedia Commons (freely licensed,
 * attributed in the Credits page). Keys match `scene` ids used across the site.
 * When a photo cannot load, components fall back to the painted Scenic art.
 */
export interface PhotoInfo {
  file: string;
  credit: string;
}

export const PHOTOS: Record<string, PhotoInfo> = {
  rumtek: { file: "Rumtek Monastery 04.jpg", credit: "Bernard Gagnon / Wikimedia Commons" },
  pemayangtse: { file: "Pemayangtse Monastery Sikkim India.jpg", credit: "Prof Ranga Sai / Wikimedia Commons" },
  enchey: { file: "Enchey Monastery - Gangtok - Sikkim - India.jpg", credit: "Wingedtree / Wikimedia Commons" },
  tashiding: { file: "Tashiding Monastery.jpg", credit: "Prof Ranga Sai / Wikimedia Commons" },
  dubdi: { file: "Dubdi Monastery 2.jpg", credit: "Rangan Datta Wiki / Wikimedia Commons" },
  ralang: { file: "Ralang monastery sikkim 1.jpg", credit: "Joydeep / Wikimedia Commons" },
  phodong: {
    file: 'Phodong "Karma Thubten Tashi ChoKhorling" Monastery at Phodong town, North Sikkim, India 20.jpg',
    credit: "Amitabha Gupta / Wikimedia Commons",
  },

  tsomgo: { file: "Changu (Tsomgo) Lake.jpg", credit: "Kuldeepburjbhalaike / Wikimedia Commons" },
  gurudongmar: { file: "Gurudongmar Lake Sikkim, India (edit).jpg", credit: "Yoghya / Wikimedia Commons" },
  nathula: { file: "Nathu La, a mountain pass in the Himalayas on the Indo-China Border.jpg", credit: "$udeep Bajpai / Wikimedia Commons" },
  yumthang: { file: "Yumthang valley, Lachung Sikkim India 2012.jpg", credit: "Joginder Pathak / Wikimedia Commons" },
  khangchendzonga: { file: "Sunrise over Kangchenjunga.jpg", credit: "Santanu Paul / Wikimedia Commons" },
  gangtok: { file: "Sikkim Gangtok.jpg", credit: "Kailas98 / Wikimedia Commons" },
  pelling: { file: "Kanchenjunga Peak as viewed from Pelling, Sikkim.jpg", credit: "Santhosh.hugar / Wikimedia Commons" },
  namchi: { file: "Guru Padmasambhava statue in Samdruptse Hill, Namchi, district of South Sikkim 09.jpg", credit: "Amitabha Gupta / Wikimedia Commons" },
  ravangla: { file: "Large Gautama Buddha statue in Buddha Park of Ravangla, Sikkim.jpg", credit: "Subhrajyoti07 / Wikimedia Commons" },
  lachen: { file: "Lachen city.jpg", credit: "Tarunsamanta / Wikimedia Commons" },
  lachung: { file: "Lachung Town.jpg", credit: "Indrajit Das / Wikimedia Commons" },
  yuksom: { file: "Panoramic view of Yuksom, West Sikkim, in India.jpg", credit: "Billjones94 / Wikimedia Commons" },
  zuluk: { file: "Kanchenjunga from Zuluk, Sikkim (cropped).jpg", credit: "Madhumita Das / Wikimedia Commons" },
  aritar: { file: "Lampokhari or Aritar Lake at Aritar, East Sikkim 03.jpg", credit: "Amitabha Gupta / Wikimedia Commons" },
  barsey: { file: "Barsey Rhododendron Sanctuary in late april.jpg", credit: "Spattadar / Wikimedia Commons" },
  khecheopalri: { file: "Khecheopalri Lake, West Sikkim district 01.jpg", credit: "Amitabha Gupta / Wikimedia Commons" },
  cham: { file: "Buddhist monks dancing the Cham in the Himalayan monastery of Lamayuru.jpg", credit: "Dr. Ondrej Havelka / Wikimedia Commons" },
  flags: { file: "Buddhist prayer flags, Sikkim, India (8064022092).jpg", credit: "flowcomm / Wikimedia Commons" },
  momos: { file: "Buff Momos with Sauce.jpg", credit: "Gaurav Dhwaj Khadka / Wikimedia Commons" },
  thangka: { file: "Thangka at Ralang Monastery sikkim.jpg", credit: "Prof Ranga Sai / Wikimedia Commons" },
};
