import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, Disc, Play, Pause, Clock, Trash2, Music } from 'lucide-react';
import { TrackTable } from '../components/tracks';
import { useLibraryStore } from '../store/useLibraryStore';
import { usePlayerStore } from '../store/usePlayerStore';
import { searchTracks } from '../services/api';

export const Search = () => {
  const searchQuery = useLibraryStore((state) => state.searchQuery);
  const setSearchQuery = useLibraryStore((state) => state.setSearchQuery);
  const searchFilter = useLibraryStore((state) => state.searchFilter);
  const setSearchFilter = useLibraryStore((state) => state.setSearchFilter);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const playTrack = usePlayerStore((state) => state.playTrack);
  const togglePlay = usePlayerStore((state) => state.togglePlay);

  const [liveTracks, setLiveTracks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [source, setSource] = useState('all'); // 'all' | 'youtube' | 'audius' | 'jamendo'

  // Spotify-style Search History (tracks played from search)
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const saved = localStorage.getItem('jennie_recent_searches');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const saveToRecentSearches = (track) => {
    if (!track || !track.id) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((t) => t.id !== track.id);
      const updated = [track, ...filtered].slice(0, 15);
      try {
        localStorage.setItem('jennie_recent_searches', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const removeFromRecentSearches = (e, trackId) => {
    e.stopPropagation();
    setRecentSearches((prev) => {
      const updated = prev.filter((t) => t.id !== trackId);
      try {
        localStorage.setItem('jennie_recent_searches', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('jennie_recent_searches');
    } catch {}
  };

  const query = searchQuery.trim().toLowerCase();

  useEffect(() => {
    if (!query) {
      setLiveTracks([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      searchTracks(query, searchFilter, source)
        .then((tracks) => {
          setLiveTracks(tracks || []);
          setIsSearching(false);
        })
        .catch(() => {
          setIsSearching(false);
        });
    }, 200);

    return () => clearTimeout(timer);
  }, [query, searchFilter, source]);

  const setSearchResultsContext = usePlayerStore((state) => state.setSearchResultsContext);

  const filteredTracks = liveTracks;
  const topResult = filteredTracks.length > 0 ? filteredTracks[0] : null;
  const isTopResultPlaying = topResult && currentTrack?.id === topResult.id && isPlaying;
  const isSongsFilter = searchFilter === 'songs';

  const handleTopResultPlay = () => {
    if (!topResult) return;
    saveToRecentSearches(topResult);
    // Root Bug Fix: Search query finds the first song; autoplay queue is generated from structured profile!
    setSearchResultsContext(filteredTracks);
    if (currentTrack?.id === topResult.id) {
      togglePlay();
    } else {
      playTrack(topResult); // triggers YouTube Mix queue from structured profile
    }
  };

  const handleRecentTrackPlay = (track) => {
    saveToRecentSearches(track);
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      playTrack(track); // triggers YouTube Mix queue from structured profile
    }
  };

  const handleTrackTablePlay = (track) => {
    saveToRecentSearches(track);
    setSearchResultsContext(filteredTracks);
  };

  const quickSuggestions = [
    'Arijit Singh',
    'Karan Aujla',
    'Kesariya',
    'Diljit Dosanjh',
    'Tauba Tauba',
    'Top 50 India',
    'AP Dhillon',
    'ANIMAL',
  ];

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Search Input Bar */}
      <div className="space-y-3.5">
        <div className="relative max-w-2xl">
          <label htmlFor="main-search-input" className="sr-only">
            Search songs or artists
          </label>
          <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" aria-hidden="true" />
          <input
            id="main-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to play?"
            autoFocus
            className="w-full pl-11 pr-10 py-3.5 bg-[#161616] hover:bg-[#1C1C1C] focus:bg-[#202020] focus-visible:ring-2 focus-visible:ring-white rounded-2xl text-white text-sm placeholder:text-neutral-500 focus:outline-none transition-all shadow-inner border border-white/5"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              title="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-neutral-400 hover:text-white bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Content Type Filter (When searching) */}
        {query && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs" role="toolbar" aria-label="Search Filters">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {['all', 'songs', 'artists'].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setSearchFilter(f)}
                  aria-pressed={searchFilter === f}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-300 active:opacity-75 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    searchFilter === f
                      ? 'bg-white text-black font-bold shadow-sm'
                      : 'bg-[#141414] text-neutral-300 hover:text-white hover:bg-[#1E1E1E] border border-white/[0.06]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="h-4 w-[1px] bg-white/10 flex-shrink-0 mx-1" aria-hidden="true" />

            <div className="flex items-center gap-1.5 flex-shrink-0">
              {[
                { id: 'all', label: 'All Sources' },
                { id: 'youtube', label: 'YouTube Hits' },
                { id: 'jamendo', label: 'Jamendo' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSource(s.id)}
                  aria-pressed={source === s.id}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    source === s.id
                      ? 'bg-neutral-800 text-white font-semibold border-white/20 shadow-sm'
                      : 'bg-[#141414] text-neutral-400 hover:text-white border-white/5'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Active Search Results */}
      {query ? (
        <div className="space-y-6 animate-luxury-fade">
          {isSearching && (
            <div className="flex items-center gap-2 text-xs text-neutral-400 py-1" role="status">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
              <span className="font-medium tracking-wide">Searching songs & artists...</span>
            </div>
          )}

          {filteredTracks.length > 0 ? (
            <div className="space-y-6">
              {isSongsFilter ? (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Songs ({filteredTracks.length})
                  </h3>
                  <div className="bg-[#121212] rounded-2xl p-2 border border-white/5 shadow-xl">
                    <TrackTable 
                      tracks={filteredTracks} 
                      queue={filteredTracks} 
                      onPlay={saveToRecentSearches}
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* Desktop Layout */}
                  <div className="hidden lg:block space-y-6">
                    <div className="grid grid-cols-3 gap-5 items-stretch">
                      {topResult && (
                        <div className="col-span-1 space-y-2 flex flex-col">
                          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Top Match</h3>
                          <div
                            onClick={handleTopResultPlay}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleTopResultPlay();
                              }
                            }}
                            aria-label={`Play top match: ${topResult.title} by ${topResult.artist}`}
                            className="group relative p-5 rounded-2xl bg-[#141414] hover:bg-[#181818] transition-all duration-300 cursor-pointer border border-white/[0.06] hover:border-white/15 shadow-xl flex flex-col justify-between flex-grow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            <div>
                              <img
                                src={topResult.coverUrl}
                                alt={`Artwork for ${topResult.title}`}
                                className="w-24 h-24 rounded-xl object-cover shadow-2xl mb-4 bg-neutral-900 group-hover:scale-[1.02] transition-transform duration-500"
                              />
                              <h4 className="text-2xl font-bold text-white tracking-tight leading-tight line-clamp-2">
                                {topResult.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-neutral-400 font-medium">
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-black">
                                  Song
                                </span>
                                <span className="text-white truncate max-w-[140px]">
                                  {topResult.artist}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTopResultPlay();
                              }}
                              aria-label={isTopResultPlaying ? `Pause ${topResult.title}` : `Play ${topResult.title}`}
                              className={`absolute right-5 bottom-5 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                                isTopResultPlaying
                                  ? 'opacity-100 translate-y-0'
                                  : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                              }`}
                            >
                              {isTopResultPlaying ? (
                                <Pause size={20} className="fill-black" />
                              ) : (
                                <Play size={20} className="fill-black ml-0.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      )}

                      <div className={`${topResult ? 'col-span-2' : 'col-span-3'} space-y-2`}>
                        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                          Songs ({Math.min(filteredTracks.length, 4)})
                        </h3>
                        <div className="bg-[#121212] rounded-2xl p-2 border border-white/5 shadow-xl h-[calc(100%-24px)] flex flex-col justify-center">
                          <TrackTable 
                            tracks={filteredTracks.slice(0, 4)} 
                            queue={null} 
                            onPlay={handleTrackTablePlay}
                          />
                        </div>
                      </div>
                    </div>

                    {filteredTracks.length > 4 && (
                      <div className="space-y-2 pt-2">
                        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                          More Songs ({filteredTracks.length - 4})
                        </h3>
                        <div className="bg-[#121212] rounded-2xl p-2 border border-white/5 shadow-xl">
                          <TrackTable
                            tracks={filteredTracks.slice(4)}
                            queue={null}
                            startIndex={4}
                            onPlay={handleTrackTablePlay}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden space-y-4">
                    {topResult && (
                      <div className="space-y-2">
                        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Top Match</h3>
                        <div
                          onClick={handleTopResultPlay}
                          role="button"
                          tabIndex={0}
                          className="p-3 rounded-xl bg-[#141414] hover:bg-[#181818] transition-all border border-white/[0.06] flex items-center gap-3.5 cursor-pointer active:opacity-80"
                        >
                          <img
                            src={topResult.coverUrl}
                            alt=""
                            className="w-14 h-14 rounded-lg object-cover flex-shrink-0 shadow-md bg-neutral-900"
                          />
                          <div className="min-w-0 flex-grow">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-white px-1.5 py-0.5 rounded-sm inline-block mb-1">
                              Top Result
                            </span>
                            <h4 className="text-sm font-bold text-white truncate leading-snug">
                              {topResult.title}
                            </h4>
                            <p className="text-xs text-neutral-400 truncate mt-0.5">
                              Song • <span className="text-neutral-300">{topResult.artist}</span>
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTopResultPlay();
                            }}
                            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md flex-shrink-0 active:scale-95 transition-transform"
                          >
                            {isTopResultPlaying ? (
                              <Pause size={16} className="fill-black" />
                            ) : (
                              <Play size={16} className="fill-black ml-0.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        Songs ({filteredTracks.length})
                      </h3>
                      <div className="bg-[#121212] rounded-2xl p-1.5 border border-white/5 shadow-xl">
                        <TrackTable 
                          tracks={filteredTracks} 
                          queue={null} 
                          onPlay={handleTrackTablePlay}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : !isSearching ? (
            <div className="text-center py-16 bg-[#121212] rounded-2xl p-6 border border-white/5">
              <Disc size={32} className="text-neutral-500 mx-auto mb-2.5 opacity-60" aria-hidden="true" />
              <h3 className="text-base font-bold text-white">No results found for &quot;{searchQuery}&quot;</h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto mt-1">
                Try searching for another song, artist, or Hindi chartbuster.
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        /* Empty Query: Spotify-Style Recent Searches & Clear State (No playlist suggestions) */
        <div className="space-y-6 animate-luxury-fade">
          {recentSearches.length > 0 ? (
            /* Spotify-style Recent Searches List */
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-neutral-400" />
                  <h2 className="text-base md:text-lg font-bold text-white tracking-tight">Recent searches</h2>
                </div>
                <button
                  type="button"
                  onClick={clearRecentSearches}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 hover:underline"
                >
                  <Trash2 size={13} />
                  <span>Clear recent searches</span>
                </button>
              </div>

              <div className="bg-[#121212] rounded-2xl border border-white/5 p-2 shadow-xl divide-y divide-white/[0.04]">
                {recentSearches.map((track) => {
                  const isCurrent = currentTrack?.id === track.id;
                  const isCurrentPlaying = isCurrent && isPlaying;
                  return (
                    <div
                      key={track.id}
                      onClick={() => handleRecentTrackPlay(track)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleRecentTrackPlay(track);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${track.title} by ${track.artist}`}
                      className="group flex items-center justify-between gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow">
                          <img
                            src={track.coverUrl}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${isCurrentPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            {isCurrentPlaying ? (
                              <Pause size={18} className="fill-white text-white" />
                            ) : (
                              <Play size={18} className="fill-white text-white ml-0.5" />
                            )}
                          </div>
                        </div>

                        <div className="min-w-0">
                          <p className={`text-sm font-semibold truncate ${isCurrent ? 'text-emerald-400' : 'text-white'}`}>
                            {track.title}
                          </p>
                          <p className="text-xs text-neutral-400 truncate mt-0.5">
                            Song • {track.artist}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => removeFromRecentSearches(e, track.id)}
                          aria-label={`Remove ${track.title} from search history`}
                          title="Remove from recent searches"
                          className="p-2 rounded-full text-neutral-500 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Clean Minimalist Empty Search Landing */
            <div className="text-center py-20 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center mx-auto text-neutral-400 shadow-inner">
                <SearchIcon size={28} />
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h2 className="text-xl font-bold text-white font-serif tracking-tight">Play what you love</h2>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Search for artists, Hindi chartbusters, or top trending songs across India.
                </p>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
                {quickSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-3.5 py-1.5 rounded-full bg-[#161616] hover:bg-[#202020] text-xs font-medium text-neutral-300 hover:text-white border border-white/5 transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
