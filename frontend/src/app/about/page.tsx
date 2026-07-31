import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/Schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MP3toMIDI — Free AI Audio to MIDI Converter | MP3toMIDI",
  description:
    "Learn about MP3toMIDI: a free, browser-based tool that converts audio to MIDI using AI. No uploads, no signup, no cost.",
  openGraph: {
    title: "About MP3toMIDI — Free AI Audio to MIDI Converter",
    description: "Learn about MP3toMIDI: a free, browser-based tool that converts audio to MIDI using AI.",
    url: "https://mp3tomidi.vip/about",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://mp3tomidi.vip/about" },
};

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        title="About MP3toMIDI"
        description="A free, browser-based tool that converts audio to MIDI using AI."
        url="https://mp3tomidi.vip/about"
      />
      <Header />
      <article className="blog-article">
        <div className="container">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

          <header className="article-header">
            <span className="eyebrow">ABOUT</span>
            <h1>About MP3toMIDI</h1>
          </header>

          <div className="article-body">
            <p>
              MP3toMIDI is a free, browser-based tool that converts audio files into MIDI format.
              We built it because converting audio to MIDI used to require expensive software or
              uploading your files to unknown servers. Neither option was great.
            </p>

            <h2>How it works</h2>
            <p>
              The tool runs entirely in your browser using <strong>Spotify&apos;s Basic Pitch</strong> AI
              model, powered by TensorFlow.js. When you upload an audio file, the model analyzes
              it locally on your device, detects musical notes, and generates a standard MIDI file.
              Your audio never leaves your browser — no file is uploaded to any server.
            </p>

            <h2>Why it&apos;s free</h2>
            <p>
              We believe audio-to-MIDI conversion should be accessible to everyone. The underlying
              technology (Basic Pitch) is open source, and browser-based processing means we don&apos;t
              need expensive servers. There are no hidden costs, no freemium limits, and no
              &ldquo;upgrade to unlock&rdquo; gates.
            </p>

            <h2>What we support</h2>
            <p>
              MP3, WAV, FLAC, OGG, and M4A files up to 50MB. The output is a standard MIDI file
              (.mid) that works with every major DAW — Ableton Live, FL Studio, Logic Pro,
              GarageBand, Cubase, Reaper, and more.
            </p>

            <h2>Privacy</h2>
            <p>
              Your audio stays on your device. We don&apos;t upload, store, or see your files. We
              don&apos;t require accounts or personal information. The only data we collect is
              anonymous usage analytics (page views, conversion counts) to help us improve the
              tool.
            </p>

            <h2>Contact</h2>
            <p>
              Questions, feedback, or bug reports? Reach us at <a href="mailto:fuyuanzeng520@gmail.com">fuyuanzeng520@gmail.com</a>.
            </p>
            <p>
              <Link href="/">Try the converter →</Link>
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
