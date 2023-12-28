import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useStore} from '../../app/store';
import styles from './ArtWorkDetails.styles';
import ProgresiveImage from '../ProgresiveImage/ProgresiveImage';

const ArtWorkDetails = () => {
  const {width} = useWindowDimensions();
  const artWork = useStore(state => state.artWorkDetails);
  return (
    <View style={styles.container}>
      <View>
        <ProgresiveImage
          imageSrc={artWork.imageUrl}
          thumbnail={artWork.thumbnail}
          altImage={artWork.altImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{artWork.title}</Text>
        <Text style={styles.artist}>{artWork.artist}</Text>
        {artWork.description ? (
          <RenderHtml
            source={{
              html: artWork.description,
            }}
            contentWidth={width}
          />
        ) : (
          <Text>No description provided</Text>
        )}
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
