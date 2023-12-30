import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './styles';
import ProgresiveImage from '../ProgresiveImage';
import {ArtWork} from '../../app/store';

interface Props {
  artWork: ArtWork;
}

const ArtWorkDetails = ({artWork}: Props) => {
  const {width} = useWindowDimensions();

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
