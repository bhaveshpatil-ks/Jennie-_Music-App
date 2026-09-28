import React, { useEffect } from 'react';
import { X, ListMusic, Sparkles, Search, User, Compass } from 'lucide-react';
import { usePlayerStore } from '../../store/usePlayerStore';
import { TrackListRow } from '../tracks/TrackListRow';
import { getTrackCoverUrl, MOCK_TRACKS } from '../../data/mockTracks';
import { normalizeArtistId } from '../../services/recommendationEngine';

export const QueueDrawer = () => {
  const isQueueOpen = usePlayerStore((state) => state.isQueueOpen);
  const setQueueOpen = usePlayerStore((state) => state.setQueueOpen);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const queue = usePlayerStore((state) => state.queue);
  const currentIndex = usePlayerStore((state) => state.currentIndex);
  const playTrack = usePlayerStore((state) => state.playTrack);

  const queueFilterTab = usePlayerStore((state) => state.queueFilterTab);
  const setQueueFilterTab = usePlayerStore((state) => state.setQueueFilterTab);
  const searchResultsContext = usePlayerStore((state) => state.searchResultsContext);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isQueueOpen) {
        setQueueOpen(false);
      }
    };
    if (isQueueOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQueueOpen, setQueueOpen]);

  if (!isQueueOpen) return null;

  const rawNextTracks = queue.slice(currentIndex + 1);
  const primaryArtist = currentTrack ? (currentTrack.artist_id || normalizeArtistId(currentTrack.artist)) : '';
  const artistName = currentTrack?.artist ? currentTrack.artist.split('&')[0].trim() : 'Artist';

  let displayedTracks = rawNextTracks;
  let isSearchTab = false;

  if (queueFilterTab === 'search') {
    isSearchTab = true;
    displayedTracks = searchResultsContext;
  } else if (queueFilterTab === 'artist') {
    displayedTracks = rawNextTracks.filter(
      (t) => (t.artist_id && t.artist_id === primaryArtist) || t.source_pool === 'A'
    );
    if (displayedTracks.length === 0) {
      displayedTracks = MOCK_TRACKS.filter(
        (t) => t.id !== currentTrack?.id && normalizeArtistId(t.artist) === primaryArtist
      );
    }
  } else if (queueFilterTab === 'genre') {
    displayedTracks = rawNextTracks.filter(
      (t) => t.genre === currentTrack?.genre || t.source_pool === 'B' || t.source_pool === 'C'
    );
  }

  const poolLabels = {
    A: { label: 'Same Artist', color: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
    B: { label: 'Related Artist', color: 'bg-rose-500/10 text-rose-300 border-rose-500/20' },
    C: { label: 'Trending', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
    D: { label: 'Discovery', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
    E: { label: 'Collaborative', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
    F: { label: 'Your Taste', color: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Play Queue"
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] glass-panel bg-[#0C0C0C]/95 border-l border-white/[0.07] shadow-[0_0_60px_rgba(0,0,0,0.9)] p-5 flex flex-col justify-between animate-luxury-slide-right backdrop-blur-3xl text-neutral-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <ListMusic size={18} className="text-white" aria-hidden="true" />
          <h2 className="font-bold text-base text-white">Up Next • YouTube Mix</h2>
        </div>
        <button
          type="button"
          onClick={() => setQueueOpen(false)}
          aria-label="Close play queue"
          className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={18} />
        </button>
      </div>

      {/* Queue Filter Chips (YouTube Mix Tabs) */}
      <div className="pt-3 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-white/5">
        <button
          type="button"
          onClick={() => setQueueFilterTab('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            queueFilterTab === 'all'
              ? 'bg-white text-black shadow-md'
              : 'bg-white/5 hover:bg-white/10 text-neutral-300'
          }`}
        >
          <Sparkles size={12} />
          <span>All (Mixed)</span>
        </button>

        {searchResultsContext && searchResultsContext.length > 0 && (
          <button
            type="button"
            onClick={() => setQueueFilterTab('search')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              queueFilterTab === 'search'
                ? 'bg-white text-black shadow-md'
                : 'bg-white/5 hover:bg-white/10 text-neutral-300'
            }`}
          >
            <Search size={12} />
            <span>From your search</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setQueueFilterTab('artist')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            queueFilterTab === 'artist'
              ? 'bg-white text-black shadow-md'
              : 'bg-white/5 hover:bg-white/10 text-neutral-300'
          }`}
        >
          <User size={12} />
          <span>From {artistName}</span>
        </button>

        <button
          type="button"
          onClick={() => setQueueFilterTab('genre')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            queueFilterTab === 'genre'
              ? 'bg-white text-black shadow-md'
              : 'bg-white/5 hover:bg-white/10 text-neutral-300'
          }`}
        >
          <Compass size={12} />
          <span>Similar genre</span>
        </button>
      </div>

      {/* Queue Content */}
      <div data-lenis-prevent className="flex-grow overflow-y-auto py-3 space-y-5">
        {/* Now Playing Section */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
            Now Playing
          </span>
          {currentTrack && (
            <div className="p-3 rounded-2xl bg-white/[0.04] flex items-center gap-3 border border-white/5">
              <img
                src={getTrackCoverUrl(currentTrack)}
                alt={`Now playing artwork for ${currentTrack.title} by ${currentTrack.artist}`}
                className="w-12 h-12 rounded-xl object-cover shadow"
              />
              <div className="min-w-0 flex-grow">
                <p className="text-sm font-semibold text-white truncate">{currentTrack.title}</p>
                <p className="text-xs text-neutral-400 truncate">{currentTrack.artist}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-neutral-400 font-medium">{currentTrack.genre || 'Music'}</span>
                  {currentTrack.bpm && (
                    <span className="text-[10px] font-mono text-neutral-500">• {currentTrack.bpm} BPM</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Next Up Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              {isSearchTab ? 'Search Results' : 'Autoplay Queue'} ({displayedTracks.length})
            </span>
            <span className="text-[10px] text-neutral-500">
              {isSearchTab ? 'Optional list' : 'Interleaved Mix'}
            </span>
          </div>

          {displayedTracks.length === 0 ? (
            <p className="text-xs text-neutral-400 italic py-4">No upcoming tracks in this tab</p>
          ) : (
            <div className="space-y-1.5">
              {displayedTracks.map((track, idx) => {
                const poolInfo = track.source_pool ? poolLabels[track.source_pool] : null;

                return (
                  <div key={track.id} className="group/rec rounded-xl bg-white/[0.02] p-1 border border-transparent hover:border-white/5 transition-all">
                    <TrackListRow
                      track={track}
                      index={isSearchTab ? idx : currentIndex + 1 + idx}
                      queue={isSearchTab ? null : queue}
                      onPlay={() => {
                        if (isSearchTab) {
                          playTrack(track);
                        }
                      }}
                    />
                    {(track.recommendationReason || poolInfo) && (
                      <div className="pl-11 pr-3 pb-1 -mt-0.5 flex items-center justify-between text-[10px] text-neutral-400">
                        <span className="truncate max-w-[200px] sm:max-w-[240px]">
                          ✨ {track.recommendationReason || 'YouTube Mix selection'}
                        </span>
                        {poolInfo && (
                          <span className={`font-mono text-[9px] font-semibold px-1.5 py-0.2 rounded border ${poolInfo.color}`}>
                            {poolInfo.label}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-white/5 text-[11px] text-neutral-400 flex items-center justify-between">
        <span>Jennie YouTube Mix Engine</span>
        <span className="text-white/60">Profile-based Autoplay</span>
      </div>
    </div>
  );
};
