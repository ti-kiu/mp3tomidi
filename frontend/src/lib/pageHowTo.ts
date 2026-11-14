export type HowToStep = { name: string; text: string };

export type HowToSpec = {
  name: string;
  description: string;
  steps: HowToStep[];
};

const PREVIEW_STEP: HowToStep = {
  name: "Preview and download the MIDI file",
  text: "Check the detected notes, then download a standard .mid file. Import it into a DAW such as Ableton Live, FL Studio, Logic Pro, or GarageBand. Clear recordings usually need less cleanup than dense mixes.",
};

const TRANSCRIBE_STEP: HowToStep = {
  name: "Transcribe with Basic Pitch",
  text: "Spotify's open-source Basic Pitch model estimates notes, timing, and loudness in your browser. Nothing is uploaded. It is the same model for every format and instrument page on this site.",
};

function audioHowTo(label: string, fileHint: string): HowToSpec {
  return {
    name: `How to Convert ${label} to MIDI Online`,
    description: `Turn ${fileHint} into a standard MIDI file in your browser. The converter uses Spotify's open-source Basic Pitch model. No signup and no server upload.`,
    steps: [
      {
        name: `Add your ${label} file`,
        text: `Open the converter and drop ${fileHint} onto the page, or click to choose a file from your device. The audio stays in the browser.`,
      },
      TRANSCRIBE_STEP,
      PREVIEW_STEP,
    ],
  };
}

function instrumentHowTo(instrument: string): HowToSpec {
  return {
    name: `How to Convert ${instrument} Audio to MIDI`,
    description: `Transcribe a ${instrument.toLowerCase()} recording to MIDI in your browser with Spotify's open-source Basic Pitch model. This page uses the same model as the other converters, not a separate instrument-specific network.`,
    steps: [
      {
        name: `Add a ${instrument.toLowerCase()} recording`,
        text: `Drop an audio file of ${instrument.toLowerCase()} onto the converter. A clear, isolated take usually needs less editing than a full mix.`,
      },
      TRANSCRIBE_STEP,
      PREVIEW_STEP,
    ],
  };
}

const MIDI_TO_AUDIO: HowToSpec = {
  name: "How to Turn a MIDI File into Audio",
  description:
    "MP3toMIDI does not yet render MIDI to MP3 in the browser. You can still turn a .mid file into audio with a DAW.",
  steps: [
    {
      name: "Open the MIDI file in a DAW",
      text: "Import the .mid file into Ableton Live, FL Studio, Logic Pro, GarageBand, or another DAW.",
    },
    {
      name: "Choose an instrument",
      text: "Assign a virtual instrument or SoundFont so the note data has a sound.",
    },
    {
      name: "Export audio",
      text: "Bounce or export the project to MP3 or WAV. The on-site MIDI to MP3 converter is marked coming soon.",
    },
  ],
};

