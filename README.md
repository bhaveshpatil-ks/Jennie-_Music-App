# 🎵 Jennie — Music Streaming Platform

> An elite, high-fidelity music streaming platform designed with a **minimal luxury** aesthetic for discerning listeners, creators, and audiophiles. Experience Spotify-style artist profiles, full discography exploration, interactive synchronized lyrics, smart typo-tolerant search, and studio master sound fidelity.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-jennie--ee.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://jennie-ee.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bhaveshpatil-ks/Jennie-_Music-App)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat-square)](https://github.com/darkroomengineering/lenis)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 🌐 Live Deployment

| Attribute | Details |
| :--- | :--- |
| **Live Web App** | 🚀 **[https://jennie-ee.netlify.app/](https://jennie-ee.netlify.app/)** |
| **Hosting Platform** | [Netlify](https://www.netlify.com/) (Continuous Deployment via Git) |
| **CDN Distribution** | High-speed global edge network with instant asset cache invalidation |
| **Security & SSL** | 256-bit automated Let's Encrypt TLS/SSL encryption |
| **Mobile & Responsive** | Full responsive support for ultra-wide desktop, tablet, and mobile |

---

## 📑 Core Documentation Index

- 📘 **[Product Requirement Document (PRD)](./docs/PRD.md)**: Exhaustive product specification, mathematical recommendation algorithms, unity-gain audio architecture, and regulatory compliance frameworks.
- 🗺️ **[Architectural Site Map & Component Hierarchy](./docs/SITEMAP.md)**: Visual sitemap, SEO routing index, component layout tree, and accessibility standards.
- 🌐 **[Production XML Sitemap](./frontend/public/sitemap.xml)** (mirrored in [`./docs/sitemap.xml`](./docs/sitemap.xml)): Canonical search engine crawler map compliant with Sitemaps.org 0.9.

---

## 🏛️ Project Directory Structure

```
personal-music/
├── 📁 backend/                        # Node.js / Express API Proxy & Scraper
│   ├── 📁 src/
│   │   ├── 📁 config/                 # Database configuration (MongoDB Atlas)
│   │   ├── 📁 models/                 # Mongoose schemas (Playlists, Favorites)
│   │   ├── 📁 routes/                 # Express API endpoints (/tracks, /playlists, /favorites)
│   │   ├── 📁 services/               # External ingestion (Jamendo, Audius, YouTube Topic)
│   │   └── 📁 utils/                  # String cleaners & waveform visualizer helpers
│   ├── .env.example                   # Environment variable template
│   ├── package.json                   # Backend dependencies
│   └── README.md                      # Backend service documentation
│
├── 📁 frontend/                       # React 19 Single Page Application
│   ├── 📁 public/                     # Static assets & SEO crawlers
│   │   ├── robots.txt                 # Search engine crawler directives
│   │   ├── sitemap.xml                # Canonical production sitemap
│   │   └── _redirects                 # SPA routing redirects for Netlify deployment
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 common/             # AddToPlaylistModal, CookieConsentBanner, LikeButton, CreatePlaylistModal
│   │   │   ├── 📁 layout/             # AppLayout, TopHeader, Sidebar, MobileNav, Footer
│   │   │   ├── 📁 player/             # PlayerBar, FullscreenPlayer, LyricsView, YouTubePlayerEmbed, ProgressBar
│   │   │   └── 📁 tracks/             # TrackTable, TrackListRow, TrackCard, SearchResultCard
│   │   ├── 📁 data/                   # Seed artists, albums, and high-fidelity tracks
│   │   ├── 📁 pages/                  # Home, Search, Library, Favorites, PlaylistDetail, ArtistDetail, AlbumDetail
│   │   │   └── 📁 legal/              # PrivacyPolicy, TermsAndConditions, CookiePolicy, RefundPolicy, BusinessDetails
│   │   ├── 📁 services/               # Axios API client & 5-tier recommendationEngine
│   │   ├── 📁 store/                  # Zustand stores (usePlayerStore, useLibraryStore)
│   │   └── 📁 utils/                  # Duration & view count formatters
│   ├── index.html                     # HTML5 entrypoint with preconnect hints & OpenGraph tags
│   ├── package.json                   # Frontend dependencies
│   ├── tailwind.config.js             # Minimal luxury obsidian color palette & animations
│   └── vite.config.js                 # Vite bundler configuration
│
├── 📁 docs/                           # Official Platform Documentation
│   ├── PRD.md                         # Complete Product Requirement Document
│   ├── SITEMAP.md                     # Architectural visual sitemap & routing breakdown
│   └── sitemap.xml                    # Reference XML sitemap
│
├── .gitignore                         # Universal multi-workspace Git ignore file
├── netlify.toml                       # Netlify deployment and SPA rewrite headers
└── README.md                          # Master workspace overview & quick-start guide
```

---

## ✨ Key Platform Features

### 1. 🎤 Spotify-Style Artist Profiles & Discography
- **Hero Banners & Verified Artist Badging**: High-definition artist portraits with monthly listener statistics and verified artist badges.
- **Top 10 Popular Tracks**: Instant one-click playback of the artist's most celebrated hits with formatted play counts.
- **Discography Section**: Categorized into **Albums**, **Singles**, and **EPs** with full release years and track counts.
- **Artist Biography & Musical Journey**: Comprehensive artist bios highlighting awards, discography milestones, and origins.
- **Fans Also Like**: Curated recommendations of musically adjacent and collaborating artists.

### 2. 💿 Album & EP Deep Dive Pages
- **Rich Header Art & Metadata**: Detailed release date, track count, total playback duration, and clickable artist attribution.
- **Full Tracklist Grid**: Track numbers, titles, featured guest artists, stream durations, and instant play buttons.
- **Direct Queue Insertion**: Play the full album seamlessly from start to finish.

### 3. 📝 Real-Time Synchronized Lyrics with Tap-to-Seek
- **Live Time Synchronization**: Karaoke-style highlight that tracks playback millisecond by millisecond.
- **Tap-to-Seek**: Tap on any lyric line to jump playback directly to that exact moment.
- **Immersive Lyrics Mode**: Full-screen typography on translucent obsidian glass.

### 4. 🔍 Typo-Tolerant Search & Dynamic Profile Generator
- **Intelligent Spelling Correction**: Robust fuzzy alias matching for artist queries (e.g. `arjit singh` $\rightarrow$ `Arijit Singh`, `diljeet` $\rightarrow$ `Diljit Dosanjh`).
- **Dynamic Profile Synthesizer**: When searching for artists without pre-configured static profiles, Jennie dynamically extracts track metadata from live streaming streams to synthesize a rich artist profile on the fly.
- **Prominent Top Results**: Hero artist card shown prominently above track listings for both mobile and desktop.

### 5. 🎶 Background Playback & Zero-Disturbance Suspense Queue
- **Uninterrupted Background Audio**: Sound continues playing seamlessly as you navigate between home, search, albums, artist profiles, and libraries.
- **Suspense Discovery Queue**: Up Next list is tucked away into an optional swipe-up panel, preserving the surprise and suspense of discovery while keeping the queue accessible with a single swipe or tap.
- **1-Click Add to Playlist & Favorites**: Add any track to custom playlists or favorites instantly from player controls and track menus.

### 6. 🔊 Studio Master Sound Fidelity
- **100% Unity Gain**: Default volume locked to `1.0` (0 dBFS reference) with zero software attenuation.
- **Anti-Throttling HD Canvas**: Playback executes inside an off-screen frame that prompts CDNs to deliver studio-quality 160–256 kbps Opus/AAC audio streams rather than downgraded low-bitrate streams.
- **Topic Channel Prioritization**: Search engines prioritize official studio master tracks (`- Topic` releases and verified label uploads) while de-ranking noisy fan concert recordings.

### 7. 💎 Minimal Luxury Obsidian Aesthetics & Inertial Scrolling
- **Obsidian Palette**: Deep background shades (`#08080A`, `#101014`, `#18181D`) paired with muted silver typography (`#F4F4F6`, `#8A8A93`) and champagne gold accents (`#D4AF37`).
- **Lenis Smooth Inertia**: Zero-lag momentum scroll physics matching high-end design showcases.
- **Responsive Layout**: Adapts gracefully from desktop ultra-wide monitors down to single-hand mobile devices with a floating mini-player pill.

### 8. ⚖️ Enterprise Legal & Regulatory Compliance
- **India DPDP Act 2023 & GDPR Ready**: Affirmative cookie consent mechanism, right-to-forget data erasure, explicit form consent, and registered Data Fiduciary disclosure.
- **Dedicated Legal Suite**: Dedicated `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`, `/refund-policy`, and `/business-details` routes.

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [npm](https://www.npmjs.com/) v9.0.0 or higher
- *(Optional)* [MongoDB Atlas](https://www.mongodb.com/atlas) connection string for cloud playlist persistence

### 1. Frontend Application Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Vite hot-reloading development server
npm run dev
# Application opens at http://localhost:5173
```

### 2. Backend Service Setup (Optional for Local API Proxy)
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env to set your PORT and MONGODB_URI (defaults to localhost / mock mode if unconfigured)

# Start backend development server
npm run dev
# Server runs on http://localhost:5000
```

### 3. Production Build
```bash
# Build optimized frontend bundle
cd frontend
npm run build

# Output is generated cleanly in frontend/dist/
```

---

## 🔒 Security & Privacy Notice
Jennie Music does not store unconsented tracking cookies or share listening telemetry with third-party advertisers. All client-side playback telemetry respects user preference toggles configurable through the in-app Cookie Consent Center.

---

*Designed & engineered with perfection for Jennie Music Platform.*
*Live at [https://jennie-ee.netlify.app/](https://jennie-ee.netlify.app/)*
