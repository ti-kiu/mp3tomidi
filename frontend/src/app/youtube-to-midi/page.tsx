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
  title: "YouTube to MIDI Converter — Convert YouTube Audio | MP3toMIDI",
  description:
    "Convert YouTube videos to MIDI. Extract music from YouTube and convert to MIDI notes. Free browser-based AI tool.",
  keywords: [
    "youtube to midi",
    "youtube to midi converter",
    "convert youtube to midi",
    "youtube music to midi",
    "youtube audio to midi"
  ],
  openGraph: {
    title: "YouTube to MIDI Converter — Free, Browser-Based",
    description:
      "Convert YouTube videos to MIDI. Free, browser-based AI tool.",
    url: "https://mp3tomidi.vip/youtube-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/youtube-to-midi",
  },
};

export default function YouTubeToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="YouTube to MIDI Converter — Free, Browser-Based"
        description="Convert YouTube audio to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/youtube-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "YouTube to MIDI", href: "/youtube-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/youtube-to-midi" />
      </main>
      <Footer />
    </>
  );
}
