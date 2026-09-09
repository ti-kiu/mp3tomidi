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
  title: "AIFF to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert AIFF to MIDI in your browser. Free, no signup, no file upload. AI-powered Apple audio to MIDI conversion.",
  keywords: [
    "aiff to midi",
    "aiff to midi converter",
    "convert aiff to midi",
    "aiff to midi online",
    "free aiff to midi"
  ],
  openGraph: {
    title: "AIFF to MIDI Converter — Free, Browser-Based",
    description:
      "Convert AIFF to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/aiff-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/aiff-to-midi",
  },
};

export default function AIFFToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="AIFF to MIDI Converter — Free, Browser-Based"
        description="Convert AIFF files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/aiff-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "AIFF to MIDI", href: "/aiff-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/aiff-to-midi" />
      </main>
      <Footer />
    </>
  );
}
