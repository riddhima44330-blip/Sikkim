"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "hi";

export const LANGS: Array<{ code: Lang; label: string; native: string }> = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "brand": "SIKKIM",
  "tagline": "Where the Mist Meets the Divine",
  "nav.home": "Home",
  "nav.explore": "Explore",
  "nav.timeline": "Timeline",
  "nav.heritage": "Heritage",
  "nav.plan": "Plan",
  "nav.contact": "Contact",
  "lang.switch": "English / हिन्दी",

  "intro.scroll": "Scroll to enter",
  "intro.hear": "You hear",
  "intro.wind": "Wind through the mountains",
  "intro.bells": "Temple bells in the distance",
  "intro.birds": "Birds singing at dawn",
  "intro.soundoff": "Sound off",
  "intro.soundon": "Hear the mountains",

  "home.scroll": "Scroll to explore",
  "home.enter": "Enter the monastery",

  "map.kicker": "Sacred Himalaya",
  "map.title": "Discover Sikkim",
  "map.subtitle":
    "Trace the monasteries, landmarks and hidden gems of Sikkim upon an old explorer's parchment.",
  "map.search": "Search monasteries",
  "map.district": "All districts",
  "map.type": "All monastery types",
  "map.viewby": "View by",
  "map.view.district": "District",
  "map.view.heritage": "Heritage Level",
  "map.view.popular": "Popular",
  "map.view.gems": "Hidden Gems",
  "map.places": "places to discover",
  "map.layers": "Layers",
  "map.legend": "Legend",
  "map.reset": "Reset",
  "map.filters": "Filters",
  "map.noresults": "No monasteries match these filters.",

  "drawer.close": "Close",
  "drawer.year": "Year Built",
  "drawer.founder": "Founder",
  "drawer.sect": "Tradition",
  "drawer.architecture": "Architecture",
  "drawer.history": "Historical Significance",
  "drawer.festivals": "Festivals",
  "drawer.hours": "Opening Hours",
  "drawer.guidelines": "Visitor Guidelines",
  "drawer.facts": "Interesting Facts",
  "drawer.gallery": "Gallery",
  "drawer.nearby": "Nearby Monasteries",
  "drawer.maps": "Open in Google Maps",
  "drawer.historyBtn": "Explore History",
  "drawer.hiddenGem": "Hidden Gem",
  "drawer.heritage": "Heritage Level",

  "timeline.kicker": "The Long Thread",
  "timeline.title": "Timeline of Sikkim",
  "timeline.subtitle":
    "An illuminated chronicle — unrolled slowly, so each age of Sikkim can speak.",
  "timeline.past": "Past",
  "timeline.present": "Today",

  "featured.kicker": "Sacred Halls",
  "featured.title": "Featured Monasteries",
  "featured.subtitle":
    "Eight houses of prayer and contemplation, each a chamber in the journey.",
  "featured.explore": "Explore",
  "featured.year": "Year Built",

  "culture.kicker": "Living Traditions",
  "culture.title": "Culture & Traditions",
  "culture.subtitle":
    "A quiet museum of the living faiths of Sikkim. Choose an exhibit and let it unfold.",
  "culture.close": "Fold the manuscript",
  "culture.festivals": "Festivals of the Year",
  "culture.festivalsSub": "Ten sacred celebrations that turn the calendar into a pilgrimage.",
  "culture.history": "History",
  "culture.significance": "Significance",
  "culture.celebrated": "How It Is Celebrated",

  "plan.kicker": "Plan Your Journey",
  "plan.title": "The Way to Sikkim",
  "plan.subtitle":
    "Nine journeys across the Himalaya — choose the path that fits your season and soul.",
  "plan.explore": "Explore Trips",
  "plan.note": "Bookings open on partner platforms — no prices here, only the path.",

  "etiquette.kicker": "Before You Go",
  "etiquette.title": "Visiting Etiquette & Permits",
  "etiquette.subtitle":
    "The monastery notice board — practical matters and the quiet customs of respect.",
  "etiquette.permits": "Permits & Practical Requirements",
  "etiquette.dos": "Do's",
  "etiquette.donts": "Don'ts",

  "activities.kicker": "Things To Do",
  "activities.title": "Twenty Paths Through Sikkim",
  "activities.subtitle":
    "Rafts, treks, tea gardens and monastery bells — choose your adventure in the clouds.",
  "activities.nearby": "Nearby",
  "activities.safety": "Safety & Respect",
  "activities.videos": "Watch films",
  "activities.reels": "See reels",

  "gallery.kicker": "Light & Stone",
  "gallery.title": "The Gallery",
  "gallery.subtitle": "Photographs that drift in the air like prayer flags.",
  "gallery.scroll": "Scroll sideways through the gallery",
  "gallery.photoBy": "Photograph",

  "voices.kicker": "Other Pilgrims",
  "voices.title": "Voices from the Path",
  "voices.subtitle":
    "Real travellers and creators who walked the same floors — their words, their light.",
  "voices.view": "View on Instagram",
  "voices.watch": "Watch on YouTube",
  "voices.read": "Read the post",
  "voices.share": "Share your journey",
  "voices.shareSub":
    "Tag #Sikkim in your posts and your voice may join the wall of prayer flags.",
  "voices.location": "At",

  "places.kicker": "Explore Places",
  "places.title": "Famous & Hidden Sikkim",
  "places.subtitle":
    "The postcard icons and the forest-secret corners — both are waiting for your footsteps.",
  "places.famous": "Famous Places",
  "places.gems": "Hidden Gems",
  "places.gem": "Hidden Gem",
  "places.tip": "A Traveller's Tip",

  "social.kicker": "Follow the Path",
  "social.title": "Sikkim Online",
  "social.subtitle":
    "Step outside the site — films, threads, reels and live help from the mountain.",
  "social.share": "Share your journey with",

  "languages.kicker": "Many Tongues",
  "languages.title": "Choose Your Language",
  "languages.subtitle":
    "Carved like prayer tablets — more voices to come.",
  "languages.planned": "Planned",

  "footer.quote":
    "Preserving the spiritual heritage of Sikkim for future generations.",
  "footer.team": "Team",
  "footer.sources": "Sources",
  "footer.credits": "Credits",
  "footer.contact": "Contact",
  "footer.heritage": "Heritage",
  "footer.languages": "Languages",
  "footer.github": "GitHub",
  "footer.privacy": "Privacy",
  "footer.email": "Email",
  "footer.copyright": "SIKKIM — Where the Mist Meets the Divine",

  "guide.title": "Ask the Guide",
  "guide.subtitle": "A little wisdom from the monastery porch.",
  "guide.hint": "Choose a question, or ask your own.",
  "guide.placeholder": "Ask about permits, festivals, directions…",
  "guide.ask": "Ask",
  "guide.thinking": "The guide is thinking…",
};

