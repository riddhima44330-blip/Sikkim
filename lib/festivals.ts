export interface Festival {
  id: string;
  name: string;
  month: string;
  location: string;
  community: string;
  scene: string;
  image: string;
  history: string;
  significance: string;
  celebrated: string;
  bestTime: string;
  videoUrl: string;
  reelUrl: string;
}

export const FESTIVALS: Festival[] = [
  {
    id: "losar",
    name: "Losar",
    month: "February",
    location: "All monasteries; Rumtek, Pemayangtse, Ralang",
    community: "Bhutia & Tibetan Buddhist",
    scene: "festival",
    image: "/festivals/festival-1.jpg",
    history:
      "Losar predates Buddhism in Tibet, beginning as a winter rite of the Bon tradition before merging with the Buddhist New Year. In Sikkim it became the great winter festival of the Bhutia community.",
    significance:
      "A cleansing and renewal — old misfortunes are swept out, new prayer flags hoisted, and the year is welcomed with offerings to the deities and to the house.",
    celebrated:
      "Homes are whitewashed and dressed in new flags; monasteries hold cham dances and special pujas. Families exchange khadas (ceremonial scarves), share festive meals, and young people play the traditional dice and arrow games.",
    bestTime: "Feb–Mar (dates follow the Tibetan lunar calendar)",
    videoUrl: "https://www.youtube.com/results?search_query=losar+sikkim+monastery",
    reelUrl: "https://www.instagram.com/explore/tags/losarsikkim/",
  },
  {
    id: "sagadawa",
    name: "Saga Dawa",
    month: "May–June",
    location: "Gangtok, Rumtek, Tashiding",
    community: "Buddhist",
    scene: "festival",
    image: "/festivals/festival-2.jpg",
    history:
      "Saga Dawa is the holiest month in the Tibetan Buddhist calendar, marking three events in the life of the Buddha — his birth, enlightenment and mahaparinirvana — traditionally held to have all occurred on the full moon of the fourth lunar month.",
    significance:
      "A month of multiplied merit: every prayer, offering and kind act is believed to count a thousandfold.",
    celebrated:
      "Monks chant continuously in the main halls, pilgrims circumambulate stupas and spin prayer wheels, families light butter lamps, and many observe acts of generosity — releasing captive animals and feeding the needy.",
    bestTime: "Full moon of the 4th lunar month (May–June)",
    videoUrl: "https://www.youtube.com/results?search_query=saga+dawa+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/sagadawa/",
  },
  {
    id: "panglhabsol",
    name: "Pang Lhabsol",
    month: "August–September",
    location: "Pemayangtse, Tashiding, Rabong",
    community: "Bhutia & Buddhist",
    scene: "cham",
    image: "/festivals/festival-3.jpg",
    history:
      "Introduced by the first Chogyal in the 17th century, Pang Lhabsol honours the deity Kangchenjunga — the mountain that guards Sikkim — and commemorates the blood-brotherhood sworn between the Bhutia and Lepcha peoples.",
    significance:
      "A festival of belonging: the mountain god, the land and the two founding peoples are all honoured together in one great ceremony.",
    celebrated:
      "The masked cham dance is performed at Pemayangtse and Tashiding, with dancers in spectacular costumes and masks representing the mountain deity and his consort. Offerings are made toward the sacred peak.",
    bestTime: "15th day of the 7th lunar month (Aug–Sep)",
    videoUrl: "https://www.youtube.com/results?search_query=pang+labhol+festival+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/panglhabsol/",
  },
  {
    id: "losoong",
    name: "Losoong",
    month: "December",
    location: "Rumtek, Phodong, Ralang",
    community: "Bhutia",
    scene: "festival",
    image: "/festivals/festival-4.jpg",
    history:
      "Losoong is the Sikkimese Bhutia New Year, celebrated on the last two days of the tenth month of the Tibetan calendar. It has been the state's great winter festival for centuries.",
    significance:
      "The year's harvest is offered in thanks, and the coming season is blessed through dance and prayer.",
    celebrated:
      "Rumtek and Phodong host spectacular cham dances. Homes are filled with guests and festive food, and the famous sword dance of the Drokpa (nomad) tradition marks the close of the old year.",
    bestTime: "Dec (Tibetan 10th month end)",
    videoUrl: "https://www.youtube.com/results?search_query=losoong+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/losoongsikkim/",
  },
  {
    id: "bumchu",
    name: "Bumchu",
    month: "February–March",
    location: "Tashiding Monastery",
    community: "Buddhist",
    scene: "tashiding",
    image: "/festivals/festival-5.jpg",
    history:
      "At Tashiding, the holiest monastery in Sikkim, a sacred vase of water is opened once a year during Bumchu. The level of the water is said to prophesy the fortunes of the coming year.",
    significance:
      "The water level — rising, falling, or unchanged — is read as a forecast of prosperity, hardship or peace for the year ahead.",
    celebrated:
      "Pilgrims climb to the hilltop monastery in their thousands. The vase is opened before the monks and assembled faithful, the water is distributed as blessed tsar (holy water), and the vessel is sealed again with fresh water for the next year.",
    bestTime: "15th day of the 1st Tibetan month (Feb–Mar)",
    videoUrl: "https://www.youtube.com/results?search_query=bumchu+festival+tashiding",
    reelUrl: "https://www.instagram.com/explore/tags/bumchufestival/",
  },
  {
    id: "drugpateshi",
    name: "Drupka Teshi",
    month: "August",
    location: "Monasteries across Sikkim",
    community: "Buddhist",
    scene: "festival",
    image: "/festivals/festival-6.jpg",
    history:
      "Drupka Teshi commemorates the Buddha's first sermon in the Deer Park at Sarnath, where he set the Wheel of Dharma in motion.",
    significance:
      "Honours the turning of the Dharma wheel — the moment the Buddha taught the path to liberation.",
    celebrated:
      "Monks read scriptures and perform prayers, and monasteries fly new prayer flags. Lamps are lit at dusk in a quiet evening of devotion.",
    bestTime: "4th day of the 6th Tibetan month (Aug)",
    videoUrl: "https://www.youtube.com/results?search_query=drupka+teshi",
    reelUrl: "https://www.instagram.com/explore/tags/drukpateshi/",
  },
  {
    id: "maghesankranti",
    name: "Maghe Sankranti",
    month: "January",
    location: "Gangtok and households statewide",
    community: "Hindu (Nepali)",
    scene: "flags",
    image: "/festivals/festival-7.jpg",
    history:
      "The Nepali community's mid-winter festival, marking the sun's northward journey. For centuries it has been a day of ritual bathing, feasting and family reunion.",
    significance:
      "A day of purification and new beginnings as the sun begins its return.",
    celebrated:
      "Families bathe in sacred rivers, exchange seasonal sweets of til and gud (sesame and jaggery), fly kites, and share the warm winter dish of chaku and khichadi.",
    bestTime: "Mid-January (solar)",
    videoUrl: "https://www.youtube.com/results?search_query=maghe+sankranti+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/maghesankranti/",
  },
  {
    id: "dasain",
    name: "Dasain",
    month: "October",
    location: "Across Sikkim; temples in Gangtok and Namchi",
    community: "Hindu (Nepali)",
    scene: "festival",
    image: "/festivals/festival-8.jpg",
    history:
      "The great Nepali festival of victory — the triumph of the goddess Durga over the demon Mahishasura — brought to Sikkim by its Nepali settlers.",
    significance:
      "A celebration of the victory of good over evil, and of family reunion and blessing.",
    celebrated:
      "The ninth day is devoted to the goddess with animal sacrifice and tika ceremonies on the tenth day. Elders place the red tika on the foreheads of younger family members and bless them.",
    bestTime: "Sept–Oct (lunar)",
    videoUrl: "https://www.youtube.com/results?search_query=dashain+dasain+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/dasainsikkim/",
  },
  {
    id: "tihar",
    name: "Tihar",
    month: "October–November",
    location: "Homes across Sikkim",
    community: "Hindu (Nepali)",
    scene: "lamps",
    image: "/festivals/festival-9.jpg",
    history:
      "The festival of lights follows Dasain, honouring the crow, the dog, the cow and the goddess of fortune, Lakshmi.",
    significance:
      "Five days of gratitude for the creatures and forces that sustain life, and a welcome to prosperity.",
    celebrated:
      "Homes glow with rows of oil lamps and rangoli (flower-and-colour patterns). On the fifth day, Bhai Tika, brothers and sisters exchange garlands and mark each other's foreheads as a bond of love and protection.",
    bestTime: "Oct–Nov (lunar)",
    videoUrl: "https://www.youtube.com/results?search_query=tihar+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/tiharsikkim/",
  },
  {
    id: "sonamlhochhar",
    name: "Sonam Lhochhar",
    month: "December–January",
    location: "Lepcha households; Dzongu and across West Sikkim",
    community: "Lepcha",
    scene: "flags",
    image: "/festivals/festival-10.jpg",
    history:
      "The New Year of the Lepcha people, celebrated on the first day of their calendar, usually late December or early January. It is among the most ancient festivals of Sikkim's first inhabitants.",
    significance:
      "A renewal of the bond between the Lepcha people and the mountains they call their own.",
    celebrated:
      "Families gather in Dzongu and West Sikkim for traditional archery contests, folk songs and sacred mountain dances.",
    bestTime: "Dec–Jan",
    videoUrl: "https://www.youtube.com/results?search_query=sonam+lhochhar+sikkim",
    reelUrl: "https://www.instagram.com/explore/tags/sonamlhochhar/",
  }
];
