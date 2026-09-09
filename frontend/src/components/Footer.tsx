import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo.svg" alt="MP3toMIDI" width={28} height={28} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18 }}>
                MP3toMIDI
              </span>
            </Link>
            <p>
              Free, browser-based audio to MIDI conversion. Built by musicians,
              for musicians.
            </p>
          </div>

          <div className="footer-col">
            <h4>Converters</h4>
            <ul>
              <li><Link href="/mp3-to-midi">MP3 to MIDI</Link></li>
              <li><Link href="/wav-to-midi">WAV to MIDI</Link></li>
              <li><Link href="/audio-to-midi">Audio to MIDI</Link></li>
              <li><Link href="/midi-to-mp3">MIDI to MP3</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tools</h4>
            <ul>
              <li><Link href="/convert-mp3-to-midi">Convert MP3 to MIDI</Link></li>
              <li><Link href="/mp3-to-midi-converter">MP3 to MIDI Converter</Link></li>
              <li><Link href="/mp3-to-midi-ai">MP3 to MIDI AI</Link></li>
              <li><Link href="/convert-midi-to-mp3">Convert MIDI to MP3</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/what-is-midi">What is MIDI</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/compare">Compare</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/help">Help</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 MP3toMIDI. All rights reserved.</p>
          <p>No audio is uploaded. Everything runs in your browser.</p>
        </div>
      </div>
    </footer>
  );
}
