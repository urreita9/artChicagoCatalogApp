import React, {useContext} from 'react';
import {Image, ImageStyle} from 'react-native';
import styles from './styles';
import {moderateScale} from 'react-native-size-matters';
import {ArtWorkContext} from '../Card/Card';

export interface Props {
  image?: string;
  imageStyle?: ImageStyle;
}

const CardImage = ({image, imageStyle}: Props) => {
  const {artWork} = useContext(ArtWorkContext);

  let imgSrc;

  if (image) {
    imgSrc = {uri: image};
  } else if (artWork.image) {
    imgSrc = {uri: artWork.image};
  } else {
    imgSrc = require('../../assets/imagePlaceholder.png');
  }
  return (
    <Image
      width={moderateScale(50)}
      height={moderateScale(50)}
      source={imgSrc}
      style={[styles.image, imageStyle]}
      alt={artWork.altImage}
    />
  );
};
export default CardImage;
