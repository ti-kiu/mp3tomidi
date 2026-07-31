import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/Schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help & Support — MP3toMIDI",
  description:
    "Get help with MP3toMIDI. Troubleshooting conversion issues, supported formats, browser compatibility, and more.",
  openGraph: {
    title: "Help & Support — MP3toMIDI",
    description: "Get help with MP3toMIDI. Troubleshooting, supported formats, and browser compatibility.",
    url: "https://mp3tomidi.vip/help",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://mp3tomidi.vip/help" },
};

export default function HelpPage() {
  return (
    <>
      <WebPageSchema
        title="Help & Support — MP3toMIDI"
        description="Get help with MP3toMIDI. Troubleshooting, supported formats, and browser compatibility."
        url="https://mp3tomidi.vip/help"
      />
      <Header />
      <article className="blog-article">
        <div className="container">
          <Breadcrumbs items={[{ name: "Help", href: "/help" }]} />

          <header className="article-header">
            <span className="eyebrow">HELP</span>
            <h1>Help &amp; Support</h1>
          </header>

          <div className="article-body">
            <h2>Supported file formats</h2>
            <p>
              MP3toMIDI supports the following audio formats: <strong>MP3, WAV, FLAC, OGG, M4A</strong>.
              Maximum file size is 50MB. If your file is in a different format, convert it to MP3 or
              WAV first using any audio converter.
            </p>

            <h2>Browser compatibility</h2>
            <p>
              The converter works best on modern desktop browsers:
            </p>
            <ul>
              <li><strong>Chrome 90+</strong> — Recommended, fastest performance</li>
              <li><strong>Firefox 90+</strong> — Fully supported</li>
              <li><strong>Edge 90+</strong> — Fully supported</li>
              <li><strong>Safari 15+</strong> — Supported, may be slower on older Macs</li>
            </ul>
            <p>
              Mobile browsers work too, but large files (over 20MB) may be slow or run out of memory
              on older phones. For the best experience, use a desktop browser.
            </p>

            <h2>Troubleshooting</h2>
            <p>
              <strong>The conversion is taking too long.</strong> Large files take longer to process.
              A 3-minute MP3 typically takes 10-15 seconds on a modern laptop. If it&apos;s been over
              a minute, try refreshing the page and using a smaller file.
            </p>
            <p>
              <strong>The MIDI has too many extra notes.</strong> This usually happens with noisy
              audio or recordings with multiple instruments. Try using a cleaner recording or a
              solo instrument track. You can also clean up the extra notes in your DAW after
              downloading.
            </p>
            <p>
              <strong>The MIDI sounds wrong.</strong> MIDI files don&apos;t contain sound — they need an
              instrument to play through. If it sounds bad, it&apos;s likely the default instrument in
              your DAW. Try changing it to a piano or the instrument that matches the original audio.
            </p>
            <p>
              <strong>Nothing happens when I drop my file.</strong> Make sure the file is a supported
              format (MP3, WAV, FLAC, OGG, M4A) and under 50MB. If it still doesn&apos;t work, try
              clicking the upload area instead of drag-and-drop.
            </p>

            <h2>Still need help?</h2>
            <p>
              Email us at <a href="mailto:fuyuanzeng520@gmail.com">fuyuanzeng520@gmail.com</a> or
              visit our <Link href="/contact">contact page</Link>. Include your browser name,
              operating system, and the file format you&apos;re trying to convert.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
