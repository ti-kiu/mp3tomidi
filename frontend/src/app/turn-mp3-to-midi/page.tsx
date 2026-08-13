import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Turn MP3 to MIDI — Quick, Free, No Upload | MP3toMIDI",
  description: "Turn any MP3 file into a MIDI in seconds. Free browser-based tool with AI-powered note detection. No signup, no file upload.",
  keywords: ["turn mp3 to midi", "change mp3 to midi", "make mp3 into midi"],
  openGraph: {
    title: "Turn MP3 to MIDI — Quick, Free, No Upload",
    description: "Turn any MP3 file into a MIDI in seconds. Free browser-based tool with AI-powered note detection. No signup, no file upload.",
    url: "https://mp3tomidi.vip/turn-mp3-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/turn-mp3-to-midi",
  },
};

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Turn MP3 to MIDI — Quick, Free, No Upload"
        description="Turn any MP3 file into a MIDI in seconds. Free browser-based tool with AI-powered note detection. No signup, no file upload."
        url="https://mp3tomidi.vip/turn-mp3-to-midi"
        faqQuestions={8}
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Turn Your MP3 into MIDI — Right in Your ", href: "/turn-mp3-to-midi" }]} />
        </div>
        <section className="landing-hero">
          <div className="container">
            <h1>Turn Your MP3 into MIDI — Right in Your Browser</h1>
          </div>
        </section>
        <section className="article-body">
          <div className="container">
            <p>You've got an audio file and you need the notes. Maybe it's a song you want to learn, a melody you want to remix, or a chord progression you want to study. Turning MP3 to MIDI extracts the musical information from the audio and gives you an editable file you can work with.</p>
            <p>Here's how it works: drag your MP3 onto the converter. The AI model (Spotify's Basic Pitch) analyzes the audio and identifies the notes. In about 10-15 seconds, you get a MIDI file with all the detected notes, ready to open in any DAW.</p>
            <h2>What you can do with the MIDI</h2>
            <p>Once you have the MIDI file, the possibilities open up. Change the instrument — play the melody on a synth instead of piano. Adjust the tempo — slow it down to practice, or speed it up. Transpose the key — move everything up or down to match your vocal range. Rearrange sections — copy the chorus, cut the bridge, extend the solo.</p>
            <p>MIDI files are also great for learning. Open the file in a piano app and watch the notes scroll by in real time. It's like having a teacher play the piece slowly for you, note by note.</p>
            <h2>Tips for better results</h2>
            <p>Use the cleanest audio you have. Solo instruments work better than full band mixes. Higher quality files produce more accurate transcriptions. And always check the preview before downloading — a quick glance at the piano roll will tell you if the transcription captured the right notes.</p>

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
