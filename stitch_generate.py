#!/usr/bin/env python3
import requests
import json
import time

# Read API key
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
    resp = requests.post('https://stitch.googleapis.com/mcp', headers=headers, json=payload, timeout=120)
    return resp.json()

# Step 1: Create project
print('=== Creating Project ===')
result = stitch_call('create_project', {'title': 'MP3 to MIDI Converter'})
print(json.dumps(result, indent=2)[:1000])

# Extract project ID
project_name = result.get('result', {}).get('content', [{}])[0].get('text', '')
project_data = json.loads(project_name) if project_name else {}
project_id = project_data.get('name', '').split('/')[-1]
print(f'\nProject ID: {project_id}')

if not project_id:
    print('ERROR: Failed to create project')
    exit(1)

# Step 2: Generate design
print('\n=== Generating Design ===')
prompt = """A modern, clean landing page for an online MP3 to MIDI converter tool.

Key elements:
- Hero section with drag-and-drop file upload area
- Title: "Free MP3 to MIDI Converter"
- Subtitle: "Convert audio to MIDI in your browser. No upload, no signup."
- Supported formats: MP3, WAV, OGG, FLAC
- How it works section with 3 steps
- Features section: Free, Private (no upload), Fast, AI-powered
- FAQ section with common questions
- Footer with links

Style: Minimal, professional, dark theme with accent color.
Target: Music producers, students, DJs.
Device: Desktop (1920x1080)"""

result = stitch_call('generate_screens', {
    'projectId': project_id,
    'prompt': prompt,
    'deviceType': 'DESKTOP'
}, '2')

print(json.dumps(result, indent=2)[:2000])

print('\n=== Done ===')
print(f'Project: https://stitch.withgoogle.com/projects/{project_id}')
