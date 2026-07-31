import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/Schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — MP3toMIDI Support",
  description:
    "Get in touch with the MP3toMIDI team. Questions, feedback, bug reports, or partnership inquiries welcome.",
  openGraph: {
    title: "Contact Us — MP3toMIDI Support",
    description: "Get in touch with the MP3toMIDI team.",
    url: "https://mp3tomidi.vip/contact",
    images: [{ url: "https://mp3tomidi.vip/og-image.svg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://mp3tomidi.vip/contact" },
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        title="Contact Us — MP3toMIDI Support"
        description="Get in touch with the MP3toMIDI team."
        url="https://mp3tomidi.vip/contact"
      />
      <Header />
      <article className="blog-article">
        <div className="container">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          <header className="article-header">
            <span className="eyebrow">CONTACT</span>
            <h1>Get in Touch</h1>
          </header>

          <div className="article-body">
            <p>
              Have a question, found a bug, or want to partner with us? We&apos;d love to hear from you.
            </p>

            <h2>Email</h2>
            <p>
              The fastest way to reach us: <a href="mailto:fuyuanzeng520@gmail.com">fuyuanzeng520@gmail.com</a>
            </p>
            <p>
              We typically respond within 24 hours during business days.
            </p>

            <h2>Common requests</h2>
            <ul>
              <li><strong>Bug reports:</strong> Tell us what happened, what browser you&apos;re using, and what file format you tried to convert.</li>
              <li><strong>Feature requests:</strong> We&apos;re always looking to improve. Let us know what would make the tool more useful for you.</li>
              <li><strong>Partnerships:</strong> Interested in integrating our converter into your app or website? Let&apos;s talk.</li>
              <li><strong>Press:</strong> Writing about MP3toMIDI? We can provide quotes, screenshots, and technical details.</li>
            </ul>

            <h2>FAQ</h2>
            <p>
              Before reaching out, you might find your answer in our <Link href="/faq">FAQ section</Link> or
              on our <Link href="/blog">blog</Link>. We cover most common questions there.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
