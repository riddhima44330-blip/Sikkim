/**
 * The SIKKIM mark — a prayer wheel rising from the mist.
 * Gold linework on deep blue: mandala geometry, lotus petals,
 * and a mountain silhouette wrapped in a band of fog.
 */
export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "gold" | "ivory";
}) {
  const stroke = variant === "gold" ? "#d4af37" : variant === "ivory" ? "#f8f4e8" : "#d4af37";
  const bg =
    variant === "gold"
      ? "transparent"
      : variant === "ivory"
        ? "transparent"
        : "rgba(22,35,46,0.85)";
  const soft = stroke === "#f8f4e8" ? "rgba(248,244,232,0.45)" : "rgba(212,175,55,0.5)";
  const accent = "#c99a3b";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="SIKKIM — prayer wheel logo"
      fill="none"
    >
      <circle cx="32" cy="32" r="30" fill={bg} stroke={stroke} strokeWidth="1.6" opacity={bg === "transparent" ? 0 : 1} />
      <circle cx="32" cy="32" r="30" stroke={stroke} strokeWidth={bg === "transparent" ? 1.4 : 0.9} opacity="0.55" />

      {/* mountain silhouette through mist */}
      <path
        d="M12 47 L20 35 L26 40 L34 28 L42 38 L48 33 L54 47 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* mist band under the peaks */}
      <path
        d="M10 50 Q 20 47 28 50 T 46 50 T 55 50"
        stroke={soft}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* lotus petals cupping the wheel */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="25"
          rx="3.4"
          ry="9.5"
          transform={`rotate(${deg} 32 32)`}
          stroke={soft}
          strokeWidth="1"
          opacity="0.7"
        />
      ))}

      {/* prayer wheel rim */}
      <circle cx="32" cy="32" r="12" stroke={stroke} strokeWidth="1.8" />
      <circle cx="32" cy="32" r="8" stroke={soft} strokeWidth="0.9" />

      {/* wheel spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="32"
          y1="32"
          x2="32"
          y2="20"
          stroke={stroke}
          strokeWidth="1"
          transform={`rotate(${deg} 32 32)`}
          opacity="0.9"
        />
      ))}

      {/* hub */}
      <circle cx="32" cy="32" r="2.4" fill={accent} />
      <circle cx="32" cy="32" r="4.4" stroke={accent} strokeWidth="1" />

      {/* crown finial */}
      <circle cx="32" cy="13.5" r="2.2" fill={accent} />
      <line x1="32" y1="15.8" x2="32" y2="20.5" stroke={accent} strokeWidth="1.2" />

      {/* ground line */}
      <line x1="16" y1="53" x2="48" y2="53" stroke={soft} strokeWidth="0.8" />
    </svg>
  );
}
