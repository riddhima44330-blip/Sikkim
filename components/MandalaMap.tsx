"use client";

import React, { useState, useRef, useMemo } from "react";
import { HimalayanPageBackground } from "./HimalayanPageBackground";

// Real GIS Location Data for Sikkim
interface GISLocation {
  id: string;
  name: string;
  nativeName: string;
  lat: number;
  lng: number;
  elevation: number;
  elevationText: string;
  district: "East" | "West" | "North" | "South";
  tradition: "Nyingma" | "Kagyu" | "Gelug" | "Sakya" | "Sacred Natural Site";
  heritageLevel: "UNESCO Listed" | "Royal" | "Ancient" | "Hidden Gem";
  difficulty: "Easy" | "Moderate" | "Challenging" | "Expedition";
  description: string;
  xPct: number; // 0 - 100 relative to map view
  yPct: number; // 0 - 100 relative to map view
  image: string;
}

const GIS_LOCATIONS: GISLocation[] = [
  {
    id: "khangchendzonga",
    name: "Khangchendzonga National Park",
    nativeName: "གངས་ཅན་མཛོད་ལྔ།",
    lat: 27.6534,
    lng: 88.2612,
    elevation: 8586,
    elevationText: "8,586m (Peak)",
    district: "North",
    tradition: "Sacred Natural Site",
    heritageLevel: "UNESCO Listed",
    difficulty: "Expedition",
    description: "UNESCO World Heritage site comprising glaciers, alpine lakes, sacred peaks, and the guardian deity of Sikkim.",
    xPct: 35,
    yPct: 28,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gurudongmar",
    name: "Gurudongmar Lake",
    nativeName: "མཚོ་གུ་རུ་རྡོ་རྗེ་སློབ་དཔོན།",
    lat: 27.9714,
    lng: 88.7061,
    elevation: 5430,
    elevationText: "5,430m",
    district: "North",
    tradition: "Sacred Natural Site",
    heritageLevel: "Ancient",
    difficulty: "Challenging",
    description: "One of the highest lakes in the world, blessed by Guru Padmasambhava in the 8th century.",
    xPct: 75,
    yPct: 12,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "lachen",
    name: "Lachen High Pass",
    nativeName: "ལྷ་ཆེན་དགོན་པ།",
    lat: 27.7167,
    lng: 88.5500,
    elevation: 2750,
    elevationText: "2,750m",
    district: "North",
    tradition: "Nyingma",
    heritageLevel: "Hidden Gem",
    difficulty: "Moderate",
    description: "High mountain sanctuary standing amidst alpine pine forests and snow-draped crags.",
    xPct: 58,
    yPct: 24,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "lachung",
    name: "Lachung Sanctuary",
    nativeName: "ལ་ཆུང་དགོན་པ།",
    lat: 27.6891,
    lng: 88.7430,
    elevation: 2700,
    elevationText: "2,700m",
    district: "North",
    tradition: "Nyingma",
    heritageLevel: "Hidden Gem",
    difficulty: "Moderate",
    description: "High valley monastery built in 1880 near the Tibetan border amidst snow-fed streams.",
    xPct: 78,
    yPct: 26,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "nathula",
    name: "Nathula Pass",
    nativeName: "རྣ་ཐོས་ལ།",
    lat: 27.3867,
    lng: 88.8306,
    elevation: 4310,
    elevationText: "4,310m",
    district: "East",
    tradition: "Sacred Natural Site",
    heritageLevel: "Royal",
    difficulty: "Challenging",
    description: "Historic Silk Route mountain pass connecting India and Tibet amidst high mountain terrain.",
    xPct: 88,
    yPct: 48,
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tsomgo",
    name: "Tsomgo Sacred Lake",
    nativeName: "མཚོ་མོ་ལྷ་མོ།",
    lat: 27.3742,
    lng: 88.7619,
    elevation: 3753,
    elevationText: "3,753m",
    district: "East",
    tradition: "Sacred Natural Site",
    heritageLevel: "Ancient",
    difficulty: "Moderate",
    description: "Glacial lake held sacred by Buddhist monks who read future omens in its changing colors.",
    xPct: 80,
    yPct: 52,
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gangtok",
    name: "Gangtok Enchey Shrine",
    nativeName: "སྒང་ཏོག་ཨེན་ཅེ་དགོན་པ།",
    lat: 27.3389,
    lng: 88.6065,
    elevation: 1650,
    elevationText: "1,650m",
    district: "East",
    tradition: "Nyingma",
    heritageLevel: "Royal",
    difficulty: "Easy",
    description: "Perched above the capital city of Gangtok, blessed by tantric flying master Lama Drupthob Karpo.",
    xPct: 65,
    yPct: 56,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rumtek",
    name: "Rumtek Dharma Chakra Centre",
    nativeName: "རུམ་ཐེག་དགོན་པ།",
    lat: 27.3040,
    lng: 88.5447,
    elevation: 1500,
    elevationText: "1,500m",
    district: "East",
    tradition: "Kagyu",
    heritageLevel: "Royal",
    difficulty: "Easy",
    description: "Principal seat of the Gyalwang Karmapa outside Tibet, housing priceless relics and golden stupas.",
    xPct: 59,
    yPct: 60,
    image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    nativeName: "བཀྲ་ཤིས་ལྡིང་དགོན་པ།",
    lat: 27.3308,
    lng: 88.2974,
    elevation: 1460,
    elevationText: "1,460m",
    district: "West",
    tradition: "Nyingma",
    heritageLevel: "UNESCO Listed",
    difficulty: "Moderate",
    description: "Built on a heart-shaped hill between Rathong and Rangeet rivers. Believed to cleanse all sins upon sight.",
    xPct: 36,
    yPct: 64,
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    nativeName: "པདྨ་ཡང་རྩེ་དགོན་པ།",
    lat: 27.3044,
    lng: 88.2522,
    elevation: 2080,
    elevationText: "2,080m",
    district: "West",
    tradition: "Nyingma",
    heritageLevel: "Ancient",
    difficulty: "Easy",
    description: "The 'Perfect Sublime Lotus', head of all Nyingma monasteries in Sikkim featuring the Zangdokpalri masterpiece.",
    xPct: 30,
    yPct: 68,
    image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "yuksom",
    name: "Yuksom & Coronation Throne",
    nativeName: "ཡུག་སམ་ནོར་བུ་སྒང་།",
    lat: 27.3758,
    lng: 88.2254,
    elevation: 1780,
    elevationText: "1,780m",
    district: "West",
    tradition: "Nyingma",
    heritageLevel: "Ancient",
    difficulty: "Moderate",
    description: "First capital of Sikkim where three revered lamas met and consecrated Phuntsog Namgyal in 1642.",
    xPct: 24,
    yPct: 54,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  }
];

