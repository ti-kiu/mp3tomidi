import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/Schema";

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
    title: "How to Convert MP3 to MIDI: Complete Guide",
    excerpt:
      "Step-by-step tutorial on converting MP3 files to MIDI format using free online tools. Covers best practices for clean transcriptions.",
    date: "Coming soon",
  },
  {
    slug: "best-mp3-to-midi-converters",
    title: "Best MP3 to MIDI Converters in 2026",
    excerpt:
      "We tested the top MP3 to MIDI converters and ranked them by accuracy, speed, privacy, and price. See which one comes out on top.",
    date: "Coming soon",
  },
  {
    slug: "what-is-midi",
    title: "What is MIDI? A Complete Guide",
    excerpt:
      "Everything you need to know about MIDI — the protocol that connects musical instruments, software, and computers.",
    date: "Coming soon",
  },
  {
    slug: "midi-to-mp3-guide",
    title: "How to Convert MIDI to MP3",
    excerpt:
      "Learn how to turn MIDI files into high-quality MP3 audio using free tools and SoundFonts.",
    date: "Coming soon",
  },
  {
    slug: "mp3-to-midi-soundfont",
    title: "MP3 to MIDI with SoundFont: Complete Guide",
    excerpt:
      "How to use SoundFont instruments to improve your MIDI playback quality after transcription.",
    date: "Coming soon",
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
                <article key={post.slug} className="blog-card">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
