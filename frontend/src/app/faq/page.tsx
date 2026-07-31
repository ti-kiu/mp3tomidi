import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { WebPageSchema, FAQPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — MP3toMIDI",
  description:
    "Common questions about MP3toMIDI: accuracy, privacy, supported formats, DAW compatibility, file limits, and more.",
  openGraph: {
    title: "Frequently Asked Questions — MP3toMIDI",
    description: "Common questions about MP3toMIDI: accuracy, privacy, supported formats, and more.",
    url: "https://mp3tomidi.vip/faq",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://mp3tomidi.vip/faq" },
};

export default function FAQPage() {
  return (
    <>
      <WebPageSchema
        title="Frequently Asked Questions — MP3toMIDI"
        description="Common questions about MP3toMIDI: accuracy, privacy, supported formats, and more."
        url="https://mp3tomidi.vip/faq"
        faqQuestions={8}
      />
      <FAQPageSchema />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
