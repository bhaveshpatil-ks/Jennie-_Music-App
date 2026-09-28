import mongoose from 'mongoose';

const PlaylistSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    coverUrl: {
      type: String,
      default: 'https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg',
    },
    trackIds: {
      type: [String],
      default: [],
    },
    tracks: {
      type: [Object],
      default: [],
    },
    createdAt: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
  },
  {
    timestamps: true,
  }
);

export const Playlist = mongoose.models.Playlist || mongoose.model('Playlist', PlaylistSchema);
