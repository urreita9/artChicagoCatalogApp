import React from 'react';
import {View, Text} from 'react-native';
import {
  ARTWORK_SCREEN,
  FAVORITES_SCREEN,
  HOME_SCREEN,
} from '../../navigation/constants';
import {useStore} from '../../app/store';
import Feed, {RenderItem} from '../Feed';
import useArtWorks from '../../hooks/useArtWorks';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/MainStackNavigator';

interface Props {
  screen: typeof FAVORITES_SCREEN | typeof HOME_SCREEN;
}

const Catalog = ({screen}: Props) => {
  const {navigate} = useNavigation<MainStackNavigation>();
  const {setArtWorkDetails} = useStore();

  const {artWorks, addNextPage, loading, moreDataLoading} = useArtWorks({
    screen,
  });

  const onItemPress = ({item}: RenderItem) => {
    setArtWorkDetails({
      artWork: {
        id: item.id,
        artist: item.artist_title || '',
        description: item.description || '',
        dimensions: item.dimensions || '',
        imageUrl:
          artWorks?.config.iiif_url +
            `/${item.image_id}/full/843,/0/default.jpg` || '',
        altImage: item.thumbnail?.alt_text || '',
        thumbnail: item.thumbnail?.lqip || '',
        origin: item.place_of_origin || '',
        title: item.title || '',
        dateDisplay: item.date_display,
      },
    });
    navigate(ARTWORK_SCREEN);
  };

  return (
    <View>
      {loading ? (
        <Text>LOADING...</Text>
      ) : (
        <Feed
          artWorks={artWorks || null}
          moreDataLoading={moreDataLoading}
          onEndReachedCallback={addNextPage}
          onItemPress={onItemPress}
        />
      )}
    </View>
  );
};

export default Catalog;
