import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {FAVORITES_SCREEN} from '../navigation/constants';
import Catalog from '../components/Catalog/Catalog';
import {useStore} from '../app/store';

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof FAVORITES_SCREEN
>;

const FavoritesScreen = ({route, navigation}: Props) => {
  const {favoriteArtWorks} = useStore();

  return favoriteArtWorks.length ? (
    <Catalog screen={FAVORITES_SCREEN} />
  ) : (
    <View>
      <Text>Favorites is empty!</Text>
    </View>
  );
};

export default FavoritesScreen;
