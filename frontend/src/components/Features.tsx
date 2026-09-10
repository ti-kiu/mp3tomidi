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
              <img src="/feature-ai-transcription.svg" alt="AI Transcription" width="100%" height="auto" />
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
            <div className="feature-visual-card">
              <img src="/feature-speed.svg" alt="Instant Processing" width="100%" height="auto" />
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
            <div className="feature-visual-card">
              <img src="/feature-compatibility.svg" alt="DAW Compatibility" width="100%" height="auto" />
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
            <div className="feature-visual-card">
              <img src="/feature-privacy.svg" alt="Privacy Protection" width="100%" height="auto" />
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
