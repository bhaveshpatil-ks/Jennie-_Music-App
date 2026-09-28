import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  Headphones, 
  Moon, 
  Zap, 
  Music4,
  Sparkles
} from 'lucide-react';
import { MOCK_TRACKS, GENRES, FEATURED_MIXES } from '../data/mockTracks';
import { TrackCard } from '../components/tracks';
import { GenreTile } from '../components/common';
import { useLibraryStore } from '../store/useLibraryStore';
import { useAuthStore } from '../store/useAuthStore';
import { fetchHomeFeed } from '../services/api';

export const Home = () => {
  const setActiveView = useLibraryStore((state) => state.setActiveView);
  const user = useAuthStore((state) => state.user);
  const openAuthModal = useAuthStore((state) => state.openAuthModal);
  const [dismissStartBanner, setDismissStartBanner] = useState(() => {
    try {
      return localStorage.getItem('jennie_dismiss_start_banner') === 'true';
    } catch {
      return false;
    }
  });

  const handleDismissBanner = () => {
    setDismissStartBanner(true);
    try {
      localStorage.setItem('jennie_dismiss_start_banner', 'true');
    } catch {}
  };

  const [feed, setFeed] = useState({
    featured: MOCK_TRACKS.find((t) => t.featured) || MOCK_TRACKS[0],
    trending: MOCK_TRACKS.slice(0, 8),
    bollywood: MOCK_TRACKS.filter((t) => t.genre === 'Bollywood'),
    punjabi: MOCK_TRACKS.filter((t) => t.genre?.includes('Punjabi')),
    lofi: MOCK_TRACKS.filter((t) => t.genre === 'Lo-Fi'),
    synthwave: MOCK_TRACKS.filter((t) => t.genre === 'Synthwave'),
    ambient: MOCK_TRACKS.filter((t) => t.genre === 'Ambient'),
    house: MOCK_TRACKS.filter((t) => t.genre === 'Deep House'),
    acoustic: MOCK_TRACKS.filter((t) => t.genre === 'Acoustic' || t.genre === 'Classical'),
  });

  useEffect(() => {
    let mounted = true;
    fetchHomeFeed().then((data) => {
      if (mounted && data) {
        setFeed((prev) => ({
          ...prev,
          ...data,
          featured: data.featured || prev.featured,
        }));
      }
    });
    return () => { mounted = false; };
  }, []);

  const top50Tracks = MOCK_TRACKS.slice(0, 10);
  const bollywoodTracks = feed.bollywood?.length ? feed.bollywood : MOCK_TRACKS.filter((t) => t.genre === 'Bollywood');
  const punjabiTracks = feed.punjabi?.length ? feed.punjabi : MOCK_TRACKS.filter((t) => t.genre?.includes('Punjabi') || t.genre === 'Punjabi');
  const romanceTracks = MOCK_TRACKS.filter((t) => t.mood?.toLowerCase().includes('romanc') || t.mood?.toLowerCase().includes('love') || t.mood?.toLowerCase().includes('soulful') || t.mood?.toLowerCase().includes('devotion'));
  const viralTracks = MOCK_TRACKS.filter((t) => t.featured);

  // Horizontal scroll shelf helper
  const ShelfRow = ({ title, icon: Icon, tracks, id }) => {
    const rowRef = useRef(null);

    const scroll = (direction) => {
      if (rowRef.current) {
        const scrollAmount = direction === 'left' ? -380 : 380;
        rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <section className="space-y-3.5 my-8" aria-label={title}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {Icon && <Icon size={20} className="text-white" aria-hidden="true" />}
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{title}</h3>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-[#181818] hover:bg-[#252525] text-neutral-300 hover:text-white flex items-center justify-center transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Scroll ${title} carousel left`}
              title="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-[#181818] hover:bg-[#252525] text-neutral-300 hover:text-white flex items-center justify-center transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Scroll ${title} carousel right`}
              title="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={rowRef}
          data-lenis-prevent
          className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tracks.map((track) => (
            <div key={track.id} className="w-44 md:w-52 flex-shrink-0">
              <TrackCard track={track} queue={tracks} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Starting App Welcome & Auth Banner */}
      {!user && !dismissStartBanner && (
        <section aria-label="Welcome to Jennie Music" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neutral-900 via-[#141416] to-neutral-900 border border-white/10 p-5 sm:p-7 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-neutral-300 text-[11px] font-semibold tracking-wide uppercase">
                <Sparkles size={12} className="text-white" />
                <span>Free Music Streaming • Direct Listening</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                Listen Directly or Create an Account
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Stream unlimited tracks instantly without any sign-up required. Sign in or create a free account to save custom playlists and sync your liked songs across devices.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openAuthModal('register')}
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-neutral-200 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => openAuthModal('login')}
                className="px-4 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold transition-all border border-white/10 cursor-pointer"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={handleDismissBanner}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1 transition-colors cursor-pointer"
                title="Dismiss welcome banner"
              >
                Dismiss
              </button>
            </div>
          </div>
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </section>
      )}

      {/* Quick Curated Playlists Row */}
      <section aria-label="Top Playlists in India">
        <h2 className="text-lg md:text-xl font-bold text-white mb-3.5 tracking-tight flex items-center gap-2">
          <span>🇮🇳</span>
          <span>India&apos;s Top Playlists</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {FEATURED_MIXES.map((mix) => (
            <div
              key={mix.id}
              onClick={() => setActiveView('playlist', mix)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveView('playlist', mix);
                }
              }}
              aria-label={`Open curated playlist ${mix.title}`}
              className="group flex items-center gap-3.5 p-3 rounded-2xl bg-[#161616] hover:bg-[#202020] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <img
                src={(mix.coverUrl && !mix.coverUrl.includes('unsplash.com')) ? mix.coverUrl : 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg'}
                alt={`Playlist artwork for ${mix.title}`}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0 shadow"
              />
              <div className="min-w-0 flex-grow">
                <h3 className="text-sm font-bold text-white group-hover:text-neutral-100 transition-colors truncate">
                  {mix.title}
                </h3>
                <p className="text-xs text-neutral-400 truncate mt-0.5 line-clamp-1">{mix.description}</p>
                <span className="text-[10px] text-neutral-400 font-medium mt-1 inline-block">
                  Top Playlist • Free Stream
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal Shelves - Spotify India Style */}
      <ShelfRow
        title="🇮🇳 Top 50 - India (Most Played Songs)"
        icon={Flame}
        tracks={top50Tracks}
        id="top50"
      />

      <ShelfRow
        title="🔥 Hot Hits Hindi (Arijit Singh, Vishal Mishra, Anirudh & Pritam)"
        icon={Flame}
        tracks={bollywoodTracks}
        id="bollywood"
      />

      <ShelfRow
        title="⚡ Today's Top Punjabi Hits (Karan Aujla, Diljit & AP Dhillon)"
        icon={Zap}
        tracks={punjabiTracks}
        id="punjabi"
      />

      <ShelfRow
        title="💖 Soulful Hindi Romance & Melodies"
        icon={Headphones}
        tracks={romanceTracks}
        id="romance"
      />

      <ShelfRow
        title="🌟 Viral Hits India & Chartbusters"
        icon={Zap}
        tracks={viralTracks}
        id="viral"
      />
    </div>
  );
};
