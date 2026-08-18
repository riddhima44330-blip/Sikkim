import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "SIKKIM — Where the Mist Meets the Divine",
  description:
    "A living pilgrimage through the monasteries, history and culture of Sikkim. Walk deeper into the chambers and discover a sacred Himalayan path — where the mist meets the divine.",
  keywords: ["Sikkim", "monasteries", "Rumtek", "Buddhist heritage", "Himalaya", "pilgrimage", "Kanchenjunga"],
  authors: [{ name: "SIKKIM" }],
  openGraph: {
    title: "SIKKIM — Where the Mist Meets the Divine",
    description: "A living pilgrimage through the monasteries, mountains and culture of Sikkim — where the mist meets the divine.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-transparent font-body text-ivory selection:bg-gold/35">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}