import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema, ArticleSchema, FAQPageSchema } from "@/components/Schema";
import Image from "next/image";
import RelatedTools from "@/components/RelatedTools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a MIDI File? Complete Guide for Beginners | MP3toMIDI",
  description: "Everything you need to know about MIDI files — what they are, how they work, why musicians use them, and how to create your own.",
  keywords: ["what is midi", "midi file", "midi format", "midi explained", "midi for beginners"],
  openGraph: {
    title: "What is a MIDI File? Complete Beginner's Guide",
    description: "Everything you need to know about MIDI files — what they are, how they work, why musicians use them, and how to create your own.",
    url: "https://mp3tomidi.vip/blog/what-is-midi-file",
    images: [{ url: "https://mp3tomidi.vip/blog/what-is-midi-file/cover.svg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://mp3tomidi.vip/blog/what-is-midi-file" },
};

const faqItems = [
  { question: "Placeholder question 1?", answer: "Placeholder answer 1." },
  { question: "Placeholder question 2?", answer: "Placeholder answer 2." },
  { question: "Placeholder question 3?", answer: "Placeholder answer 3." },
  { question: "Placeholder question 4?", answer: "Placeholder answer 4." },
  { question: "Placeholder question 5?", answer: "Placeholder answer 5." },
];

export default function Article() {
  return (
    <>
      <WebPageSchema
        title="What is a MIDI File? Everything You Need to Know"
        description="Everything you need to know about MIDI files — what they are, how they work, why musicians use them, and how to create your own."
        url="https://mp3tomidi.vip/blog/what-is-midi-file"
      />
      <ArticleSchema
        title="What is a MIDI File? Everything You Need to Know"
        description="Everything you need to know about MIDI files — what they are, how they work, why musicians use them, and how to create your own."
        url="https://mp3tomidi.vip/blog/what-is-midi-file"
        datePublished="2026-08-19"
        dateModified="2026-08-19"
      />
      <FAQPageSchema items={faqItems} url="https://mp3tomidi.vip/blog/what-is-midi-file" />
      <Header />
      <article className="blog-article">
        <div className="container">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "What is a MIDI File", href: "/blog/what-is-midi-file" }]} />

          <header className="article-header">
            <span className="eyebrow">GUIDE</span>
            <h1>What is a MIDI File? Everything You Need to Know</h1>
            <p className="article-meta">Updated August 2026 · 8 min read</p>
          </header>

          <figure className="article-cover">
            <Image src="/blog/what-is-midi-file/cover.svg" alt="Complete guide to MIDI files and format" width={1200} height={630} />
          </figure>

          <div className="article-body">
            <p>TODO: Article content goes here. Each article needs ~1000 words,5 SVG images,5 anchor text links to tool pages.</p>
          </div>

          {/* FAQ Section */}
          <section className="article-faq" style={{ marginTop: "3rem", padding: "2rem", background: "#f9fafb", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
            {faqItems.map((item, i) => (
              <details key={i} style={{ marginBottom: "1rem", padding: "1rem", background: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                <summary style={{ fontWeight: 600, cursor: "pointer" }}>{item.question}</summary>
                <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>{item.answer}</p>
              </details>
            ))}
          </section>

          {/* CTA Section */}
          <section style={{ marginTop: "3rem", padding: "2rem", background: "#EA580C", borderRadius: "12px", textAlign: "center", color: "white" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>Ready to Try It Yourself?</h2>
            <p style={{ marginBottom: "1.5rem", opacity: 0.9 }}>Convert your audio to MIDI right now — free, no signup, no file upload.</p>
            <Link href="/" style={{ display: "inline-block", padding: "0.75rem2rem", background: "white", color: "#EA580C", borderRadius: "8px", fontWeight: 600, textDecoration: "none" }}>
              Try the Converter →
            </Link>
          </section>
        </div>
      </article>
      <RelatedTools currentPath="/blog/what-is-midi-file" />
      <Footer />
    </>
  );
}
