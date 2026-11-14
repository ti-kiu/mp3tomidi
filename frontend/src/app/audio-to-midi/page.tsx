import type { Metadata } from "next";
import Link from "next/link";
import RelatedTools from "@/components/RelatedTools";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SoftwareApplicationSchema, WebPageSchema } from "@/components/Schema";
import { ACCURACY_ANSWER } from "@/lib/modelCopy";

export const metadata: Metadata = {
  title: "Audio to MIDI Converter — Any Format, In Your Browser | MP3toMIDI",
  description:
    "Convert MP3, WAV, FLAC, OGG, or M4A to MIDI in your browser with Spotify's open-source Basic Pitch model. Free, private, no signup, and no file upload.",
  keywords: [
    "audio to midi",
    "audio to midi converter",
    "convert audio to midi",
    "audio to midi online",
    "free audio to midi",
  ],
  openGraph: {
    title: "Audio to MIDI Converter — Any Format, In Your Browser",
    description:
      "Convert MP3, WAV, FLAC, OGG, or M4A to MIDI in your browser with Spotify's open-source Basic Pitch model.",
    url: "https://mp3tomidi.vip/audio-to-midi",
    siteName: "MP3toMIDI",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://mp3tomidi.vip/audio-to-midi",
  },
};

const formats = [
  { href: "/mp3-to-midi", name: "MP3", note: "The usual lossy download. A high bitrate is easier to transcribe than a heavily compressed file." },
  { href: "/wav-to-midi", name: "WAV", note: "Uncompressed audio. Useful when you already exported a mix or stem as WAV." },
  { href: "/flac-to-midi", name: "FLAC", note: "Lossless and smaller than WAV. The browser decodes it the same way as other local files." },
  { href: "/ogg-to-midi", name: "OGG", note: "An open lossy format. Drop the file here if that is what you have." },
  { href: "/m4a-to-midi", name: "M4A", note: "Common from phones and Apple exports. The file still never leaves this browser tab." },
];

export default function AudioToMidiPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <WebPageSchema
        title="Audio to MIDI Converter — Any Format, In Your Browser"
        description="Convert MP3, WAV, FLAC, OGG, or M4A to MIDI in your browser with Spotify's open-source Basic Pitch model."
        url="https://mp3tomidi.vip/audio-to-midi"
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Audio to MIDI", href: "/audio-to-midi" }]} />
        </div>
        <Hero
          title={
            <>
              Audio to MIDI Converter —{" "}
              <span>Any Format, In Your Browser</span>
            </>
          }
          description="This page is for any audio file, not one format. Drop MP3, WAV, FLAC, OGG, or M4A. Spotify's open-source Basic Pitch model transcribes it locally and downloads a .mid file."
        />
        <section className="article-body" style={{ margin: "0 auto 64px", padding: "0 24px" }}>
          <h2>Same converter, whatever the file extension is</h2>
          <p>
            <Link href="/mp3-to-midi">MP3 to MIDI</Link> is the page for people searching that exact phrase.
            This page is the general one: you already have audio, and you want note data. The drop zone
            above is the real converter. It does not send the file to a server, and it does not ask you
            to create an account.
          </p>
          <p>{ACCURACY_ANSWER}</p>

          <h2>Formats this page accepts</h2>
          <p>
            The file picker accepts MP3, WAV, FLAC, OGG, and M4A, up to 50MB. If the browser can decode
            the audio, Basic Pitch reads that decoded signal. The model does not change per extension.
          </p>
          <ul>
            {formats.map((format) => (
              <li key={format.href}>
                <Link href={format.href}>{format.name}</Link> — {format.note}
              </li>
            ))}
          </ul>

          <h2>What you get back</h2>
          <p>
            The download is a standard MIDI file: pitches, timing, and loudness. It is not a remix of the
            original recording and it does not separate a full mix into labeled instrument tracks. Open it
            in Ableton Live, FL Studio, Logic Pro, GarageBand, or any other DAW and assign the sound yourself.
          </p>
          <p>
            Instrument pages such as <Link href="/piano-to-midi">piano</Link>,{" "}
            <Link href="/guitar-to-midi">guitar</Link>, and <Link href="/bass-to-midi">bass</Link> use this
            same Basic Pitch model. They are not separately trained converters. An isolated take is still
            the recording that needs the least cleanup.
          </p>
        </section>
        <RelatedTools currentPath="/audio-to-midi" />
      </main>
      <Footer />
    </>
  );
}
