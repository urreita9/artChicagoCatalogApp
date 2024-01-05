import {Props as CardProps} from '../components/Card/Card';
import {Props as CardTitleProps} from '../components/CardTitle';
import {Props as CardDescriptionProps} from '../components/CardDescription';
import {Props as CardImageProps} from '../components/CardImage';
import {Props as CardIconButtonProps} from '../components/CardIconButton';

import {ArtWorkIdArg, artWorkId} from '../app/store';

export interface ArtWork {
  image: string;
  altImage: string;
  title: string;
  description: string;
  icon?: boolean;
  id: number;
}

export interface ArtWorkContextProps {
  addToFavorites: (id: ArtWorkIdArg) => void;
  favoriteArtWorks: artWorkId[];
  artWork: ArtWork;
}

export interface CardMainComponentProps {
  ({artWork, cardContainerStyle, children}: CardProps): React.JSX.Element;
  Title: (Props: CardTitleProps) => React.JSX.Element;
  Description: (Props: CardDescriptionProps) => React.JSX.Element;
  Image: (Props: CardImageProps) => React.JSX.Element;
  IconButton: (Props: CardIconButtonProps) => React.JSX.Element;
}
