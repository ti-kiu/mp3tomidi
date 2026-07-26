import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Audio to MIDI — Convert Any Format Online Free | MP3toMIDI",
  description:
    "Convert audio files (MP3, WAV, FLAC, OGG, M4A) to MIDI in your browser. Free, private, no signup. AI-powered transcription for music producers and DJs.",
  keywords: [
    "audio to midi",
    "audio to midi converter",
    "convert audio to midi",
    "audio to midi online",
    "free audio to midi",
  ],
  openGraph: {
    title: "Audio to MIDI — Convert Any Format Online Free",
    description:
      "Convert audio files to MIDI in your browser. Free, private, no signup.",
    url: "https://mp3tomidi.vip/audio-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/audio-to-midi",
  },
};

export default function AudioToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Audio to MIDI — Convert Any Format Online Free"
        description="Convert audio files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/audio-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Audio to MIDI", href: "/audio-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
