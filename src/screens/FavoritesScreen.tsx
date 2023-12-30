import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStackNavigator';
import {FAVORITES_SCREEN} from '../navigation/constants';
import Catalog from '../components/Catalog/Catalog';
import {useStore} from '../app/store';
import FloattingButton from '../components/FloatingButton/FloattingButton';

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof FAVORITES_SCREEN
>;

const FavoritesScreen = ({route, navigation}: Props) => {
  const {favoriteArtWorks, clearFavorites} = useStore();

  return favoriteArtWorks.length ? (
    <>
      <Catalog screen={FAVORITES_SCREEN} />
      <FloattingButton
        mainIcon={{
          icon: 'delete-outline',
          iconActive: 'delete-outline',
          onPress: clearFavorites,
          isActive: false,
        }}
      />
    </>
  ) : (
    <View>
      <Text>Favorites is empty!</Text>
    </View>
  );
};

export default FavoritesScreen;