export function MandalaMap() {
  // Filter States (No Search Bar)
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");
  const [selectedTradition, setSelectedTradition] = useState<string>("All");
  const [selectedHeritage, setSelectedHeritage] = useState<string>("All");
  const [maxAltitude, setMaxAltitude] = useState<number>(9000);
  const [showPilgrimageRoutes, setShowPilgrimageRoutes] = useState<boolean>(true);
  const [showSnowCover, setShowSnowCover] = useState<boolean>(true);

  // Map Controls State
  const [mapLayer, setMapLayer] = useState<"sat" | "topo" | "natgeo" | "trails">("sat");
  const [pitch3D, setPitch3D] = useState<boolean>(true);
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [activeSite, setActiveSite] = useState<GISLocation | null>(GIS_LOCATIONS[0]);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Filter logic
  const filteredLocations = useMemo(() => {
    return GIS_LOCATIONS.filter((loc) => {
      const matchDistrict = selectedDistrict === "All" || loc.district === selectedDistrict;
      const matchTradition = selectedTradition === "All" || loc.tradition === selectedTradition;
      const matchHeritage = selectedHeritage === "All" || loc.heritageLevel === selectedHeritage;
      const matchAlt = loc.elevation <= maxAltitude;
      return matchDistrict && matchTradition && matchHeritage && matchAlt;
    });
  }, [selectedDistrict, selectedTradition, selectedHeritage, maxAltitude]);

  const toggleFullscreen = () => {
    if (!mapContainerRef.current) return;
    if (!document.fullscreenElement) {
      mapContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleResetMap = () => {
    setZoom(1);
    setRotation(0);
    setPitch3D(true);
    setActiveSite(GIS_LOCATIONS[0]);
  };

  return (
    <section
      id="mandala-map"
      className="relative min-h-screen text-[#F5EFE6] px-4 py-16 sm:px-8 lg:px-12 overflow-hidden border-t border-[#D4A24A]/20"
    >
      {/* Section overlay — photo is fixed at page level */}
      <HimalayanPageBackground overlay={0.40} />

      {/* Hero Title Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A24A]/30 bg-[#28131F]/80 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(212,162,74,0.15)]">
          <span className="text-[#F2C66D] text-xs font-semibold tracking-[0.35em] uppercase">
            ❖ SACRED HIMALAYAN 3D GIS ATLAS
          </span>
        </div>
        <h2 className="font-title text-4xl sm:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F2C66D] via-[#D4A24A] to-[#F5EFE6] drop-shadow-[0_4px_25px_rgba(212,162,74,0.35)]">
          MANDALA – SACRED SIKKIM
        </h2>
        <p className="mt-4 font-subtitle text-base sm:text-lg text-[#F5EFE6]/80 max-w-3xl mx-auto leading-relaxed">
          Trace ancient pilgrimage paths, explore authentic 3D Digital Elevation Model (DEM) terrain, and discover century-old Himalayan shrines.
        </p>
      </div>

      {/* Main Layout Container: GIS Sidebar + 3D Map Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ── SIDEBAR (NO SEARCH BAR) ── */}
        <div className="lg:col-span-4 bg-[#28131F]/90 backdrop-blur-xl border border-[#D4A24A]/30 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          
          <div className="flex items-center justify-between border-b border-[#D4A24A]/20 pb-4 mb-6">
            <h3 className="font-title text-lg font-bold text-[#F2C66D] tracking-wide">
              GIS TERRAIN FILTERS
            </h3>
            <span className="text-xs text-[#D4A24A]/80 font-mono">
              {filteredLocations.length} / {GIS_LOCATIONS.length} SITES
            </span>
          </div>

          {/* District Filter */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-[0.2em] text-[#F2C66D] font-semibold mb-2.5">
              District
            </label>
            <div className="flex flex-wrap gap-2">
              {["All", "East", "West", "North", "South"].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDistrict(d)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    selectedDistrict === d
                      ? "bg-gradient-to-r from-[#D4A24A] to-[#F2C66D] text-[#180C14] font-semibold shadow-[0_0_15px_rgba(212,162,74,0.4)]"
                      : "bg-[#180C14]/60 border border-[#D4A24A]/20 text-[#F5EFE6]/70 hover:border-[#D4A24A]/60 hover:text-[#F5EFE6]"
                  }`}
                >
                  {d === "All" ? "All Districts" : d}
                </button>
              ))}
            </div>
          </div>

          {/* Monastery Traditions */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-[0.2em] text-[#F2C66D] font-semibold mb-2.5">
              Tradition / Lineage
            </label>
            <div className="flex flex-wrap gap-2">
              {["All", "Nyingma", "Kagyu", "Gelug", "Sakya", "Sacred Natural Site"].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTradition(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    selectedTradition === t
                      ? "bg-[#F2C66D] text-[#180C14] font-semibold shadow-[0_0_12px_rgba(242,198,109,0.4)]"
                      : "bg-[#180C14]/60 border border-[#D4A24A]/20 text-[#F5EFE6]/70 hover:border-[#D4A24A]/60 hover:text-[#F5EFE6]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Heritage Level */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-[0.2em] text-[#F2C66D] font-semibold mb-2.5">
              Heritage Designation
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["All", "UNESCO Listed", "Royal", "Ancient", "Hidden Gem"].map((h) => (
                <button
                  key={h}
                  onClick={() => setSelectedHeritage(h)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium tracking-wide text-left transition-all ${
                    selectedHeritage === h
                      ? "bg-[#D4A24A]/20 border border-[#D4A24A] text-[#F2C66D]"
                      : "bg-[#180C14]/40 border border-[#D4A24A]/15 text-[#F5EFE6]/60 hover:text-[#F5EFE6]"
                  }`}
                >
                  {h === "All" ? "❖ All Classifications" : h}
                </button>
              ))}
            </div>
          </div>

          {/* Altitude Range Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[#F2C66D] font-semibold">
                Max Altitude Filter
              </label>
              <span className="text-xs text-[#F2C66D] font-mono">{maxAltitude}m</span>
            </div>
            <input
              type="range"
              min="1000"
              max="9000"
              step="500"
              value={maxAltitude}
              onChange={(e) => setMaxAltitude(Number(e.target.value))}
              className="w-full accent-[#F2C66D] bg-[#180C14] h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Interactive Layer Toggles */}
          <div className="border-t border-[#D4A24A]/20 pt-4 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F2C66D] font-semibold mb-2">
              GIS Feature Overlays
            </div>
            <label className="flex items-center justify-between text-xs text-[#F5EFE6]/80 cursor-pointer select-none">
              <span>⚡ Golden Pilgrimage Trails</span>
              <input
                type="checkbox"
                checked={showPilgrimageRoutes}
                onChange={(e) => setShowPilgrimageRoutes(e.target.checked)}
                className="accent-[#F2C66D] h-4 w-4 rounded cursor-pointer"
              />
            </label>
            <label className="flex items-center justify-between text-xs text-[#F5EFE6]/80 cursor-pointer select-none">
              <span>❄️ Alpine Snow & Glacier Cover</span>
              <input
                type="checkbox"
                checked={showSnowCover}
                onChange={(e) => setShowSnowCover(e.target.checked)}
                className="accent-[#F2C66D] h-4 w-4 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* ── MAIN 3D MAP VIEWPORT (70% Width Desktop) ── */}
        <div
          ref={mapContainerRef}
          className="lg:col-span-8 relative bg-[#180C14] border border-[#D4A24A]/30 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] min-h-[660px] flex flex-col"
        >
          {/* Top GIS Control Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 bg-[#28131F]/90 backdrop-blur-xl border border-[#D4A24A]/30 rounded-2xl px-4 py-2.5 shadow-lg">
            
            {/* Layers */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#D4A24A] font-semibold tracking-wider mr-1">MAP:</span>
              {[
                { id: "sat", label: "3D Satellite DEM" },
                { id: "topo", label: "ArcGIS Topo" },
                { id: "natgeo", label: "NatGeo Terrain" },
                { id: "trails", label: "Heritage Trails" },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setMapLayer(l.id as any)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    mapLayer === l.id
                      ? "bg-gradient-to-r from-[#D4A24A] to-[#F2C66D] text-[#180C14] font-semibold shadow-md"
                      : "text-[#F5EFE6]/70 hover:text-[#F5EFE6]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* View & Tool Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPitch3D((p) => !p)}
                className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-all ${
                  pitch3D
                    ? "border-[#F2C66D] bg-[#F2C66D]/20 text-[#F2C66D]"
                    : "border-[#D4A24A]/30 text-[#F5EFE6]/70"
                }`}
                title="Toggle 3D Elevation Perspective"
              >
                {pitch3D ? "3D Tilt On" : "2D Overhead"}
              </button>

              <button
                onClick={() => setRotation((r) => (r + 45) % 360)}
                className="w-8 h-8 rounded-lg border border-[#D4A24A]/30 bg-[#180C14] text-[#F2C66D] flex items-center justify-center text-xs hover:bg-[#D4A24A]/20 transition-colors"
                title="Rotate Camera 45°"
              >
                ↻
              </button>

              <button
                onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
                className="w-8 h-8 rounded-lg border border-[#D4A24A]/30 bg-[#180C14] text-[#F2C66D] font-bold flex items-center justify-center hover:bg-[#D4A24A]/20 transition-colors"
                title="Zoom In"
              >
                +
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(0.75, z - 0.15))}
                className="w-8 h-8 rounded-lg border border-[#D4A24A]/30 bg-[#180C14] text-[#F2C66D] font-bold flex items-center justify-center hover:bg-[#D4A24A]/20 transition-colors"
                title="Zoom Out"
              >
                -
              </button>

              <button
                onClick={handleResetMap}
                className="px-2.5 h-8 rounded-lg border border-[#D4A24A]/30 bg-[#180C14] text-xs text-[#F5EFE6]/80 flex items-center justify-center hover:bg-[#D4A24A]/20 transition-colors"
                title="Reset Camera View"
              >
                Reset
              </button>

              <button
                onClick={toggleFullscreen}
                className="w-8 h-8 rounded-lg border border-[#D4A24A]/30 bg-[#180C14] text-[#F2C66D] flex items-center justify-center text-xs hover:bg-[#D4A24A]/20 transition-colors"
                title="Toggle Fullscreen"
              >
                ⤢
              </button>
            </div>
          </div>

          {/* 3D Photorealistic DEM Map Rendering Canvas */}
          <div className="relative w-full h-[650px] overflow-hidden bg-[#0e060c]">
            {/* Map Container Viewport with 3D Pitch Tilt & Rotation Transform */}
            <div
              className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg) ${
                  pitch3D ? "perspective(1000px) rotateX(45deg) translateY(-25px)" : "rotateX(0deg)"
                }`,
                transformOrigin: "center center",
              }}
            >
              {/* Photorealistic Satellite DEM Texture Base */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80')`,
                  opacity: mapLayer === "sat" ? 0.45 : mapLayer === "topo" ? 0.25 : 0.35,
                }}
              />

              {/* DEM Elevation Topography Relief & Contour Shading Vector */}
              <svg viewBox="0 0 1000 700" className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  {/* Terrain Shading & Hillshade Gradients */}
                  <linearGradient id="snowPeakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#D4E5F0" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#28131F" stopOpacity="0.8" />
                  </linearGradient>

                  <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Lines (Latitude / Longitude 27° N - 28° N, 88° E - 89° E) */}
                <g stroke="#D4A24A" strokeWidth="0.3" strokeDasharray="3 6" opacity="0.35">
                  <line x1="0" y1="175" x2="1000" y2="175" />
                  <line x1="0" y1="350" x2="1000" y2="350" />
                  <line x1="0" y1="525" x2="1000" y2="525" />
                  <line x1="250" y1="0" x2="250" y2="700" />
                  <line x1="500" y1="0" x2="500" y2="700" />
                  <line x1="750" y1="0" x2="750" y2="700" />
                </g>

                {/* Contour Elevation Lines (500m Intervals) */}
                <path d="M 0,200 Q 250,150 500,280 T 1000,220" fill="none" stroke="#D4A24A" strokeWidth="0.6" opacity="0.4" />
                <path d="M 0,350 Q 300,280 600,400 T 1000,340" fill="none" stroke="#D4A24A" strokeWidth="0.6" opacity="0.4" />

                {/* Photorealistic Snow Cap Peaks (Khangchendzonga Range) */}
                {showSnowCover && (
                  <g>
                    <polygon points="350,280 300,200 370,140 420,240" fill="url(#snowPeakGrad)" />
                    <polygon points="750,120 720,80 770,60 800,100" fill="url(#snowPeakGrad)" />
                  </g>
                )}

                {/* Authentic River Systems (Teesta & Rangeet Rivers) */}
                <path d="M 750,120 Q 580,240 650,560 T 680,700" fill="none" stroke="#5D9CEC" strokeWidth="3" opacity="0.75" />
                <path d="M 240,540 Q 360,560 650,560" fill="none" stroke="#5D9CEC" strokeWidth="2" opacity="0.65" />

                {/* Golden Pilgrimage Trail Overlays */}
                {showPilgrimageRoutes && (
                  <path
                    d="M 240,540 L 300,680 L 360,640 L 590,600 L 650,560 L 800,520 L 780,260 L 750,120"
                    fill="none"
                    stroke="#F2C66D"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    filter="url(#glowGold)"
                    className="animate-pulse"
                  />
                )}
              </svg>

              {/* Photorealistic Volumetric Fog Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180C14]/70 via-transparent to-transparent pointer-events-none" />

              {/* 11 Photorealistic GIS Markers */}
              {filteredLocations.map((loc) => {
                const isSelected = activeSite?.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    style={{ left: `${loc.xPct}%`, top: `${loc.yPct}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
                    onClick={() => setActiveSite(loc)}
                  >
                    {/* Glowing Aura Ring */}
                    <div
                      className={`absolute -inset-4 rounded-full transition-all ${
                        isSelected
                          ? "bg-[#F2C66D]/40 animate-ping"
                          : "bg-[#D4A24A]/20 group-hover:scale-150"
                      }`}
                    />

                    {/* Marker Icon Pin */}
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isSelected
                          ? "border-[#F2C66D] bg-[#F2C66D] text-[#180C14] scale-125 shadow-[0_0_25px_#F2C66D]"
                          : "border-[#D4A24A] bg-[#28131F] text-[#F2C66D] hover:scale-110 shadow-[0_0_12px_rgba(212,162,74,0.6)]"
                      }`}
                    >
                      <span className="text-xs font-bold">☸</span>
                    </div>

                    {/* Location Name & Elevation Label */}
                    <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#180C14]/90 backdrop-blur-md border border-[#D4A24A]/40 px-3 py-1 rounded-xl text-[11px] font-semibold text-[#F5EFE6] shadow-xl group-hover:border-[#F2C66D] transition-colors">
                      {loc.name} <span className="text-[#F2C66D] text-[10px] ml-1">({loc.elevationText})</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Latitude / Longitude Grid & Altitude Scale Overlay */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4 bg-[#180C14]/80 backdrop-blur-md border border-[#D4A24A]/30 px-3.5 py-1.5 rounded-xl text-[10px] font-mono text-[#D4A24A]">
              <span>LAT: 27.5330° N</span>
              <span>LNG: 88.5122° E</span>
              <span>ELEV: 1,400m - 8,586m</span>
            </div>

            {/* Antique Compass Rose */}
            <div className="absolute top-16 right-4 z-20 pointer-events-none opacity-80 hidden sm:block">
              <div className="relative w-16 h-16 flex items-center justify-center border border-[#D4A24A]/40 rounded-full bg-[#180C14]/80 backdrop-blur-md shadow-lg">
                <span className="absolute top-0.5 text-[9px] font-bold text-[#F2C66D]">N</span>
                <span className="absolute bottom-0.5 text-[9px] font-bold text-[#D4A24A]">S</span>
                <span className="absolute left-1 text-[9px] font-bold text-[#D4A24A]">W</span>
                <span className="absolute right-1 text-[9px] font-bold text-[#D4A24A]">E</span>
                <div className="w-8 h-8 border border-[#D4A24A]/40 rotate-45" />
              </div>
            </div>
          </div>

          {/* Floating Photorealistic Detail Popup Card */}
          {activeSite && (
            <div className="absolute bottom-4 left-4 right-4 z-40 bg-[#28131F]/95 backdrop-blur-2xl border border-[#D4A24A]/40 rounded-2xl p-5 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={activeSite.image}
                  alt={activeSite.name}
                  className="w-20 h-20 rounded-xl object-cover border border-[#D4A24A]/40 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#D4A24A]/20 border border-[#D4A24A]/40 text-[#F2C66D] font-semibold uppercase tracking-wider">
                      {activeSite.tradition} • {activeSite.district} Sikkim
                    </span>
                    <span className="text-xs text-[#F5EFE6]/70 font-mono">🏔 {activeSite.elevationText}</span>
                  </div>
                  <h3 className="font-title text-xl font-bold text-[#F5EFE6] mt-1">
                    {activeSite.name} <span className="font-normal text-sm text-[#F2C66D] ml-2">{activeSite.nativeName}</span>
                  </h3>
                  <p className="text-xs text-[#F5EFE6]/80 max-w-xl mt-1 leading-relaxed line-clamp-2">
                    {activeSite.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={() => alert(`Exploring ${activeSite.name}...`)}
                  className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A24A] to-[#F2C66D] text-[#180C14] font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(242,198,109,0.4)] hover:brightness-110 transition-all"
                >
                  Discover Location
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
