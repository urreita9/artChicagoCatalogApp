import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootBottomParamList} from '../navigation/BottomTabNavigator';
import {FAVORITES_SCREEN} from '../navigation/constants';
import Catalog from '../components/Catalog/Catalog';
import {useStore} from '../app/store';
import FloattingButton from '../components/FloatingButton/FloattingButton';

type Props = NativeStackScreenProps<
  RootBottomParamList,
  typeof FAVORITES_SCREEN
>;

const FavoritesScreen = ({route, navigation}: Props) => {
  const {favoriteArtWorks, clearFavorites} = useStore();

  return (
    <SafeAreaView style={{flex: 1}}>
      {favoriteArtWorks.length ? (
        <Catalog screen={FAVORITES_SCREEN} />
      ) : (
        <View>
          <Text>Favorites is empty!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
