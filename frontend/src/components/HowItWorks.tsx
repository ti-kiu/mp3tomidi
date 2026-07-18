export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "cloud_upload",
      title: "Upload your audio",
      desc: "Drag any MP3, WAV, or FLAC file. We accept tracks up to 10 minutes long.",
      bg: "linear-gradient(160deg, #fff7ed 0%, #fff1e6 100%)",
      iconBg: "#ea580c",
    },
    {
      number: "02",
      icon: "memory",
      title: "AI extracts the notes",
      desc: "Our neural engine detects pitch, velocity, timing, and chord structure — all in your browser.",
      bg: "linear-gradient(160deg, #e6faf7 0%, #ccfbf1 100%)",
      iconBg: "#0d9488",
    },
    {
      number: "03",
      icon: "download",
      title: "Download your MIDI",
      desc: "Get a standard MIDI file ready for Ableton, FL Studio, Logic, or any DAW.",
      bg: "linear-gradient(160deg, #fef3c7 0%, #fef9e7 100%)",
      iconBg: "#d97706",
    },
  ];

  return (
    <section className="steps-section steps">
      <div className="container steps-grid">
        <div className="section-title">
          <span className="eyebrow">How it works</span>
          <h2>Three steps. Under a minute.</h2>
        </div>

        {steps.map((step) => (
          <div key={step.number} className="card" style={{ background: step.bg }}>
            <div className="step-number">{step.number}</div>
            <div className="step-icon" style={{ background: step.iconBg }}>
              <span className="material-icons-outlined" style={{ color: "#fff" }}>{step.icon}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
