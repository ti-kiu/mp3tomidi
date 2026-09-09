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
  title: "Piano to MIDI Converter — Extract Piano Notes | MP3toMIDI",
  description:
    "Extract piano notes from audio and convert to MIDI. Free browser-based AI tool for pianists and music producers.",
  keywords: [
    "piano to midi",
    "extract piano midi",
    "piano to midi converter",
    "piano transcription",
    "piano midi online"
  ],
  openGraph: {
    title: "Piano to MIDI Converter — Free, Browser-Based",
    description:
      "Extract piano notes from audio and convert to MIDI. Free, browser-based.",
    url: "https://mp3tomidi.vip/piano-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/piano-to-midi",
  },
};

export default function PianoToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Piano to MIDI Converter — Free, Browser-Based"
        description="Extract piano notes from audio and convert to MIDI using AI. Free, private, no signup."
        url="https://mp3tomidi.vip/piano-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Piano to MIDI", href: "/piano-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/piano-to-midi" />
      </main>
      <Footer />
    </>
  );
}
