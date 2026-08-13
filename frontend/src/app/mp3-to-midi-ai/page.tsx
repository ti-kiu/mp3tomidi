import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "MP3 to MIDI AI — Browser-Based Neural Network Transcription | MP3toMIDI",
  description: "AI-powered MP3 to MIDI conversion using Spotify's Basic Pitch neural network. Runs in your browser — no uploads, no server, free.",
  keywords: ["mp3 to midi ai", "ai mp3 to midi", "ai audio to midi", "neural network midi"],
  openGraph: {
    title: "MP3 to MIDI AI — Browser-Based Neural Network Transcription",
    description: "AI-powered MP3 to MIDI conversion using Spotify's Basic Pitch neural network. Runs in your browser — no uploads, no server, free.",
    url: "https://mp3tomidi.vip/mp3-to-midi-ai",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/mp3-to-midi-ai",
  },
};

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="MP3 to MIDI AI — Browser-Based Neural Network Transcription"
        description="AI-powered MP3 to MIDI conversion using Spotify's Basic Pitch neural network. Runs in your browser — no uploads, no server, free."
        url="https://mp3tomidi.vip/mp3-to-midi-ai"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "AI-Powered MP3 to MIDI Conversion", href: "/mp3-to-midi-ai" }]} />
        </div>
        <section className="landing-hero">
          <div className="container">
            <h1>AI-Powered MP3 to MIDI Conversion</h1>
          </div>
        </section>
        <section className="article-body">
          <div className="container">
            <p>The technology behind MP3 to MIDI conversion has changed dramatically in the past few years. Old-school converters used basic signal processing — analyzing frequencies and hoping for the best. Modern AI models are trained on real music, so they understand how instruments actually sound.</p>
            <p>This tool uses Spotify's Basic Pitch model, a neural network specifically designed for audio-to-MIDI transcription. It was trained on tens of thousands of hours of music across dozens of instruments. The result is a converter that handles real-world audio much better than traditional algorithms.</p>
            <h2>How the AI works</h2>
            <p>Basic Pitch processes audio in overlapping windows, analyzing the frequency content of each one. But unlike simple pitch detectors, it uses a neural network to interpret those frequencies. This means it can handle complex scenarios that trip up older tools: overlapping notes, background noise, reverb, and even some polyphonic material.</p>
            <p>The model runs in your browser using TensorFlow.js with a WebAssembly backend. It uses your device's CPU (and GPU if available) for inference. No data is sent to any server — the model and the audio both stay on your machine.</p>
            <h2>AI vs traditional conversion</h2>
            <p>Traditional converters struggle with anything beyond a simple melody. They're easily confused by background noise, reverb, and overlapping instruments. AI models handle these scenarios much better because they've been trained on real music that includes all these complexities.</p>
            <p>The tradeoff is speed. AI conversion takes a few seconds longer than traditional methods because the neural network needs to process the audio. But the accuracy improvement is worth the extra wait, especially for complex recordings.</p>

            <div className="landing-cta">
              <a href="/" className="cta">Try the Converter — It&apos;s Free</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
