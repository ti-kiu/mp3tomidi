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
  title: "Vocals to MIDI Converter — Extract Vocal Melody | MP3toMIDI",
  description:
    "Extract vocal melody from audio and convert to MIDI. Free browser-based AI tool for singers and producers.",
  keywords: [
    "vocals to midi",
    "vocal to midi",
    "extract vocal melody midi",
    "voice to midi converter",
    "singing to midi"
  ],
  openGraph: {
    title: "Vocals to MIDI Converter — Free, Browser-Based",
    description:
      "Extract vocal melody from audio and convert to MIDI. Free, browser-based.",
    url: "https://mp3tomidi.vip/vocals-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/vocals-to-midi",
  },
};

export default function VocalsToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Vocals to MIDI Converter — Free, Browser-Based"
        description="Extract vocal melody from audio and convert to MIDI using AI. Free, private, no signup."
        url="https://mp3tomidi.vip/vocals-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Vocals to MIDI", href: "/vocals-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/vocals-to-midi" />
      </main>
      <Footer />
    </>
  );
}
