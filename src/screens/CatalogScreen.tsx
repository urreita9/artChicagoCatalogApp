import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList, ActivityIndicator, Pressable} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {ARTWORK_SCREEN, CATALOG_SCREEN} from '../navigation/constants';
import ArtWorkAPI from '../services/ArtWorkAPI/ArtWorkAPI';
import {
  ArtWorksData,
  ArtWorksResponse,
} from '../services/ArtWorkAPI/interfaces/AllArtWorks';
import ArtWorkCard from '../components/ArtWorkCard/ArtWorkCard';
import {useStore} from '../app/store';

type Props = NativeStackScreenProps<RootStackParamList, typeof CATALOG_SCREEN>;

interface RenderItem {
  item: ArtWorksData;
  index: number;
}

const CatalogScreen = ({route, navigation}: Props) => {
  const [loading, setLoading] = useState(true);
  const [moreDataLoading, setMoreDataLoading] = useState(false);
  const [artWorks, setArtWorks] = useState<ArtWorksResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = useRef(1);

  const setArtWorkDetails = useStore(state => state.setArtWorkDetails);

  const getAllArtWorks = async () => {
    try {
      if (currentPage > lastPage.current) return;
      currentPage !== 1 && setMoreDataLoading(true);
      const res = await ArtWorkAPI.getAllArtWorks({
        page: currentPage,
        limit: 10,
      });
      lastPage.current = res.pagination.total_pages;
      setArtWorks({...res, data: [...(artWorks?.data || []), ...res.data]});
    } catch (error) {
    } finally {
      currentPage === 1 ? setLoading(false) : setMoreDataLoading(false);
    }
  };

  useEffect(() => {
    getAllArtWorks();
  }, [currentPage]);

  const renderItem = ({item}: RenderItem) => (
    <Pressable
      onPress={() => {
        setArtWorkDetails({
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
        });
        navigation.navigate(ARTWORK_SCREEN);
      }}>
      <ArtWorkCard
        title={item.title}
        subtitle={item.artist_title}
        image={item.thumbnail?.lqip || ''}
        altImage={item.thumbnail?.alt_text || ''}
      />
    </Pressable>
  );

  return (
    <View>
      <Text>CatalogScreen</Text>
      {loading ? (
        <Text>LOADING...</Text>
      ) : (
        <FlatList
          data={artWorks?.data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.2}
          onEndReached={() => setCurrentPage(prevPage => prevPage + 1)}
          ListFooterComponent={() => (
            <View>{moreDataLoading && <ActivityIndicator />}</View>
          )}
        />
      )}
    </View>
  );
};

export default CatalogScreen;
