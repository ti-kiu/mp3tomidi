import Link from "next/link";

type Tool = { href: string; label: string; desc: string };

// 格式转换工具页
const converters: Tool[] = [
  { href: "/mp3-to-midi", label: "MP3 to MIDI", desc: "Convert MP3 audio to editable MIDI files" },
  { href: "/wav-to-midi", label: "WAV to MIDI", desc: "Convert WAV audio to MIDI" },
  { href: "/flac-to-midi", label: "FLAC to MIDI", desc: "Convert lossless FLAC to MIDI" },
  { href: "/ogg-to-midi", label: "OGG to MIDI", desc: "Convert OGG audio to MIDI" },
  { href: "/m4a-to-midi", label: "M4A to MIDI", desc: "Convert Apple M4A to MIDI" },
  { href: "/aac-to-midi", label: "AAC to MIDI", desc: "Convert AAC audio to MIDI" },
  { href: "/aiff-to-midi", label: "AIFF to MIDI", desc: "Convert AIFF audio to MIDI" },
  { href: "/wma-to-midi", label: "WMA to MIDI", desc: "Convert Windows Media to MIDI" },
  { href: "/opus-to-midi", label: "Opus to MIDI", desc: "Convert Opus audio to MIDI" },
  { href: "/audio-to-midi", label: "Audio to MIDI", desc: "Convert any audio format to MIDI" },
  { href: "/midi-to-mp3", label: "MIDI to MP3", desc: "Render MIDI back to audio" },
];

// 乐器/场景提取页
const instruments: Tool[] = [
  { href: "/piano-to-midi", label: "Piano to MIDI", desc: "Extract piano notes from audio" },
  { href: "/guitar-to-midi", label: "Guitar to MIDI", desc: "Extract guitar notes from audio" },
  { href: "/drums-to-midi", label: "Drums to MIDI", desc: "Extract drum patterns from audio" },
  { href: "/vocals-to-midi", label: "Vocals to MIDI", desc: "Extract vocal melody from audio" },
  { href: "/bass-to-midi", label: "Bass to MIDI", desc: "Extract bass lines from audio" },
  { href: "/youtube-to-midi", label: "YouTube to MIDI", desc: "Convert YouTube audio to MIDI" },
  { href: "/song-to-midi", label: "Song to MIDI", desc: "Convert any song to MIDI" },
  { href: "/music-to-midi", label: "Music to MIDI", desc: "Convert music files to MIDI" },
];

// 长尾关键词页
const longTail: Tool[] = [
  { href: "/convert-mp3-to-midi", label: "Convert MP3 to MIDI", desc: "Browser-based MP3 to MIDI tool" },
  { href: "/mp3-to-midi-converter", label: "MP3 to MIDI Converter", desc: "Free online converter, no upload" },
  { href: "/mp3-to-midi-ai", label: "MP3 to MIDI AI", desc: "AI-powered note detection" },
  { href: "/turn-mp3-to-midi", label: "Turn MP3 to MIDI", desc: "Quick MP3 to MIDI conversion" },
  { href: "/convert-mp3-file-to-midi", label: "Convert MP3 File to MIDI", desc: "Drag & drop file conversion" },
  { href: "/mp3-to-midi-file-conversion", label: "MP3 to MIDI File Conversion", desc: "Complete file conversion guide" },
  { href: "/convert-midi-to-mp3", label: "Convert MIDI to MP3", desc: "MIDI to audio rendering" },
];

// 信息/资源页
const resources: Tool[] = [
  { href: "/what-is-midi", label: "What is MIDI?", desc: "Learn about the MIDI format" },
  { href: "/compare", label: "Compare Tools", desc: "How we stack up against alternatives" },
  { href: "/features", label: "Features", desc: "Full feature list" },
  { href: "/faq", label: "FAQ", desc: "Common questions answered" },
  { href: "/blog", label: "Blog", desc: "Guides and tutorials" },
];

// 所有工具页合并
const allTools = [...converters, ...instruments];

