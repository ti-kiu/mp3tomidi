import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "WAV to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert WAV to MIDI in your browser. Free, no signup, no file upload. AI-powered audio to MIDI for music producers and DJs.",
  keywords: [
    "wav to midi",
    "wav to midi converter",
    "convert wav to midi",
    "wav to midi online",
    "free wav to midi",
  ],
  openGraph: {
    title: "WAV to MIDI Converter — Free, Browser-Based",
    description:
      "Convert WAV to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/wav-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/wav-to-midi",
  },
};

export default function WavToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="WAV to MIDI Converter — Free, Browser-Based"
        description="Convert WAV files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/wav-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "WAV to MIDI", href: "/wav-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
