"use client";

import Image from "next/image";
import { useState } from "react";
import { Scenic } from "./Scenic";
import { PHOTOS } from "@/lib/photos";

/**
 * Lazy-loaded real photograph with a procedural monastery-scene fallback.
 * `scene` looks up the Wikimedia Commons photo registry; if no photo exists
 * or it fails to load, we gracefully fall back to the painted `Scenic`
 * illustration so the experience never breaks.
 */
export function Photo({
  scene,
  src,
  alt,
  seed = 5,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  scene?: string;
  src?: string;
  alt: string;
  seed?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const photo = scene ? PHOTOS[scene] : undefined;
  const url = src ?? (photo ? commonsUrl(photo.file) : undefined);

  if (!url || failed) {
    return <Scenic scene={scene ?? "rumtek"} seed={seed} className={className} />;
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={url}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

/** Builds a stable Wikimedia Commons image URL for a given filename. */
export function commonsUrl(filename: string, width = 1400) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;
}
