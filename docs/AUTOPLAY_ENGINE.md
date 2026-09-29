# Jennie Music - Autoplay & Next-Track Engine

## Overview
Jennie Music discards search queries once playback starts, using the song's structured profile:
```json
{
  "artist_id": "arijit_singh",
  "genre": "Bollywood",
  "sub_genre": "Romantic",
  "language": "Hindi",
  "bpm": 92,
  "energy": 0.62
}
```
This prevents keyword repetition and creates a true YouTube/Spotify radio mix.
