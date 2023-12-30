import React, {useEffect} from 'react';
import {View, Text, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import Colors from '../../utils/colors';

interface IconProps {
  name: string;
  size: number;
  color: string;
}

interface Props {
  icon: IconProps;
  message: string;
  animate?: boolean;
}

const duration = 800;

const IconMessage = ({icon, message, animate}: Props) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    if (animate) {
      scale.value = withRepeat(withTiming(1.4, {duration}), -1, true);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Icon name={icon.name} size={icon.size} color={icon.color} />
      </Animated.View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default IconMessage;
