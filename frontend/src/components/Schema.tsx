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

export function FAQPageSchema({ items, url }: { items?: { question: string; answer: string }[]; url?: string }) {
  const defaultFaqs = [
    {
      question: "How accurate is the conversion?",
      answer: "Our AI achieves 99.4% note detection accuracy on clean, single-instrument recordings. The system uses Spotify's Basic Pitch neural network trained on tens of thousands of hours of music. For best results, use recordings with a single instrument and minimal background noise.",
    },
    {
      question: "Is my audio uploaded to a server?",
      answer: "No. All audio processing happens directly in your browser using WebAssembly. Your files never leave your device. The AI model runs locally — even your internet connection doesn't matter once the page loads.",
    },
    {
      question: "What file formats can I upload?",
      answer: "We support MP3, WAV, FLAC, OGG, M4A, AAC, AIFF, WMA, and Opus.",
    },
    {
      question: "Can I use the MIDI commercially?",
      answer: "Yes. The MIDI files you download are yours to use however you want — in commercial releases, remixes, live performances, or educational materials. No attribution required.",
    },
    {
      question: "What DAWs does the MIDI work with?",
      answer: "Compatible with Ableton Live, FL Studio, Logic Pro, GarageBand, Cubase, Reaper, Pro Tools, Studio One, and any software that supports standard MIDI files.",
    },
    {
      question: "Is there a file size limit?",
      answer: "We support files up to 50MB, which covers most audio files up to 60 minutes of high-quality audio.",
    },
    {
      question: "Does it work on mobile?",
      answer: "Yes, the converter works on mobile browsers. For the best experience with larger files, we recommend using a desktop browser.",
    },
    {
      question: "What is MIDI used for?",
      answer: "MIDI is used for music production, remixing, learning songs, creating backing tracks, and controlling virtual instruments in DAWs.",
    },
  ];

  const faqs = items || defaultFaqs;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(url ? { url } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: "MP3toMIDI",
      url: "https://mp3tomidi.vip",
    },
    publisher: {
      "@type": "Organization",
      name: "MP3toMIDI",
      url: "https://mp3tomidi.vip",
      logo: {
        "@type": "ImageObject",
        url: "https://mp3tomidi.vip/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(image ? { image: { "@type": "ImageObject", url: image } } : {}),
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
