import { MOCK_TRACKS, getTrackCoverUrl } from './mockTracks';

/**
 * Curated database of top Indian & international artists, albums, and discographies.
 * Follows Spotify's metadata structure:
 * - Verified status, monthly listeners, bio, banner & avatar imagery
 * - Aliases for typo-tolerant fuzzy matching (e.g. "arjit singh" -> "Arijit Singh")
 * - Discography categorized into Albums, Singles, and EPs
 * - Top Popular tracks
 * - Related Artists ("Fans Also Like")
 */

export const ARTISTS_DATA = [
  {
    id: 'arijit_singh',
    name: 'Arijit Singh',
    aliases: [
      'arjit singh', 'arjit', 'arijit', 'arijeet', 'arijit singh', 
      'arijitsingh', 'arjeet', 'arjeet singh', 'arijitsing'
    ],
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
    aliases: [
      'karan aujla', 'karan', 'aujla', 'karanaujla', 
      'geetan di machine', 'jaskaran singh aujla'
    ],
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
    aliases: [
      'diljit dosanjh', 'diljit', 'diljeet', 'diljeet dosanjh', 
      'dosanjh', 'diljitdosanjh', 'diljit doshanjh'
    ],
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
    aliases: [
      'ap dhillon', 'ap', 'dhillon', 'apdhillon', 
      'amritpal', 'amritpal singh dhillon'
    ],
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
    id: 'sidhu_moose_wala',
    name: 'Sidhu Moose Wala',
    aliases: [
      'sidhu', 'moosewala', 'moose wala', 'sidhu moosewala', 
      'sidhu moose wala', 'shubhdeep singh sidhu', '295'
    ],
    verified: true,
    monthlyListeners: '12,890,000',
    followers: '16,400,000',
    bio: 'Shubhdeep Singh Sidhu, known globally as Sidhu Moose Wala, was an iconic Punjabi singer, rapper, and songwriter whose bold lyricism and powerful anthems conquered charts worldwide.',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#B91C1C',
    genres: ['Punjabi Rap', 'Desi Hip-Hop', 'Folk Rap', 'Gangsta Rap'],
    topTrackIds: ['yt-LK7-_dgAVQE', 'yt-4DfVxVeqk2o'],
    albums: [
      {
        id: 'album-moosetape',
        title: 'Moosetape',
        type: 'Album',
        releaseYear: 2021,
        coverUrl: 'https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg',
        trackIds: ['yt-LK7-_dgAVQE'],
        totalTracks: 32,
        genre: 'Punjabi Hip-Hop'
      }
    ],
    singles: [],
    relatedArtistIds: ['karan_aujla', 'diljit_dosanjh', 'shubh']
  },

  {
    id: 'the_weeknd',
    name: 'The Weeknd',
    aliases: [
      'weeknd', 'the weeknd', 'the weekend', 'weekend', 
      'abel', 'abel tesfaye', 'starboy'
    ],
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
    singles: [],
    relatedArtistIds: ['ap_dhillon', 'karan_aujla', 'arijit_singh']
  },

  {
    id: 'vishal_mishra',
    name: 'Vishal Mishra',
    aliases: ['vishal mishra', 'vishal', 'vishalmishra', 'vishal mishara'],
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
    aliases: ['shubh', 'shubneet', 'shubneet singh', 'still rollin', 'shubh music'],
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
      }
    ],
    singles: [],
    relatedArtistIds: ['karan_aujla', 'ap_dhillon', 'diljit_dosanjh', 'sidhu_moose_wala']
  },

  {
    id: 'pritam',
    name: 'Pritam',
    aliases: ['pritam', 'pritam da', 'pritam chakraborty', 'pritham'],
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
      }
    ],
    singles: [],
    relatedArtistIds: ['arijit_singh', 'vishal_mishra', 'shreya_ghoshal']
  },

  {
    id: 'shreya_ghoshal',
    name: 'Shreya Ghoshal',
    aliases: ['shreya', 'shreya ghoshal', 'shreya ghosal', 'shreyaghoshal'],
    verified: true,
    monthlyListeners: '25,600,000',
    followers: '28,100,000',
    bio: 'Shreya Ghoshal is a legendary Indian singer renowned for her melodic range, classical perfection, and countless cinematic masterpieces in Hindi, Bengali, Tamil, and Telugu cinema.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#EC4899',
    genres: ['Bollywood Classical', 'Romantic', 'Playback'],
    topTrackIds: ['yt-sK7riqg2mr4', 'yt-BddP6PYo2gs'],
    albums: [],
    singles: [],
    relatedArtistIds: ['arijit_singh', 'pritam', 'alka_yagnik']
  },

  {
    id: 'badshah',
    name: 'Badshah',
    aliases: ['badshah', 'badshaah', 'aditya prateek singh sisodia'],
    verified: true,
    monthlyListeners: '17,400,000',
    followers: '14,200,000',
    bio: 'Badshah is an Indian rapper, singer, and music producer known for club anthems, Desi pop bangers, and chartbuster collaborations.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#F59E0B',
    genres: ['Desi Hip-Hop', 'Commercial Pop', 'Club'],
    topTrackIds: ['yt-LK7-_dgAVQE'],
    albums: [],
    singles: [],
    relatedArtistIds: ['karan_aujla', 'diljit_dosanjh']
  },

  {
    id: 'jubin_nautiyal',
    name: 'Jubin Nautiyal',
    aliases: ['jubin', 'jubin nautiyal', 'zubin', 'jubinnautiyal'],
    verified: true,
    monthlyListeners: '21,300,000',
    followers: '18,500,000',
    bio: 'Jubin Nautiyal is an Indian playback singer and performer known for his acoustic touch, soul-stirring love songs, and blockbuster film soundtracks.',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#10B981',
    genres: ['Bollywood Romantic', 'Acoustic', 'Sufi'],
    topTrackIds: ['yt-RLzC55ai0eo'],
    albums: [],
    singles: [],
    relatedArtistIds: ['arijit_singh', 'vishal_mishra']
  },

  {
    id: 'atif_aslam',
    name: 'Atif Aslam',
    aliases: ['atif', 'atif aslam', 'atifaslam'],
    verified: true,
    monthlyListeners: '23,100,000',
    followers: '25,000,000',
    bio: 'Atif Aslam is an iconic South Asian singer and songwriter renowned for his soaring vocal range, emotive rock ballads, and evergreen Bollywood classics.',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80',
    headerColor: '#6366F1',
    genres: ['Sufi Rock', 'Bollywood Romantic', 'Pop'],
    topTrackIds: ['yt-BddP6PYo2gs', 'yt-RLzC55ai0eo'],
    albums: [],
    singles: [],
    relatedArtistIds: ['arijit_singh', 'pritam', 'jubin_nautiyal']
  }
