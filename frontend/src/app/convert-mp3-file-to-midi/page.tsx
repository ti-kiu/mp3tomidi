import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Convert MP3 File to MIDI — Step by Step | MP3toMIDI",
  description: "Step-by-step guide to convert any MP3 file to MIDI. Free, no upload, works in Chrome, Firefox, Edge, and Safari.",
  keywords: ["convert mp3 file to midi", "convert mp3 file to midi online", "how to convert mp3 file to midi"],
  openGraph: {
    title: "Convert MP3 File to MIDI — Step by Step",
    description: "Step-by-step guide to convert any MP3 file to MIDI. Free, no upload, works in Chrome, Firefox, Edge, and Safari.",
    url: "https://mp3tomidi.vip/convert-mp3-file-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/convert-mp3-file-to-midi",
  },
};

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Convert MP3 File to MIDI — Step by Step"
        description="Step-by-step guide to convert any MP3 file to MIDI. Free, no upload, works in Chrome, Firefox, Edge, and Safari."
        url="https://mp3tomidi.vip/convert-mp3-file-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "How to Convert an MP3 File to MIDI", href: "/convert-mp3-file-to-midi" }]} />
        </div>
        <section className="landing-hero">
          <div className="container">
            <h1>How to Convert an MP3 File to MIDI</h1>
          </div>
        </section>
        <section className="article-body">
          <div className="container">
            <p>Converting an MP3 file to MIDI is simpler than most people think. You don't need to install software, create an account, or upload anything. Here's the exact process.</p>
            <h2>Step 1: Open the converter</h2>
            <p>Go to mp3tomidi.vip in any modern browser — Chrome, Firefox, Edge, or Safari all work. The page loads the AI model in the background (about 900KB, takes a few seconds on first visit).</p>
            <h2>Step 2: Select your MP3 file</h2>
            <p>Drag and drop your MP3 file onto the upload area, or click to browse your files. The tool also accepts WAV, FLAC, OGG, and M4A files up to 50MB. The file stays on your device — nothing is uploaded to any server.</p>
            <h2>Step 3: Wait for conversion</h2>
            <p>The AI model analyzes your audio and detects the musical notes. A progress bar shows the conversion status. Most files finish in 10-15 seconds. Complex files with many instruments may take a bit longer.</p>
            <h2>Step 4: Preview the results</h2>
            <p>Once the conversion is done, you'll see a piano roll visualization showing the detected notes. Check that the notes look right — do the patterns make sense musically? If something looks off, try using a cleaner version of the audio.</p>
            <h2>Step 5: Download the MIDI</h2>
            <p>Click the download button to save the .mid file. You can then open it in any DAW (Ableton, FL Studio, Logic Pro, GarageBand, Cubase, Reaper) or any app that supports MIDI playback.</p>

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
