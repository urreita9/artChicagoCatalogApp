import React from 'react';
import {View, Pressable, FlatList, ActivityIndicator} from 'react-native';
import ArtWorkCard from '../ArtWorkCard';
import {ArtWorksData} from '../../services/ArtWorkAPI/types';
import {
  ARTWORK_SCREEN,
  FAVORITES_SCREEN,
  HOME_SCREEN,
} from '../../navigation/constants';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/MainStackNavigator';
import {useStore} from '../../app/store';
import useArtWorks from '../../hooks/useArtWorks';
import Loader from '../Loader';

export interface RenderItem {
  item: ArtWorksData;
  index: number;
}

interface Props {
  screen: typeof FAVORITES_SCREEN | typeof HOME_SCREEN;
}

const Feed = ({screen}: Props) => {
  const {navigate} = useNavigation<MainStackNavigation>();
  const {setArtWorkDetails} = useStore();

  const {artWorks, addNextPage, moreDataLoading, loading, error} = useArtWorks({
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

  const renderItem = ({item, index}: RenderItem) => (
    <Pressable onPress={() => onItemPress({item, index})}>
      <ArtWorkCard
        title={item.title}
        subtitle={item.artist_title}
        image={item.thumbnail?.lqip || ''}
        altImage={item.thumbnail?.alt_text || ''}
        id={item.id}
        icon
      />
    </Pressable>
  );
  return (
    <>
      <Loader loading={loading} />
      <FlatList
        data={artWorks?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={addNextPage}
        ListFooterComponent={() => (
          <View>{moreDataLoading && <ActivityIndicator />}</View>
        )}
      />
    </>
  );
};

export default Feed;
