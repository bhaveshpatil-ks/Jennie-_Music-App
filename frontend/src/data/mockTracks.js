/**
 * Top Hindi & Indian Chartbusters for Jennie Music
 * Modeled after Spotify India's Top 50 & Hot Hits
 * Official authentic music video posters and YouTube streams
 */

export const getTrackCoverUrl = (track) => {
  if (!track) return 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg';
  const ytId = track.youtubeId || (typeof track.id === 'string' && track.id.startsWith('yt-') ? track.id.replace('yt-', '') : null);
  if (track.coverUrl && !track.coverUrl.includes('unsplash.com')) {
    return track.coverUrl;
  }
  if (ytId) {
    return `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
  }
  return track.coverUrl || 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg';
};

export const MOCK_TRACKS = [
  // Top Hindi Songs in India (Most Played)
  {
    id: 'yt-BddP6PYo2gs',
    youtubeId: 'BddP6PYo2gs',
    title: 'Kesariya',
    artist: 'Arijit Singh & Pritam',
    album: 'Brahmastra',
    duration: 268,
    coverUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Romantic & Soulful',
    plays: '148,200,900',
    license: 'Official Music',
    featured: true,
    releaseYear: 2022,
    color: '#F59E0B'
  },
  {
    id: 'yt-ElZfdU54Cp8',
    youtubeId: 'ElZfdU54Cp8',
    title: 'Apna Bana Le',
    artist: 'Arijit Singh & Sachin-Jigar',
    album: 'Bhediya',
    duration: 261,
    coverUrl: 'https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Emotional & Deep',
    plays: '131,300,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2022,
    color: '#10B981'
  },
  {
    id: 'yt-iAIBF2ngbWY',
    youtubeId: 'iAIBF2ngbWY',
    title: 'Pehle Bhi Main',
    artist: 'Vishal Mishra & Raj Shekhar',
    album: 'ANIMAL',
    duration: 250,
    coverUrl: 'https://i.ytimg.com/vi/iAIBF2ngbWY/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Haunting & Intense',
    plays: '112,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#E11D48'
  },
  {
    id: 'yt-HrnrqYxYrbk',
    youtubeId: 'HrnrqYxYrbk',
    title: 'Satranga',
    artist: 'Arijit Singh & Shreyas Puranik',
    album: 'ANIMAL',
    duration: 271,
    coverUrl: 'https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Heartfelt Melancholy',
    plays: '95,400,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#8B5CF6'
  },
  {
    id: 'yt-RLzC55ai0eo',
    youtubeId: 'RLzC55ai0eo',
    title: 'Heeriye',
    artist: 'Jasleen Royal & Arijit Singh',
    album: 'Heeriye - Single',
    duration: 194,
    coverUrl: 'https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Acoustic Love',
    plays: '124,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#EC4899'
  },
  {
    id: 'yt-KUpwupYj_tY',
    youtubeId: 'KUpwupYj_tY',
    title: 'Tere Hawaale',
    artist: 'Arijit Singh & Shilpa Rao',
    album: 'Laal Singh Chaddha',
    duration: 346,
    coverUrl: 'https://i.ytimg.com/vi/KUpwupYj_tY/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Pure Devotion',
    plays: '88,000,000',
    license: 'Official Music',
    releaseYear: 2022,
    color: '#06B6D4'
  },
  {
    id: 'yt-AFTIVN8rRbI',
    youtubeId: 'AFTIVN8rRbI',
    title: 'Sajni',
    artist: 'Arijit Singh & Ram Sampath',
    album: 'Laapataa Ladies',
    duration: 170,
    coverUrl: 'https://i.ytimg.com/vi/AFTIVN8rRbI/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Sweet Romance',
    plays: '76,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2024,
    color: '#D97706'
  },
  {
    id: 'yt-Bi7sSC046dk',
    youtubeId: 'Bi7sSC046dk',
    title: 'Chaleya',
    artist: 'Arijit Singh, Shilpa Rao & Anirudh',
    album: 'Jawan',
    duration: 200,
    coverUrl: 'https://i.ytimg.com/vi/Bi7sSC046dk/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Groovy & Upbeat',
    plays: '118,900,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#8B5CF6'
  },
  {
    id: 'yt-bzSTpdcs-EI',
    youtubeId: 'bzSTpdcs-EI',
    title: 'Channa Mereya',
    artist: 'Arijit Singh & Pritam',
    album: 'Ae Dil Hai Mushkil',
    duration: 289,
    coverUrl: 'https://i.ytimg.com/vi/bzSTpdcs-EI/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Timeless Heartbreak',
    plays: '190,100,000',
    license: 'Official Music',
    releaseYear: 2016,
    color: '#EC4899'
  },
  {
    id: 'yt-sK7riqg2mr4',
    youtubeId: 'sK7riqg2mr4',
    title: 'Agar Tum Saath Ho',
    artist: 'Alka Yagnik & Arijit Singh',
    album: 'Tamasha',
    duration: 341,
    coverUrl: 'https://i.ytimg.com/vi/sK7riqg2mr4/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Soulful & Emotional',
    plays: '220,000,000',
    license: 'Official Music',
    releaseYear: 2015,
    color: '#3B82F6'
  },
  {
    id: 'yt-gvyUuxdRdR4',
    youtubeId: 'gvyUuxdRdR4',
    title: 'Raataan Lambiyan',
    artist: 'Jubin Nautiyal & Asees Kaur',
    album: 'Shershaah',
    duration: 230,
    coverUrl: 'https://i.ytimg.com/vi/gvyUuxdRdR4/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Gentle Love',
    plays: '146,500,000',
    license: 'Official Music',
    releaseYear: 2021,
    color: '#06B6D4'
  },
  {
    id: 'yt-F5S6ALIxyik',
    youtubeId: 'F5S6ALIxyik',
    title: 'Tu Hai Kahan',
    artist: 'AUR (Ahad, Usama, Raffey)',
    album: 'Tu Hai Kahan',
    duration: 263,
    coverUrl: 'https://i.ytimg.com/vi/F5S6ALIxyik/hqdefault.jpg',
    source: 'youtube',
    genre: 'Bollywood',
    mood: 'Soulful & Viral',
    plays: '98,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#10B981'
  },

  // Today's Top Punjabi Hits
  {
    id: 'yt-LK7-_dgAVQE',
    youtubeId: 'LK7-_dgAVQE',
    title: 'Tauba Tauba',
    artist: 'Karan Aujla',
    album: 'Bad Newz',
    duration: 208,
    coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Party & Dance',
    plays: '135,900,100',
    license: 'Official Music',
    featured: true,
    releaseYear: 2024,
    color: '#EC4899'
  },
  {
    id: 'yt-4DfVxVeqk2o',
    youtubeId: '4DfVxVeqk2o',
    title: '52 Bars',
    artist: 'Karan Aujla',
    album: 'Four Me EP',
    duration: 204,
    coverUrl: 'https://i.ytimg.com/vi/4DfVxVeqk2o/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'High Energy & Swagger',
    plays: '74,890,200',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#E11D48'
  },
  {
    id: 'yt-cWMxCE2HTag',
    youtubeId: 'cWMxCE2HTag',
    title: 'Softly',
    artist: 'Karan Aujla & Ikky',
    album: 'Making Memories',
    duration: 156,
    coverUrl: 'https://i.ytimg.com/vi/cWMxCE2HTag/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Groove & Chill',
    plays: '88,120,400',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#8B5CF6'
  },
  {
    id: 'yt-pXRviuL6vMY',
    youtubeId: 'pXRviuL6vMY',
    title: 'With You',
    artist: 'AP Dhillon',
    album: 'With You - Single',
    duration: 154,
    coverUrl: 'https://i.ytimg.com/vi/pXRviuL6vMY/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Romantic & Cozy',
    plays: '62,400,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2023,
    color: '#06B6D4'
  },
  {
    id: 'yt-vsWxs1tuwDk',
    youtubeId: 'vsWxs1tuwDk',
    title: 'Winning Speech',
    artist: 'Karan Aujla & Mxrci',
    album: 'Street Dreams',
    duration: 218,
    coverUrl: 'https://i.ytimg.com/vi/vsWxs1tuwDk/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Swagger & Triumph',
    plays: '54,000,000',
    license: 'Official Music',
    releaseYear: 2024,
    color: '#F43F5E'
  },
  {
    id: 'yt-VNs_cCtdbPc',
    youtubeId: 'VNs_cCtdbPc',
    title: 'Brown Munde',
    artist: 'AP Dhillon, Gurinder Gill & Shinda Kahlon',
    album: 'Not by Chance',
    duration: 266,
    coverUrl: 'https://i.ytimg.com/vi/VNs_cCtdbPc/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Anthem & Energy',
    plays: '112,000,000',
    license: 'Official Music',
    releaseYear: 2020,
    color: '#D97706'
  },
  {
    id: 'yt-mH_LFkWxpI0',
    youtubeId: 'mH_LFkWxpI0',
    title: 'Lover',
    artist: 'Diljit Dosanjh',
    album: 'MoonChild Era',
    duration: 198,
    coverUrl: 'https://i.ytimg.com/vi/mH_LFkWxpI0/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Pop Romance',
    plays: '92,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2021,
    color: '#EC4899'
  },
  {
    id: 'yt-cl0a3i2wFcc',
    youtubeId: 'cl0a3i2wFcc',
    title: 'G.O.A.T.',
    artist: 'Diljit Dosanjh',
    album: 'G.O.A.T.',
    duration: 224,
    coverUrl: 'https://i.ytimg.com/vi/cl0a3i2wFcc/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Superstar Anthem',
    plays: '138,000,000',
    license: 'Official Music',
    releaseYear: 2020,
    color: '#E11D48'
  },
  {
    id: 'yt-3u6lLWGjFLY',
    youtubeId: '3u6lLWGjFLY',
    title: 'Naina',
    artist: 'Diljit Dosanjh & Badshah',
    album: 'Crew',
    duration: 180,
    coverUrl: 'https://i.ytimg.com/vi/3u6lLWGjFLY/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Groovy Club',
    plays: '81,000,000',
    license: 'Official Music',
    releaseYear: 2024,
    color: '#8B5CF6'
  },
  {
    id: 'yt-0pWsCiBvLOk',
    youtubeId: '0pWsCiBvLOk',
    title: 'One Love',
    artist: 'Shubh',
    album: 'Leo',
    duration: 159,
    coverUrl: 'https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Vibe & Flow',
    plays: '77,000,000',
    license: 'Official Music',
    releaseYear: 2023,
    color: '#06B6D4'
  },
  {
    id: 'yt-4tywp83zkmk',
    youtubeId: '4tywp83zkmk',
    title: 'Cheques',
    artist: 'Shubh',
    album: 'Still Rollin',
    duration: 183,
    coverUrl: 'https://i.ytimg.com/vi/4tywp83zkmk/hqdefault.jpg',
    source: 'youtube',
    genre: 'Punjabi',
    mood: 'Swagger & Bass',
    plays: '115,000,000',
    license: 'Official Music',
    releaseYear: 2023,
    color: '#F59E0B'
  },

  // Popular Worldwide Chartbusters
  {
    id: 'yt-34Na4j8AVgA',
    youtubeId: '34Na4j8AVgA',
    title: 'Starboy',
    artist: 'The Weeknd ft. Daft Punk',
    album: 'Starboy',
    duration: 230,
    coverUrl: 'https://i.ytimg.com/vi/34Na4j8AVgA/hqdefault.jpg',
    source: 'youtube',
    genre: 'Pop',
    mood: 'Night Drive',
    plays: '185,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2016,
    color: '#E11D48'
  },
  {
    id: 'yt-4NRXx6U8ABQ',
    youtubeId: '4NRXx6U8ABQ',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 200,
    coverUrl: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
    source: 'youtube',
    genre: 'Pop',
    mood: 'Retro Energy',
    plays: '210,000,000',
    license: 'Official Music',
    featured: true,
    releaseYear: 2020,
    color: '#EC4899'
  }
];

export const GENRES = [
  {
    id: 'bollywood',
    name: 'Top Hindi Songs',
    description: 'India\'s biggest Bollywood soundtracks, melodies & charts',
    color: 'from-amber-600 to-red-950',
    gradient: 'linear-gradient(135deg, #B45309 0%, #1C1917 100%)',
    coverUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
    trackCount: 12
  },
  {
    id: 'punjabi',
    name: 'Top Punjabi Hits',
    description: 'Chart-topping bass, rap & hooks from Karan Aujla, Diljit & AP',
    color: 'from-rose-600 to-neutral-950',
    gradient: 'linear-gradient(135deg, #BE123C 0%, #171717 100%)',
    coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
    trackCount: 11
  },
  {
    id: 'romance',
    name: 'Hindi Romance',
    description: 'Soulful ballads, acoustic warmth & timeless melodies',
    color: 'from-pink-600 to-neutral-950',
    gradient: 'linear-gradient(135deg, #DB2777 0%, #181818 100%)',
    coverUrl: 'https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg',
    trackCount: 8
  },
  {
    id: 'viral',
    name: 'Viral Hits India',
    description: 'Trending tracks exploding on reels and charts across India',
    color: 'from-cyan-600 to-neutral-950',
    gradient: 'linear-gradient(135deg, #0891B2 0%, #121212 100%)',
    coverUrl: 'https://i.ytimg.com/vi/F5S6ALIxyik/hqdefault.jpg',
    trackCount: 8
  }
];

export const FEATURED_MIXES = [
  {
    id: 'top-50-india',
    title: 'Top 50 - India',
    description: 'Your daily update of the most played Hindi and Indian tracks right now.',
    coverUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
    trackIds: ['yt-BddP6PYo2gs', 'yt-ElZfdU54Cp8', 'yt-iAIBF2ngbWY', 'yt-LK7-_dgAVQE', 'yt-RLzC55ai0eo', 'yt-Bi7sSC046dk'],
    followers: '2,480,000',
    accentColor: '#1DB954'
  },
  {
    id: 'hot-hits-hindi',
    title: 'Hot Hits Hindi',
    description: 'Catchiest Bollywood film soundtracks and Hindi pop chartbusters.',
    coverUrl: 'https://i.ytimg.com/vi/iAIBF2ngbWY/hqdefault.jpg',
    trackIds: ['yt-AFTIVN8rRbI', 'yt-HrnrqYxYrbk', 'yt-F5S6ALIxyik', 'yt-KUpwupYj_tY', 'yt-gvyUuxdRdR4'],
    followers: '1,890,000',
    accentColor: '#E11D48'
  },
  {
    id: 'punjabi-101',
    title: "Today's Top Punjabi Hits",
    description: 'Heavy 808s, chartbuster rap, and anthem hooks from Karan Aujla, Diljit & AP.',
    coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
    trackIds: ['yt-LK7-_dgAVQE', 'yt-4DfVxVeqk2o', 'yt-cWMxCE2HTag', 'yt-pXRviuL6vMY', 'yt-mH_LFkWxpI0', 'yt-4tywp83zkmk'],
    followers: '1,420,000',
    accentColor: '#8B5CF6'
  },
  {
    id: 'bollywood-butter',
    title: 'Bollywood Butter',
    description: 'The ultimate Hindi cinema playlist: blockbuster romance and timeless melodies.',
    coverUrl: 'https://i.ytimg.com/vi/AFTIVN8rRbI/hqdefault.jpg',
    trackIds: ['yt-bzSTpdcs-EI', 'yt-sK7riqg2mr4', 'yt-BddP6PYo2gs', 'yt-ElZfdU54Cp8', 'yt-Bi7sSC046dk'],
    followers: '960,000',
    accentColor: '#F59E0B'
  },
  {
    id: 'soulful-romance',
    title: 'Soulful Hindi Romance',
    description: 'Acoustic warmth, delicate strings, and unforgettable love songs.',
    coverUrl: 'https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg',
    trackIds: ['yt-RLzC55ai0eo', 'yt-KUpwupYj_tY', 'yt-AFTIVN8rRbI', 'yt-gvyUuxdRdR4', 'yt-ElZfdU54Cp8'],
    followers: '1,120,000',
    accentColor: '#EC4899'
  },
  {
    id: 'india-viral',
    title: 'Viral Hits India',
    description: 'The hottest tracks trending across social feeds and reels in India.',
    coverUrl: 'https://i.ytimg.com/vi/F5S6ALIxyik/hqdefault.jpg',
    trackIds: ['yt-F5S6ALIxyik', 'yt-LK7-_dgAVQE', 'yt-0pWsCiBvLOk', 'yt-pXRviuL6vMY', 'yt-iAIBF2ngbWY'],
    followers: '780,000',
    accentColor: '#06B6D4'
  }
];

/**
 * Format duration helper (seconds -> m:ss)
 */
export const formatDuration = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};
