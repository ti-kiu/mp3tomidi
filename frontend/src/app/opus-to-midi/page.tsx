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
  title: "Opus to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert Opus to MIDI in your browser. Free, no signup, no file upload. AI-powered Opus audio to MIDI conversion.",
  keywords: [
    "opus to midi",
    "opus to midi converter",
    "convert opus to midi",
    "opus to midi online",
    "free opus to midi"
  ],
  openGraph: {
    title: "Opus to MIDI Converter — Free, Browser-Based",
    description:
      "Convert Opus to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/opus-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/opus-to-midi",
  },
};

export default function OpusToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Opus to MIDI Converter — Free, Browser-Based"
        description="Convert Opus files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/opus-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Opus to MIDI", href: "/opus-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/opus-to-midi" />
      </main>
      <Footer />
    </>
  );
}
