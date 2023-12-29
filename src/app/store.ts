import {create} from 'zustand';

export interface ArtWork {
  id: number | null;
  imageUrl: string;
  altImage: string;
  thumbnail: string;
  title: string;
  description: string;
  artist: string;
  dimensions: string;
  origin: string;
  dateDisplay: string;
}

interface ArtWorkState {
  artWorkDetails: ArtWork;
  setArtWorkDetails: (artWork: ArtWork) => void;
}

export const useStore = create<ArtWorkState>(set => ({
  artWorkDetails: {
    id: null,
    imageUrl: '',
    altImage: '',
    thumbnail: '',
    title: '',
    description: '',
    artist: '',
    dimensions: '',
    origin: '',
    dateDisplay: '',
  },
  setArtWorkDetails: artWork => set(() => ({artWorkDetails: artWork})),
}));
