import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Shuffle, 
  Heart, 
  Share2, 
  Clock, 
  Disc, 
  ListMusic, 
  ListPlus,
  ArrowLeft
} from 'lucide-react';
import { usePlayerStore } from '../store/usePlayerStore';
import { useLibraryStore } from '../store/useLibraryStore';
import { LikeButton } from '../components/common/LikeButton';
import { AddToPlaylistModal } from '../components/common/AddToPlaylistModal';
import { formatDuration } from '../utils/formatters';
import { getTrackCoverUrl } from '../data/mockTracks';

export const AlbumDetail = ({ album }) => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const playTrack = usePlayerStore((state) => state.playTrack);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const toggleShuffle = usePlayerStore((state) => state.toggleShuffle);
  const addToQueue = usePlayerStore((state) => state.addToQueue);
  const showToast = usePlayerStore((state) => state.showToast);

  const openArtist = useLibraryStore((state) => state.openArtist);
  const openAlbum = useLibraryStore((state) => state.openAlbum);
  const isAlbumSaved = useLibraryStore((state) => state.isAlbumSaved);
  const toggleSaveAlbum = useLibraryStore((state) => state.toggleSaveAlbum);
  const setActiveView = useLibraryStore((state) => state.setActiveView);

  const [selectedTrackForPlaylist, setSelectedTrackForPlaylist] = useState(null);

  if (!album) {
    return (
      <div className="py-20 text-center text-neutral-400">
        <p>No album found.</p>
        <button
          type="button"
          onClick={() => setActiveView('home')}
          className="mt-4 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const tracks = album.tracks || [];
  const isSaved = isAlbumSaved(album.id);
  const isCurrentAlbumPlaying = tracks.some((t) => t.id === currentTrack?.id) && isPlaying;

  const totalSeconds = tracks.reduce((acc, t) => acc + (t.duration || 0), 0);
  const totalMins = Math.floor(totalSeconds / 60);

  const handlePlayAlbum = () => {
    if (isCurrentAlbumPlaying) {
      togglePlay();
    } else if (tracks.length > 0) {
      playTrack(tracks[0], tracks);
    }
  };

  const handleShuffleAlbum = () => {
    if (tracks.length > 0) {
      toggleShuffle();
      const randomIndex = Math.floor(Math.random() * tracks.length);
      playTrack(tracks[randomIndex], tracks);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (showToast) showToast(`Copied ${album.title} link!`);
    }
  };

  return (
    <div className="space-y-8 pb-28">
      {/* ─── SPOTIFY-STYLE ALBUM HERO HEADER ─────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 pt-4 pb-4">
        {/* Album Artwork */}
        <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10">
          <img
            src={album.coverUrl}
            alt={album.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Album Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            {album.type || 'Album'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {album.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-neutral-300 font-medium">
            {/* Clickable Artist Name & Avatar */}
            <button
              type="button"
              onClick={() => openArtist(album.artist)}
              className="inline-flex items-center gap-2 hover:underline text-white font-bold transition-colors"
            >
              {album.artistAvatar && (
                <img
                  src={album.artistAvatar}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover shadow-sm"
                />
              )}
              <span>{album.artist}</span>
            </button>
            <span className="text-neutral-500">•</span>
            <span>{album.releaseYear || '2023'}</span>
            <span className="text-neutral-500">•</span>
            <span>{tracks.length} songs{totalMins > 0 ? `, ${totalMins} min` : ''}</span>
            {album.genre && (
              <>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400">{album.genre}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ─── ACTION BAR ────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 sm:gap-6 border-b border-white/5 pb-6">
        <button
          type="button"
          onClick={handlePlayAlbum}
          aria-label={isCurrentAlbumPlaying ? `Pause ${album.title}` : `Play ${album.title}`}
          className="w-14 h-14 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {isCurrentAlbumPlaying ? (
            <Pause size={24} className="fill-black" />
          ) : (
            <Play size={24} className="fill-black ml-1" />
          )}
        </button>

        <button
          type="button"
          onClick={handleShuffleAlbum}
          title="Shuffle album"
          className="p-3 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Shuffle size={22} />
        </button>

        <button
          type="button"
          onClick={() => toggleSaveAlbum(album.id)}
          title={isSaved ? 'Remove from library' : 'Save to library'}
          className={`p-3 rounded-full transition-colors ${
            isSaved ? 'text-white' : 'text-neutral-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <Heart size={22} className={isSaved ? 'fill-white text-white' : ''} />
        </button>

        <button
          type="button"
          onClick={handleShare}
          title="Share album"
          className="p-3 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Share2 size={20} />
        </button>
      </div>

      {/* ─── TRACKLIST TABLE ──────────────────────────────────────────────── */}
      <div className="space-y-2">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider border-b border-white/5">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-8 sm:col-span-7">Title</div>
          <div className="hidden sm:block sm:col-span-2 text-right">Plays</div>
          <div className="col-span-3 sm:col-span-2 flex items-center justify-end pr-2">
            <Clock size={14} />
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-1">
          {tracks.map((track, idx) => {
            const isCurrent = currentTrack?.id === track.id;
            const isCurrentPlaying = isCurrent && isPlaying;

            return (
              <div
                key={track.id || idx}
                onClick={() => playTrack(track, tracks)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    playTrack(track, tracks);
                  }
                }}
                className={`group grid grid-cols-12 items-center px-4 py-3 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/5 ${
                  isCurrent ? 'bg-white/10 text-white' : 'hover:bg-white/[0.06] text-neutral-300'
                }`}
              >
                {/* Index or Play icon */}
                <div className="col-span-1 text-center">
                  <span className="text-xs font-semibold text-neutral-400 group-hover:hidden">
                    {idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isCurrent) togglePlay();
                      else playTrack(track, tracks);
                    }}
                    className="hidden group-hover:inline-flex items-center justify-center text-white"
                  >
                    {isCurrentPlaying ? (
                      <Pause size={14} className="fill-white" />
                    ) : (
                      <Play size={14} className="fill-white ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Track Details */}
                <div className="col-span-8 sm:col-span-7 flex items-center gap-3 min-w-0 pr-4">
                  <img
                    src={getTrackCoverUrl(track)}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover bg-neutral-900 flex-shrink-0 shadow-sm"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-sm font-semibold truncate ${isCurrent ? 'text-white font-bold' : 'text-neutral-200'}`}>
                      {track.title}
                    </h4>
                    <p className="text-xs text-neutral-400 truncate">
                      {track.artist}
                    </p>
                  </div>
                </div>

                {/* Plays */}
                <div className="hidden sm:block sm:col-span-2 text-right text-xs text-neutral-400 font-mono">
                  {track.plays || '18,400,000'}
                </div>

                {/* Duration & Quick Actions */}
                <div className="col-span-3 sm:col-span-2 flex items-center justify-end gap-2 pr-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToQueue(track);
                    }}
                    title="Add to queue"
                    className="p-1.5 rounded-full text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ListMusic size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTrackForPlaylist(track);
                    }}
                    title="Add to playlist"
                    className="p-1.5 rounded-full text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ListPlus size={15} />
                  </button>

                  <div onClick={(e) => e.stopPropagation()}>
                    <LikeButton trackId={track.id} size={15} />
                  </div>

                  <span className="text-xs text-neutral-400 font-mono w-9 text-right">
                    {formatDuration(track.duration)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── MORE BY THIS ARTIST ──────────────────────────────────────────── */}
      {album.moreByArtist && album.moreByArtist.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-white/5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              More by {album.artist}
            </h2>
            <button
              type="button"
              onClick={() => openArtist(album.artist)}
              className="text-xs font-bold text-neutral-400 hover:text-white transition-colors"
            >
              See discography
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {album.moreByArtist.map((item) => (
              <div
                key={item.id}
                onClick={() => openAlbum(item, album.artist)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openAlbum(item, album.artist);
                  }
                }}
                className="group relative p-3 rounded-2xl bg-[#141416] hover:bg-[#1A1A1E] transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-white/15"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 mb-2.5 shadow-md">
                  <img
                    src={item.coverUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-xs font-bold text-white truncate" title={item.title}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {item.releaseYear} • {item.type || 'Album'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add to Playlist Modal */}
      <AddToPlaylistModal
        isOpen={Boolean(selectedTrackForPlaylist)}
        onClose={() => setSelectedTrackForPlaylist(null)}
        track={selectedTrackForPlaylist}
      />
    </div>
  );
};
