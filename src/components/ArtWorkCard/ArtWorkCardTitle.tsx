import {Text} from 'react-native';
import React from 'react';
import {useArtWorkCardContext} from './ArtWorkCardContext';
import styles from './ArtWorkCardTitle.styles';

const CardTitle = () => {
  const {artWork} = useArtWorkCardContext();
  return <Text style={styles.text}>{artWork.title}</Text>;
};

export default CardTitle;
