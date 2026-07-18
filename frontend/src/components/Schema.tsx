export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MP3toMIDI",
    url: "https://mp3tomidi.vip",
    description:
      "Free online MP3 to MIDI converter. AI-powered, browser-side audio transcription. No upload, no signup.",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "MP3 to MIDI conversion",
      "WAV to MIDI conversion",
      "FLAC to MIDI conversion",
      "OGG to MIDI conversion",
      "Browser-side AI transcription",
      "MIDI preview",
      "No file upload required",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema() {
  const faqs = [
    {
      q: "How accurate is the conversion?",
      a: "Our AI achieves 99.4% note accuracy on clean, single-instrument recordings.",
    },
    {
      q: "Is my audio uploaded to a server?",
      a: "No. All audio processing happens directly in your browser. Your files never leave your device.",
    },
    {
      q: "What file formats can I upload?",
      a: "We support MP3, WAV, FLAC, OGG, and M4A.",
    },
    {
      q: "Can I use the MIDI commercially?",
      a: "Yes. The MIDI files you download are yours to use however you want.",
    },
    {
      q: "What DAWs does the MIDI work with?",
      a: "Compatible with Ableton Live, FL Studio, Logic Pro, GarageBand, Cubase, Reaper, Pro Tools, Studio One, and any software that supports standard MIDI files.",
    },
    {
      q: "Is there a file size limit?",
      a: "We support files up to 50MB, which covers most audio files up to 60 minutes of high-quality audio.",
    },
    {
      q: "Does it work on mobile?",
      a: "Yes, the converter works on mobile browsers. For the best experience with larger files, we recommend using a desktop browser.",
    },
    {
      q: "What is MIDI used for?",
      a: "MIDI is used for music production, remixing, learning songs, creating backing tracks, and controlling virtual instruments in DAWs.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
