import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MIDI to MP3 Converter Online — Free | MP3toMIDI",
  description:
    "Convert MIDI to MP3 in your browser. Free, no signup. Coming soon — join the waitlist to be notified.",
  keywords: [
    "midi to mp3",
    "midi to mp3 converter",
    "convert midi to mp3",
    "midi to mp3 online",
  ],
  openGraph: {
    title: "MIDI to MP3 Converter Online — Free",
    description: "Convert MIDI to MP3 in your browser. Free, no signup.",
    url: "https://mp3tomidi.vip/midi-to-mp3",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/midi-to-mp3",
  },
};

export default function MidiToMp3Page() {
  return (
    <>
      <Header />
      <main>
        <section className="coming-soon">
          <div className="container">
            <span className="eyebrow">COMING SOON</span>
            <h1>MIDI to MP3 Converter</h1>
            <p>
              We&apos;re building a free, browser-based MIDI to MP3 converter.
              No uploads, no signup — just drop your MIDI file and get an MP3.
            </p>
            <div className="coming-soon-features">
              <div className="coming-soon-item">
                <span className="material-icons-outlined">music_note</span>
                <span>Upload MIDI files</span>
              </div>
              <div className="coming-soon-item">
                <span className="material-icons-outlined">piano</span>
                <span>Choose SoundFont instruments</span>
              </div>
              <div className="coming-soon-item">
                <span className="material-icons-outlined">download</span>
                <span>Download high-quality MP3</span>
              </div>
            </div>
            <a href="#convert" className="coming-soon-cta">
              Try Our MP3 to MIDI Converter Instead →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