,

  {
    "id": "ar_rahman",
    "name": "A.R. Rahman",
    "aliases": [
      "ar rahman",
      "rahman",
      "a.r. rahman",
      "allah rakha rahman",
      "isai puyal"
    ],
    "verified": true,
    "monthlyListeners": "34,200,000",
    "followers": "28,500,000",
    "bio": "Allah Rakha Rahman is an Indian music director, composer, and music producer known for integrating Indian classical music with electronic music, world music, and traditional orchestral arrangements. Recipient of 2 Academy Awards, 2 Grammy Awards, and a BAFTA.",
    "avatarUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
    "headerColor": "#047857",
    "genres": [
      "World Music",
      "Soundtrack",
      "Sufi",
      "Classical Fusion"
    ],
    "topTrackIds": [
      "yt-BddP6PYo2gs",
      "yt-RLzC55ai0eo"
    ],
    "albums": [
      {
        "id": "album-rockstar",
        "title": "Rockstar (Original Motion Picture Soundtrack)",
        "type": "Album",
        "releaseYear": 2011,
        "coverUrl": "https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg",
        "trackIds": [
          "yt-BddP6PYo2gs"
        ],
        "totalTracks": 14,
        "genre": "Sufi Rock"
      }
    ],
    "singles": [],
    "relatedArtistIds": [
      "pritam",
      "arijit_singh"
    ]
  }
,

  {
    "id": "neha_kakkar",
    "name": "Neha Kakkar",
    "aliases": [
      "neha kakkar",
      "neha",
      "tony kakkar",
      "sonu kakkar"
    ],
    "verified": true,
    "monthlyListeners": "22,400,000",
    "followers": "35,000,000",
    "bio": "Neha Kakkar is an Indian playback singer known for high-energy Bollywood dance party tracks, romantic pop singles, and television appearances.",
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    "headerColor": "#DB2777",
    "genres": [
      "Bollywood Dance",
      "Pop",
      "Party"
    ],
    "topTrackIds": [
      "yt-LK7-_dgAVQE"
    ],
    "albums": [],
    "singles": [],
    "relatedArtistIds": [
      "badshah",
      "jubin_nautiyal"
    ]
  }
];

