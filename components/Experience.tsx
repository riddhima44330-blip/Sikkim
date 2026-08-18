"use client";

import { Navbar } from "./Navbar";
import { Intro } from "./Intro";
import { MandalaMap } from "./MandalaMap";
import { Timeline } from "./Timeline";
import { Featured } from "./Featured";
import { Culture } from "./Culture";
import { PlanYourJourney } from "./PlanYourJourney";
import { ThingsToDo } from "./ThingsToDo";
import { ExplorePlaces } from "./ExplorePlaces";
import { Etiquette } from "./Etiquette";
import { Gallery } from "./Gallery";
import { Voices } from "./Voices";
import { Social } from "./Social";
import { Languages } from "./Languages";
import { EndSection } from "./EndSection";
import { Guide } from "./Guide";

/**
 * Mandala - Discover Sacred Sikkim continuous experience.
 * The Himalayan mountain image is fixed at the page level so it flows
 * seamlessly across ALL sections with no visible breaks.
 */
export function Experience() {
  return (
    <main className="relative bg-[#180C14] text-[#F5EFE6]">
      {/* ── Fixed full-page Himalayan background ── */}
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/himalayan-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.70,
          filter: "contrast(1.05) brightness(0.75)",
        }}
      />
      {/* ── Fixed dark radial vignette overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(24,12,20,0.45) 0%, rgba(18,9,15,0.70) 65%, rgba(12,5,10,0.88) 100%)",
        }}
      />

      {/* ── All page sections (z-10 and above) ── */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Intro />
        <MandalaMap />
        <Timeline />
        <Featured />
        <Culture />
        <PlanYourJourney />
        <ThingsToDo />
        <ExplorePlaces />
        <Etiquette />
        <Gallery />
        <Voices />
        <Social />
        <Languages />
        <EndSection />
        <Guide />
      </div>
    </main>
  );
}
