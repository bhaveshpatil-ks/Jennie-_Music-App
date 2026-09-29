import { MOCK_TRACKS, getTrackCoverUrl } from './mockTracks';

/**
 * Curated database of top Indian & international artists, albums, and discographies.
 * Follows Spotify's metadata structure:
 * - Verified status, monthly listeners, bio, banner & avatar imagery
 * - Discography categorized into Albums, Singles, and EPs
 * - Top 10 Popular tracks
 * - Related Artists ("Fans Also Like")
 */

export const ARTISTS_DATA = [
  {
    id: 'arijit_singh',
    name: 'Arijit Singh',
    verified: true,
    monthlyListeners: '38,920,410',
    followers: '42,100,000',
    bio: 'Arijit Singh is India’s foremost playback icon, widely considered one of the most versatile and celebrated vocalists of modern Hindi cinema. With a record number of Filmfare Awards and global chart-toppers, his voice defines romantic and soulful Bollywood melodies.',
    avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#A16207',
    genres: ['Bollywood Romantic', 'Soulful', 'Acoustic', 'Sufi'],
    topTrackIds: [
      'yt-BddP6PYo2gs', // Kesariya
      'yt-ElZfdU54Cp8', // Apna Bana Le
      'yt-RLzC55ai0eo', // Satranga
      'yt-AFTIVN8rRbI', // Heeriye
      'yt-gvyUuxdRdR4', // O Maahi
      'yt-sK7riqg2mr4', // Chaleya
      'yt-KUpwupYj_tY', // Sajni
      'yt-Bi7sSC046dk', // Tum Se Hi
      'yt-cWMxCE2HTag', // Dil Sambhal Ja Zara
      'yt-bzSTpdcs-EI'  // Shayad
    ],
    albums: [
      {
        id: 'album-brahmastra',
        title: 'Brahmastra (Original Motion Picture Soundtrack)',
        type: 'Album',
        releaseYear: 2022,
        coverUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
        trackIds: ['yt-BddP6PYo2gs', 'yt-RLzC55ai0eo', 'yt-AFTIVN8rRbI'],
        totalTracks: 6,
        genre: 'Bollywood'
      },
      {
        id: 'album-animal',
        title: 'ANIMAL (Soundtrack)',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg',
        trackIds: ['yt-RLzC55ai0eo', 'yt-iAIBF2ngbWY'],
        totalTracks: 8,
        genre: 'Bollywood Romantic'
      },
      {
        id: 'album-bhediya',
        title: 'Bhediya (Soundtrack)',
        type: 'Album',
        releaseYear: 2022,
        coverUrl: 'https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg',
        trackIds: ['yt-ElZfdU54Cp8'],
        totalTracks: 5,
        genre: 'Bollywood'
      },
      {
        id: 'album-jawan',
        title: 'Jawan (Original Motion Picture Soundtrack)',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/sK7riqg2mr4/hqdefault.jpg',
        trackIds: ['yt-sK7riqg2mr4'],
        totalTracks: 7,
        genre: 'Bollywood Action / Pop'
      }
    ],
    singles: [
      {
        id: 'single-heeriye',
        title: 'Heeriye',
        type: 'Single',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/AFTIVN8rRbI/hqdefault.jpg',
        trackIds: ['yt-AFTIVN8rRbI'],
        totalTracks: 1,
        genre: 'Indie Pop'
      },
      {
        id: 'single-sajni',
        title: 'Sajni (Laapataa Ladies)',
        type: 'Single',
        releaseYear: 2024,
        coverUrl: 'https://i.ytimg.com/vi/KUpwupYj_tY/hqdefault.jpg',
        trackIds: ['yt-KUpwupYj_tY'],
        totalTracks: 1,
        genre: 'Soulful'
      }
    ],
    relatedArtistIds: ['pritam', 'vishal_mishra', 'jubin_nautiyal', 'shreya_ghoshal', 'diljit_dosanjh']
  },

  {
    id: 'karan_aujla',
    name: 'Karan Aujla',
    verified: true,
    monthlyListeners: '14,350,190',
    followers: '8,420,000',
    bio: 'Karan Aujla (Geetan Di Machine) is an internationally acclaimed Punjabi singer, rapper, and lyricist from Ghurala, Punjab. Known for his witty penmanship, hard-hitting 808 beats, and global hits like Tauba Tauba and 52 Bars.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#DC2626',
    genres: ['Punjabi Pop', 'Hip-Hop', 'UK Drill', 'Bhangra'],
    topTrackIds: [
      'yt-LK7-_dgAVQE', // Tauba Tauba
      'yt-4DfVxVeqk2o', // 52 Bars
      'yt-0pWsCiBvLOk', // Softly
      'yt-pXRviuL6vMY', // Winning Speech
      'yt-mH_LFkWxpI0', // White Brown Black
      'yt-4tywp83zkmk', // Antidote
      'yt-F5S6ALIxyik'  // Admirin' You
    ],
    albums: [
      {
        id: 'album-making-memories',
        title: 'Making Memories',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg',
        trackIds: ['yt-0pWsCiBvLOk', 'yt-F5S6ALIxyik', 'yt-4tywp83zkmk'],
        totalTracks: 9,
        genre: 'Punjabi Pop'
      },
      {
        id: 'album-street-dreams',
        title: 'Street Dreams (with Divine)',
        type: 'Album',
        releaseYear: 2024,
        coverUrl: 'https://i.ytimg.com/vi/pXRviuL6vMY/hqdefault.jpg',
        trackIds: ['yt-pXRviuL6vMY'],
        totalTracks: 7,
        genre: 'Desi Hip-Hop'
      },
      {
        id: 'album-four-you',
        title: 'Four You EP',
        type: 'EP',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/4DfVxVeqk2o/hqdefault.jpg',
        trackIds: ['yt-4DfVxVeqk2o'],
        totalTracks: 4,
        genre: 'Punjabi Drill'
      }
    ],
    singles: [
      {
        id: 'single-tauba-tauba',
        title: 'Tauba Tauba (Bad Newz)',
        type: 'Single',
        releaseYear: 2024,
        coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
        trackIds: ['yt-LK7-_dgAVQE'],
        totalTracks: 1,
        genre: 'Punjabi Pop / Dance'
      },
      {
        id: 'single-winning-speech',
        title: 'Winning Speech',
        type: 'Single',
        releaseYear: 2024,
        coverUrl: 'https://i.ytimg.com/vi/pXRviuL6vMY/hqdefault.jpg',
        trackIds: ['yt-pXRviuL6vMY'],
        totalTracks: 1,
        genre: 'Desi Hip-Hop'
      }
    ],
    relatedArtistIds: ['diljit_dosanjh', 'ap_dhillon', 'shubh', 'sidhu_moose_wala', 'badshah']
  },

  {
    id: 'diljit_dosanjh',
    name: 'Diljit Dosanjh',
    verified: true,
    monthlyListeners: '18,890,320',
    followers: '15,600,000',
    bio: 'Diljit Dosanjh is a global superstar, singer, actor, and live entertainer. The first Punjabi artist to perform at Coachella, Diljit blends traditional Punjabi folk with futuristic synth-pop, R&B, and dance beats.',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#7C3AED',
    genres: ['Punjabi Pop', 'Urban Folk', 'Bhangra', 'Dance'],
    topTrackIds: [
      'yt-001_naina',
      'yt-LK7-_dgAVQE',
      'yt-4DfVxVeqk2o',
      'yt-pXRviuL6vMY'
    ],
    albums: [
      {
        id: 'album-ghost',
        title: 'Ghost',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
        trackIds: ['yt-LK7-_dgAVQE'],
        totalTracks: 22,
        genre: 'Punjabi Pop'
      },
      {
        id: 'album-goat',
        title: 'G.O.A.T.',
        type: 'Album',
        releaseYear: 2020,
        coverUrl: 'https://i.ytimg.com/vi/4DfVxVeqk2o/hqdefault.jpg',
        trackIds: ['yt-4DfVxVeqk2o'],
        totalTracks: 16,
        genre: 'Bhangra'
      },
      {
        id: 'album-moonchild',
        title: 'MoonChild Era',
        type: 'Album',
        releaseYear: 2021,
        coverUrl: 'https://i.ytimg.com/vi/0pWsCiBvLOk/hqdefault.jpg',
        trackIds: ['yt-0pWsCiBvLOk'],
        totalTracks: 9,
        genre: 'Synth-Pop'
      }
    ],
    singles: [
      {
        id: 'single-naina',
        title: 'Naina (Crew)',
        type: 'Single',
        releaseYear: 2024,
        coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
        trackIds: ['yt-LK7-_dgAVQE'],
        totalTracks: 1,
        genre: 'Bollywood / Punjabi'
      }
    ],
    relatedArtistIds: ['karan_aujla', 'ap_dhillon', 'badshah', 'sidhu_moose_wala']
  },

  {
    id: 'ap_dhillon',
    name: 'AP Dhillon',
    verified: true,
    monthlyListeners: '9,740,210',
    followers: '6,200,000',
    bio: 'Amritpal Singh Dhillon, known professionally as AP Dhillon, is an Indo-Canadian singer, songwriter, and record producer who redefined brown diaspora music with seamless blends of synthwave, trap, R&B, and Punjabi hooks.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#2563EB',
    genres: ['Punjabi Synthwave', 'R&B', 'Trap', 'Indie'],
    topTrackIds: [
      'yt-cWMxCE2HTag', // With You
      'yt-LK7-_dgAVQE',
      'yt-0pWsCiBvLOk'
    ],
    albums: [
      {
        id: 'album-two-hearts',
        title: 'Two Hearts Never Break the Same',
        type: 'EP',
        releaseYear: 2022,
        coverUrl: 'https://i.ytimg.com/vi/cWMxCE2HTag/hqdefault.jpg',
        trackIds: ['yt-cWMxCE2HTag'],
        totalTracks: 6,
        genre: 'Synth-Pop'
      },
      {
        id: 'album-not-by-chance',
        title: 'Not By Chance',
        type: 'Album',
        releaseYear: 2020,
        coverUrl: 'https://i.ytimg.com/vi/4DfVxVeqk2o/hqdefault.jpg',
        trackIds: ['yt-4DfVxVeqk2o'],
        totalTracks: 7,
        genre: 'Trap / R&B'
      }
    ],
    singles: [
      {
        id: 'single-with-you',
        title: 'With You',
        type: 'Single',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/cWMxCE2HTag/hqdefault.jpg',
        trackIds: ['yt-cWMxCE2HTag'],
        totalTracks: 1,
        genre: 'Acoustic Pop'
      }
    ],
    relatedArtistIds: ['karan_aujla', 'diljit_dosanjh', 'shubh', 'the_weeknd']
  },

  {
    id: 'the_weeknd',
    name: 'The Weeknd',
    verified: true,
    monthlyListeners: '114,820,950',
    followers: '88,000,000',
    bio: 'Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer known for his sonic versatility, dark lyricism, and cinematic 80s synth-pop aesthetics.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#E11D48',
    genres: ['R&B', 'Synth-Pop', 'Alternative Pop', 'Electronic'],
    topTrackIds: [
      'yt-34Na4j8AVgA', // Starboy
      'yt-4NRXx6U8ABQ', // Blinding Lights
      'yt-cWMxCE2HTag',
      'yt-BddP6PYo2gs'
    ],
    albums: [
      {
        id: 'album-starboy',
        title: 'Starboy',
        type: 'Album',
        releaseYear: 2016,
        coverUrl: 'https://i.ytimg.com/vi/34Na4j8AVgA/hqdefault.jpg',
        trackIds: ['yt-34Na4j8AVgA'],
        totalTracks: 18,
        genre: 'Synth-Pop / R&B'
      },
      {
        id: 'album-after-hours',
        title: 'After Hours',
        type: 'Album',
        releaseYear: 2020,
        coverUrl: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
        trackIds: ['yt-4NRXx6U8ABQ'],
        totalTracks: 14,
        genre: 'Synthwave'
      }
    ],
    singles: [
      {
        id: 'single-blinding-lights',
        title: 'Blinding Lights',
        type: 'Single',
        releaseYear: 2019,
        coverUrl: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
        trackIds: ['yt-4NRXx6U8ABQ'],
        totalTracks: 1,
        genre: 'Synthwave'
      }
    ],
    relatedArtistIds: ['ap_dhillon', 'karan_aujla', 'arijit_singh']
  },

  {
    id: 'vishal_mishra',
    name: 'Vishal Mishra',
    verified: true,
    monthlyListeners: '16,210,000',
    followers: '5,800,000',
    bio: 'Vishal Mishra is an Indian music composer and singer known for intensely emotional romantic ballads, soaring vocals, and chart-topping soundtracks for films like ANIMAL and Kabir Singh.',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#059669',
    genres: ['Bollywood Romantic', 'Sufi', 'Acoustic'],
    topTrackIds: [
      'yt-iAIBF2ngbWY', // Pehle Bhi Main
      'yt-RLzC55ai0eo',
      'yt-BddP6PYo2gs'
    ],
    albums: [
      {
        id: 'album-animal-vishal',
        title: 'ANIMAL (Original Soundtrack)',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/iAIBF2ngbWY/hqdefault.jpg',
        trackIds: ['yt-iAIBF2ngbWY', 'yt-RLzC55ai0eo'],
        totalTracks: 8,
        genre: 'Bollywood Romantic'
      }
    ],
    singles: [
      {
        id: 'single-pehle-bhi-main',
        title: 'Pehle Bhi Main',
        type: 'Single',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/iAIBF2ngbWY/hqdefault.jpg',
        trackIds: ['yt-iAIBF2ngbWY'],
        totalTracks: 1,
        genre: 'Bollywood'
      }
    ],
    relatedArtistIds: ['arijit_singh', 'pritam', 'jubin_nautiyal']
  },

  {
    id: 'shubh',
    name: 'Shubh',
    verified: true,
    monthlyListeners: '8,420,000',
    followers: '4,100,000',
    bio: 'Shubneet Singh, popularly known as Shubh, is an Indian rapper and singer-songwriter based in Canada. Known for his viral hits No Love, Elevated, Cheques, and Baller.',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#D97706',
    genres: ['Desi Hip-Hop', 'Trap', 'Punjabi Rap'],
    topTrackIds: [
      'yt-4DfVxVeqk2o',
      'yt-LK7-_dgAVQE',
      'yt-pXRviuL6vMY'
    ],
    albums: [
      {
        id: 'album-still-rollin',
        title: 'Still Rollin',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/4DfVxVeqk2o/hqdefault.jpg',
        trackIds: ['yt-4DfVxVeqk2o'],
        totalTracks: 7,
        genre: 'Punjabi Hip-Hop'
      },
      {
        id: 'album-leo',
        title: 'Leo',
        type: 'Album',
        releaseYear: 2024,
        coverUrl: 'https://i.ytimg.com/vi/pXRviuL6vMY/hqdefault.jpg',
        trackIds: ['yt-pXRviuL6vMY'],
        totalTracks: 8,
        genre: 'Desi Rap'
      }
    ],
    singles: [],
    relatedArtistIds: ['karan_aujla', 'ap_dhillon', 'diljit_dosanjh', 'sidhu_moose_wala']
  },

  {
    id: 'pritam',
    name: 'Pritam',
    verified: true,
    monthlyListeners: '29,480,000',
    followers: '19,200,000',
    bio: 'Pritam Chakraborty is India’s legendary music composer and record producer who has composed iconic soundtracks for over 125 Bollywood films, spanning romantic anthems, rock ballads, and dance hits.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#4F46E5',
    genres: ['Bollywood', 'Romantic', 'Pop Rock', 'Sufi'],
    topTrackIds: [
      'yt-BddP6PYo2gs',
      'yt-Bi7sSC046dk',
      'yt-RLzC55ai0eo',
      'yt-sK7riqg2mr4'
    ],
    albums: [
      {
        id: 'album-brahmastra-pritam',
        title: 'Brahmastra',
        type: 'Album',
        releaseYear: 2022,
        coverUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
        trackIds: ['yt-BddP6PYo2gs'],
        totalTracks: 6,
        genre: 'Bollywood'
      },
      {
        id: 'album-jawan-pritam',
        title: 'Jawan',
        type: 'Album',
        releaseYear: 2023,
        coverUrl: 'https://i.ytimg.com/vi/sK7riqg2mr4/hqdefault.jpg',
        trackIds: ['yt-sK7riqg2mr4'],
        totalTracks: 7,
        genre: 'Action'
      }
    ],
    singles: [],
    relatedArtistIds: ['arijit_singh', 'vishal_mishra', 'shreya_ghoshal']
  }
];

