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
  title: "OGG to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert OGG to MIDI in your browser. Free, no signup, no file upload. AI-powered audio to MIDI for music producers.",
  keywords: [
    "ogg to midi",
    "ogg to midi converter",
    "convert ogg to midi",
    "ogg to midi online",
    "free ogg to midi"
  ],
  openGraph: {
    title: "OGG to MIDI Converter — Free, Browser-Based",
    description:
      "Convert OGG to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/ogg-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/ogg-to-midi",
  },
};

export default function OGGToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="OGG to MIDI Converter — Free, Browser-Based"
        description="Convert OGG files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/ogg-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "OGG to MIDI", href: "/ogg-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/ogg-to-midi" />
      </main>
      <Footer />
    </>
  );
}
