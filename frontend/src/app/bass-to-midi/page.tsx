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
  title: "Bass to MIDI Converter — Extract Bass Lines | MP3toMIDI",
  description:
    "Extract bass lines from audio and convert to MIDI. Free browser-based AI tool for bassists and producers.",
  keywords: [
    "bass to midi",
    "extract bass midi",
    "bass to midi converter",
    "bass transcription",
    "bass line to midi"
  ],
  openGraph: {
    title: "Bass to MIDI Converter — Free, Browser-Based",
    description:
      "Extract bass lines from audio and convert to MIDI. Free, browser-based.",
    url: "https://mp3tomidi.vip/bass-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/bass-to-midi",
  },
};

export default function BassToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Bass to MIDI Converter — Free, Browser-Based"
        description="Extract bass lines from audio and convert to MIDI using AI. Free, private, no signup."
        url="https://mp3tomidi.vip/bass-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Bass to MIDI", href: "/bass-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/bass-to-midi" />
      </main>
      <Footer />
    </>
  );
}