/**
 * Strips special characters, vowels, and excess spaces for high-tolerance phonetic comparison
 */
const normalizeText = (str = '') => {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
};

/**
 * Checks if a search query matches an artist name or their common aliases/misspellings
 */
export const checkArtistQueryMatch = (query = '', artist) => {
  if (!query || !artist) return false;
  const cleanQ = normalizeText(query);
  const cleanName = normalizeText(artist.name);

  if (cleanName.includes(cleanQ) || cleanQ.includes(cleanName)) return true;

  // Direct word containment (e.g. "singh" or "arijit" in "Arijit Singh")
  const queryTokens = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 3);
  const nameTokens = artist.name.toLowerCase().split(/\s+/);
  if (queryTokens.some((qt) => nameTokens.some((nt) => nt.includes(qt) || qt.includes(nt)))) {
    return true;
  }

  // Check aliases (like 'arjit singh', 'arjit', 'diljeet', 'moosewala')
  if (Array.isArray(artist.aliases)) {
    return artist.aliases.some((alias) => {
      const cleanAlias = normalizeText(alias);
      return (
        cleanAlias === cleanQ ||
        cleanAlias.includes(cleanQ) ||
        cleanQ.includes(cleanAlias)
      );
    });
  }

  return false;
};

/**
 * Normalizes an artist name for lookup
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
 * @param {string|Object} artistIdOrName 
 * @param {Array} additionalTracks - Optional live search tracks by this artist
 * @returns {Object} Comprehensive Spotify-like artist profile
 */
export const getArtistProfile = (artistIdOrName, additionalTracks = []) => {
  if (!artistIdOrName) return null;

  const raw = typeof artistIdOrName === 'object' 
    ? (artistIdOrName.name || artistIdOrName.artist || '') 
    : String(artistIdOrName).trim();
  const lower = raw.toLowerCase();
  const cleanKey = normalizeArtistKey(raw);

  // 1. Direct or alias match in curated database
  const found = ARTISTS_DATA.find((a) => {
    return (
      a.id.toLowerCase() === lower ||
      a.name.toLowerCase() === lower ||
      checkArtistQueryMatch(raw, a)
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
    return (
      tArtist.includes(searchTarget) || 
      searchTarget.includes(tArtist) ||
      (found && checkArtistQueryMatch(t.artist, found))
    );
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
 * Searches across curated artists, aliases, albums, and live search tracks
 */
export const searchArtistsAndAlbums = (query = '', liveTracks = []) => {
  if (!query || typeof query !== 'string') return { artists: [], albums: [] };
  const cleanQ = query.trim().toLowerCase();

  // 1. Find direct curated matches with aliases and fuzzy token matching
  const matchingArtists = ARTISTS_DATA.filter((a) => {
    return checkArtistQueryMatch(cleanQ, a);
  });

  // 2. Scan liveTracks from YouTube/Backend for artist mentions
  if (Array.isArray(liveTracks) && liveTracks.length > 0) {
    liveTracks.forEach((track) => {
      if (!track || !track.artist) return;
      const rawArtist = track.artist.trim();
      
      // Filter out record label channels like T-Series, Zee Music, etc.
      const lowerArtist = rawArtist.toLowerCase();
      const isRecordLabel = [
        't-series', 'tseries', 'sony music', 'zee music', 
        'speed records', 'yrf', 'tips official', 'eros now', 'saregama'
      ].some((label) => lowerArtist.includes(label));

      if (isRecordLabel) return;

      // Check if this artist in liveTracks matches an entry in ARTISTS_DATA
      const existing = ARTISTS_DATA.find((a) => checkArtistQueryMatch(rawArtist, a));
      if (existing) {
        if (!matchingArtists.some((ma) => ma.id === existing.id)) {
          matchingArtists.push(existing);
        }
      } else if (
        rawArtist.toLowerCase().includes(cleanQ) || 
        cleanQ.includes(rawArtist.toLowerCase())
      ) {
        // Synthesize dynamic profile for this live track artist
        const dynProfile = getArtistProfile(rawArtist, liveTracks);
        if (dynProfile && !matchingArtists.some((ma) => ma.name.toLowerCase() === dynProfile.name.toLowerCase())) {
          matchingArtists.push(dynProfile);
        }
      }
    });
  }

  // 3. Find matching albums
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