const HOW_TOS: Record<string, HowToSpec> = {
  "/": audioHowTo("MP3", "an MP3, WAV, or FLAC file"),
  "/mp3-to-midi": audioHowTo("MP3", "an MP3 file"),
  "/wav-to-midi": audioHowTo("WAV", "a WAV file"),
  "/flac-to-midi": audioHowTo("FLAC", "a FLAC file"),
  "/ogg-to-midi": audioHowTo("OGG", "an OGG file"),
  "/m4a-to-midi": audioHowTo("M4A", "an M4A file"),
  "/aac-to-midi": audioHowTo("AAC", "an AAC file"),
  "/aiff-to-midi": audioHowTo("AIFF", "an AIFF file"),
  "/wma-to-midi": audioHowTo("WMA", "a WMA file"),
  "/opus-to-midi": audioHowTo("Opus", "an Opus file"),
  "/audio-to-midi": {
    name: "How to Convert Any Audio Format to MIDI Online",
    description:
      "Convert MP3, WAV, FLAC, OGG, or M4A to MIDI in your browser with Spotify's open-source Basic Pitch model. No signup and no server upload.",
    steps: [
      {
        name: "Drop any supported audio file",
        text: "Use the converter on this page with an MP3, WAV, FLAC, OGG, or M4A file. Dedicated format pages explain the same converter for one format at a time.",
      },
      TRANSCRIBE_STEP,
      PREVIEW_STEP,
    ],
  },
  "/piano-to-midi": instrumentHowTo("Piano"),
  "/guitar-to-midi": instrumentHowTo("Guitar"),
  "/drums-to-midi": instrumentHowTo("Drum"),
  "/vocals-to-midi": instrumentHowTo("Vocal"),
  "/bass-to-midi": instrumentHowTo("Bass"),
  "/song-to-midi": audioHowTo("Song", "a song audio file you already have"),
  "/music-to-midi": audioHowTo("Music", "a music audio file you already have"),
  "/youtube-to-midi": {
    name: "How to Convert Saved Song Audio to MIDI",
    description:
      "This page transcribes an audio file you already have. It does not fetch or download YouTube videos. Transcription uses Spotify's open-source Basic Pitch model in your browser.",
    steps: [
      {
        name: "Start with an audio file you already have",
        text: "Save or export the song as an audio file on your device first. This converter accepts a file drop. It does not take a YouTube URL.",
      },
      TRANSCRIBE_STEP,
      PREVIEW_STEP,
    ],
  },
  "/midi-to-mp3": MIDI_TO_AUDIO,
  "/convert-midi-to-mp3": MIDI_TO_AUDIO,
  "/features": {
    name: "How MP3toMIDI Converts Audio to MIDI",
    description:
      "The converter runs Spotify's open-source Basic Pitch model in your browser. Audio is not uploaded.",
    steps: [
      {
        name: "Drop an audio file",
        text: "Add an MP3, WAV, FLAC, OGG, or M4A file. There is no account and no upload step.",
      },
      TRANSCRIBE_STEP,
      {
        name: "Preview notes, then download MIDI",
        text: "Look at the detected notes and download a standard .mid file for your DAW.",
      },
    ],
  },
  "/faq": audioHowTo("Audio", "an audio file"),
  "/help": {
    name: "How to Convert a File on MP3toMIDI",
    description:
      "Use a supported audio file in a current desktop browser. Transcription uses Spotify's open-source Basic Pitch model locally.",
    steps: [
      {
        name: "Use a supported file",
        text: "Choose MP3, WAV, FLAC, OGG, or M4A, up to 50MB. Convert other formats to MP3 or WAV first.",
      },
      {
        name: "Convert in a current browser",
        text: "Chrome, Firefox, Edge, and Safari can run the in-browser model. Large files are more reliable on a desktop.",
      },
      {
        name: "Clean up extra notes in a DAW",
        text: "Noisy audio and full mixes often produce extra notes. Delete or move them in the piano roll after download.",
      },
    ],
  },
  "/blog/how-to-convert-mp3-to-midi": audioHowTo("MP3", "an MP3 file"),
  "/blog/mp3-to-midi-guide": audioHowTo("MP3", "an MP3 file"),
  "/blog/convert-audio-to-midi": audioHowTo("Audio", "an MP3, WAV, FLAC, OGG, or M4A file"),
  "/blog/extract-piano-notes": instrumentHowTo("Piano"),
  "/blog/midi-to-mp3-guide": MIDI_TO_AUDIO,
  "/blog/mp3-to-midi-soundfont": {
    name: "How to Play a Converted MIDI File with a SoundFont",
    description:
      "After MP3toMIDI writes a .mid file with Basic Pitch, play it through a SoundFont or virtual instrument. The MIDI file does not contain audio.",
    steps: [
      {
        name: "Convert the audio to MIDI",
        text: "Use the browser converter. It runs Spotify's open-source Basic Pitch model and downloads a .mid file.",
      },
      {
        name: "Load the MIDI into a player or DAW",
        text: "Open the .mid file and assign a SoundFont or virtual instrument.",
      },
      {
        name: "Adjust the sound, not the claim of perfect notes",
        text: "A SoundFont changes how notes sound. It does not fix wrong pitches. Edit the notes if the transcription needs cleanup.",
      },
    ],
  },
};

export function normalizePath(path: string): string {
  if (!path) return "/";
  const bare = path.split("?")[0].split("#")[0];
  if (bare.length > 1 && bare.endsWith("/")) return bare.slice(0, -1);
  return bare || "/";
}

export function howToForPath(path: string): HowToSpec | null {
  return HOW_TOS[normalizePath(path)] ?? null;
}

const TOOL_NAMES: Record<string, string> = {
  "/": "MP3 to MIDI Converter",
  "/mp3-to-midi": "MP3 to MIDI Converter",
  "/wav-to-midi": "WAV to MIDI Converter",
  "/flac-to-midi": "FLAC to MIDI Converter",
  "/ogg-to-midi": "OGG to MIDI Converter",
  "/m4a-to-midi": "M4A to MIDI Converter",
  "/aac-to-midi": "AAC to MIDI Converter",
  "/aiff-to-midi": "AIFF to MIDI Converter",
  "/wma-to-midi": "WMA to MIDI Converter",
  "/opus-to-midi": "Opus to MIDI Converter",
  "/audio-to-midi": "Audio to MIDI Converter",
  "/piano-to-midi": "Piano to MIDI Converter",
  "/guitar-to-midi": "Guitar to MIDI Converter",
  "/drums-to-midi": "Drums to MIDI Converter",
  "/vocals-to-midi": "Vocals to MIDI Converter",
  "/bass-to-midi": "Bass to MIDI Converter",
  "/song-to-midi": "Song to MIDI Converter",
  "/music-to-midi": "Music to MIDI Converter",
  "/youtube-to-midi": "Song Audio to MIDI Converter",
  "/midi-to-mp3": "MIDI to MP3 Converter",
  "/convert-midi-to-mp3": "MIDI to MP3 Converter",
};

export function toolSchemaForPath(path: string): {
  name: string;
  url: string;
  description: string;
} {
  const normalized = normalizePath(path);
  const name = TOOL_NAMES[normalized] ?? "MP3toMIDI";
  const url =
    normalized === "/"
      ? "https://mp3tomidi.vip"
      : `https://mp3tomidi.vip${normalized}`;
  const comingSoon =
    normalized === "/midi-to-mp3" || normalized === "/convert-midi-to-mp3";
  const description = comingSoon
    ? "In-browser MIDI to MP3 rendering is not available yet. Audio-to-MIDI conversion on this site uses Spotify's open-source Basic Pitch model and runs locally."
    : `${name} for the browser. Transcription uses Spotify's open-source Basic Pitch model on your device. No upload and no signup.`;
  return { name, url, description };
}
