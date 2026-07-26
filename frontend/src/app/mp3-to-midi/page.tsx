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
  title: "MP3 to MIDI Converter Online — Free, No Upload | MP3toMIDI",
  description:
    "Convert MP3 to MIDI in your browser. Free, no signup, no file upload. AI-powered audio to MIDI conversion for music producers and DJs.",
  keywords: [
    "mp3 to midi",
    "mp3 to midi converter",
    "convert mp3 to midi",
    "mp3 to midi online",
    "free mp3 to midi",
  ],
  openGraph: {
    title: "MP3 to MIDI Converter Online — Free, No Upload",
    description:
      "Convert MP3 to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/mp3-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/mp3-to-midi",
  },
};

export default function Mp3ToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="MP3 to MIDI Converter Online — Free, No Upload"
        description="Convert MP3 to MIDI in your browser using AI. Free, private, no signup required."
        url="https://mp3tomidi.vip/mp3-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "MP3 to MIDI", href: "/mp3-to-midi" }]} />
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
