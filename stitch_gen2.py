#!/usr/bin/env python3
import requests
import json
import time

# Read API key from .env
api_key = None
with open('/root/.hermes/profiles/mp3tomidi/.env') as f:
    for line in f:
        if line.startswith('STITCH_API_KEY=***            api_key = line.strip().split('=', 1)[1]
            break

if not api_key:
    print('ERROR: STITCH_API_KEY not found')
    exit(1)

headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': api_key
}

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

payload = {
    'jsonrpc': '2.0',
    'id': '1',
    'method': 'tools/call',
    'params': {
        'name': 'generate_screen_from_text',
        'arguments': {
            'projectId': PROJECT_ID,
            'prompt': prompt,
            'deviceType': 'DESKTOP'
        }
    }
}

print('Generating... (this may take 1-5 minutes)')
start = time.time()

resp = requests.post('https://stitch.googleapis.com/mcp', headers=headers, json=payload, timeout=300)
elapsed = time.time() - start
print(f'Done in {elapsed:.1f}s')

data = resp.json()
print(f'Status: {resp.status_code}')

# Parse output
result = data.get('result', {})
content = result.get('content', [])
if content:
    text = content[0].get('text', '')
    print(f'\nResponse text ({len(text)} chars):')
    try:
        parsed = json.loads(text)
        print(json.dumps(parsed, indent=2)[:3000])
    except:
        print(text[:3000])
else:
    print('\nFull response:')
    print(json.dumps(data, indent=2)[:3000])

print(f'\nProject URL: https://stitch.withgoogle.com/projects/{PROJECT_ID}')
