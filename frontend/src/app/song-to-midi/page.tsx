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
  title: "Song to MIDI Converter — Convert Any Song to MIDI | MP3toMIDI",
  description:
    "Convert any song to MIDI. Extract notes, chords, and melody from songs. Free browser-based AI tool.",
  keywords: [
    "song to midi",
    "song to midi converter",
    "convert song to midi",
    "song transcription",
    "music to midi"
  ],
  openGraph: {
    title: "Song to MIDI Converter — Free, Browser-Based",
    description:
      "Convert any song to MIDI. Free, browser-based AI tool.",
    url: "https://mp3tomidi.vip/song-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/song-to-midi",
  },
};

export default function SongToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Song to MIDI Converter — Free, Browser-Based"
        description="Convert any song to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/song-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Song to MIDI", href: "/song-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/song-to-midi" />
      </main>
      <Footer />
    </>
  );
}
