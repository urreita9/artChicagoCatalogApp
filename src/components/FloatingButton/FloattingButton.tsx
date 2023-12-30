import React from 'react';
import {Pressable, View} from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FloattingButton.styles';
import Colors from '../../utils/colors';

interface IconBtn {
  onPress: (() => void) | null;
  icon: string;
  iconActive: string;
  isActive: boolean;
}

interface Props {
  iconOne?: IconBtn;
  iconTwo?: IconBtn;
  mainIcon: IconBtn;
  animate?: boolean;
}

const FloattingButton = ({iconOne, iconTwo, mainIcon, animate}: Props) => {
  const firstValue = useSharedValue(30);
  const secondValue = useSharedValue(30);
  const isOpen = useSharedValue(false);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0),
  );

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstValue.value = withTiming(30, config);
      secondValue.value = withDelay(100, withTiming(30, config));
    } else {
      firstValue.value = withDelay(200, withSpring(110));
      secondValue.value = withSpring(110);
    }
    isOpen.value = !isOpen.value;
  };

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [30, 110],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      right: firstValue.value,
      transform: [{scale}],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 110],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      bottom: secondValue.value,
      transform: [{scale}],
    };
  });

  const mainIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${progress.value * 45}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      {iconOne?.icon && (
        <Pressable onPress={iconOne.onPress}>
          <Animated.View style={[styles.contentContainer, firstIcon]}>
            <View style={styles.iconContainer}>
              <Icon
                size={26}
                name={iconOne.isActive ? iconOne.iconActive : iconOne.icon}
                color={Colors.white}
              />
            </View>
          </Animated.View>
        </Pressable>
      )}
      {iconTwo?.icon && (
        <Pressable onPress={iconTwo.onPress}>
          <Animated.View style={[styles.contentContainer, secondIcon]}>
            <View style={styles.iconContainer}>
              <Icon
                size={26}
                name={iconTwo.isActive ? iconTwo.iconActive : iconTwo.icon}
                color={Colors.white}
              />
            </View>
          </Animated.View>
        </Pressable>
      )}

      <Pressable
        style={styles.contentContainer}
        onPress={() => {
          if (animate) {
            handlePress();
          } else {
            mainIcon.onPress && mainIcon.onPress();
          }
        }}>
        <Animated.View style={[styles.iconContainer, mainIconAnimatedStyle]}>
          <Icon
            size={26}
            name={mainIcon.isActive ? mainIcon.iconActive : mainIcon.icon}
            color={Colors.white}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default FloattingButton;
