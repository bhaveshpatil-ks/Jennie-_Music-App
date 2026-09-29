import React, { useState, useEffect, useRef } from 'react';
import { X, Plus, Music2, Check, ListPlus, FolderPlus } from 'lucide-react';
import { useLibraryStore } from '../../store/useLibraryStore';
import { getTrackCoverUrl } from '../../data/mockTracks';

export const AddToPlaylistModal = ({ isOpen, onClose, track }) => {
  const customPlaylists = useLibraryStore((state) => state.customPlaylists);
  const addTrackToPlaylist = useLibraryStore((state) => state.addTrackToPlaylist);
  const createPlaylist = useLibraryStore((state) => state.createPlaylist);

  const [newTitle, setNewTitle] = useState('');
  const [showCreateInput, setShowCreateInput] = useState(false);
  const [addedPlaylistId, setAddedPlaylistId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setAddedPlaylistId(null);
      setShowCreateInput(false);
      setNewTitle('');
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (showCreateInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showCreateInput]);

  if (!isOpen || !track) return null;

  const handleSelectPlaylist = (playlistId) => {
    addTrackToPlaylist(playlistId, track.id, track);
    setAddedPlaylistId(playlistId);
    setTimeout(() => {
      onClose();
    }, 900);
  };

  const handleCreateAndAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPl = createPlaylist(newTitle.trim(), 'Personal playlist created from Jennie music');
    if (newPl && newPl.id) {
      addTrackToPlaylist(newPl.id, track.id, track);
      setAddedPlaylistId(newPl.id);
      setTimeout(() => {
        onClose();
      }, 900);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Add ${track.title} to playlist`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-luxury-fade"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="w-full max-w-sm bg-[#141416] border border-white/10 rounded-3xl p-6 shadow-2xl relative animate-pop text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Header & Track Mini Preview */}
        <div className="flex items-center gap-3 mb-5 pr-6">
          <img
            src={getTrackCoverUrl(track)}
            alt={track.title}
            className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white truncate leading-tight">{track.title}</h3>
            <p className="text-xs text-neutral-400 truncate mt-0.5">{track.artist}</p>
            <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block mt-0.5">
              Add to Playlist
            </span>
          </div>
        </div>

        {/* Create New Playlist Quick Action */}
        {!showCreateInput ? (
          <button
            type="button"
            onClick={() => setShowCreateInput(true)}
            className="w-full py-2.5 px-3.5 mb-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs flex items-center justify-between transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <FolderPlus size={16} className="text-white group-hover:scale-110 transition-transform" />
              <span>Create New Playlist</span>
            </div>
            <Plus size={14} className="text-neutral-400" />
          </button>
        ) : (
          <form onSubmit={handleCreateAndAdd} className="mb-4 space-y-2">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Give your playlist a title..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/20 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors shadow"
              >
                Create & Add
              </button>
              <button
                type="button"
                onClick={() => setShowCreateInput(false)}
                className="px-3 py-2 rounded-xl bg-white/5 text-neutral-400 hover:text-white text-xs"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Existing Playlists List */}
        <div className="space-y-1 max-h-56 overflow-y-auto no-scrollbar border-t border-white/5 pt-3">
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider px-1 pb-1">
            Your Playlists
          </p>
          {customPlaylists.length === 0 ? (
            <div className="text-center py-6 text-neutral-500 text-xs italic">
              No playlists found. Create your first one above!
            </div>
          ) : (
            customPlaylists.map((pl) => {
              const isAdded = addedPlaylistId === pl.id;
              const hasTrack = (pl.trackIds || []).includes(track.id);

              return (
                <button
                  key={pl.id}
                  type="button"
                  onClick={() => handleSelectPlaylist(pl.id)}
                  disabled={isAdded || hasTrack}
                  className={`w-full p-2.5 rounded-xl flex items-center justify-between text-left transition-all text-xs ${
                    isAdded
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : hasTrack
                      ? 'bg-white/[0.02] text-neutral-500 cursor-default'
                      : 'hover:bg-white/10 text-white hover:text-white cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0 text-neutral-400">
                      <Music2 size={14} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold truncate">{pl.title}</p>
                      <p className="text-[10px] text-neutral-400">
                        {pl.trackIds ? pl.trackIds.length : 0} tracks
                      </p>
                    </div>
                  </div>

                  <div>
                    {isAdded ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                        <Check size={14} /> Added
                      </span>
                    ) : hasTrack ? (
                      <span className="text-[10px] text-neutral-400">Already in playlist</span>
                    ) : (
                      <Plus size={15} className="text-neutral-400" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
