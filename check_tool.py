#!/usr/bin/env python3
import requests
import json

with open('/root/.hermes/profiles/mp3tomidi/.env') as f:
    for line in f:
        if line.startswith('STITCH_API_KEY=***            api_key = line.strip().split('=', 1)[1]
            break

headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': api_key
}

payload = {
    'jsonrpc': '2.0',
    'id': '1',
    'method': 'tools/list',
    'params': {}
}

resp = requests.post('https://stitch.googleapis.com/mcp', headers=headers, json=payload, timeout=30)
data = resp.json()
tools = data.get('result', {}).get('tools', [])
for t in tools:
    if t['name'] == 'generate_screen_from_text':
        print(json.dumps(t, indent=2))
        break
