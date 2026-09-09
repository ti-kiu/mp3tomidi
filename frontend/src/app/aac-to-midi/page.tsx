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
  title: "AAC to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert AAC to MIDI in your browser. Free, no signup, no file upload. AI-powered audio to MIDI for music production.",
  keywords: [
    "aac to midi",
    "aac to midi converter",
    "convert aac to midi",
    "aac to midi online",
    "free aac to midi"
  ],
  openGraph: {
    title: "AAC to MIDI Converter — Free, Browser-Based",
    description:
      "Convert AAC to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/aac-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/aac-to-midi",
  },
};

export default function AACToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="AAC to MIDI Converter — Free, Browser-Based"
        description="Convert AAC files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/aac-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "AAC to MIDI", href: "/aac-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/aac-to-midi" />
      </main>
      <Footer />
    </>
  );
}
