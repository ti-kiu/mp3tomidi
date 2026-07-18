#!/usr/bin/env python3
import requests
import json
import time

with open('/root/.hermes/profiles/mp3tomidi/.env') as f:
    for line in f:
        if line.startswith('STITCH_API_KEY='):
            api_key = line.strip().split('=', 1)[1]
            break

headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': api_key
}

def stitch_call(method_name, arguments, call_id='1'):
    payload = {
        'jsonrpc': '2.0',
        'id': call_id,
        'method': 'tools/call',
        'params': {
            'name': method_name,
            'arguments': arguments
        }
    }
    resp = requests.post('https://stitch.googleapis.com/mcp', headers=headers, json=payload, timeout=300)
    return resp.json()

PROJECT_ID = '4220043798527171624'

print('=== Generating Desktop Design ===')
prompt = """A modern, clean landing page for an online MP3 to MIDI converter tool called "MP3 to MIDI".

Key elements:
- Hero section with drag-and-drop file upload area
- Title: "Free MP3 to MIDI Converter"
- Subtitle: "Convert audio to MIDI in your browser. No upload, no signup."
- Supported formats: MP3, WAV, OGG, FLAC
- How it works section with 3 steps: Upload, Convert, Download
- Features section: Free, Private (no upload), Fast, AI-powered
- FAQ section with common questions
- Footer with links

Style: Minimal, professional, dark theme with teal/cyan accent color.
Target: Music producers, students, DJs."""

print(f'Project: {PROJECT_ID}')
print('Generating... (this may take 1-5 minutes)')

start = time.time()
result = stitch_call('generate_screen_from_text', {
    'projectId': PROJECT_ID,
    'prompt': prompt,
    'deviceType': 'DESKTOP'
}, '2')

elapsed = time.time() - start
print(f'\nDone in {elapsed:.1f}s')

text = result.get('result', {}).get('content', [{}])[0].get('text', '')
if text:
    data = json.loads(text)
    screens = data.get('screens', [])
    print(f'\nGenerated {len(screens)} screen(s):')
    for s in screens:
        print(f'  - {s.get("name", "unknown")}')
        if 'screenshotUrl' in s:
            print(f'    Screenshot: {s["screenshotUrl"]}')
        if 'htmlContent' in s:
            html = s['htmlContent']
            print(f'    HTML: {len(html)} chars')
            # Save HTML
            with open('/root/projects/mp3tomidi/design_desktop.html', 'w') as f:
                f.write(html)
            print(f'    Saved to: design_desktop.html')
else:
    print('\nResult:')
    print(json.dumps(result, indent=2)[:3000])

print(f'\nProject URL: https://stitch.withgoogle.com/projects/{PROJECT_ID}')
