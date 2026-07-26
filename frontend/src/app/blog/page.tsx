import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/Schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — MP3 to MIDI Guides & Tips | MP3toMIDI",
  description:
    "Learn how to convert MP3 to MIDI, best practices for audio transcription, and tips for music producers. Guides, tutorials, and more.",
  alternates: { canonical: "https://mp3tomidi.vip/blog" },
  openGraph: {
    title: "Blog — MP3 to MIDI Guides & Tips",
    description: "Learn how to convert MP3 to MIDI, best practices for audio transcription, and tips for music producers.",
    url: "https://mp3tomidi.vip/blog",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
};

const posts = [
  {
    slug: "mp3-to-midi-guide",
    title: "How to Convert MP3 to MIDI: A Complete Walkthrough",
    excerpt:
      "Step-by-step tutorial on converting MP3 files to MIDI format. Covers how pitch detection works, what to expect from the results, and how to use MIDI in your DAW.",
    date: "July 2026",
    tag: "GUIDE",
  },
  {
    slug: "best-converters",
    title: "Best MP3 to MIDI Converters in 2026: We Tested Them All",
    excerpt:
      "We tested every major MP3 to MIDI converter and ranked them by accuracy, speed, privacy, and price.",
    date: "July 2026",
    tag: "ROUNDUP",
  },
  {
    slug: "mp3-to-midi-soundfont",
    title: "MP3 to MIDI with SoundFont: Getting Better Playback Quality",
    excerpt:
      "After converting MP3 to MIDI, use SoundFonts to make the output sound like a real instrument.",
    date: "July 2026",
    tag: "TUTORIAL",
  },
  {
    slug: "midi-to-mp3-guide",
    title: "How to Convert MIDI to MP3: 3 Methods That Actually Work",
    excerpt:
      "Turn your MIDI files into playable audio using DAWs, SoundFont renderers, or online tools.",
    date: "July 2026",
    tag: "GUIDE",
  },
];

export default function BlogPage() {
  return (
    <>
      <WebPageSchema
        title="Blog — MP3 to MIDI Guides & Tips"
        description="Learn how to convert MP3 to MIDI, best practices for audio transcription, and tips for music producers."
        url="https://mp3tomidi.vip/blog"
      />
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        </div>
        <section className="blog-page-hero">
          <div className="container">
            <span className="eyebrow">BLOG</span>
            <h1>Guides &amp; Resources</h1>
            <p>
              Tips, tutorials, and deep dives on audio-to-MIDI conversion, MIDI
              production, and music technology.
            </p>
          </div>
        </section>

        <section className="blog-list">
          <div className="container">
            <div className="blog-grid">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: "none", color: "inherit" }}>
                  <span className="feature-tag">{post.tag}</span>
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-read-more">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
