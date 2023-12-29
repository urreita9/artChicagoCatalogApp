import {create} from 'zustand';

type artWorkId = number | null;

export interface ArtWork {
  id: artWorkId;
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

interface SetArtWorkDetails {
  artWork: ArtWork;
  favoriteArtWorkDetails: boolean;
}

interface AddToFavorites {
  artWorkId: artWorkId;
}

interface ArtWorkState {
  artWorkDetails: ArtWork;
  favoriteArtWorkDetails: ArtWork;
  favoriteArtWorks: artWorkId[];
  setArtWorkDetails: (args: SetArtWorkDetails) => void;
  addToFavorites: (id: AddToFavorites) => void;
}

const initialArtWork = {
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
};

export const useStore = create<ArtWorkState>(set => ({
  artWorkDetails: initialArtWork,
  favoriteArtWorkDetails: initialArtWork,
  favoriteArtWorks: [],
  setArtWorkDetails: ({artWork, favoriteArtWorkDetails}) =>
    set(() => {
      if (favoriteArtWorkDetails) {
        return {favoriteArtWorkDetails: artWork};
      }
      return {artWorkDetails: artWork};
    }),
  addToFavorites: ({artWorkId}) =>
    set(state => {
      if (state.favoriteArtWorks.includes(artWorkId)) {
        return {
          favoriteArtWorks: state.favoriteArtWorks.filter(
            item => item !== artWorkId,
          ),
        };
      }
      return {favoriteArtWorks: [...state.favoriteArtWorks, artWorkId]};
    }),
}));
