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
  title: "Guitar to MIDI Converter — Extract Guitar Notes | MP3toMIDI",
  description:
    "Extract guitar notes from audio and convert to MIDI. Free browser-based AI tool for guitarists and music producers.",
  keywords: [
    "guitar to midi",
    "extract guitar midi",
    "guitar to midi converter",
    "guitar transcription",
    "guitar midi online"
  ],
  openGraph: {
    title: "Guitar to MIDI Converter — Free, Browser-Based",
    description:
      "Extract guitar notes from audio and convert to MIDI. Free, browser-based.",
    url: "https://mp3tomidi.vip/guitar-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/guitar-to-midi",
  },
};

export default function GuitarToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Guitar to MIDI Converter — Free, Browser-Based"
        description="Extract guitar notes from audio and convert to MIDI using AI. Free, private, no signup."
        url="https://mp3tomidi.vip/guitar-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Guitar to MIDI", href: "/guitar-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/guitar-to-midi" />
      </main>
      <Footer />
    </>
  );
}
