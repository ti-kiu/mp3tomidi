import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Convert MP3 to MIDI — Free Online Tool, No Upload | MP3toMIDI",
  description: "Convert MP3 to MIDI in seconds. Free, browser-based, no file upload. AI-powered pitch detection for accurate note transcription.",
  keywords: ["convert mp3 to midi", "mp3 to midi online", "free mp3 to midi converter"],
  openGraph: {
    title: "Convert MP3 to MIDI — Free Online Tool, No Upload",
    description: "Convert MP3 to MIDI in seconds. Free, browser-based, no file upload. AI-powered pitch detection for accurate note transcription.",
    url: "https://mp3tomidi.vip/convert-mp3-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/convert-mp3-to-midi",
  },
};

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Convert MP3 to MIDI — Free Online Tool, No Upload"
        description="Convert MP3 to MIDI in seconds. Free, browser-based, no file upload. AI-powered pitch detection for accurate note transcription."
        url="https://mp3tomidi.vip/convert-mp3-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Convert MP3 to MIDI in Your Browser", href: "/convert-mp3-to-midi" }]} />
        </div>
        <section className="landing-hero">
          <div className="container">
            <h1>Convert MP3 to MIDI in Your Browser</h1>
          </div>
        </section>
        <section className="article-body">
          <div className="container">
            <p>You have an MP3 file and you need the notes from it. Maybe you want to remix a song, learn a melody by ear, or pull a chord progression into your DAW. Whatever the reason, converting MP3 to MIDI is the fastest way to get there.</p>
            <p>Our tool does this entirely in your browser. Drop your MP3 file onto the converter, and Spotify's Basic Pitch AI model analyzes the audio, detects the musical notes, and generates a standard MIDI file. No file is uploaded to any server — everything happens on your device using WebAssembly.</p>
            <h2>How it works</h2>
            <p>The process takes three steps. First, you select or drag your MP3 file onto the page. The AI model loads (this takes a few seconds on first use), then it processes the audio. For a typical three-minute song, the conversion finishes in about 10 to 15 seconds. When it's done, you'll see a piano roll preview showing the detected notes, and you can download the MIDI file.</p>
            <p>The accuracy depends on the source material. Solo instruments — piano, guitar, voice — produce the cleanest transcriptions. Full band mixes are harder because the algorithm has to figure out which notes belong to which instrument. For best results, use recordings with a single instrument and minimal background noise.</p>
            <h2>What you get</h2>
            <p>The output is a standard .mid file that works in every major DAW: Ableton Live, FL Studio, Logic Pro, GarageBand, Cubase, Reaper, Pro Tools, and more. You can edit the notes, change the instrument, adjust timing, and rearrange sections however you want.</p>
            <p>MIDI files are tiny — usually under 100KB even for complex songs — so they're easy to share and store. Unlike audio files, MIDI contains performance data (which notes, when, how hard) rather than a recorded waveform, which makes it fully editable.</p>

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
