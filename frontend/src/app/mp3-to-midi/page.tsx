import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SoftwareApplicationSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "MP3 to MIDI Converter Online — Free, No Upload | MP3toMIDI",
  description:
    "Convert MP3 to MIDI in your browser. Free, no signup, no file upload. AI-powered audio to MIDI conversion for music producers and DJs.",
  keywords: [
    "mp3 to midi",
    "mp3 to midi converter",
    "convert mp3 to midi",
    "mp3 to midi online",
    "free mp3 to midi",
  ],
  openGraph: {
    title: "MP3 to MIDI Converter Online — Free, No Upload",
    description:
      "Convert MP3 to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/mp3-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/mp3-to-midi",
  },
};

export default function Mp3ToMidiPage() {
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
