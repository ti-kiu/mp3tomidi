"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How accurate is the conversion?",
      a: "Our AI achieves 99.4% note accuracy on clean, single-instrument recordings. For complex mixes with multiple instruments, accuracy varies but typically produces usable MIDI drafts that need minimal cleanup in your DAW.",
    },
    {
      q: "Is my audio uploaded to a server?",
      a: "No. All audio processing happens directly in your browser using client-side AI models. Your files are never uploaded to our servers, never stored anywhere, and never leave your device.",
    },
    {
      q: "What file formats can I upload?",
      a: "We support all common audio formats: MP3, WAV, FLAC, OGG, and M4A. The converter automatically detects the format and processes it accordingly.",
    },
    {
      q: "Can I use the MIDI commercially?",
      a: "Yes. The MIDI files you download are yours to use however you want — personal projects, commercial releases, remixes, or educational purposes. We don't claim any rights over the output.",
    },
    {
      q: "What DAWs does the MIDI work with?",
      a: "Our MIDI files are fully compatible with all major DAWs including Ableton Live, FL Studio, Logic Pro, GarageBand, Cubase, Reaper, Pro Tools, Studio One, and any software that supports standard MIDI files.",
    },
    {
      q: "Is there a file size limit?",
      a: "We support audio files up to 50MB, which typically corresponds to 10-15 minutes of audio. For best results, we recommend using clean, single-instrument recordings or separated stems.",
    },
    {
      q: "Does it work on mobile?",
      a: "Yes! Our converter runs entirely in the browser using WebAssembly. It works on any modern browser — Chrome, Safari, Firefox, Edge — on desktop, tablet, and mobile.",
    },
    {
      q: "What is MIDI used for?",
      a: "MIDI (Musical Instrument Digital Interface) is a standard protocol for music data. It's used to control virtual instruments in DAWs like Ableton, FL Studio, and Logic Pro. Converting audio to MIDI lets you extract melodies, chords, and rhythms for remixing, arrangement, or practice.",
    },
  ];

  return (
    <section className="faq">
      <div className="container faq-grid">
        <div className="faq-title">
          <span className="eyebrow">FAQ</span>
          <h2>
            Got questions?
            <br />
            We&apos;ve got answers.
          </h2>
          <p>
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact">Contact us</a>
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "open" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                <span className="material-icons-outlined">expand_more</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
