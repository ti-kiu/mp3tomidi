/**
 * Shared, honest description of the transcription model.
 * The site runs Spotify's open-source Basic Pitch model in the browser
 * (@spotify/basic-pitch). Do not add training-hour totals or accuracy percentages.
 */

export const MODEL_NAME = "Spotify's open-source Basic Pitch model";

export const MODEL_SUMMARY =
  "MP3toMIDI transcribes audio in your browser with Spotify's open-source Basic Pitch model. The file stays on your device and is not uploaded.";

export const ACCURACY_ANSWER =
  "The converter is based on Spotify's open-source Basic Pitch model, running in your browser. There is no fixed accuracy rate. Clear, single-instrument recordings usually need less editing. Dense mixes often include extra or missing notes and work best as a draft you clean up in a DAW.";

export const HOME_DESCRIPTION =
  "Convert MP3, WAV, and FLAC to MIDI in your browser with Spotify's open-source Basic Pitch model. Free, private, no signup, and no file upload.";
