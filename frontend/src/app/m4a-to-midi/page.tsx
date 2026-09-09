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
  title: "M4A to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert M4A to MIDI in your browser. Free, no signup, no file upload. AI-powered Apple audio to MIDI conversion.",
  keywords: [
    "m4a to midi",
    "m4a to midi converter",
    "convert m4a to midi",
    "m4a to midi online",
    "free m4a to midi"
  ],
  openGraph: {
    title: "M4A to MIDI Converter — Free, Browser-Based",
    description:
      "Convert M4A to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/m4a-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/m4a-to-midi",
  },
};

export default function M4AToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="M4A to MIDI Converter — Free, Browser-Based"
        description="Convert M4A files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/m4a-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "M4A to MIDI", href: "/m4a-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/m4a-to-midi" />
      </main>
      <Footer />
    </>
  );
}
