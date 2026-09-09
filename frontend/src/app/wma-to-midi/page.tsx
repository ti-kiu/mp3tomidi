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
  title: "WMA to MIDI Converter — Free, Browser-Based | MP3toMIDI",
  description:
    "Convert WMA to MIDI in your browser. Free, no signup, no file upload. AI-powered Windows Media audio to MIDI conversion.",
  keywords: [
    "wma to midi",
    "wma to midi converter",
    "convert wma to midi",
    "wma to midi online",
    "free wma to midi"
  ],
  openGraph: {
    title: "WMA to MIDI Converter — Free, Browser-Based",
    description:
      "Convert WMA to MIDI in your browser. Free, no signup, no file upload.",
    url: "https://mp3tomidi.vip/wma-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/wma-to-midi",
  },
};

export default function WMAToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="WMA to MIDI Converter — Free, Browser-Based"
        description="Convert WMA files to MIDI using AI in your browser. Free, private, no signup."
        url="https://mp3tomidi.vip/wma-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "WMA to MIDI", href: "/wma-to-midi" }]} />
        </div>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <RelatedTools currentPath="/wma-to-midi" />
      </main>
      <Footer />
    </>
  );
}
