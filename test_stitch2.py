#!/usr/bin/env python3
import requests
import json

# Read API key
with open('/root/.hermes/profiles/mp3tomidi/.env') as f:
    for line in f:
        if line.startswith('STITCH_API_KEY='):
            api_key = line.strip().split('=', 1)[1]
            break

print(f'Key: {api_key[:15]}...')

headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': api_key
}

# List projects
payload = {
    'jsonrpc': '2.0',
    'id': '1',
    'method': 'tools/call',
    'params': {
        'name': 'list_projects',
        'arguments': {}
    }
}

print('\n=== Listing Projects ===')
resp = requests.post('https://stitch.googleapis.com/mcp', headers=headers, json=payload, timeout=30)
print(f'Status: {resp.status_code}')
print(f'Response: {resp.text[:2000]}')
