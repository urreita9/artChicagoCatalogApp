import {createContext, useContext} from 'react';
import {ArtWorksData} from '../../services/ArtWorkAPI/interfaces/AllArtWorks';

const ArtWorkCardContext = createContext<{artWork: ArtWorksData} | null>(null);

export const useArtWorkCardContext = () => {
  const context = useContext(ArtWorkCardContext);
  if (!context) {
    throw new Error(
      'ArtWorkCard.* component must be rendered as child of ArtWorkCard component',
    );
  }
  return context;
};

export default ArtWorkCardContext;
