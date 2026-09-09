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
  title: "Drums to MIDI Converter — Extract Drum Patterns | MP3toMIDI",
  description:
    "Extract drum patterns from audio and convert to MIDI. Free browser-based AI tool for beat makers and producers.",
  keywords: [
    "drums to midi",
    "extract drums midi",
    "drum to midi converter",
    "drum transcription",
    "drums midi online"
  ],
  openGraph: {
    title: "Drums to MIDI Converter — Free, Browser-Based",
    description:
      "Extract drum patterns from audio and convert to MIDI. Free, browser-based.",
    url: "https://mp3tomidi.vip/drums-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/drums-to-midi",
  },
};

export default function DrumsToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Drums to MIDI Converter — Free, Browser-Based"
        description="Extract drum patterns from audio and convert to MIDI using AI. Free, private, no signup."
        url="https://mp3tomidi.vip/drums-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Drums to MIDI", href: "/drums-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/drums-to-midi" />
      </main>
      <Footer />
    </>
  );
}
