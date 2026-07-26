import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "MP3toMIDI vs Other Converters — Comparison | MP3toMIDI",
  description:
    "See how MP3toMIDI compares to Melodyne, AnthemScore, AudioScore, and online converters. Free, browser-based, zero uploads, AI-powered.",
  keywords: [
    "mp3tomidi vs melodyne",
    "best mp3 to midi converter",
    "free midi converter comparison",
    "mp3 to midi converter comparison",
  ],
  openGraph: {
    title: "MP3toMIDI vs Other Converters — Comparison",
    description: "See how MP3toMIDI compares to Melodyne, AnthemScore, AudioScore, and online converters.",
    url: "https://mp3tomidi.vip/compare",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://mp3tomidi.vip/compare" },
};

const tools = [
  {
    name: "MP3toMIDI",
    price: "Free",
    privacy: "100% client-side",
    upload: "No upload",
    signup: "No signup",
    speed: "< 15 seconds",
    formats: "MP3, WAV, FLAC, OGG, M4A",
    highlight: true,
  },
  {
    name: "Melodyne",
    price: "$99-$849",
    privacy: "Desktop app",
    upload: "N/A (local)",
    signup: "License required",
    speed: "Instant",
    formats: "All audio formats",
    highlight: false,
  },
  {
    name: "AnthemScore",
    price: "$29-$58",
    privacy: "Desktop app",
    upload: "N/A (local)",
    signup: "License required",
    speed: "30-60 seconds",
    formats: "MP3, WAV, FLAC",
    highlight: false,
  },
  {
    name: "AudioScore",
    price: "$79-$249",
    privacy: "Desktop app",
    upload: "N/A (local)",
    signup: "License required",
    speed: "1-3 minutes",
    formats: "MP3, WAV, WMA",
    highlight: false,
  },
  {
    name: "onlineaudioconverter.com",
    price: "Free (limited)",
    privacy: "Server upload",
    upload: "Uploads file",
    signup: "No signup",
    speed: "30s - 5 min",
    formats: "MP3, WAV, OGG",
    highlight: false,
  },
  {
    name: "convertio.co",
    price: "Free (limited)",
    privacy: "Server upload",
    upload: "Uploads file",
    signup: "Optional",
    speed: "1-5 minutes",
    formats: "MP3, WAV, FLAC",
    highlight: false,
  },
];

export default function ComparePage() {
  return (
    <>
      <WebPageSchema
        title="MP3toMIDI vs Other Converters — Comparison"
        description="See how MP3toMIDI compares to Melodyne, AnthemScore, AudioScore, and online converters."
        url="https://mp3tomidi.vip/compare"
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Compare", href: "/compare" }]} />
        </div>
        <section className="compare-hero">
          <div className="container">
            <span className="eyebrow speakable">COMPARISON</span>
            <h1 className="speakable">How does MP3toMIDI compare?</h1>
            <p>
              We built MP3toMIDI because existing tools are either expensive, require installation,
              or upload your audio to unknown servers. Here&apos;s how we stack up.
            </p>
          </div>
        </section>

        <section className="compare-table-section">
          <div className="container">
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    {tools.map((t) => (
                      <th key={t.name} className={t.name === "MP3toMIDI" ? "highlight-col" : ""}>
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Price</strong></td>
                    {tools.map((t) => (
                      <td key={t.name} className={t.highlight ? "highlight-col" : ""}>{t.price}</td>
                    ))}
                  </tr>
                  <tr>
                    <td><strong>Privacy</strong></td>
                    {tools.map((t) => (
                      <td key={t.name} className={t.highlight ? "highlight-col" : ""}>{t.privacy}</td>
                    ))}
                  </tr>
                  <tr>
                    <td><strong>File Upload</strong></td>
                    {tools.map((t) => (
                      <td key={t.name} className={t.highlight ? "highlight-col" : ""}>{t.upload}</td>
                    ))}
                  </tr>
                  <tr>
                    <td><strong>Signup</strong></td>
                    {tools.map((t) => (
                      <td key={t.name} className={t.highlight ? "highlight-col" : ""}>{t.signup}</td>
                    ))}
                  </tr>
                  <tr>
                    <td><strong>Speed</strong></td>
                    {tools.map((t) => (
                      <td key={t.name} className={t.highlight ? "highlight-col" : ""}>{t.speed}</td>
                    ))}
                  </tr>
                  <tr>
                    <td><strong>Formats</strong></td>
                    {tools.map((t) => (
                      <td key={t.name} className={t.highlight ? "highlight-col" : ""}>{t.formats}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="compare-verdict">
          <div className="container">
            <h2 className="speakable">Why choose MP3toMIDI?</h2>
            <div className="verdict-grid">
              <div className="verdict-card">
                <h3>100% Free</h3>
                <p>No freemium limits, no watermarks, no &ldquo;upgrade to unlock&rdquo; gates. Every feature is free, forever.</p>
              </div>
              <div className="verdict-card">
                <h3>Zero Privacy Risk</h3>
                <p>Your audio never leaves your browser. No server uploads means no risk of data leaks or unauthorized use.</p>
              </div>
              <div className="verdict-card">
                <h3>No Installation</h3>
                <p>Works in any modern browser on any device. No downloads, no plugins, no accounts. Just open and convert.</p>
              </div>
              <div className="verdict-card">
                <h3>AI-Powered Accuracy</h3>
                <p>Uses Spotify&apos;s Basic Pitch neural network — the same technology behind professional music analysis tools.</p>
              </div>
            </div>
            <div className="compare-cta">
              <a href="/" className="cta">Try It Free — No Signup Required</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
