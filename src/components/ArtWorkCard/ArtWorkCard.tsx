import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScale, scale} from 'react-native-size-matters';
import styles from './ArtWorkCard.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useStore} from '../../app/store';
import Colors from '../../utils/colors';

interface Props {
  image: string;
  altImage: string;
  title: string;
  subtitle: string;
  icon?: boolean;
  id: number;
}

const Card = ({image, altImage, title, subtitle, icon, id}: Props) => {
  const {favoriteArtWorks, addToFavorites} = useStore();
  const scale = useSharedValue(1);

  const handlePress = () => {
    addToFavorites({artWorkId: id});
    scale.value = withSpring(1.2, undefined, () => {
      scale.value = withSpring(1);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

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
      {icon && (
        <Animated.View style={[styles.iconContainer, animatedStyle]}>
          <Pressable onPress={handlePress}>
            <Icon
              name={
                favoriteArtWorks.includes(id) ? 'favorite' : 'favorite-outline'
              }
              size={26}
              color={
                favoriteArtWorks.includes(id) ? Colors.primary : Colors.black
              }
            />
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
};

export default Card;
