import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import styles from './ArtWorkCard.styles';

interface Props {
  image: string;
  altImage: string;
  title: string;
  subtitle: string;
}

const Card = ({image, altImage, title, subtitle}: Props) => {
  return (
    <View style={styles.container}>
      {image ? (
        <Image
          width={moderateScale(50)}
          height={moderateScale(50)}
          source={{uri: image}}
          style={styles.image}
          alt={altImage}
        />
      ) : (
        <View style={[styles.fallbackContainer, styles.image]}>
          <Icon name="broken-image" size={moderateScale(40)} />
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