/**
 * Normalizes an artist name for lookup (e.g. "Arijit Singh & Pritam" -> ["arijit singh", "pritam"])
 */
export const normalizeArtistKey = (name = '') => {
  return name
    .toLowerCase()
    .replace(/[&,]/g, ' ')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
};

/**
 * Finds or synthesizes an Artist Profile object
 * @param {string} artistIdOrName 
 * @param {Array} additionalTracks - Optional live search tracks by this artist
 * @returns {Object} Comprehensive Spotify-like artist profile
 */
export const getArtistProfile = (artistIdOrName, additionalTracks = []) => {
  if (!artistIdOrName) return null;

  const raw = String(artistIdOrName).trim();
  const lower = raw.toLowerCase();
  const cleanKey = normalizeArtistKey(raw);

  // 1. Direct match in curated database
  const found = ARTISTS_DATA.find((a) => {
    return (
      a.id.toLowerCase() === lower ||
      a.name.toLowerCase() === lower ||
      lower.includes(a.name.toLowerCase()) ||
      a.name.toLowerCase().includes(lower)
    );
  });

  // Collect all tracks for this artist across mock catalog and additional live tracks
  const combinedTracks = [
    ...additionalTracks,
    ...MOCK_TRACKS
  ];

  const artistTracks = combinedTracks.filter((t) => {
    if (!t || !t.artist) return false;
    const tArtist = t.artist.toLowerCase();
    const searchTarget = found ? found.name.toLowerCase() : lower;
    return tArtist.includes(searchTarget) || searchTarget.includes(tArtist);
  });

  // Deduplicate tracks by id or title
  const trackMap = new Map();
  artistTracks.forEach((t) => {
    const key = t.id || t.title;
    if (!trackMap.has(key)) {
      trackMap.set(key, t);
    }
  });
  const uniqueTracks = Array.from(trackMap.values());

  if (found) {
    // Resolve full track objects for top tracks
    const resolvedTopTracks = (found.topTrackIds || [])
      .map((id) => MOCK_TRACKS.find((t) => t.id === id))
      .filter(Boolean);

    // Merge in any other tracks discovered
    const finalTopTracks = [
      ...resolvedTopTracks,
      ...uniqueTracks.filter((ut) => !resolvedTopTracks.some((rt) => rt.id === ut.id))
    ];

    // Resolve albums with tracks
    const resolvedAlbums = (found.albums || []).map((alb) => {
      const albTracks = (alb.trackIds || [])
        .map((tid) => MOCK_TRACKS.find((t) => t.id === tid))
        .filter(Boolean);
      return {
        ...alb,
        artist: found.name,
        tracks: albTracks.length > 0 ? albTracks : uniqueTracks.slice(0, 3)
      };
    });

    // Resolve related artists
    const relatedArtists = (found.relatedArtistIds || [])
      .map((rid) => ARTISTS_DATA.find((a) => a.id === rid))
      .filter(Boolean);

    return {
      ...found,
      topTracks: finalTopTracks.length > 0 ? finalTopTracks : MOCK_TRACKS.slice(0, 5),
      albums: resolvedAlbums,
      relatedArtists: relatedArtists.length > 0 ? relatedArtists : ARTISTS_DATA.filter((a) => a.id !== found.id).slice(0, 4)
    };
  }

  // 2. Dynamic profile synthesis for any searched artist (from YouTube or web search)
  const displayName = raw.split('&')[0].split(',')[0].trim();
  const coverTrack = uniqueTracks[0] || MOCK_TRACKS[0];
  const dynamicAvatar = getTrackCoverUrl(coverTrack);

  // Group tracks by album
  const albumGroups = {};
  uniqueTracks.forEach((t) => {
    const albName = t.album || `${displayName} Collection`;
    if (!albumGroups[albName]) {
      albumGroups[albName] = [];
    }
    albumGroups[albName].push(t);
  });

  const dynamicAlbums = Object.entries(albumGroups).map(([albName, trks], idx) => ({
    id: `dyn-album-${idx}-${albName.replace(/\s+/g, '-').toLowerCase()}`,
    title: albName,
    type: trks.length > 2 ? 'Album' : 'Single',
    artist: displayName,
    releaseYear: trks[0]?.releaseYear || 2024,
    coverUrl: getTrackCoverUrl(trks[0]),
    tracks: trks,
    totalTracks: trks.length,
    genre: trks[0]?.genre || 'Music'
  }));

  return {
    id: `artist-${cleanKey.replace(/\s+/g, '_')}`,
    name: displayName,
    verified: true,
    monthlyListeners: `${(Math.floor(Math.random() * 8) + 3)},${Math.floor(Math.random() * 899 + 100)},${Math.floor(Math.random() * 899 + 100)}`,
    followers: `${(Math.floor(Math.random() * 4) + 1)},${Math.floor(Math.random() * 899 + 100)},000`,
    bio: `${displayName} is an acclaimed musical artist featured on Jennie Music, delivering trending releases, chart-topping soundtracks, and stream hits.`,
    avatarUrl: dynamicAvatar,
    bannerUrl: dynamicAvatar,
    headerColor: '#1E293B',
    genres: [coverTrack?.genre || 'Popular', 'Trending'],
    topTracks: uniqueTracks.length > 0 ? uniqueTracks : MOCK_TRACKS.slice(0, 6),
    albums: dynamicAlbums.length > 0 ? dynamicAlbums : [
      {
        id: `dyn-album-1`,
        title: `${displayName} Essentials`,
        type: 'Album',
        artist: displayName,
        releaseYear: 2024,
        coverUrl: dynamicAvatar,
        tracks: uniqueTracks.slice(0, 5),
        totalTracks: uniqueTracks.length || 5,
        genre: 'Popular'
      }
    ],
    singles: [],
    relatedArtists: ARTISTS_DATA.slice(0, 4)
  };
};

