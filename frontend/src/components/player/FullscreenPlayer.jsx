import React, { useEffect, useState, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Mic2,
  ListPlus,
  ListMusic
} from 'lucide-react';
import { usePlayerStore } from '../../store/usePlayerStore';
import { getTrackCoverUrl } from '../../data/mockTracks';
import { LikeButton } from '../common/LikeButton';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { LyricsView } from './LyricsView';
import { AddToPlaylistModal } from '../common/AddToPlaylistModal';

export const FullscreenPlayer = () => {
  const isFullscreenOpen = usePlayerStore((state) => state.isFullscreenOpen);
  const toggleFullscreen = usePlayerStore((state) => state.toggleFullscreen);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const nextTrack = usePlayerStore((state) => state.nextTrack);
  const prevTrack = usePlayerStore((state) => state.prevTrack);
  const isShuffled = usePlayerStore((state) => state.isShuffled);
  const toggleShuffle = usePlayerStore((state) => state.toggleShuffle);
  const repeatMode = usePlayerStore((state) => state.repeatMode);
  const toggleRepeat = usePlayerStore((state) => state.toggleRepeat);
  const isVideoMode = usePlayerStore((state) => state.isVideoMode);
  const toggleVideoMode = usePlayerStore((state) => state.toggleVideoMode);
  const toggleQueue = usePlayerStore((state) => state.toggleQueue);
  const setQueueOpen = usePlayerStore((state) => state.setQueueOpen);

  const [showLyrics, setShowLyrics] = useState(false);
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const touchStartY = useRef(0);

  // Keyboard accessibility: Escape minimizes the fullscreen view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreenOpen) {
        toggleFullscreen();
      }
    };
    if (isFullscreenOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen, toggleFullscreen]);

  if (!isFullscreenOpen || !currentTrack) return null;
  const isYouTubeTrack = currentTrack.source === 'youtube' || Boolean(currentTrack.youtubeId);

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    // Swipe UP (deltaY > 50px) reveals queue
    if (deltaY > 50) {
      setQueueOpen(true);
    }
    // Swipe DOWN (deltaY < -60px) minimizes player
    if (deltaY < -60) {
      toggleFullscreen();
    }
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Now Playing: ${currentTrack.title} by ${currentTrack.artist}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="fixed inset-0 z-50 bg-[#070707] flex flex-col justify-between p-5 md:p-10 overflow-hidden animate-luxury-slide-up select-none"
      >
        {/* Dynamic Ambient Background Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none bg-white/10"
          aria-hidden="true"
        />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Minimize player"
            title="Minimize"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/5 shadow-sm active:scale-95"
          >
            <ChevronDown size={22} />
          </button>

          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block">
              Playing from {(currentTrack.source || 'CATALOG').toUpperCase()}
            </span>
            <span className="text-xs font-semibold text-white/90">{currentTrack.album || 'Single'}</span>
          </div>

          <div className="flex items-center gap-2">
            {isYouTubeTrack && (
              <button
                type="button"
                onClick={toggleVideoMode}
                aria-label={isVideoMode ? 'Hide music video' : 'Watch music video'}
                title={isVideoMode ? 'Close Music Video' : 'Watch Official Music Video'}
                className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white border shadow-md relative group active:scale-95 ${
                  isVideoMode
                    ? 'bg-red-500/20 text-red-400 border-red-500/40 shadow-red-500/10'
                    : 'bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border-white/5'
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isVideoMode ? 'text-red-400' : 'text-neutral-200'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none" />
                </svg>
                {isVideoMode && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                )}
              </button>
            )}

            {/* Lyrics Toggle Button */}
            <button
              type="button"
              onClick={() => setShowLyrics(!showLyrics)}
              aria-label={showLyrics ? "Hide lyrics" : "Show lyrics"}
              title="Lyrics"
              className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center border shadow-md active:scale-95 ${
                showLyrics
                  ? 'bg-white text-black border-white shadow-white/20'
                  : 'bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border-white/5'
              }`}
            >
              <Mic2 size={17} />
            </button>
          </div>
        </div>

        {/* Main Center Area: Artwork OR Lyrics */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto max-w-lg mx-auto w-full">
          {showLyrics ? (
            <div className="w-full h-80 sm:h-96 md:h-[420px] rounded-3xl bg-white/[0.03] border border-white/10 p-4 overflow-hidden shadow-2xl backdrop-blur-md mb-6">
              <LyricsView isOpen={true} embedded={true} />
            </div>
          ) : (
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8 group">
              <img
                src={getTrackCoverUrl(currentTrack)}
                alt={`Album cover artwork for ${currentTrack.title} by ${currentTrack.artist}`}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          )}

          {/* Track Title, Artist, Like, & Add to Playlist */}
          <div className="w-full flex items-center justify-between mb-4">
            <div className="min-w-0 pr-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white truncate tracking-tight">
                {currentTrack.title}
              </h1>
              <p className="text-base text-neutral-300 font-medium truncate mt-1">
                {currentTrack.artist}
              </p>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsPlaylistModalOpen(true)}
                aria-label="Add to playlist"
                title="Add to Playlist"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors"
              >
                <ListPlus size={20} />
              </button>
              <LikeButton trackId={currentTrack.id} size={24} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-6">
            <ProgressBar showTimes={true} />
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-6 md:gap-8 w-full" role="toolbar" aria-label="Fullscreen Controls">
            <button
              type="button"
              onClick={toggleShuffle}
              aria-label={isShuffled ? 'Disable Shuffle' : 'Enable Shuffle'}
              aria-pressed={isShuffled}
              className={`p-2 rounded-full hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                isShuffled ? 'text-white' : 'text-neutral-400'
              }`}
            >
              <Shuffle size={20} />
            </button>

            <button
              type="button"
              onClick={prevTrack}
              aria-label="Previous Track"
              className="p-3 rounded-full text-neutral-300 hover:text-white transition-opacity active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <SkipBack size={26} />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? `Pause ${currentTrack.title}` : `Play ${currentTrack.title}`}
              className="w-16 h-16 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center shadow-xl transition-all duration-300 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isPlaying ? (
                <Pause size={28} className="fill-black" />
              ) : (
                <Play size={28} className="fill-black ml-1" />
              )}
            </button>

            <button
              type="button"
              onClick={nextTrack}
              aria-label="Next Track"
              className="p-3 rounded-full text-neutral-300 hover:text-white transition-opacity active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <SkipForward size={26} />
            </button>

            <button
              type="button"
              onClick={toggleRepeat}
              aria-label={`Toggle repeat mode, currently ${repeatMode}`}
              className={`p-2 rounded-full hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                repeatMode !== 'off' ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {repeatMode === 'one' ? <Repeat1 size={20} /> : <Repeat size={20} />}
            </button>
          </div>
        </div>

        {/* Bottom Actions & Swipe-Up Queue Trigger (Preserves Suspense) */}
        <div className="relative z-10 flex flex-col items-center gap-3 max-w-sm mx-auto w-full">
          <VolumeControl className="w-full justify-center hidden sm:flex" />

          {/* Suspense-Friendly Swipe-Up Queue Trigger */}
          <button
            type="button"
            onClick={toggleQueue}
            aria-label="View upcoming queue"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs font-semibold transition-all border border-white/5 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
            <ListMusic size={14} />
            <span>Up Next (Swipe up to view)</span>
          </button>
        </div>
      </div>

      {/* Add To Playlist Modal */}
      <AddToPlaylistModal
        isOpen={isPlaylistModalOpen}
        onClose={() => setIsPlaylistModalOpen(false)}
        track={currentTrack}
      />
    </>
  );
};
