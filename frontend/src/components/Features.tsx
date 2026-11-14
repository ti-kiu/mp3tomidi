export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <span className="eyebrow">Features</span>
          <h2>Built for producers who move fast.</h2>
        </div>

        <div className="features-grid">
          {/* Large card — AI Transcription (orange) */}
          <div className="card feature-large" style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fff1e6 100%)" }}>
            <div className="feature-large-content">
              <span className="feature-tag" style={{ background: "#ffedd5", color: "#c2410c" }}>BASIC PITCH</span>
              <div className="feature-icon" style={{ background: "#ea580c" }}>
                <span className="material-icons-outlined" style={{ color: "#fff" }}>psychology</span>
              </div>
              <h3>Basic Pitch Transcription</h3>
              <p>
                Audio is transcribed in your browser with Spotify&apos;s open-source
                Basic Pitch model. It estimates notes, timing, and loudness from
                the file on your device. Clear, single-instrument recordings
                usually need less cleanup. Dense mixes can include extra or missing notes.
              </p>
              <div className="chip-row">
                <span className="chip" style={{ background: "#ffedd5", color: "#9a3412" }}>Spotify Basic Pitch</span>
                <span className="chip" style={{ background: "#ffedd5", color: "#9a3412" }}>Runs in Your Browser</span>
                <span className="chip" style={{ background: "#ffedd5", color: "#9a3412" }}>No File Upload</span>
              </div>
            </div>
            <div className="feature-visual">
              <img src="/hero-conversion.svg" alt="Audio to MIDI conversion" width="260" height="auto" style={{ borderRadius: 18 }} />
            </div>
          </div>

          {/* Speed card (teal) */}
          <div className="card feature-speed" style={{ background: "linear-gradient(160deg, #e6faf7 0%, #ccfbf1 100%)" }}>
            <span className="feature-tag" style={{ background: "#ccfbf1", color: "#0d9488" }}>SPEED</span>
            <div className="feature-icon" style={{ background: "#0d9488" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>speed</span>
            </div>
            <h3>Instant Processing</h3>
            <p>
              MIDI output in less than 15 seconds per minute of audio.
              No queues, no server uploads, no waiting.
            </p>
            <div className="speed-stat" style={{ background: "#e0f5f1" }}>
              <span className="speed-number" style={{ color: "#0d9488" }}>&lt;15s</span>
              <span className="speed-label">per minute of audio</span>
            </div>
          </div>
        </div>

        <div className="feature-row">
          {/* Compatibility card (amber) */}
          <div className="card" style={{ background: "linear-gradient(160deg, #fef3c7 0%, #fef9e7 100%)" }}>
            <span className="feature-tag" style={{ background: "#fef3c7", color: "#b45309" }}>COMPATIBILITY</span>
            <div className="feature-icon" style={{ background: "#d97706" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>devices</span>
            </div>
            <h3>Works with your DAW</h3>
            <p>
              Standard MIDI files open directly in Ableton, FL Studio,
              Logic Pro, Cubase, and every other major production software.
            </p>
            <div style={{ marginTop: 16, textAlign: "center" }}>
              <img src="/daw-import.svg" alt="DAW compatibility" width="100%" style={{ maxWidth: 300, borderRadius: 12 }} />
            </div>
          </div>

          {/* Privacy card (rose) */}
          <div className="card feature-privacy" style={{ background: "linear-gradient(160deg, #ffe4e6 0%, #fff1f2 100%)" }}>
            <span className="feature-tag" style={{ background: "#ffe4e6", color: "#e11d48" }}>PRIVACY</span>
            <div className="feature-icon" style={{ background: "#e11d48" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>lock</span>
            </div>
            <h3>Your audio stays on your device</h3>
            <p>
              All processing happens in your browser using WebAssembly.
              We never upload, store, or see your files. 100% private.
            </p>
            <div className="privacy-badges">
              <span className="privacy-badge">
                <span className="material-icons-outlined" style={{ color: "#e11d48" }}>check_circle</span>
                No server upload
              </span>
              <span className="privacy-badge">
                <span className="material-icons-outlined" style={{ color: "#e11d48" }}>check_circle</span>
                No data collection
              </span>
              <span className="privacy-badge">
                <span className="material-icons-outlined" style={{ color: "#e11d48" }}>check_circle</span>
                GDPR compliant
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="features-cta">
          <div className="cta-decoration cta-deco-left" />
          <div className="cta-decoration cta-deco-right" />
          <h2>Ready to convert?</h2>
          <p>Upload any audio file and get a clean MIDI in seconds.</p>
          <a href="#hero" className="btn-primary">
            Start Converting — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
