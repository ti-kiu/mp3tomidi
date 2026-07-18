#!/usr/bin/env python3
import requests
import json

with open('/root/.hermes/profiles/mp3tomidi/.env') as f:
    for line in f:
        if line.startswith('STITCH_API_KEY='):
            api_key = line.strip().split('=', 1)[1]
            break

headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': api_key
}

payload = {
    'jsonrpc': '2.0',
    'id': '1',
    'method': 'tools/call',
    'params': {
        'name': 'list_screens',
        'arguments': {'projectId': '4220043798527171624'}
    }
}

resp = requests.post('https://stitch.googleapis.com/mcp', headers=headers, json=payload, timeout=30)
print(json.dumps(resp.json(), indent=2)[:3000])
