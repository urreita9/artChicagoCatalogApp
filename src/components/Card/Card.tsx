import React, {ReactElement, createContext} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';
import {useStore} from '../../app/store';
import {ArtWorkContextProps, ArtWork} from '../../interfaces/interfaces.card';

export interface Props {
  artWork: ArtWork;
  children?: ReactElement | ReactElement[];
  cardContainerStyle?: ViewStyle;
}

export const ArtWorkContext = createContext({} as ArtWorkContextProps);
const {Provider} = ArtWorkContext;

export const Card = ({artWork, cardContainerStyle, children}: Props) => {
  const {favoriteArtWorks, addToFavorites} = useStore();

  return (
    <Provider value={{artWork, favoriteArtWorks, addToFavorites}}>
      <View style={[styles.container, cardContainerStyle]}>{children}</View>
    </Provider>
  );
};
