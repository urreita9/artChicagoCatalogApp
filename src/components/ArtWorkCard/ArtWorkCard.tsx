import React, {PropsWithChildren, ReactNode} from 'react';
import {View} from 'react-native';
import CardTitle from './ArtWorkCardTitle';
import CardContent from './ArtWorkCardContent';
import CardImage from './ArtWorkCardImage';
import ArtWorkCardContext from './ArtWorkCardContext';
import {ArtWorksData} from '../../services/ArtWorkAPI/interfaces/AllArtWorks';
import styles from './ArtWorkCard.styles';

interface Props {
  artWork: ArtWorksData;
  image?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
}

const Card = ({artWork, image, title, content}: PropsWithChildren<Props>) => {
  return (
    <ArtWorkCardContext.Provider value={{artWork}}>
      <View style={styles.container}>
        {image}
        <View style={styles.content}>
          {title}
          {content}
        </View>
      </View>
    </ArtWorkCardContext.Provider>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Image = CardImage;

export default Card;
