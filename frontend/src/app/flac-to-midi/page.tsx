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
  title: "FLAC to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert FLAC to MIDI in your browser. Free, no signup, no file upload. AI-powered lossless audio to MIDI conversion.",
  keywords: [
    "flac to midi",
    "flac to midi converter",
    "convert flac to midi",
    "flac to midi online",
    "free flac to midi"
  ],
  openGraph: {
    title: "FLAC to MIDI Converter — Free, Browser-Based",
    description:
      "Convert FLAC to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/flac-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/flac-to-midi",
  },
};

export default function FLACToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="FLAC to MIDI Converter — Free, Browser-Based"
        description="Convert FLAC files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/flac-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "FLAC to MIDI", href: "/flac-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/flac-to-midi" />
      </main>
      <Footer />
    </>
  );
}
