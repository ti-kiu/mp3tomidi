import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/logo.svg" alt="MP3toMIDI" width={32} height={32} priority />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18 }}>
            MP3toMIDI
          </span>
        </Link>

        <nav className="nav">
          <Link href="/">Convert</Link>
          <Link href="/features">Features</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <Link href="#convert" className="cta">
          Start Converting
        </Link>
      </div>
    </header>
  );
}
