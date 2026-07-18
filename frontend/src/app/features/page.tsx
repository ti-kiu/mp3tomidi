import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features — AI Audio to MIDI | MP3toMIDI",
  description:
    "Explore MP3toMIDI features: AI-powered transcription, browser-side processing, MIDI preview, multi-format support, and complete privacy.",
  alternates: { canonical: "https://mp3tomidi.vip/features" },
};

const features = [
  {
    tag: "AI TRANSCRIPTION",
    icon: "psychology",
    title: "Neural Audio Extraction",
    desc: "Spotify's Basic Pitch model runs directly in your browser. It detects notes, chords, pitch bends, and micro-timing with industry-leading accuracy.",
    chips: ["99.4% Note Accuracy", "Instrument Separation", "Micro-timing Detection"],
  },
  {
    tag: "SPEED",
    icon: "speed",
    title: "Instant Processing",
    desc: "No upload queues, no server wait times. Your audio is decoded and transcribed locally using WebGL-accelerated inference. Most files finish in under 10 seconds.",
    chips: ["WebGL Accelerated", "No Upload Required", "Real-time Progress"],
  },
  {
    tag: "COMPATIBILITY",
    icon: "devices",
    title: "Works with your DAW",
    desc: "Download standard .mid files that open directly in Ableton, FL Studio, Logic Pro, Cubase, and every other DAW that supports MIDI import.",
    chips: ["Standard .mid Format", "All Major DAWs", "Drag & Drop Ready"],
  },
  {
    tag: "PRIVACY",
    icon: "lock",
    title: "Your audio stays on your device",
    desc: "All processing happens client-side using WebAssembly. Your audio files are never uploaded to any server. No account required, no tracking of your content.",
    chips: ["100% Client-Side", "No Account Needed", "Zero Data Collection"],
  },
  {
    tag: "FORMATS",
    icon: "audio_file",
    title: "Multi-Format Support",
    desc: "Upload MP3, WAV, FLAC, or OGG files up to 50MB. The decoder handles all common audio formats automatically — no conversion needed before uploading.",
    chips: ["MP3 · WAV · FLAC · OGG", "Up to 50MB", "Auto Detection"],
  },
  {
    tag: "PREVIEW",
    icon: "piano",
    title: "MIDI Preview Before Download",
    desc: "See exactly what was transcribed with an interactive piano roll visualization. Hover over notes to see pitch, timing, and velocity before you download.",
    chips: ["Piano Roll View", "Note Details on Hover", "Instant Feedback"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="features-page-hero">
          <div className="container">
            <span className="eyebrow">FEATURES</span>
            <h1>Built for producers who move fast.</h1>
            <p>
              Every feature designed to get you from audio to MIDI in seconds, not
              minutes. No friction, no fees.
            </p>
          </div>
        </section>

        <section className="features-page-grid">
          <div className="container">
            <div className="fp-grid">
              {features.map((f) => (
                <div key={f.title} className="fp-card">
                  <div className="fp-card-head">
                    <span className="feature-tag">{f.tag}</span>
                    <div className="fp-icon">
                      <span className="material-icons-outlined">{f.icon}</span>
                    </div>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="chip-row">
                    {f.chips.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="features-page-cta">
          <div className="container">
            <h2>Ready to try it?</h2>
            <p>No signup, no credit card. Just drop your audio and go.</p>
            <a href="/" className="cta">Start Converting — It&apos;s Free</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
