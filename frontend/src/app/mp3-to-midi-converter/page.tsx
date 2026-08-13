import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "MP3 to MIDI Converter — Free, AI-Powered, Browser-Based | MP3toMIDI",
  description: "Free MP3 to MIDI converter powered by AI. No file upload, no signup, no installation. Converts audio to MIDI in under 15 seconds.",
  keywords: ["mp3 to midi converter", "free mp3 to midi converter", "best mp3 to midi converter"],
  openGraph: {
    title: "MP3 to MIDI Converter — Free, AI-Powered, Browser-Based",
    description: "Free MP3 to MIDI converter powered by AI. No file upload, no signup, no installation. Converts audio to MIDI in under 15 seconds.",
    url: "https://mp3tomidi.vip/mp3-to-midi-converter",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/mp3-to-midi-converter",
  },
};

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="MP3 to MIDI Converter — Free, AI-Powered, Browser-Based"
        description="Free MP3 to MIDI converter powered by AI. No file upload, no signup, no installation. Converts audio to MIDI in under 15 seconds."
        url="https://mp3tomidi.vip/mp3-to-midi-converter"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "The MP3 to MIDI Converter That Runs in Y", href: "/mp3-to-midi-converter" }]} />
        </div>
        <section className="landing-hero">
          <div className="container">
            <h1>The MP3 to MIDI Converter That Runs in Your Browser</h1>
          </div>
        </section>
        <section className="article-body">
          <div className="container">
            <p>Most MP3 to MIDI converters either cost money, require installation, or upload your files to a server. This one does none of those things. It's a free, browser-based tool that uses AI to convert your audio files to MIDI format — and it does it all locally on your device.</p>
            <p>The converter uses Spotify's Basic Pitch model, a neural network trained on tens of thousands of hours of music. It detects individual notes, their timing, their velocity, and even pitch bends. The model runs through TensorFlow.js with a WebAssembly backend, so it works in any modern browser without plugins.</p>
            <h2>What makes it different</h2>
            <p>Privacy is the big one. Your audio file never leaves your device. There's no upload, no server processing, no account required. The AI model downloads once (about 900KB), then everything runs locally. You can even disconnect from the internet after the page loads and it'll still work.</p>
            <p>Speed is another advantage. A three-minute song converts in about 10-15 seconds on a modern laptop. There's no queue, no waiting for other users, no 'processing' spinner that takes five minutes.</p>
            <h2>Supported formats</h2>
            <p>MP3, WAV, FLAC, OGG, and M4A files up to 50MB. The converter handles all common audio formats automatically — no need to convert to a specific format first. Just drop your file and go.</p>

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
