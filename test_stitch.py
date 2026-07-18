#!/usr/bin/env python3
import os
import requests
import json

# Load API key from .env
env_path = os.path.expanduser("~/.hermes/profiles/mp3tomidi/.env")
api_key = None
with open(env_path) as f:
    for line in f:
        if line.startswith("STITCH_API_KEY="):
            api_key = line.strip().split("=", 1)[1]
            break

if not api_key:
    print("ERROR: STITCH_API_KEY not found in .env")
    exit(1)

print(f"API Key found: {api_key[:10]}...")

# Try Stitch API
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# Test with a simple prompt
payload = {
    "prompt": "A simple landing page for an MP3 to MIDI converter tool",
    "width": 1920,
    "height": 1080
}

# Try different endpoints
endpoints = [
    "https://stitch.googleapis.com/v1/designs",
    "https://stitch.withgoogle.com/api/v1/designs",
    "https://stitch.withytt.com/v1/designs"
]

for endpoint in endpoints:
    print(f"\nTrying: {endpoint}")
    try:
        resp = requests.post(endpoint, headers=headers, json=payload, timeout=10)
        print(f"  Status: {resp.status_code}")
        print(f"  Response: {resp.text[:500]}")
    except Exception as e:
        print(f"  Error: {e}")
