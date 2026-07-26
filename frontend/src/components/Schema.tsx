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
      a: "Our AI achieves 99.4% note detection accuracy on clean, single-instrument recordings. The system uses Spotify's Basic Pitch neural network trained on tens of thousands of hours of music. For best results, use recordings with a single instrument and minimal background noise.",
    },
    {
      q: "Is my audio uploaded to a server?",
      a: "No. All audio processing happens directly in your browser using WebAssembly. Your files never leave your device. The AI model runs locally — even your internet connection doesn't matter once the page loads.",
    },
    {
      q: "What file formats can I upload?",
      a: "We support MP3, WAV, FLAC, OGG, and M4A.",
    },
    {
      q: "Can I use the MIDI commercially?",
      a: "Yes. The MIDI files you download are yours to use however you want — in commercial releases, remixes, live performances, or educational materials. No attribution required.",
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

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert MP3 to MIDI Online",
    description:
      "Convert any audio file to MIDI in 3 steps using your browser. No upload, no signup, no software install.",
    tool: [
      { "@type": "HowToTool", name: "Modern web browser (Chrome, Firefox, Edge, Safari)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Upload your audio file",
        text: "Drag and drop your MP3, WAV, FLAC, OGG, or M4A file onto the converter. Or click to browse your files. Max file size: 50MB.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "AI converts audio to MIDI",
        text: "Spotify's Basic Pitch AI model analyzes the audio and detects musical notes. The entire process runs in your browser — nothing is uploaded to any server. Takes under 15 seconds for most files.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Preview and download MIDI",
        text: "View detected notes on a piano roll preview. If it looks good, download the standard MIDI file. Import it into any DAW — Ableton, FL Studio, Logic Pro, GarageBand, Cubase, or Reaper.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  url,
  faqQuestions,
}: {
  title: string;
  description: string;
  url: string;
  faqQuestions?: number;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "MP3toMIDI",
      url: "https://mp3tomidi.vip",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  };

  if (faqQuestions) {
    schema.about = {
      "@type": "FAQPage",
      mainEntity: Array.from({ length: faqQuestions }, (_, i) => ({
        "@type": "Question",
        position: i + 1,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
