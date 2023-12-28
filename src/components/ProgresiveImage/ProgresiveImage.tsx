import React from 'react';
import {Image} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {scale, verticalScale} from 'react-native-size-matters';

interface Props {
  imageSrc: string;
  thumbnail: string;
  altImage: string;
}

const ProgresiveImage = ({imageSrc, thumbnail, altImage}: Props) => {
  const thumbnailImageAnimated = useSharedValue(1);
  const imageAnimated = useSharedValue(0);

  const handleImageLoad = () => {
    thumbnailImageAnimated.value = withTiming(0, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    });
    imageAnimated.value = withTiming(1, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    });
  };

  return !thumbnail || !imageSrc ? (
    <Image
      source={require('../../assets/imagePlaceholder.png')}
      width={scale(300)}
      height={verticalScale(400)}
    />
  ) : (
    <>
      <Animated.Image
        source={{uri: thumbnail}}
        style={{opacity: thumbnailImageAnimated}}
        width={scale(300)}
        height={verticalScale(400)}
        alt={altImage}
      />
      <Animated.Image
        source={{uri: imageSrc}}
        width={scale(300)}
        height={verticalScale(400)}
        style={{
          opacity: imageAnimated,
          position: 'absolute',
        }}
        onLoad={handleImageLoad}
        alt={altImage}
      />
    </>
  );
};

export default ProgresiveImage;
