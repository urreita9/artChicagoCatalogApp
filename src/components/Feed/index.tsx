import React from 'react';
import {View, Pressable, FlatList, ActivityIndicator} from 'react-native';
import ArtWorkCard from '../ArtWorkCard';
import {ArtWorksData, ArtWorksResponse} from '../../services/ArtWorkAPI/types';

export interface RenderItem {
  item: ArtWorksData;
  index: number;
}

interface Props {
  artWorks: ArtWorksResponse | null;
  onItemPress: ({item}: RenderItem) => void;
  onEndReachedCallback: () => void;
  moreDataLoading: boolean;
}

const Feed = ({
  artWorks,
  onItemPress,
  onEndReachedCallback,
  moreDataLoading,
}: Props) => {
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
    <FlatList
      data={artWorks?.data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReachedThreshold={0.2}
      onEndReached={onEndReachedCallback}
      ListFooterComponent={() => (
        <View>{moreDataLoading && <ActivityIndicator />}</View>
      )}
    />
  );
};

export default Feed;
