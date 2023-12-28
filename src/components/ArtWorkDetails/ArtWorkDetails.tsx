import React from 'react';
import {View, Text, useWindowDimensions, Image} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useStore} from '../../app/store';
import {scale, verticalScale} from 'react-native-size-matters';
import styles from './ArtWorkDetails.styles';

const ArtWorkDetails = () => {
  const {width} = useWindowDimensions();
  const artWork = useStore(state => state.artWorkDetails);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{uri: artWork.imageUrl}}
          width={scale(300)}
          height={verticalScale(400)}
          alt={artWork.altImage}
        />
        <Text style={styles.title}>{artWork.title}</Text>
        <Text style={styles.artist}>{artWork.artist}</Text>
        <RenderHtml
          source={{
            html: artWork.description,
          }}
          contentWidth={width}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.originDate}>
          {artWork.origin} - {artWork.dateDisplay}
        </Text>
      </View>
    </View>
  );
};

export default ArtWorkDetails;
