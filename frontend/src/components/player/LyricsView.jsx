import React, { useEffect, useRef, useState } from 'react';
import { X, Mic2, Sparkles, Music } from 'lucide-react';
import { usePlayerStore } from '../../store/usePlayerStore';
import { getTrackLyrics } from '../../data/lyricsData';
import { getTrackCoverUrl } from '../../data/mockTracks';

export const LyricsView = ({ isOpen, onClose, embedded = false }) => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const currentTime = usePlayerStore((state) => state.currentTime);
  const seekTo = usePlayerStore((state) => state.seekTo);

  const activeLineRef = useRef(null);
  const containerRef = useRef(null);

  const lyrics = currentTrack ? getTrackLyrics(currentTrack) : [];

  // Determine current active lyric index based on playback time
  const activeIndex = lyrics.reduce((acc, line, idx) => {
    if (typeof line.time === 'number' && currentTime >= line.time) {
      return idx;
    }
    return acc;
  }, 0);

  // Smooth scroll active line into center view
  useEffect(() => {
    if (activeLineRef.current && containerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeIndex]);

  if (!isOpen && !embedded) return null;
  if (!currentTrack) return null;

  const content = (
    <div className="flex flex-col h-full w-full max-w-2xl mx-auto px-4 py-6 text-center select-none">
      {/* Top Header */}
      {!embedded && (
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 flex-shrink-0">
          <div className="flex items-center gap-2.5 text-left min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
              <Mic2 size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white truncate">{currentTrack.title}</h3>
              <p className="text-xs text-neutral-400 truncate">{currentTrack.artist} • Lyrics</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lyrics"
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Synchronized Lyrics Scroll Area */}
      <div
        ref={containerRef}
        className="flex-grow overflow-y-auto no-scrollbar space-y-6 py-12 md:py-16 scroll-smooth"
      >
        {lyrics.map((line, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <p
              key={idx}
              ref={isActive ? activeLineRef : null}
              onClick={() => {
                if (typeof line.time === 'number') {
                  seekTo(line.time);
                }
              }}
              className={`text-lg sm:text-2xl md:text-3xl font-serif font-bold transition-all duration-500 cursor-pointer hover:text-white leading-relaxed ${
                isActive
                  ? 'text-white scale-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] opacity-100 font-black'
                  : isPassed
                  ? 'text-neutral-500 opacity-60'
                  : 'text-neutral-400 opacity-40 hover:opacity-80'
              }`}
              title={typeof line.time === 'number' ? `Click to jump to ${Math.floor(line.time)}s` : undefined}
            >
              {line.text}
            </p>
          );
        })}
      </div>

      {/* Footer Hint */}
      <div className="pt-4 flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 flex-shrink-0">
        <Sparkles size={12} className="text-amber-400" />
        <span>Tap any lyric line to jump to that moment</span>
      </div>
    </div>
  );

  if (embedded) {
    return <div className="h-full w-full flex flex-col">{content}</div>;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Lyrics for ${currentTrack.title}`}
      className="fixed inset-0 z-50 bg-[#08080A]/95 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-6 animate-luxury-slide-up"
    >
      <div className="relative w-full max-w-2xl h-[85vh] bg-[#101014] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {content}
      </div>
    </div>
  );
};
