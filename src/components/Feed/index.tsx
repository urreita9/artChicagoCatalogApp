import React, {ReactElement} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {ArtWorksData} from '../../interfaces/interfaces.api';
import {FAVORITES_SCREEN, HOME_SCREEN} from '../../navigation/constants';
import useArtWorks from '../../hooks/useArtWorks';
import Loader from '../Loader';

export interface RenderItem {
  item: ArtWorksData;
  index: number;
}

interface Props {
  screen: typeof FAVORITES_SCREEN | typeof HOME_SCREEN;
  renderItem: (args: RenderItem) => ReactElement;
}

const Feed = ({screen, renderItem}: Props) => {
  const {artWorks, addNextPage, moreDataLoading, loading} = useArtWorks({
    screen,
  });

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
