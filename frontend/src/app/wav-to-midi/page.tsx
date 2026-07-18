import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SoftwareApplicationSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "WAV to MIDI Converter Online — Free, No Upload | MP3toMIDI",
  description:
    "Convert WAV to MIDI in your browser. Free, no signup, no file upload. AI-powered audio to MIDI conversion for music producers and students.",
  keywords: [
    "wav to midi",
    "wav to midi converter",
    "convert wav to midi",
    "wav to midi online",
    "free wav to midi",
  ],
  openGraph: {
    title: "WAV to MIDI Converter Online — Free, No Upload",
    description:
      "Convert WAV to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/wav-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/wav-to-midi",
  },
};

export default function WavToMidiPage() {
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
