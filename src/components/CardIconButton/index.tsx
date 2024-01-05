import React, {useContext} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ArtWorkContext} from '../Card/Card';
import Colors from '../../utils/colors';
import styles from './styles';

export interface Props {
  buttonStyle?: ViewStyle;
}

const CardIconButton = ({buttonStyle}: Props) => {
  const {artWork, addToFavorites, favoriteArtWorks} =
    useContext(ArtWorkContext);

  const scale = useSharedValue(1);

  const handlePress = () => {
    addToFavorites({artWorkId: artWork.id});
    scale.value = withSpring(1.2, undefined, () => {
      scale.value = withSpring(1);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const isFavorite = favoriteArtWorks.includes(artWork.id);
  return (
    <Animated.View style={[styles.iconContainer, buttonStyle, animatedStyle]}>
      <Pressable onPress={handlePress}>
        <Icon
          name={isFavorite ? 'favorite' : 'favorite-outline'}
          size={26}
          color={isFavorite ? Colors.primary : Colors.black}
        />
      </Pressable>
    </Animated.View>
  );
};

export default CardIconButton;
