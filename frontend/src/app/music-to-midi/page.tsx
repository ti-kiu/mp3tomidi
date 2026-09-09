import type { Metadata } from "next";
import RelatedTools from "@/components/RelatedTools";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Music to MIDI Converter — Convert Music Files to MIDI | MP3toMIDI",
  description:
    "Convert music files to MIDI. Extract notes from any music format. Free browser-based AI tool for musicians.",
  keywords: [
    "music to midi",
    "music to midi converter",
    "convert music to midi",
    "music transcription",
    "audio to midi converter"
  ],
  openGraph: {
    title: "Music to MIDI Converter — Free, Browser-Based",
    description:
      "Convert music files to MIDI. Free, browser-based AI tool.",
    url: "https://mp3tomidi.vip/music-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/music-to-midi",
  },
};

export default function MusicToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Music to MIDI Converter — Free, Browser-Based"
        description="Convert music files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/music-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Music to MIDI", href: "/music-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/music-to-midi" />
      </main>
      <Footer />
    </>
  );
}