// 每个页面应该链接到哪些相关页面
const relatedMap: Record<string, Tool[]> = {
  // 核心格式转换页
  "/mp3-to-midi": [converters[1], converters[2], converters[9], instruments[0], instruments[1], resources[0]],
  "/wav-to-midi": [converters[0], converters[2], converters[9], instruments[0], resources[0]],
  "/flac-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/ogg-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/m4a-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/aac-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/aiff-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/wma-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/opus-to-midi": [converters[0], converters[1], converters[9], instruments[0], resources[0]],
  "/audio-to-midi": [converters[0], converters[1], converters[2], instruments[0], resources[0]],
  "/midi-to-mp3": [converters[0], converters[1], converters[9], longTail[6], resources[0]],

  // 乐器/场景提取页
  "/piano-to-midi": [converters[0], converters[1], instruments[1], instruments[2], instruments[3], resources[0]],
  "/guitar-to-midi": [converters[0], converters[1], instruments[0], instruments[2], instruments[4], resources[0]],
  "/drums-to-midi": [converters[0], converters[1], instruments[0], instruments[1], instruments[4], resources[0]],
  "/vocals-to-midi": [converters[0], converters[1], instruments[0], instruments[2], resources[0]],
  "/bass-to-midi": [converters[0], converters[1], instruments[1], instruments[2], resources[0]],
  "/youtube-to-midi": [converters[0], converters[1], instruments[5], instruments[6], resources[0]],
  "/song-to-midi": [converters[0], converters[1], instruments[5], instruments[7], resources[0]],
  "/music-to-midi": [converters[0], converters[1], instruments[6], resources[0]],

  // 长尾关键词页
  "/convert-mp3-to-midi": [converters[0], converters[1], converters[9], longTail[1], longTail[2], resources[0]],
  "/mp3-to-midi-converter": [converters[0], converters[9], longTail[0], longTail[2], longTail[3], resources[0]],
  "/mp3-to-midi-ai": [converters[0], converters[9], longTail[0], longTail[1], longTail[3], resources[0]],
  "/turn-mp3-to-midi": [converters[0], converters[1], longTail[0], longTail[1], longTail[2], resources[0]],
  "/convert-mp3-file-to-midi": [converters[0], converters[9], longTail[0], longTail[1], longTail[5], resources[0]],
  "/mp3-to-midi-file-conversion": [converters[0], converters[1], longTail[0], longTail[3], longTail[4], resources[0]],
  "/convert-midi-to-mp3": [converters[10], converters[0], converters[1], longTail[0], resources[0]],

  // 信息页
  "/what-is-midi": [converters[0], converters[1], converters[9], converters[10]],
  "/features": [converters[0], converters[1], converters[9], resources[1]],
  "/compare": [converters[0], converters[1], converters[9], resources[2]],
  "/faq": [converters[0], converters[9], resources[0], resources[4]],

  // Blog
  "/blog": [converters[0], converters[1], converters[9], resources[0]],
  "/blog/mp3-to-midi-guide": [converters[0], converters[9], resources[0]],
  "/blog/best-converters": [converters[0], converters[1], converters[9], resources[1]],
  "/blog/mp3-to-midi-soundfont": [converters[0], resources[0]],
  "/blog/midi-to-mp3-guide": [converters[10], converters[0], resources[0]],
  // 新博客文章
  "/blog/alternatives-to-basic-pitch": [converters[0], converters[1], converters[9], resources[1]],
  "/blog/mp3-vs-wav-midi": [converters[0], converters[1], converters[2], resources[0]],
  "/blog/extract-piano-notes": [converters[0], instruments[0], resources[0]],
  "/blog/best-free-midi-converters": [converters[0], converters[1], converters[9], resources[1]],
  "/blog/what-is-midi-file": [converters[0], converters[9], resources[0]],
  "/blog/youtube-to-midi-guide": [converters[0], instruments[5], resources[0]],

  // 其他页面
  "/about": [converters[0], resources[0], resources[4]],
  "/contact": [converters[0], resources[3]],
  "/help": [converters[0], converters[9], resources[3], resources[4]],
};

export default function RelatedTools({ currentPath }: { currentPath: string }) {
  const related = relatedMap[currentPath];
  if (!related || related.length === 0) return null;

  // 分成主要工具（前3-4个）和其他
  const primary = related.slice(0, 4);
  const secondary = related.slice(4);

  return (
    <section className="related-tools" style={{ padding: "3rem 0", borderTop: "1px solid var(--border, #e5e5e5)" }}>
      <div className="container">
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem" }}>
          Related Tools & Resources
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
          {primary.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              style={{
                display: "block",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid var(--border, #e5e5e5)",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s",
              }}
              className="related-tool-link"
            >
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{tool.label}</div>
              <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>{tool.desc}</div>
            </Link>
          ))}
        </div>
        {secondary.length > 0 && (
          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", opacity: 0.6 }}>See also:</span>
            {secondary.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                style={{ fontSize: "0.85rem", color: "var(--accent, #EA580C)", textDecoration: "underline" }}
              >
                {tool.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
