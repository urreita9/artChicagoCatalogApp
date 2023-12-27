import React from 'react';
import {Image, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useArtWorkCardContext} from './ArtWorkCardContext';
import styles from './ArtWorkCardImage.styles';

const CardImage = () => {
  const {artWork} = useArtWorkCardContext();

  return artWork.thumbnail?.lqip ? (
    <Image
      width={moderateScale(60)}
      height={moderateScale(60)}
      source={{uri: artWork.thumbnail.lqip}}
      style={styles.image}
    />
  ) : (
    <View style={[styles.fallbackContainer, styles.image]}>
      <Icon name="broken-image" size={moderateScale(50)} />
    </View>
  );
};

export default CardImage;
