import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HowToSchema } from "@/components/Schema";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MP3 to MIDI — Free Online Converter | No Upload, No Signup",
  description:
    "Convert MP3, WAV, FLAC, OGG to MIDI in your browser. Free, private, no signup. AI-powered audio to MIDI conversion for music producers, DJs, and students.",
  keywords: [
    "mp3 to midi",
    "mp3 to midi converter",
    "audio to midi",
    "convert mp3 to midi",
    "midi converter online",
    "free midi converter",
  ],
  openGraph: {
    title: "MP3 to MIDI — Free Online Converter",
    description:
      "Convert audio to MIDI in your browser. No upload, no signup. AI-powered.",
    url: "https://mp3tomidi.vip",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mp3tomidi.vip/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MP3 to MIDI — Free Online Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 to MIDI — Free Online Converter",
    description:
      "Convert audio to MIDI in your browser. No upload, no signup.",
    images: ["https://mp3tomidi.vip/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "uyi9rj1feLhJt3UI8-91fvb3Yo1b_753jd5ZUZsYbF8",
    other: { "msvalidate.01": "8D5AE51845CFE08F58F54A68CFF76D57" },
  },
  metadataBase: new URL("https://mp3tomidi.vip"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://mp3tomidi.vip" />
      <meta name="msvalidate.01" content="8D5AE51845CFE08F58F54A68CFF76D57" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
          <HowToSchema />

          {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0VL0464EG4"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0VL0464EG4');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xo7lclm8yl");
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
