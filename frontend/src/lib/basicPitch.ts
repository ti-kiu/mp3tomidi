/**
 * Basic Pitch audio-to-MIDI conversion utility.
 * Uses Spotify's Basic Pitch model for browser-side inference.
 */

import {
  BasicPitch,
  addPitchBendsToNoteEvents,
  noteFramesToTime,
  outputToNotesPoly,
} from "@spotify/basic-pitch";
import { Midi } from "@tonejs/midi";

// Model files served from /public/basic-pitch-model/model.json
const MODEL_URL = "/basic-pitch-model/model.json";

export interface NoteEventTime {
  pitchMidi: number;
  startTimeSeconds: number;
  durationSeconds: number;
  amplitude: number;
  pitchBends?: number[];
}

export interface ConversionResult {
  midiBlob: Blob;
  notes: NoteEventTime[];
  durationSeconds: number;
}

export interface ConversionProgress {
  phase: "loading" | "analyzing" | "building" | "done";
  percent: number; // 0-100
}

/**
 * Decode an audio file into an AudioBuffer using Web Audio API.
 */
async function decodeAudioFile(file: File): Promise<AudioBuffer> {
  const arrayBuffer = await file.arrayBuffer();
  const audioCtx = new OfflineAudioContext(1, 1, 22050);
  return audioCtx.decodeAudioData(arrayBuffer);
}

/**
 * Run Basic Pitch inference on an AudioBuffer.
 * Returns raw frames, onsets, and contours.
 */
async function runInference(
  audioBuffer: AudioBuffer,
  onProgress: (p: number) => void
): Promise<{
  frames: number[][];
  onsets: number[][];
  contours: number[][];
}> {
  const frames: number[][] = [];
  const onsets: number[][] = [];
  const contours: number[][] = [];

  const basicPitch = new BasicPitch(MODEL_URL);

  await basicPitch.evaluateModel(
    audioBuffer,
    (f: number[][], o: number[][], c: number[][]) => {
      frames.push(...f);
      onsets.push(...o);
      contours.push(...c);
    },
    (p: number) => {
      onProgress(p);
    }
  );

  return { frames, onsets, contours };
}

/**
 * Convert raw model output to note events with timing and pitch bends.
 */
function modelOutputToNotes(
  frames: number[][],
  onsets: number[][],
  contours: number[][]
): NoteEventTime[] {
  const notesPoly = outputToNotesPoly(frames, onsets, 0.25, 0.25, 5);
  const notesWithBends = addPitchBendsToNoteEvents(contours, notesPoly);
  return noteFramesToTime(notesWithBends) as NoteEventTime[];
}

/**
 * Build a MIDI file from note events using @tonejs/midi.
 */
function buildMidiFile(notes: NoteEventTime[]): Uint8Array {
  const midi = new Midi();
  const track = midi.addTrack();

  for (const note of notes) {
    track.addNote({
      midi: note.pitchMidi,
      time: note.startTimeSeconds,
      duration: note.durationSeconds,
      velocity: Math.min(127, Math.max(1, Math.round(note.amplitude * 127))),
    });

    if (note.pitchBends && note.pitchBends.length > 0) {
      for (let i = 0; i < note.pitchBends.length; i++) {
        track.addPitchBend({
          time:
            note.startTimeSeconds +
            (i * note.durationSeconds) / note.pitchBends.length,
          value: note.pitchBends[i],
        });
      }
    }
  }

  return midi.toArray();
}

/**
 * Convert an audio file to MIDI using Basic Pitch.
 * Full pipeline: decode → inference → notes → MIDI file.
 */
export async function convertAudioToMidi(
  file: File,
  onProgress: (progress: ConversionProgress) => void
): Promise<ConversionResult> {
  // Phase 1: Load and decode audio
  onProgress({ phase: "loading", percent: 0 });
  const audioBuffer = await decodeAudioFile(file);
  onProgress({ phase: "loading", percent: 100 });

  // Phase 2: Run Basic Pitch inference
  onProgress({ phase: "analyzing", percent: 0 });
  const { frames, onsets, contours } = await runInference(
    audioBuffer,
    (p) => {
      onProgress({ phase: "analyzing", percent: Math.round(p * 100) });
    }
  );

  // Phase 3: Build MIDI
  onProgress({ phase: "building", percent: 0 });
  const notes = modelOutputToNotes(frames, onsets, contours);
  const midiBytes = buildMidiFile(notes);
  const midiBlob = new Blob(
    [midiBytes as unknown as BlobPart],
    { type: "audio/midi" }
  );
  onProgress({ phase: "building", percent: 100 });

  onProgress({ phase: "done", percent: 100 });

  return {
    midiBlob,
    notes,
    durationSeconds: audioBuffer.duration,
  };
}

/**
 * Trigger a browser download of the MIDI file.
 */
export function downloadMidi(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.replace(/\.[^.]+$/, "") + ".mid";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
