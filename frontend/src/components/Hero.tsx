"use client";

import { useState, useRef } from "react";
import { useConvert } from "@/hooks/useConvert";
import MidiPreview from "@/components/MidiPreview";

export default function Hero() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { state, progress, result, error, convert, download, reset, isConverting } =
    useConvert();

  const handleFile = (f: File) => {
    setFile(f);
    reset();
  };

  const handleConvert = () => {
    if (file) convert(file);
  };

  const handleDownload = () => {
    download(file?.name || "converted.mid");
  };

  const getConvertLabel = () => {
    switch (state) {
      case "loading":
        return "Loading audio...";
      case "analyzing":
        return `Analyzing... ${progress}%`;
      case "building":
        return "Building MIDI...";
      case "done":
        return "Download MIDI";
      case "error":
        return "Retry";
      default:
        return "Convert to MIDI";
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="badge">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>
              bolt
            </span>
            Free — No signup required
          </div>

          <h1>
            Drop a track.
            <br />
            <span>Get the notes.</span>
          </h1>

          <p>
            Upload any MP3, WAV, or FLAC. Our AI extracts every note, chord,
            and rhythm — then hands you a clean MIDI file you can drop straight
            into Ableton, FL Studio, or Logic.
          </p>

          <div className="social-proof">
            <div className="avatar-stack">
              {[1, 2, 3].map((i) => (
                <div key={i} className="avatar">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p>
              <strong>5,000+</strong> producers joined this week
            </p>
          </div>
        </div>

        <div className="upload-card" id="convert">
          <div
            className={`dropzone ${isDragging ? "active" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const droppedFile = e.dataTransfer.files[0];
              if (droppedFile) handleFile(droppedFile);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".mp3,.wav,.flac,.ogg,.m4a"
              style={{ display: "none" }}
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) handleFile(selectedFile);
              }}
            />
            <div>
              <span
                className="material-icons-outlined"
                style={{ fontSize: 48, color: "var(--border-strong)", marginBottom: 8 }}
              >
                {file ? "audio_file" : "cloud_upload"}
              </span>
              <p style={{ fontWeight: 500, color: "var(--text)" }}>
                {file ? file.name : "Drag & drop your audio"}
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 4 }}>
                {file
                  ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
                  : "Supports MP3, WAV, FLAC, OGG (Max 50MB)"}
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <span className="quality-label">Conversion quality</span>
            <div className="segmented">
              {["Fast", "Balanced", "Detailed"].map((option) => (
                <button
                  key={option}
                  className={option === "Balanced" ? "active" : ""}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar during conversion */}
          {isConverting && (
            <div
              style={{
                marginTop: 16,
                height: 4,
                borderRadius: 2,
                background: "var(--soft)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "var(--orange)",
                  borderRadius: 2,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          )}

          {/* Success message */}
          {state === "done" && result && (
            <>
              <div
                style={{
                  marginTop: 12,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "#ecfdf5",
                  fontSize: 13,
                  color: "#065f46",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="material-icons-outlined" style={{ fontSize: 18 }}>
                  check_circle
                </span>
                {result.notes.length} notes detected ·{" "}
                {result.durationSeconds.toFixed(1)}s audio
              </div>
              <MidiPreview
                notes={result.notes}
                durationSeconds={result.durationSeconds}
              />
            </>
          )}

          {/* Error message */}
          {state === "error" && (
            <div
              style={{
                marginTop: 12,
                padding: "10px 14px",
                borderRadius: 10,
                background: "#fef2f2",
                fontSize: 13,
                color: "#991b1b",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span className="material-icons-outlined" style={{ fontSize: 18 }}>
                error
              </span>
              {error}
            </div>
          )}

          <button
            className={`convert-button ${file ? "ready" : ""} ${
              state === "done" ? "done" : ""
            }`}
            disabled={!file || isConverting}
            onClick={state === "done" ? handleDownload : handleConvert}
            style={
              state === "done"
                ? { background: "#059669", cursor: "pointer" }
                : undefined
            }
          >
            <span className="material-icons-outlined">
              {state === "done"
                ? "download"
                : isConverting
                ? "hourglass_top"
                : "autorenew"}
            </span>
            {getConvertLabel()}
          </button>
        </div>
      </div>
    </section>
  );
}
