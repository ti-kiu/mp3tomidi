"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { NoteEventTime } from "@/lib/basicPitch";

interface MidiPreviewProps {
  notes: NoteEventTime[];
  durationSeconds: number;
}

const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function midiToNoteName(midi: number): string {
  return `${NOTE_NAMES[midi % 12]}${Math.floor(midi / 12) - 1}`;
}

function isBlackKey(midi: number): boolean {
  const n = midi % 12;
  return n === 1 || n === 3 || n === 6 || n === 8 || n === 10;
}

export default function MidiPreview({ notes, durationSeconds }: MidiPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNote, setHoveredNote] = useState<NoteEventTime | null>(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 320 });

  const { minPitch, maxPitch } = useMemo(() => {
    if (notes.length === 0) return { minPitch: 48, maxPitch: 84 };
    const pitches = notes.map((n) => n.pitchMidi);
    const min = Math.min(...pitches);
    const max = Math.max(...pitches);
    return {
      minPitch: Math.max(0, min - 2),
      maxPitch: Math.min(127, max + 2),
    };
  }, [notes]);

  const pitchRange = maxPitch - minPitch + 1;
  const PIANO_KEY_WIDTH = 44;
  const HEADER_H = 24;

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        setCanvasSize({ width: w, height: Math.max(260, Math.min(400, w * 0.4)) });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasSize.width * dpr;
    canvas.height = canvasSize.height * dpr;
    ctx.scale(dpr, dpr);

    const gridW = canvasSize.width - PIANO_KEY_WIDTH;
    const gridH = canvasSize.height - HEADER_H;
    const noteH = Math.max(3, gridH / pitchRange - 1);
    const timeScale = gridW / Math.max(durationSeconds, 0.1);

    // Background
    ctx.fillStyle = "#FDF8F3";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

    // Header (time markers)
    ctx.fillStyle = "#f3e8dc";
    ctx.fillRect(PIANO_KEY_WIDTH, 0, gridW, HEADER_H);
    ctx.strokeStyle = "#eadfd4";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PIANO_KEY_WIDTH, HEADER_H);
    ctx.lineTo(canvasSize.width, HEADER_H);
    ctx.stroke();

    // Time markers
    const interval = durationSeconds < 10 ? 1 : durationSeconds < 60 ? 5 : 10;
    ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#7b7068";
    ctx.textAlign = "center";
    for (let t = 0; t <= durationSeconds; t += interval) {
      const x = PIANO_KEY_WIDTH + t * timeScale;
      ctx.fillText(`${t}s`, x, 16);
      ctx.strokeStyle = "#eadfd4";
      ctx.beginPath();
      ctx.moveTo(x, HEADER_H);
      ctx.lineTo(x, canvasSize.height);
      ctx.stroke();
    }

    // Piano keys (left column)
    ctx.fillStyle = "#f3e8dc";
    ctx.fillRect(0, 0, PIANO_KEY_WIDTH, canvasSize.height);
    ctx.strokeStyle = "#eadfd4";
    ctx.beginPath();
    ctx.moveTo(PIANO_KEY_WIDTH, 0);
    ctx.lineTo(PIANO_KEY_WIDTH, canvasSize.height);
    ctx.stroke();

    // Piano key labels
    for (let p = minPitch; p <= maxPitch; p++) {
      const y = HEADER_H + (maxPitch - p) * (gridH / pitchRange);
      const isBlack = isBlackKey(p);
      const isC = p % 12 === 0;

      if (isC) {
        ctx.fillStyle = "#EA580C";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.textAlign = "right";
        ctx.fillText(midiToNoteName(p), PIANO_KEY_WIDTH - 6, y + noteH / 2 + 3);
      }

      // Row lines
      ctx.strokeStyle = isBlack ? "#e0d5c8" : "#eadfd4";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(PIANO_KEY_WIDTH, y + noteH);
      ctx.lineTo(canvasSize.width, y + noteH);
      ctx.stroke();
    }

    // Notes
    for (const note of notes) {
      const x = PIANO_KEY_WIDTH + note.startTimeSeconds * timeScale;
      const w = Math.max(2, note.durationSeconds * timeScale);
      const y = HEADER_H + (maxPitch - note.pitchMidi) * (gridH / pitchRange);
      const velocity = Math.min(1, note.amplitude);

      // Color: higher velocity = deeper orange, lower = lighter
      const r = Math.round(234 - velocity * 60);
      const g = Math.round(88 - velocity * 30);
      const b = Math.round(12 + velocity * 6);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.6 + velocity * 0.4})`;
      ctx.beginPath();
      ctx.roundRect(x + 0.5, y + 0.5, w - 1, noteH - 1, 2);
      ctx.fill();
    }

    // Empty state
    if (notes.length === 0) {
      ctx.fillStyle = "#7b7068";
      ctx.font = "14px 'DM Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("No notes detected", canvasSize.width / 2, canvasSize.height / 2);
    }
  }, [notes, durationSeconds, minPitch, maxPitch, pitchRange, canvasSize]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < PIANO_KEY_WIDTH || y < HEADER_H) {
      setHoveredNote(null);
      return;
    }

    const gridW = canvasSize.width - PIANO_KEY_WIDTH;
    const gridH = canvasSize.height - HEADER_H;
    const timeScale = gridW / Math.max(durationSeconds, 0.1);
    const noteH = gridH / pitchRange;

    const time = (x - PIANO_KEY_WIDTH) / timeScale;
    const pitch = maxPitch - Math.floor((y - HEADER_H) / noteH);

    const hit = notes.find(
      (n) =>
        n.pitchMidi === pitch &&
        time >= n.startTimeSeconds &&
        time <= n.startTimeSeconds + n.durationSeconds
    );

    if (hit) {
      setHoveredNote(hit);
      setHoverPos({ x: e.clientX, y: e.clientY });
    } else {
      setHoveredNote(null);
    }
  };

  return (
    <div ref={containerRef} className="midi-preview">
      <div className="midi-preview-header">
        <span className="material-icons-outlined" style={{ fontSize: 18 }}>
          piano
        </span>
        <span>{notes.length} notes · {durationSeconds.toFixed(1)}s</span>
      </div>
      <div className="midi-preview-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ width: canvasSize.width, height: canvasSize.height, display: "block" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredNote(null)}
        />
        {hoveredNote && (
          <div
            className="midi-tooltip"
            style={{
              left: hoverPos.x + 12,
              top: hoverPos.y - 40,
            }}
          >
            <strong>{midiToNoteName(hoveredNote.pitchMidi)}</strong>
            {" · "}
            {hoveredNote.startTimeSeconds.toFixed(2)}s –{" "}
            {(hoveredNote.startTimeSeconds + hoveredNote.durationSeconds).toFixed(2)}s
            {" · vel "}
            {Math.round(hoveredNote.amplitude * 127)}
          </div>
        )}
      </div>
    </div>
  );
}
