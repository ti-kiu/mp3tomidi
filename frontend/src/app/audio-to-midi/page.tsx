import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SoftwareApplicationSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Audio to MIDI Converter Online — Free, No Upload | MP3toMIDI",
  description:
    "Convert any audio file to MIDI in your browser. Supports MP3, WAV, FLAC, OGG. Free, no signup, no file upload. AI-powered transcription.",
  keywords: [
    "audio to midi",
    "audio to midi converter",
    "convert audio to midi",
    "audio to midi online",
    "free audio to midi",
  ],
  openGraph: {
    title: "Audio to MIDI Converter Online — Free, No Upload",
    description:
      "Convert any audio file to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/audio-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/audio-to-midi",
  },
};

export default function AudioToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