const hi: Dict = {
  "brand": "सिक्किम",
  "tagline": "जहाँ धुंध दिव्य से मिलती है",
  "nav.home": "मुख्य",
  "nav.explore": "अन्वेषण",
  "nav.timeline": "कालक्रम",
  "nav.heritage": "विरासत",
  "nav.plan": "योजना",
  "nav.contact": "संपर्क",
  "lang.switch": "English / हिन्दी",

  "intro.scroll": "प्रवेश करने हेतु नीचे स्क्रॉल करें",
  "intro.hear": "आप सुनते हैं",
  "intro.wind": "पर्वतों से गुज़रती हवा",
  "intro.bells": "दूर से घंटियों की ध्वनि",
  "intro.birds": "भोर में पक्षियों का गान",
  "intro.soundoff": "ध्वनि बंद",
  "intro.soundon": "पर्वतों को सुनें",

  "home.scroll": "अन्वेषण हेतु स्क्रॉल करें",
  "home.enter": "मठ में प्रवेश करें",

  "map.kicker": "पवित्र हिमालय",
  "map.title": "सिक्किम को जानें",
  "map.subtitle":
    "एक प्राचीन मानचित्र पर सिक्किम के मठों, स्थलों और छिपे रत्नों को खोजें।",
  "map.search": "मठ खोजें",
  "map.district": "सभी जिले",
  "map.type": "सभी प्रकार के मठ",
  "map.viewby": "देखें",
  "map.view.district": "जिला",
  "map.view.heritage": "विरासत स्तर",
  "map.view.popular": "लोकप्रिय",
  "map.view.gems": "छिपे रत्न",
  "map.places": "खोजने हेतु स्थान",
  "map.layers": "परतें",
  "map.legend": "संकेत",
  "map.reset": "रीसेट",
  "map.filters": "फ़िल्टर",
  "map.noresults": "इन फ़िल्टरों से कोई मठ मेल नहीं खाता।",

  "drawer.close": "बंद करें",
  "drawer.year": "निर्माण वर्ष",
  "drawer.founder": "संस्थापक",
  "drawer.sect": "परंपरा",
  "drawer.architecture": "वास्तुकला",
  "drawer.history": "ऐतिहासिक महत्त्व",
  "drawer.festivals": "उत्सव",
  "drawer.hours": "खुलने का समय",
  "drawer.guidelines": "आगंतुक दिशानिर्देश",
  "drawer.facts": "रोचक तथ्य",
  "drawer.gallery": "चित्र दीर्घा",
  "drawer.nearby": "निकटवर्ती मठ",
  "drawer.maps": "Google Maps में खोलें",
  "drawer.historyBtn": "इतिहास देखें",
  "drawer.hiddenGem": "छिपा रत्न",
  "drawer.heritage": "विरासत स्तर",

  "timeline.kicker": "लंबा सूत्र",
  "timeline.title": "सिक्किम का कालक्रम",
  "timeline.subtitle":
    "एक रोशन इतिवृत्त — धीरे से खोला गया, ताकि सिक्किम का हर युग बोल सके।",
  "timeline.past": "अतीत",
  "timeline.present": "आज",

  "featured.kicker": "पवित्र सभाएँ",
  "featured.title": "प्रमुख मठ",
  "featured.subtitle":
    "प्रार्थना और ध्यान के आठ घर, यात्रा के आठ कक्ष।",
  "featured.explore": "अन्वेषण",
  "featured.year": "निर्माण वर्ष",

  "culture.kicker": "जीवंत परंपराएँ",
  "culture.title": "संस्कृति और परंपराएँ",
  "culture.subtitle":
    "सिक्किम की जीवंत आस्थाओं का एक शांत संग्रहालय। एक प्रदर्शनी चुनें।",
  "culture.close": "पांडुलिपि मोड़ें",
  "culture.festivals": "वर्ष के उत्सव",
  "culture.festivalsSub": "दस पवित्र उत्सव जो कैलेंडर को तीर्थयात्रा बना देते हैं।",
  "culture.history": "इतिहास",
  "culture.significance": "महत्त्व",
  "culture.celebrated": "कैसे मनाया जाता है",

  "plan.kicker": "यात्रा की योजना बनाएं",
  "plan.title": "सिक्किम का मार्ग",
  "plan.subtitle":
    "हिमालय के पार नौ यात्राएँ — अपने मौसम और मन के अनुकूल रास्ता चुनें।",
  "plan.explore": "यात्राएँ देखें",
  "plan.note": "साझेदार प्लेटफ़ॉर्म पर बुकिंग खुलती है — यहाँ केवल मार्ग, कोई मूल्य नहीं।",

  "etiquette.kicker": "जाने से पहले",
  "etiquette.title": "आगंतुक शिष्टाचार और अनुमतियाँ",
  "etiquette.subtitle":
    "मठ का सूचना पट्ट — व्यावहारिक बातें और सम्मान की शांत रीतियाँ।",
  "etiquette.permits": "अनुमतियाँ और आवश्यकताएँ",
  "etiquette.dos": "करें",
  "etiquette.donts": "न करें",

  "activities.kicker": "करने के लिए",
  "activities.title": "सिक्किम के बीस रास्ते",
  "activities.subtitle":
    "राफ्टिंग, ट्रेकिंग, चाय बागान और मठ की घंटियाँ — बादलों में अपना साहस चुनें।",
  "activities.nearby": "आस-पास",
  "activities.safety": "सुरक्षा और सम्मान",
  "activities.videos": "फ़िल्में देखें",
  "activities.reels": "रील्स देखें",

  "gallery.kicker": "प्रकाश और पत्थर",
  "gallery.title": "चित्र दीर्घा",
  "gallery.subtitle": "तस्वीरें जो प्रार्थना झंडों की तरह हवा में तैरती हैं।",
  "gallery.scroll": "दीर्घा में किनारे स्क्रॉल करें",
  "gallery.photoBy": "छायाचित्र",

  "voices.kicker": "अन्य तीर्थयात्री",
  "voices.title": "पथ की आवाज़ें",
  "voices.subtitle":
    "वास्तविक यात्री और रचनाकार जिन्होंने इन्हीं प्रांगणों में पग रखे।",
  "voices.view": "Instagram पर देखें",
  "voices.watch": "YouTube पर देखें",
  "voices.read": "लेख पढ़ें",
  "voices.share": "अपनी यात्रा साझा करें",
  "voices.shareSub":
    "अपनी पोस्ट में #Sikkim टैग करें — आपकी आवाज़ भी इस दीवार पर आ सकती है।",
  "voices.location": "पर",

  "places.kicker": "स्थान देखें",
  "places.title": "प्रसिद्ध और छिपा सिक्किम",
  "places.subtitle":
    "पोस्टकार्ड की आकर्षक जगहें और जंगल के छिपे कोने — दोनों आपके कदमों की प्रतीक्षा में हैं।",
  "places.famous": "प्रसिद्ध स्थान",
  "places.gems": "छिपे रत्न",
  "places.gem": "छिपा रत्न",
  "places.tip": "यात्री की सलाह",

  "social.kicker": "पथ का अनुसरण करें",
  "social.title": "सिक्किम ऑनलाइन",
  "social.subtitle":
    "साइट से बाहर कदम रखें — फ़िल्में, थ्रेड्स, रील्स और पहाड़ से लाइव सहायता।",
  "social.share": "अपनी यात्रा साझा करें",

  "languages.kicker": "अनेक भाषाएँ",
  "languages.title": "अपनी भाषा चुनें",
  "languages.subtitle": "प्रार्थना-पट्टिकाओं की तरह उकेरी गईं — और आने वाली आवाज़ें।",
  "languages.planned": "योजनाबद्ध",

  "footer.quote":
    "सिक्किम की आध्यात्मिक विरासत को आने वाली पीढ़ियों के लिए संजोना।",
  "footer.team": "दल",
  "footer.sources": "स्रोत",
  "footer.credits": "श्रेय",
  "footer.contact": "संपर्क",
  "footer.heritage": "विरासत",
  "footer.languages": "भाषाएँ",
  "footer.github": "गिटहब",
  "footer.privacy": "गोपनीयता",
  "footer.email": "ईमेल",
  "footer.copyright": "सिक्किम — जहाँ धुंध दिव्य से मिलती है",

  "guide.title": "गाइड से पूछें",
  "guide.subtitle": "मठ के आँगन से थोड़ा ज्ञान।",
  "guide.hint": "एक प्रश्न चुनें, या अपना पूछें।",
  "guide.placeholder": "अनुमति, उत्सव, मार्ग के बारे में पूछें…",
  "guide.ask": "पूछें",
  "guide.thinking": "गाइड सोच रहा है…",
};

const dicts: Record<Lang, Dict> = { en, hi };

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => en[k] ?? k,
});

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [fading, setFading] = useState(false);

  const setLang = useCallback((l: Lang) => {
    if (l === lang) return;
    setFading(true);
    window.setTimeout(() => {
      setLangState(l);
      document.documentElement.lang = l === "hi" ? "hi" : "en";
      setFading(false);
    }, 320);
  }, [lang]);

  const t = useCallback(
    (key: string) => dicts[lang][key] ?? en[key] ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      <div
        className={
          "transition-opacity duration-500 ease-out " +
          (fading ? "opacity-0" : "opacity-100")
        }
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
