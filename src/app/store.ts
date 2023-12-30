import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {ARTWORK_STORAGE_ID, zustandStorage} from './mmkvStorage';

export type artWorkId = number | null;

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
}

interface AddToFavorites {
  artWorkId: artWorkId;
}

interface ArtWorkState {
  artWorkDetails: ArtWork;
  favoriteArtWorks: artWorkId[];
  setArtWorkDetails: (args: SetArtWorkDetails) => void;
  addToFavorites: (id: AddToFavorites) => void;
  clearFavorites: () => void;
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

export const useStore = create<ArtWorkState>()(
  persist(
    set => ({
      artWorkDetails: initialArtWork,
      favoriteArtWorkDetails: initialArtWork,
      favoriteArtWorks: [],
      setArtWorkDetails: ({artWork}) => set(() => ({artWorkDetails: artWork})),
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
      clearFavorites: () => set(() => ({favoriteArtWorks: []})),
    }),
    {
      name: ARTWORK_STORAGE_ID,
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
