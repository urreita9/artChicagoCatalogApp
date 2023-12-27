import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {CATALOG_SCREEN} from '../navigation/constants';
import ArtWorkAPI from '../services/ArtWorkAPI/ArtWorkAPI';
import {ArtWorksData} from '../services/ArtWorkAPI/interfaces/AllArtWorks';
import ArtWorkCard from '../components/ArtWorkCard/ArtWorkCard';

type Props = NativeStackScreenProps<RootStackParamList, typeof CATALOG_SCREEN>;

interface RenderItem {
  item: ArtWorksData;
  index: number;
}

const CatalogScreen = ({route, navigation}: Props) => {
  const [loading, setLoading] = useState(true);
  const [moreDataLoading, setMoreDataLoading] = useState(false);
  const [data, setData] = useState<ArtWorksData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = useRef(1);

  const getAllArtWorks = async () => {
    try {
      if (currentPage > lastPage.current) return;
      currentPage !== 1 && setMoreDataLoading(true);
      const res = await ArtWorkAPI.getAllArtWorks({
        page: currentPage,
        limit: 10,
      });
      lastPage.current = res.pagination.total_pages;
      setData([...data, ...res.data]);
    } catch (error) {
    } finally {
      currentPage === 1 ? setLoading(false) : setMoreDataLoading(false);
    }
  };

  useEffect(() => {
    getAllArtWorks();
  }, [currentPage]);

  const renderItem = ({item, index}: RenderItem) => (
    <ArtWorkCard
      image={<ArtWorkCard.Image />}
      title={<ArtWorkCard.Title />}
      artWork={item}
    />
  );

  return (
    <View>
      <Text>CatalogScreen</Text>
      {loading ? (
        <Text>LOADING...</Text>
      ) : (
        <FlatList
          data={data}
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
