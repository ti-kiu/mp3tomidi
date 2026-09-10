export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <span className="eyebrow">Features</span>
          <h2>Built for producers who move fast.</h2>
        </div>

        {/* Feature 1: AI Transcription — image left, text right */}
        <div className="feature-showcase">
          <div className="feature-showcase-visual">
            <div className="feature-visual-card">
              <div className="visual-notes">
                <div className="note-bar" style={{ height: "75%", animationDelay: "0s", background: "#ea580c" }} />
                <div className="note-bar" style={{ height: "45%", animationDelay: "0.15s", background: "#f97316" }} />
                <div className="note-bar" style={{ height: "90%", animationDelay: "0.3s", background: "#ea580c" }} />
                <div className="note-bar" style={{ height: "60%", animationDelay: "0.45s", background: "#fb923c" }} />
                <div className="note-bar" style={{ height: "85%", animationDelay: "0.6s", background: "#ea580c" }} />
                <div className="note-bar" style={{ height: "35%", animationDelay: "0.75s", background: "#f97316" }} />
                <div className="note-bar" style={{ height: "70%", animationDelay: "0.9s", background: "#ea580c" }} />
                <div className="note-bar" style={{ height: "50%", animationDelay: "1.05s", background: "#fb923c" }} />
              </div>
              <span className="visual-label">Real-time note detection</span>
            </div>
          </div>
          <div className="feature-showcase-content">
            <span className="feature-tag" style={{ background: "#ffedd5", color: "#c2410c" }}>AI TRANSCRIPTION</span>
            <div className="feature-icon" style={{ background: "#ea580c" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>psychology</span>
            </div>
            <h3>Neural Audio Extraction</h3>
            <p>
              Deep-learning models trained on 500,000+ hours of professional
              multi-track recordings. Identifies melodies, chords, and rhythms
              with 99.4% accuracy — from clean solos to dense mixes.
            </p>
            <div className="chip-row">
              <span className="chip" style={{ background: "#ffedd5", color: "#9a3412" }}>99.4% Note Accuracy</span>
              <span className="chip" style={{ background: "#ffedd5", color: "#9a3412" }}>Instrument Separation</span>
              <span className="chip" style={{ background: "#ffedd5", color: "#9a3412" }}>Micro-timing Detection</span>
            </div>
          </div>
        </div>

        {/* Feature 2: Speed — text left, image right */}
        <div className="feature-showcase feature-showcase-reverse">
          <div className="feature-showcase-visual">
            <div className="feature-visual-card speed-card">
              <div className="speed-stat" style={{ background: "#e0f5f1" }}>
                <span className="speed-number" style={{ color: "#0d9488" }}>&lt;15s</span>
                <span className="speed-label">per minute of audio</span>
              </div>
              <div className="speed-bar">
                <div className="speed-bar-fill" style={{ width: "85%", background: "#0d9488" }} />
              </div>
              <span className="visual-label">Processing speed</span>
            </div>
          </div>
          <div className="feature-showcase-content">
            <span className="feature-tag" style={{ background: "#ccfbf1", color: "#0d9488" }}>SPEED</span>
            <div className="feature-icon" style={{ background: "#0d9488" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>speed</span>
            </div>
            <h3>Instant Processing</h3>
            <p>
              MIDI output in less than 15 seconds per minute of audio.
              No queues, no server uploads, no waiting. Your audio is decoded
              and transcribed locally using WebGL-accelerated inference.
            </p>
            <div className="chip-row">
              <span className="chip" style={{ background: "#ccfbf1", color: "#0d7377" }}>WebGL Accelerated</span>
              <span className="chip" style={{ background: "#ccfbf1", color: "#0d7377" }}>No Upload Required</span>
              <span className="chip" style={{ background: "#ccfbf1", color: "#0d7377" }}>Real-time Progress</span>
            </div>
          </div>
        </div>

        {/* Feature 3: Compatibility — image left, text right */}
        <div className="feature-showcase">
          <div className="feature-showcase-visual">
            <div className="feature-visual-card daw-card">
              <div className="daw-icons">
                <span className="daw-icon">Ableton</span>
                <span className="daw-icon">FL Studio</span>
                <span className="daw-icon">Logic Pro</span>
                <span className="daw-icon">Cubase</span>
              </div>
              <span className="visual-label">Works with all major DAWs</span>
            </div>
          </div>
          <div className="feature-showcase-content">
            <span className="feature-tag" style={{ background: "#fef3c7", color: "#b45309" }}>COMPATIBILITY</span>
            <div className="feature-icon" style={{ background: "#d97706" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>devices</span>
            </div>
            <h3>Works with your DAW</h3>
            <p>
              Standard MIDI files open directly in Ableton, FL Studio,
              Logic Pro, Cubase, and every other major production software.
              No conversion needed — just drag and drop.
            </p>
            <div className="daw-list">
              <span className="daw-chip" style={{ borderColor: "#fcd34d", background: "#fffbeb" }}>Ableton</span>
              <span className="daw-chip" style={{ borderColor: "#fcd34d", background: "#fffbeb" }}>FL Studio</span>
              <span className="daw-chip" style={{ borderColor: "#fcd34d", background: "#fffbeb" }}>Logic Pro</span>
              <span className="daw-chip" style={{ borderColor: "#fcd34d", background: "#fffbeb" }}>Cubase</span>
            </div>
          </div>
        </div>

        {/* Feature 4: Privacy — text left, image right */}
        <div className="feature-showcase feature-showcase-reverse">
          <div className="feature-showcase-visual">
            <div className="feature-visual-card privacy-card">
              <div className="privacy-visual">
                <span className="material-icons-outlined" style={{ fontSize: 48, color: "#e11d48" }}>lock</span>
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
              <span className="visual-label">100% client-side processing</span>
            </div>
          </div>
          <div className="feature-showcase-content">
            <span className="feature-tag" style={{ background: "#ffe4e6", color: "#e11d48" }}>PRIVACY</span>
            <div className="feature-icon" style={{ background: "#e11d48" }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>lock</span>
            </div>
            <h3>Your audio stays on your device</h3>
            <p>
              All processing happens in your browser using WebAssembly.
              We never upload, store, or see your files. 100% private.
              No account required, no tracking of your content.
            </p>
            <div className="chip-row">
              <span className="chip" style={{ background: "#ffe4e6", color: "#be123c" }}>100% Client-Side</span>
              <span className="chip" style={{ background: "#ffe4e6", color: "#be123c" }}>No Account Needed</span>
              <span className="chip" style={{ background: "#ffe4e6", color: "#be123c" }}>Zero Data Collection</span>
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
