"use client";

interface Props {
  /** Extra darkness for sections that need stronger contrast. 0–1. Default 0.5 */
  overlay?: number;
}

/**
 * Section-level dark overlay.
 * The actual Himalayan photo is fixed at the page level (Experience.tsx),
 * this just ensures section content remains readable on top of it.
 */
export function HimalayanPageBackground({ overlay = 0.50 }: Props) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{
        background: `radial-gradient(ellipse at 50% 25%, rgba(18,8,14,${overlay}) 0%, rgba(12,5,10,${Math.min(overlay + 0.25, 1)}) 65%, rgba(8,3,7,${Math.min(overlay + 0.4, 1)}) 100%)`,
      }}
    />
  );
}
