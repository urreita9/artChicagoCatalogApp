import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {ARTWORK_SCREEN, CATALOG_SCREEN} from '../navigation/constants';
import ApiService from '../services/api';

type Props = NativeStackScreenProps<RootStackParamList, typeof CATALOG_SCREEN>;

const CatalogScreen = ({route, navigation}: Props) => {
  const api = new ApiService();

  useEffect(() => {
    api
      .getArtWork()
      .then(res => console.log('res data', res.data.data))
      .catch(err => console.log('err', err));
  }, []);
  return (
    <View>
      <Text>CatalogScreen</Text>
      <Pressable onPress={() => navigation.navigate(ARTWORK_SCREEN)}>
        <Text>to artowrk</Text>
      </Pressable>
    </View>
  );
};

export default CatalogScreen;
