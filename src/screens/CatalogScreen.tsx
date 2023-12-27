import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {CATALOG_SCREEN} from '../navigation/constants';
import ArtWorkAPI from '../services/ArtWorkAPI/ArtWorkAPI';
import {ArtWorksData} from '../services/ArtWorkAPI/interfaces/AllArtWorks';

type Props = NativeStackScreenProps<RootStackParamList, typeof CATALOG_SCREEN>;

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

  console.log('render');
  return (
    <View>
      <Text>CatalogScreen</Text>
      {loading ? (
        <Text>LOADING...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={{height: 100}}>
              <Image
                source={{uri: item.thumbnail?.lqip}}
                width={30}
                height={30}
              />
              <Text>{item.title}</Text>
            </View>
          )}
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
