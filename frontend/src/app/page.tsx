import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SoftwareApplicationSchema, FAQPageSchema, WebPageSchema } from "@/components/Schema";
import Link from "next/link";

function WhatIsMidi() {
  return (
    <section className="what-is-midi">
      <div className="container">
        <div className="wim-grid">
          <div className="wim-text">
            <span className="eyebrow speakable">WHAT IS MIDI</span>
            <h2 className="speakable">MIDI is the universal language of digital music.</h2>
            <p className="speakable">
              <strong>MIDI</strong> (Musical Instrument Digital Interface) is a technical standard
              that lets musical instruments, computers, and other devices communicate. Unlike audio
              files (MP3, WAV), MIDI doesn&apos;t contain sound — it stores <em>performance data</em>:
              which notes were played, when, how hard, and for how long.
            </p>
            <p>
              This makes MIDI files incredibly small (typically under 100KB), fully editable
              (change notes, tempo, instrument), and universally compatible with every DAW —
              Ableton Live, FL Studio, Logic Pro, GarageBand, Cubase, and more.
            </p>
            <div className="wim-comparison">
              <div className="wim-vs">
                <div className="wim-vs-item">
                  <span className="wim-vs-label">MP3 / WAV</span>
                  <span className="wim-vs-detail">Contains recorded audio waveform</span>
                  <span className="wim-vs-detail">Large file (3-10 MB per minute)</span>
                  <span className="wim-vs-detail">Cannot edit individual notes</span>
                </div>
                <div className="wim-vs-divider">vs</div>
                <div className="wim-vs-item wim-vs-midi">
                  <span className="wim-vs-label">MIDI</span>
                  <span className="wim-vs-detail">Contains note/performance data</span>
                  <span className="wim-vs-detail">Tiny file (under 100KB)</span>
                  <span className="wim-vs-detail">Fully editable in any DAW</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wim-use-cases">
            <h3 className="speakable">What is MIDI used for?</h3>
            <ul className="wim-list">
              <li><strong>Music production</strong> — Write, arrange, and produce songs in DAWs</li>
              <li><strong>Remixing</strong> — Extract melodies and chord progressions from songs</li>
              <li><strong>Learning</strong> — Study note patterns and song structures</li>
              <li><strong>Live performance</strong> — Control synthesizers and virtual instruments</li>
              <li><strong>Transcription</strong> — Convert recordings into editable sheet music</li>
              <li><strong>Game audio</strong> — Create adaptive soundtracks that respond to gameplay</li>
            </ul>
            <Link href="/features" className="wim-link">
              See all features →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SoftwareApplicationSchema />
      <FAQPageSchema />
      <WebPageSchema
        title="MP3 to MIDI — Free Online Converter"
        description="Convert MP3, WAV, FLAC, OGG to MIDI in your browser. Free, private, no signup. AI-powered audio to MIDI conversion."
        url="https://mp3tomidi.vip"
        faqQuestions={8}
      />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhatIsMidi />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
