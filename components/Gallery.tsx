"use client";

import { useCallback, useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { GALLERY, type GalleryItem } from "@/lib/data";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Dust, Mist } from "./atmosphere";
import { HimalayanPageBackground } from "./HimalayanPageBackground";

const CATEGORIES = Array.from(new Set(GALLERY.map((g) => g.category)));

export function Gallery() {
  const { t } = useLang();
  const [cat, setCat] = useState<string>("All");
  const [current, setCurrent] = useState<number | null>(null);

  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (current === null) return;
      setCurrent((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length));
    },
    [current, items.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (current === null) return;
      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, step]);

  return (
    <section id="gallery" aria-label="Gallery" className="relative overflow-hidden py-24">
      <HimalayanPageBackground />
      <Mist seed={19} density={5} />
      <Dust seed={20} count={20} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("gallery.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("gallery.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("gallery.subtitle")}
          </p>
        </header>

        {/* category filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-all duration-300 ${
                cat === c
                  ? "border-gold bg-gold/15 text-gold-soft shadow-gold-glow"
                  : "border-gold/20 text-ivory-dim/70 hover:border-gold/50 hover:text-ivory"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <Reveal variant="fade">
          <div className="horiz-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4" style={{ cursor: "grab" }}>
            {items.map((g, i) => (
              <GalleryCard
                key={g.id}
                item={g}
                wide={i % 3 === 0}
                tall={i % 4 === 1}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-ivory-dim/50">
            ⟷ {t("gallery.scroll")}
          </p>
        </Reveal>
      </div>

      {/* lightbox */}
      {current !== null && items[current] && (
        <Lightbox
          item={items[current]}
          index={current}
          total={items.length}
          onClose={() => setCurrent(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </section>
  );
}

function GalleryCard({
  item,
  wide,
  tall,
  onClick,
}: {
  item: GalleryItem;
  wide: boolean;
  tall: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative shrink-0 snap-start overflow-hidden rounded-2xl border border-gold/15 transition-all duration-500 hover:border-gold/45 hover:shadow-gold-glow ${
        wide ? "w-72 sm:w-[26rem]" : "w-56 sm:w-[20rem]"
      }`}
      style={{ height: tall ? "20rem" : "15rem" }}
    >
      <div className="absolute inset-0 transition-transform duration-[1600ms] ease-out group-hover:scale-110">
        <Photo scene={item.scene} seed={2} alt={item.title} sizes="(min-width: 640px) 26rem, 18rem" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
      <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.25em] text-gold-soft/90">
        {item.category}
      </span>
      <div className="absolute bottom-0 inset-x-0 p-4 text-left">
        <p className="font-subtitle text-lg text-ivory">{item.title}</p>
        <p className="text-xs text-ivory-dim/70">{item.place}</p>
      </div>
    </button>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { t } = useLang();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ animation: "fadein 0.5s ease both" }}>
      <button aria-label={t("drawer.close")} onClick={onClose} className="absolute inset-0 h-full w-full bg-black/85 backdrop-blur-md" />
      <div className="relative z-10 w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-deep">
          <div className="relative h-[52vh] sm:h-[64vh]">
            <Photo scene={item.scene} seed={index} alt={item.title} sizes="(min-width: 640px) 672px, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/90">
                {item.category} · {index + 1} / {total}
              </p>
              <h4 className="mt-1 font-title text-2xl text-ivory">{item.title}</h4>
              <p className="mt-1 text-xs text-ivory-dim/70">
                {item.place} · {t("gallery.photoBy")}: {item.credit}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/60 text-gold-soft">
            ✕
          </button>
          <button
            onClick={onPrev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-black/60 text-xl text-gold-soft transition-colors hover:bg-black/80"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            aria-label="Next"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-black/60 text-xl text-gold-soft transition-colors hover:bg-black/80"
          >
            ›
          </button>
        </div>
      </div>
      <style>{`@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}