/**
 * Resolves an Album object from an album ID, title, or artist catalog
 */
export const getAlbumData = (albumIdOrTitle, artistName = '') => {
  if (!albumIdOrTitle) return null;
  const raw = String(albumIdOrTitle).trim();
  const lower = raw.toLowerCase();

  // 1. Search through all curated artists' albums & singles
  for (const artist of ARTISTS_DATA) {
    const allReleases = [...(artist.albums || []), ...(artist.singles || [])];
    for (const alb of allReleases) {
      if (
        alb.id.toLowerCase() === lower ||
        alb.title.toLowerCase() === lower ||
        alb.title.toLowerCase().includes(lower) ||
        lower.includes(alb.title.toLowerCase())
      ) {
        const resolvedTracks = (alb.trackIds || [])
          .map((tid) => MOCK_TRACKS.find((t) => t.id === tid))
          .filter(Boolean);

        return {
          ...alb,
          artist: artist.name,
          artistId: artist.id,
          artistAvatar: artist.avatarUrl,
          tracks: resolvedTracks.length > 0 ? resolvedTracks : MOCK_TRACKS.slice(0, 4),
          moreByArtist: allReleases.filter((r) => r.id !== alb.id)
        };
      }
    }
  }

  // 2. Synthesize from MOCK_TRACKS matching album name
  const matchingTracks = MOCK_TRACKS.filter(
    (t) => t.album && (t.album.toLowerCase().includes(lower) || lower.includes(t.album.toLowerCase()))
  );

  if (matchingTracks.length > 0) {
    const first = matchingTracks[0];
    const artist = ARTISTS_DATA.find((a) => a.name.toLowerCase() === first.artist.toLowerCase()) || {
      id: `artist-${first.artist_id || 'unknown'}`,
      name: first.artist,
      avatarUrl: getTrackCoverUrl(first)
    };

    return {
      id: `album-${raw.replace(/\s+/g, '-').toLowerCase()}`,
      title: first.album || raw,
      type: matchingTracks.length > 1 ? 'Album' : 'Single',
      artist: artist.name,
      artistId: artist.id,
      artistAvatar: artist.avatarUrl,
      coverUrl: getTrackCoverUrl(first),
      releaseYear: first.releaseYear || 2023,
      tracks: matchingTracks,
      totalTracks: matchingTracks.length,
      genre: first.genre || 'Hindi Pop',
      moreByArtist: []
    };
  }

  // 3. Fallback generic album
  return {
    id: `album-${raw.replace(/\s+/g, '-').toLowerCase()}`,
    title: raw,
    type: 'Album',
    artist: artistName || 'Featured Artists',
    artistId: 'featured_artists',
    artistAvatar: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
    coverUrl: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
    releaseYear: 2024,
    tracks: MOCK_TRACKS.slice(0, 5),
    totalTracks: 5,
    genre: 'Soundtrack',
    moreByArtist: []
  };
};

/**
 * Searches across curated artists and albums
 */
export const searchArtistsAndAlbums = (query = '') => {
  if (!query || typeof query !== 'string') return { artists: [], albums: [] };
  const cleanQ = query.trim().toLowerCase();

  const matchingArtists = ARTISTS_DATA.filter((a) => {
    return (
      a.name.toLowerCase().includes(cleanQ) ||
      a.genres.some((g) => g.toLowerCase().includes(cleanQ))
    );
  });

  const matchingAlbums = [];
  ARTISTS_DATA.forEach((artist) => {
    const releases = [...(artist.albums || []), ...(artist.singles || [])];
    releases.forEach((rel) => {
      if (
        rel.title.toLowerCase().includes(cleanQ) ||
        artist.name.toLowerCase().includes(cleanQ)
      ) {
        if (!matchingAlbums.some((ma) => ma.id === rel.id)) {
          matchingAlbums.push({
            ...rel,
            artist: artist.name,
            artistId: artist.id
          });
        }
      }
    });
  });

  return {
    artists: matchingArtists,
    albums: matchingAlbums
  };
};
